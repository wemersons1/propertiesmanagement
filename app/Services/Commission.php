<?php

namespace App\Services;

use App\Models\ChartProduct;
use App\Models\Employee;
use App\Models\ShoppingCart;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Commission
{

    private $from, $to, $id, $payment_advisor_id, $payment_employee_id;

    function __construct($from, $to, $id, $payment_advisor_id, $payment_employee_id) {

        $this->from = $from;
        $this->to = $to;
        $this->id = $id;
        $this->payment_employee_id = $payment_employee_id;
        $this->payment_advisor_id = $payment_advisor_id;

    }

    public function seller($size = 10) {

        $allTransactions =
            DB::table("cart_product as cp")
                ->join("shopping_carts as sc", function($join){
                    $join->on("sc.id", "=", "cp.cart_id");
                })
                ->join("clients as c", function($join){
                    $join->on("c.id", "=", "sc.client_id");
                })
                ->join("products_configs as pc", function($join){
                    $join->on("pc.id", "=", "cp.product_config_id");
                })
                ->join("products as p", function($join){
                    $join->on("p.id", "=", "pc.product_id");
                })
                ->join("employees as e", function($join){
                    $join->on("e.id", "=", "sc.employee_id");
                })
                ->select(DB::raw("sc.id as id, cp.commission_seller * ((cp.price_final * cp.quantity) - cp.discount_by_product)/100 as commission"),
                    "cp.discount_by_product as discount", "cp.price_final", "cp.price", "cp.quantity", "c.name as client", "cp.created_at", "p.name as product")
                ->where("e.id", "=", $this->id)
                ->where('sc.active', "=", true)
                ->where('cp.canceled', "=", false)
                ->where('cp.payment_employee_id', "=", $this->payment_employee_id)
                ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
                ->where("sc.date_paid", "<=", $this->to.' 23:59:59')
                ->where("sc.status_id", "=", 1);


        $totalSales = DB::table("shopping_carts as sc")
            ->join("cart_product as cp", function($join){
                $join->on("sc.id", "=", "cp.cart_id");
            })
            ->where("cp.canceled", "=", 0)
            ->where('cp.payment_employee_id', "=", $this->payment_employee_id)
            ->where("sc.status_id", "=", 1)
            ->where("sc.active", "=", 1)
            ->where("sc.employee_id", "=", $this->id)
            ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $this->to. ' 23:59:59')
            ->selectRaw(DB::raw('SUM((cp.price_final * cp.quantity) - cp.discount_by_product) as total'))->get()[0]->total;

        $allTransactionsCopy = clone $allTransactions;

        $allTransactions = $allTransactions->paginate($size ?? 10);


        return [
            "total_sale" => $totalSales,
            "commission" => ROUND($allTransactionsCopy->get()->sum('commission'), 2),
            "all_transactions" => $allTransactions
        ];
    }

    public function advisor($size = 10) {


        if($this->payment_advisor_id) {

            $totalSold = DB::select('select ROUND(SUM((cp.price_final * cp.quantity) - cp.discount_by_product)) as total from cart_product as cp
                                    inner join shopping_carts as sc
                                    on sc.id = cp.cart_id
                                    where cp.advisor_id = ?
                                    and sc.date_paid >= ?
                                    and sc.date_paid <= ?
                                    and cp.payment_advisor_id = ?
                                    and cp.canceled = 0
                                    and sc.active = 1
                                    and sc.status_id = 1;', [$this->id, $this->from.' 00:00:00', $this->to.' 23:59:59', $this->payment_advisor_id])[0]->total;

        } else {

            $totalSold = DB::select('select ROUND(SUM((cp.price_final * cp.quantity) - (cp.discount_by_product)) ) as total from cart_product as cp
                                    inner join shopping_carts as sc
                                    on sc.id = cp.cart_id
                                    where cp.advisor_id = ?
                                    and sc.date_paid >= ?
                                    and sc.date_paid <= ?
                                    and cp.payment_advisor_id is null
                                    and cp.canceled = 0
                                    and sc.active = 1
                                    and sc.status_id = 1;', [$this->id, $this->from.' 00:00:00', $this->to.' 23:59:59'])[0]->total;


        }


        $allTransactions =
            DB::table("cart_product as cp")
                ->join("shopping_carts as sc", function($join){
                    $join->on("sc.id", "=", "cp.cart_id");
                })
                ->join("clients as c", function($join){
                    $join->on("c.id", "=", "sc.client_id");
                })
                ->join("products_configs as pc", function($join){
                    $join->on("pc.id", "=", "cp.product_config_id");
                })
                ->join("products as p", function($join){
                    $join->on("p.id", "=", "pc.product_id");
                })
                ->join("employees as e", function($join){
                    $join->on("e.id", "=", "sc.employee_id");
                })
                ->select(DB::raw("sc.id as id, ((cp.price_final * cp.quantity) - (cp.price  * cp.quantity)) - cp.discount_by_product as commission"),
                    "cp.discount_by_product as discount", "cp.price_final", "cp.price", "cp.quantity", "c.name as client", "cp.created_at", "p.name as product")
                ->where("cp.advisor_id", "=", $this->id)
                ->where("cp.canceled", "=", false)
                ->where('cp.payment_advisor_id', "=", $this->payment_advisor_id)
                ->where("sc.active", "=", 1)
                ->where("sc.date_paid", ">=", $this->from.' 00:00:00')
                ->where("sc.date_paid", "<=", $this->to.' 23:59:59')
                ->where("sc.status_id", "=", 1);



        return [
            "total_sale" => $totalSold,
            "commission" => $this->getSumAllTransaction(),
            "all_transactions" => $allTransactions->paginate($size ?? 10)
        ];
    }

    private function getSumAllTransaction() {

        $totalCommission = 0;

        $allCartsId = ShoppingCart::where("active", "=", 1)
        ->where("date_paid", ">=", $this->from.' 00:00:00')
        ->where("date_paid", "<=", $this->to.' 23:59:59')
        ->where("status_id", "=", 1)->select('id', 'discount')->get();


        foreach($allCartsId as $cart) {

            $commission = DB::table("cart_product")
                        ->where('cart_id', $cart->id)
                        ->where("advisor_id", "=", $this->id)
                        ->where("canceled", "=", false)
                        ->where('payment_advisor_id', "=", $this->payment_advisor_id)
                        ->sum(DB::raw('((price_final * quantity) - (price  * quantity))'));

            if(($commission - $cart->discount) > 0) {
                $totalCommission = $totalCommission + ($commission - $cart->discount);
            }

        }

        return $totalCommission;


    }


}
