<?php

namespace App\Http\Controllers;

use App\Models\Expense;
use App\Models\ExpenseName;
use App\Models\ExpenseType;
use App\Services\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Exports\ExpenseExport;
use Maatwebsite\Excel\Facades\Excel;

class ExpensesController extends Controller
{

    public function storeName(Request $request) {

        ExpenseName::create([
            "company_id" => Auth::user()->company_id,
            'name' => $request->name
        ]);
    }

    public function names() {

        $expense = ExpenseName::where('company_id', Auth::user()->company_id)->orderBy('id', 'DESC')->get();

        return response()->json($expense);
    }

    public function types() {
        return response()->json(ExpenseType::all());
    }

    public function index(Request $request) {

        $expenses = Expense::where('company_id',  Auth::user()->company_id)
            ->where('date_payment', '>=', $request->from.' 00:00:00')
            ->where('date_payment', '<=', $request->to.' 23:59:59')
            ->where('active', true);

        $totalIn = clone $expenses;
        $totalOut = clone $expenses;

        $totalIn = $totalIn->where('paid', true)->where('expenses_type_id', 1)->sum('value');
        $totalOut = $totalOut->where('paid', true)->where('expenses_type_id', 2)->sum('value');

        if($request->payment_form_id) {

            $expenses = $expenses->where('payment_form_id', $request->payment_form_id);

        }

        if($request->expenses_type_id) {

            $expenses = $expenses->where('expenses_type_id', $request->expenses_type_id);

        }

        if($request->pdf){

            $report = new Report($request->from, $request->to);

            $data['total_in'] = $totalIn;
            $data['total_out'] = $totalOut;
            $data['total_sum_cost_products'] = $this->getTotalSumCostProducts($request);
            $data['date_init'] = $request->from;
            $data['date_end'] = $request->to;
            $data['total_by_payment_types'] = $report->getTotalByPaymentTypes();

            return response()->json([
                "content_html" => view('pdf.fechamento_diario')->with($data)->render()
            ]);

        }

        if($request->excel) {

            return Excel::download(new ExpenseExport($expenses), 'invoices.xlsx');

        }

        $totalProductsSold = $this->getTotalSumCostProducts($request);

        return response()->json([
            "data" => $expenses->orderByDesc('id')->paginate($request->size ?? 15),
            "total_in" => $totalIn,
            "total_out" => $totalOut,
            "total_products_sold" => $totalProductsSold
        ]);

    }

    private function getTotalSumCostProducts($request) {

        return DB::table("cart_product as cp")
            ->join("shopping_carts as sc", function($join){
                $join->on("cp.cart_id", "=", "sc.id");
            })
            ->join("products_configs as pc", function($join){
                $join->on("pc.id", "=", "cp.product_config_id");
            })
            ->selectRaw("ROUND(SUM(cp.price_cost * cp.quantity), 2) as total")
            ->where("sc.status_id", "=", 1)
            ->where("sc.active", "=", true)
            ->where("cp.canceled", "=", false)
            ->where("sc.company_id", "=", Auth::user()->company_id)
            ->where("sc.date_paid", ">=", $request->from.' 00:00:00')
            ->where("sc.date_paid", "<=", $request->to.' 23:59:59')
            ->get()[0]->total ?? 0;

    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'expenses_type_id' => 'required|exists:expenses_types,id',
            'expenses_name_id' => 'required|exists:expenses_name,id',
            'value' => 'required|numeric',
            'date_payment' => 'required|date',
            'description' => 'nullable|string',
            'payment_form_id' => 'nullable|exists:payments_forms,id',
            'paid' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $requestAll = $request->all();
        $requestAll['date_payment'] = $request->date_payment.' '.date('H:i:s');
        $requestAll['active'] = true;
        $requestAll['company_id'] = Auth::user()->company_id;

        if(!$request->description) {

            $requestAll['description'] = ExpenseName::find($request->expenses_name_id)->name;

        }

        $expense = Expense::create($requestAll);

        return response()->json($expense);
    }

    public function update(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'value' => 'required|numeric',
            'date_payment' => 'required|date',
            'description' => 'nullable|string',
            'expenses_name_id' => 'required|exists:expenses_name,id',
            'expenses_type_id' => 'required|exists:expenses_types,id',
            'payment_form_id' => 'nullable|exists:payments_forms,id',
            'paid' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $expense = Expense::find($id);

        if($expense->company_id !== Auth::user()->company_id) {

            return response()->json([
                "message" => 'Despesa não encontrada'
            ], 400);
        }

        $requestAll = $request->all();
        $requestAll['active'] = true;
        unset($requestAll['date_payment']);
        $requestAll['date_payment'] = $request->date_payment.' '.date('Y-m-d');

        if(!$request->description) {
            $requestAll['description'] = ExpenseName::find($request->expenses_name_id)->name;
        }

        $expense->update($requestAll);

        return response()->json($expense);

    }

    public function show($id) {

        $expense = Expense::find($id);

        if($expense->company_id !== Auth::user()->company_id) {

            return response()->json([
                "message" => 'Despesa não encontrada'
            ], 400);
        }

        return response()->json($expense);
    }

    public function destroy($id) {

        $expense = Expense::find($id);

        if($expense->company_id !== Auth::user()->company_id) {

            return response()->json([
                "message" => 'Despesa não encontrada'
            ], 400);
        }

        $expense->active = false;
        $expense->save();

        return response()->json($expense);

    }
}
