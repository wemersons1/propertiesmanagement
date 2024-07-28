<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\ChartProduct;
use App\Models\Expense;
use App\Models\PaymentEmployeeAdvisor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PaymentEmployeeAdvisorController extends Controller
{

    public function index(Request $request) {

        $payments = PaymentEmployeeAdvisor::where('active', true)
            ->where('company_id', Auth::user()->company_id)
            ->where('created_at','>=' ,$request->from.' 00:00:00')
            ->where('created_at','<=' ,$request->to.' 23:59:59');

        if(Helper::checkUserLogged('clerk')) {

            $payments = $payments->where('user_id', Auth::user()->id);

        }

        if($request->name) {

            $payments->whereHas('employee', function($query)use($request) {

                $query->where('name', 'LIKE', '%'.$request->name.'%')
                    ->where('active', true);

            })->orWhereHas('advisor', function($query)use($request) {

                $query->where('name', 'LIKE', '%'.$request->name.'%')
                    ->where('active', true);

            });
        }

        if($request->type_id) {

            switch ($request->type_id) {

                case 1:
                    $payments = $payments->where('advisor_id', null);
                    break;
                case 2:
                    $payments = $payments->where('seller_id', null);

            }

        }

        if($request->employee) {

            $payments = $payments->where(function($query)use($request) {

                $query->whereHas('seller', function($q)use($request){
                    $q->where('name', $request->employee);
                })->orWhereHas('advisor', function($q)use($request){
                    $q->where('name', $request->employee);
                });

            });
        }

        if($request->payment_form_id) {

            $payments = $payments->where('payment_form_id', $request->payment_form_id);
        }

        $total = clone $payments;

        return response()->json([
            "data" => $payments->orderByDesc('id')->paginate(),
            "total_paid" => $total->sum('amount')
        ]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'amount' => 'required',
            'date_init' => 'required|date',
            'date_end' => 'required|date',
            'description' => 'nullable|string',
            'seller_id' => 'nullable|exists:employees,id',
            'advisor_id' => 'nullable|exists:advisors,id',
            'payment_form_id' => 'required|exists:payments_forms,id'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $requestAll = $request->all();
        $requestAll['company_id'] = Auth::user()->company_id;
        $requestAll['active'] = true;
        $requestAll['user_id'] = Auth::user()->id;

        DB::beginTransaction();

        try {

            $payment = PaymentEmployeeAdvisor::create($requestAll);

            $dateInit = (new \DateTime($payment->date_init))->format('d/m/Y');
            $dateEnd = (new \DateTime($payment->date_end))->format('d/m/Y');

            if($payment->advisor_id) {

                $nameAdvisor = ucfirst($payment->advisor->name);
                $description = "Pagamento assessor {$nameAdvisor} - Período: {$dateInit} - {$dateEnd}";

            } else {

                $nameSeller = ucfirst($payment->seller->name);
                $description = "Pagamento vendedor {$nameSeller} - Período: {$dateInit} - {$dateEnd}";

            }

            $paymentTreated['payment_employee_advisor_id'] = $payment->id;
            $paymentTreated['active'] = true;
            $paymentTreated['date_payment'] = $payment->created_at;
            $paymentTreated['paid'] = true;
            $paymentTreated['company_id'] = $payment->company_id;
            $paymentTreated['payment_form_id'] = $payment->payment_form_id;
            $paymentTreated['expenses_type_id'] = 2;//Saída
            $paymentTreated['value'] = $payment->amount;
            $paymentTreated['description'] = $description;

            Expense::create($paymentTreated);

            if($request->seller_id) {

                ChartProduct::where('created_at', ">=", $request->date_init.' 00:00:00')
                    ->where('created_at', '<=', $request->date_end.' 23:59:59')
                    ->where('canceled', 0)
                    ->where('payment_employee_id', null)
                    ->where('seller_id', $request->seller_id)->update(['payment_employee_id' => $payment->id]);

            } else {

                ChartProduct::where('created_at', ">=", $request->date_init.' 00:00:00')
                    ->where('created_at', '<=', $request->date_end.' 23:59:59')
                    ->where('canceled', 0)
                    ->where('payment_advisor_id', null)
                    ->where('advisor_id', $request->advisor_id)->update(['payment_advisor_id' => $payment->id]);

            }

        }catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();

        return response()->json($payment);

    }

    public function update(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'amount' => 'required',
            'date_init' => 'required|date',
            'date_end' => 'required|date',
            'description' => 'nullable|string',
            'seller_id' => 'nullable|exists:employees,id',
            'advisor_id' => 'nullable|exists:advisors,id',
            'payment_form_id' => 'required|exists:payments_forms,id'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $payment = PaymentEmployeeAdvisor::find($id);

        return response()->json($payment->update($request->all()));

    }

    public function show($id) {

        $payment = PaymentEmployeeAdvisor::find($id);

        if(!$payment || ($payment->company_id !== Auth::user()->company_id)) {

            return response()->json([
                "message" => "Pagamento não encontrado"
            ], 400);
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
                ->where("cp.canceled", "=", false)
                ->where("sc.active", "=", 1)
                ->where("sc.status_id", "=", 1);


        if($payment->advisor_id) {

                    $allTransactions = $allTransactions->where('payment_advisor_id', $id)
                        ->select(DB::raw("sc.id as id, if(cp.discount_by_product > ((cp.price_final * cp.quantity) - (cp.price  * cp.quantity)), 0, ((cp.price_final * cp.quantity) - (cp.price  * cp.quantity)) - cp.discount_by_product) as commission"),
                            "cp.discount_by_product as discount", "cp.price_final", "cp.price", "cp.quantity", "c.name as client", "cp.created_at", "p.name as product")
                        ->paginate($size ?? 10);

                    $totalSale = DB::select('select ROUND(SUM((cp.price_final * cp.quantity) - cp.discount_by_product)) as total from cart_product as cp
                                                    inner join shopping_carts as sc
                                                    on sc.id = cp.cart_id
                                                    where cp.payment_advisor_id = ?
                                                    and cp.canceled = 0
                                                    and sc.active = 1
                                                    and sc.status_id = 1;', [$payment->id])[0];

                } else {

                    $allTransactions = $allTransactions->where('payment_employee_id', $id)
                        ->select(DB::raw("sc.id as id, cp.commission_seller * ((cp.price_final * cp.quantity) - cp.discount_by_product)/100 as commission"),
                            "cp.discount_by_product as discount", "cp.price_final", "cp.price", "cp.quantity", "c.name as client", "cp.created_at", "p.name as product")
                        ->paginate($size ?? 10);

                    $totalSale = DB::select('select ROUND(SUM((cp.price_final * cp.quantity) - cp.discount_by_product)) as total from cart_product as cp
                                                    inner join shopping_carts as sc
                                                    on sc.id = cp.cart_id
                                                    where cp.payment_employee_id = ?
                                                    and cp.canceled = 0
                                                    and sc.active = 1
                                                    and sc.status_id = 1;;', [$payment->id])[0];

                }

        $payment = $payment->toArray();
        $payment['all_transactions'] = $allTransactions;
        $payment['total_sale'] = isset($totalSale->total) ? $totalSale->total : 0;

        return response()->json($payment);
    }

    public function destroy($id) {

        $payment = PaymentEmployeeAdvisor::find($id);

        if(!$payment || ($payment->company_id !== Auth::user()->company_id)) {

            return response()->json([
                "message" => "Pagamento não encontrado"
            ], 400);
        }

        if($payment->advisor_id) {

            ChartProduct::where('payment_advisor_id', $payment->advisor_id)->update(["payment_advisor_id" => null]);

        } else {

            ChartProduct::where('payment_employee_id', $payment->seller_id)->update(["payment_employee_id" => null]);

        }

        $payment->update(["active" => false]);

        return response()->json($payment);

    }
}
