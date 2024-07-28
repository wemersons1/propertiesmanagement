<?php

namespace App\Services;

use App\Models\Expense;
use App\Models\PaymentEmployeeAdvisor;
use App\Models\PaymentForm;
use App\Models\ShoppingCart;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Report
{
    private $from, $to;

    function __construct($from, $to) {

        $this->from = $from;
        $this->to = $to;
    }

    public function seller() {

        return $this->reportSeller();;
    }

    private function reportSeller() {

        $totalSales = DB::table("shopping_carts as sc")
            ->join("cart_product as cp", function($join){
                $join->on("sc.id", "=", "cp.cart_id");
            })
            ->where("cp.canceled", "=", 0)
            ->where("sc.status_id", "=", 1)
            ->where("sc.active", "=", 1)
            ->where("sc.employee_id", "=", Auth::user()->employee_id)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to. ' 23:59:59')
            ->selectRaw(DB::raw('SUM((cp.price_final * cp.quantity) - cp.discount_by_product) as total'))->get()[0]->total;

        $quantitySAles = DB::table("shopping_carts as sc")
            ->where("sc.status_id", "=", 1)
            ->where("sc.active", "=", 1)
            ->where("sc.employee_id", "=", Auth::user()->employee_id)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to. ' 23:59:59')
            ->count();

        $discount = DB::table("shopping_carts")
            ->where("status_id", "=", 1)
            ->where("active", "=", 1)
            ->where("employee_id", "=",  Auth::user()->employee_id)
            ->where("date_paid", ">=", $this->from.' 00:00:00')
            ->where("date_paid", "<=", $this->to. ' 23:59:59')
            ->sum('discount');

        $carts = DB::table("shopping_carts as sc")
            ->join("cart_product as cp", function($join){
                $join->on("sc.id", "=", "cp.cart_id")
                    ->where("cp.canceled", "=", 0)
                    ->where("sc.active", "=", 1)
                    ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
                    ->where("sc.date_paid", "<=", $this->to. ' 23:59:59')
                    ->where("sc.employee_id", "=", Auth::user()->employee_id)
                    ->where("sc.status_id", "=", 1);
            })
            ->selectRaw("sum(cp.price_final * cp.quantity) - sc.discount as total, if(cp.advisor_id, sum(cp.price * cp.quantity), sum(cp.price_final * cp.quantity)) as total_commission_seller, sc.commission_seller")
            ->groupBy("sc.id")
            ->get();

        $commission = 0;

        if($carts) {

            foreach ($carts as $cart) {

                $commission = $commission + (((float)$cart->total_commission_seller * (float)$cart->commission_seller)/100);

            }

        }
        return [
            "commission" => round($commission, 2),
            "total_sales" => $totalSales - $discount,
            "quantity_sales" => $quantitySAles,
        ];

    }

    public function clerk() {

        $totalReceipt = DB::table("payments as p")
            ->where("p.active", "=", 1)
            ->where("p.date", ">=", $this->from.' 00:00:00')
            ->where("p.date", "<=", $this->to. ' 23:59:59')
            ->where("p.company_id", "=",  Auth::user()->company_id)
            ->selectRaw("sum(p.value) as total")
            ->get()[0];

        $totalPending = DB::table("shopping_carts as sc")
            ->join("cart_product as cp", function($join){
                $join->on("sc.id", "=", "cp.cart_id");
            })
            ->selectRaw("sum((cp.price_final * cp.quantity) - cp.discount_by_product) as total")
            ->where("cp.canceled", "=", 0)
            ->where('sc.active', "=", true)
            ->where("sc.company_id", "=", Auth::user()->company_id)
            ->where("sc.status_id", "=", 2)
            ->get()[0];

        $totalCanceled = DB::table("shopping_carts as sc")
            ->join("cart_product as cp", function($join){
                $join->on("sc.id", "=", "cp.cart_id");
            })
            ->selectRaw("sum((cp.price_final * cp.quantity) - cp.discount_by_product) as total")
            ->where("cp.canceled", "=", 0)
            ->where("sc.status_id", "=", 3)
            ->where('sc.active', "=", true)
            ->where("sc.clerk_id", "=", Auth::user()->employee_id)
            ->where("sc.created_at", ">=", $this->from.' 00:00:00')
            ->where("sc.created_at", "<=", $this->to. ' 23:59:59')
            ->get()[0];

        $discount = DB::select('select sum(sc.discount) as discount from shopping_carts as sc
                                    where sc.status_id = 1
                                    and sc.clerk_id = ?
                                    and sc.active = 1
                                    and sc.date_paid >= ?
                                    and sc.date_paid <= ?;', [Auth::user()->employee_id, $this->from.' 00:00:00', $this->to.' 23:59:59'])[0];

        $totalSales = DB::table("shopping_carts as sc")
            ->where("sc.status_id", "=", 1)
            ->where('sc.active', "=", true)
            ->where("sc.clerk_id", "=", Auth::user()->employee_id)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to. ' 23:59:59')
            ->count();

        $paymentsTypes = DB::select('select sum(p.value) as total, pf.name as name from payments as p
                                            inner join payments_forms as pf
                                            on p.payment_form_id = pf.id
                                            and p.date >= ?
                                            and p.active = 1
                                            and p.date <= ?
                                            and p.clerk_id = 1
                                            group by pf.name;', [$this->from.' 00:00:00', $this->to.' 23:59:59'], Auth::user()->employee_id);


        $totalCartsGroupedByStatus = DB::select("select COUNT(*) as total, if(scs.name = 'paid', 'Pago', if(scs.name = 'pending', 'Pendente', 'Cancelado')) as name from shopping_carts as sc
                                                        inner join shopping_carts_status as scs
                                                        on scs.id = sc.status_id
                                                        where sc.date_paid >= ?
                                                        and sc.date_paid <= ?
                                                        and sc.active = 1
                                                        and clerk_id = ?
                                                        group by scs.name", [$this->from.' 00:00:00', $this->to.' 23:59:59', Auth::user()->employee_id]);



        //RETORNO SÓ DE CARRINHOS PENDENTES
        $shoppingsCarts = ShoppingCart::where('status_id', 2)
            ->where('company_id', Auth::user()->company_id)
            ->where('active', true)
            ->orderBy('id', 'DESC')
            ->take(10)
            ->get();

        return [
            "total_sales" => $totalReceipt->total ?? 0,
            "total_pending" => $totalPending->total ?? 0,
            "total_canceled" => $totalCanceled->total ?? 0,
            "total_discounts" => $discount->discount,
            "payments_types" => $paymentsTypes,
            "total_carts" => $totalCartsGroupedByStatus,
            "quantity_sales" => $totalSales,
            "lasts_orders" => $shoppingsCarts,
        ];

    }

    public function admin() {

        $totalReceipt = DB::table("payments as p")
            ->where("p.active", "=", 1)
            ->where("p.date", ">=", $this->from.' 00:00:00')
            ->where("p.date", "<=", $this->to. ' 23:59:59')
            ->where("p.company_id", "=",  Auth::user()->company_id)
            ->selectRaw("sum(p.value) as total")
            ->get()[0];

        $totalPending = DB::table("shopping_carts as sc")
            ->join("cart_product as cp", function($join){
                $join->on("sc.id", "=", "cp.cart_id");
            })
            ->selectRaw("sum((cp.price_final * cp.quantity) - cp.discount_by_product) as total")
            ->where("cp.canceled", "=", 0)
            ->where('sc.active', "=", true)
            ->where("sc.status_id", "=", 2)
            ->where("sc.company_id", "=", Auth::user()->company_id)
            ->get()[0];

        $totalCanceled = DB::table("shopping_carts as sc")
            ->join("cart_product as cp", function($join){
                $join->on("sc.id", "=", "cp.cart_id");
            })
            ->selectRaw("sum((cp.price_final * cp.quantity) - cp.discount_by_product) as total")
            ->where("cp.canceled", "=", 0)
            ->where("sc.status_id", "=", 3)
            ->where('sc.active', "=", true)
            ->where("sc.company_id", "=", Auth::user()->company_id)
            ->where("sc.created_at", ">=", $this->from.' 00:00:00')
            ->where("sc.created_at", "<=", $this->to. ' 23:59:59')
            ->get()[0];

        $discount = DB::select('select sum(sc.discount) as discount from shopping_carts as sc
                                    where sc.status_id = 1
                                    and sc.active = 1
                                    and sc.company_id = ?
                                    and sc.date_paid >= ?
                                    and sc.date_paid <= ?;', [Auth::user()->company_id, $this->from.' 00:00:00', $this->to.' 23:59:59'])[0];

        $totalSales = DB::table("shopping_carts as sc")
            ->where("sc.status_id", "=", 1)
            ->where('sc.active', "=", true)
            ->where("sc.company_id", "=", Auth::user()->company_id)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to. ' 23:59:59')
            ->count();

        $paymentsTypes = DB::select('select sum(p.value) as total, pf.name as name, pf.id as id from payments as p
                                            inner join payments_forms as pf
                                            on p.payment_form_id = pf.id
                                            and p.active = 1
                                            and p.date >= ?
                                            and p.date <= ?
                                            and p.company_id = ?
                                            group by pf.name;', [$this->from.' 00:00:00', $this->to.' 23:59:59', Auth::user()->company_id]);


        $totalSalesBySellers = DB::table("shopping_carts as sc")
            ->join("cart_product as cp", function($join){
                $join->on("sc.id", "=", "cp.cart_id");
            })
            ->join("employees as e", function($join){
                $join->on("e.id", "=", "sc.employee_id");
            })
            ->selectRaw("ROUND(SUM((cp.price_final * cp.quantity) - cp.discount_by_product), 2) as total, e.name")
            ->where("cp.canceled", "=", false)
            ->where("sc.status_id", "=", 1)
            ->where("sc.active", "=", true)
            ->where("sc.company_id", "=", Auth::user()->company_id)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to. ' 23:59:59')
            ->groupBy("e.id")
            ->orderBy("total", "desc")
            ->get();

        $totalCommissionBySellers = DB::table("shopping_carts as sc")
            ->join("cart_product as cp", function($join){
                $join->on("sc.id", "=", "cp.cart_id");
            })
            ->join("employees as e", function($join){
                $join->on("e.id", "=", "sc.employee_id");
            })
            ->selectRaw("ROUND(SUM(((cp.price_final * cp.quantity) - cp.discount_by_product) * cp.commission_seller)/100, 2) as total, e.name")
            ->where("cp.canceled", "=", false)
            ->where("sc.status_id", "=", 1)
            ->where("sc.active", "=", true)
            ->where("sc.company_id", "=", Auth::user()->company_id)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to. ' 23:59:59')
            ->groupBy("e.id")
            ->orderBy("total", "desc")
            ->get();

        $totalCommissionByAdvisor = DB::table("cart_product as cp")
            ->join("shopping_carts as sc", function($join){
                $join->on("sc.id", "=", "cp.cart_id");
            })
            ->join("advisors as a", function($join){
                $join->on("a.id", "=", "cp.advisor_id");
            })
            ->selectRaw("ROUND(if(SUM(((cp.price_final * cp.quantity) - (cp.price * cp.quantity)) - cp.discount_by_product) > 0, SUM((cp.price_final * cp.quantity) - (cp.price * cp.quantity) - (cp.discount_by_product) ), 0), 2)  as commission, a.name")
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to. ' 23:59:59')
            ->where("cp.canceled", "=", 0)
            ->where(    "sc.company_id", "=", Auth::user()->company_id)
            ->where("sc.active", "=", true)
            ->where("sc.status_id", "=", 1)
            ->groupBy("a.id")
            ->orderBy('commission', 'desc')
            ->get();

        $totalSalesByAdvisors = DB::table("shopping_carts as sc")
            ->join("cart_product as cp", function($join){
                $join->on("cp.cart_id", "=", "sc.id");
            })
            ->join("advisors as a", function($join){
                $join->on("a.id", "=", "cp.advisor_id");
            })
            ->selectRaw("a.name, ROUND(SUM((cp.price_final * cp.quantity) - (cp.discount_by_product)), 2) as total")
            ->where("sc.status_id", "=", 1)
            ->where("cp.canceled", "=", false)
            ->where("sc.active", "=", true)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to. ' 23:59:59')
            ->where('sc.company_id', Auth::user()->company_id)
            ->groupBy("a.id")
            ->orderBy('total', 'desc')
            ->get();

        $quantitySalesByAdvisor = DB::table("shopping_carts as sc")
            ->join("cart_product as cp", function($join){
                $join->on("cp.cart_id", "=", "sc.id");
            })
            ->join("advisors as a", function($join){
                $join->on("a.id", "=", "cp.advisor_id");
            })
            ->selectRaw("a.name, COUNT(*) as total")
            ->where("sc.status_id", "=", 1)
            ->where("cp.canceled", "=", false)
            ->where("sc.active", "=", true)
            ->where('sc.company_id', Auth::user()->company_id)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to. ' 23:59:59')
            ->groupBy("a.id")
            ->orderBy('total', 'desc')
            ->get();

        $totalCartsGroupedByStatus = DB::select("select COUNT(*) as total, if(scs.name = 'paid', 'Pago', if(scs.name = 'pending', 'Pendente', 'Cancelado')) as name from shopping_carts as sc
                                                        inner join shopping_carts_status as scs
                                                        on scs.id = sc.status_id
                                                        where sc.date_paid >= ?
                                                        and sc.date_paid <= ?
                                                        and company_id = ?
                                                        and sc.active = 1
                                                        group by scs.name", [$this->from.' 00:00:00', $this->to.' 23:59:59', Auth::user()->company_id]);


        $quantitySalesBySeller = DB::select('select COUNT(*) as total, e.name from shopping_carts as sc
                                                    inner join employees as e
                                                    on sc.employee_id = e.id
                                                    and sc.company_id = ?
                                                    and sc.status_id = 1
                                                    and sc.active = 1
                                                    and sc.date_paid >= ?
                                                    and sc.date_paid <= ?
                                                    group by sc.employee_id order by total desc;', [Auth::user()->company_id, $this->from.' 00:00:00', $this->to.' 23:59:59']);


        //RETORNO SÓ DE CARRINHOS PENDENTES
        $shoppingsCarts = ShoppingCart::where('status_id', 2)
            ->where('company_id', Auth::user()->company_id)
            ->where('active', 1)
            ->where('active', true)
            ->orderBy('id', 'DESC')
            ->take(10)
            ->get();

        $totalSalesByProducts = DB::table("cart_product as cp")
            ->join("shopping_carts as sc", function($join){
                $join->on("cp.cart_id", "=", "sc.id");
            })
            ->join("products_configs as pc", function($join){
                $join->on("pc.id", "=", "cp.product_config_id");
            })
            ->join("products as p", function($join){
                $join->on("p.id", "=",  "pc.product_id");
            })
            ->selectRaw("p.name, ROUND(SUM((cp.price_final * cp.quantity) - cp.discount_by_product), 2) as total")
            ->where("sc.status_id", "=", 1)
            ->where("sc.active", "=", true)
            ->where("cp.canceled", "=", false)
            ->where("sc.company_id", "=", Auth::user()->company_id)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to.' 23:59:59')
            ->groupBy("p.id")
            ->orderBy('total', 'desc')
            ->get();

        $quantitySalesByProducts = DB::table("cart_product as cp")
            ->join("shopping_carts as sc", function($join){
                $join->on("cp.cart_id", "=", "sc.id");
            })
            ->join("products_configs as pc", function($join){
                $join->on("pc.id", "=", "cp.product_config_id");
            })
            ->join("products as p", function($join){
                $join->on("p.id", "=",  "pc.product_id");
            })
            ->selectRaw("p.name, sum(cp.quantity) as total")
            ->where("sc.status_id", "=", 1)
            ->where("sc.active", "=", true)
            ->where("cp.canceled", "=", false)
            ->where("sc.company_id", "=", Auth::user()->company_id)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to.' 23:59:59')
            ->groupBy("p.id")
            ->orderBy('total', 'desc')
            ->get();

        $gainsSalesByProduct = DB::table("cart_product as cp")
            ->join("shopping_carts as sc", function($join){
                $join->on("cp.cart_id", "=", "sc.id");
            })
            ->join("products_configs as pc", function($join){
                $join->on("pc.id", "=", "cp.product_config_id");
            })
            ->join("products as p", function($join){
                $join->on("p.id", "=",  "pc.product_id");
            })
            ->selectRaw("p.name, ROUND(SUM(((cp.price_final * cp.quantity) - cp.discount_by_product) - (cp.price_cost * cp.quantity) - cp.discount_by_product - ((cp.price_final * cp.quantity) - (cp.price * cp.quantity))), 2) as total")
            ->where("sc.status_id", "=", 1)
            ->where("sc.active", "=", true)
            ->where("cp.canceled", "=", false)
            ->where("sc.company_id", "=", Auth::user()->company_id)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to.' 23:59:59')
            ->groupBy("p.id")
            ->orderBy('total', 'desc')
            ->get();

        $salesByMonths = DB::select('select ROUND(SUM(value), 2) as total, MONTH(date) as month, YEAR(p.date) as year from payments as p
                                            where p.active = 1
                                            and p.date >= "2022-01-01 00:00:00"
                                            and p.company_id = ? group by MONTH(p.date), YEAR(p.date) order by YEAR(p.date), MONTH(p.date) ASC;', [Auth::user()->company_id]);

        return [
            "total_sales" => $this->totalReceipts(),
            "total_pending" => $totalPending->total ?? 0,
            "total_canceled" => $totalCanceled->total ?? 0,
            "total_discounts" => $discount->discount,
            "payments_types" => $paymentsTypes,
            "total_carts" => $totalCartsGroupedByStatus,
            "quantity_sales" => $totalSales,
            "lasts_orders" => $shoppingsCarts,
            "quantity_sales_by_seller" => $quantitySalesBySeller,
            "total_sales_by_sellers" => $totalSalesBySellers,
            "total_commission_by_advisors" => $totalCommissionByAdvisor,
            "total_sales_by_advisors" => $totalSalesByAdvisors,
            "quantity_sales_by_advisors" => $quantitySalesByAdvisor,
            "total_commission_by_sellers" => $totalCommissionBySellers,
            "total_sales_by_product" => $totalSalesByProducts,
            "quantity_sales_by_product" => $quantitySalesByProducts,
            "gains_sales_by_product" => $gainsSalesByProduct,
            "sales_by_months" => $salesByMonths,
            'total_available' => $this->totalAvailable($totalReceipt->total ?? 0),
            'total_available_by_payment_types' => $this->totalAvailableByPaymentTypes(collect($paymentsTypes)),
            'total_used_for_payments' => $this->totalUsedByPayments()
        ];

    }

    private function totalUsedByPayments() {


        return (float)Expense::where('date_payment', '>=', $this->from.' 00:00:00')
        ->where('date_payment', '<=', $this->to.' 23:59:59')
        ->where('active', true)
        ->where('company_id', Auth::user()->company_id)
        ->where('paid',true)
        ->where('expenses_type_id', 2)
        ->sum('value');

    }

    private function totalReceipts() {

        return (float)Expense::where('date_payment', '>=', $this->from.' 00:00:00')
        ->where('date_payment', '<=', $this->to.' 23:59:59')
        ->where('active', true)
        ->where('company_id', Auth::user()->company_id)
        ->where('paid',true)
        ->where('expenses_type_id', 1)
        ->sum('value');

    }


    private function totalAvailable($totalReceipts) {



        return $this->totalReceipts() - $this->totalUsedByPayments();

    }

    private function totalAvailableByPaymentTypes($paymentsTypes) {

        $paymentsForms = PaymentForm::all();
        $totalAvailable = [];

        foreach ($paymentsForms as $paymentForm) {

            $totalIn =  (float)Expense::where('date_payment', '>=', $this->from.' 00:00:00')
            ->where('date_payment', '<=', $this->to.' 23:59:59')
            ->where('active', true)
            ->where('company_id', Auth::user()->company_id)
            ->where('paid',true)
            ->where('expenses_type_id', 1)
            ->where('payment_form_id', $paymentForm->id)
            ->sum('value');

            $totalOut = (float)Expense::where('date_payment', '>=', $this->from.' 00:00:00')
                ->where('date_payment', '<=', $this->to.' 23:59:59')
                ->where('active', true)
                ->where('company_id', Auth::user()->company_id)
                ->where('paid',true)
                ->where('expenses_type_id', 2)
                ->where('payment_form_id', $paymentForm->id)
                ->sum('value');


            $paymentTreated['name'] = $paymentForm->name;
            $paymentTreated['value'] = round($totalIn - $totalOut, 2);

            $totalAvailable[] = $paymentTreated;

        }

        return $totalAvailable;

    }

    public function getTotalByPaymentTypes() {

        $paymentsForms = PaymentForm::all();
        $totalPaymentIn = [];
        $totalPaymentOut = [];
        $totalPaymentAvailable = [];

        foreach ($paymentsForms as $paymentForm) {

            $totalIn =  (float)Expense::where('date_payment', '>=', $this->from.' 00:00:00')
            ->where('date_payment', '<=', $this->to.' 23:59:59')
            ->where('active', true)
            ->where('company_id', Auth::user()->company_id)
            ->where('paid',true)
            ->where('expenses_type_id', 1)
            ->where('payment_form_id', $paymentForm->id)
            ->sum('value');

            $totalOut = (float)Expense::where('date_payment', '>=', $this->from.' 00:00:00')
                ->where('date_payment', '<=', $this->to.' 23:59:59')
                ->where('active', true)
                ->where('company_id', Auth::user()->company_id)
                ->where('paid',true)
                ->where('expenses_type_id', 2)
                ->where('payment_form_id', $paymentForm->id)
                ->sum('value');

                if($totalIn) {
                    $paymentTreated['name'] = $paymentForm->name;
                    $paymentTreated['value'] = round($totalIn, 2);
                    $totalPaymentIn[] = $paymentTreated;
                }


                if($totalOut) {

                    $paymentTreated['name'] = $paymentForm->name;
                    $paymentTreated['value'] = round($totalOut, 2);
                    $totalPaymentOut[] = $paymentTreated;

                }

                if($totalIn && $totalOut) {

                    $paymentTreated['name'] = $paymentForm->name;
                    $paymentTreated['value'] = round($totalIn - $totalOut, 2);
                    $totalPaymentAvailable[] = $paymentTreated;

                } else if($totalIn) {

                    $paymentTreated['name'] = $paymentForm->name;
                    $paymentTreated['value'] = round($totalIn, 2);
                    $totalPaymentAvailable[] = $paymentTreated;

                } else if($totalOut) {

                    $paymentTreated['name'] = $paymentForm->name;
                    $paymentTreated['value'] = round($totalOut, 2);
                    $totalPaymentAvailable[] = $paymentTreated;

                }

        }


        return [
            "payment_in" => $totalPaymentIn,
            "payment_out" => $totalPaymentOut,
            "total_available" => $totalPaymentAvailable
        ];
    }



}
