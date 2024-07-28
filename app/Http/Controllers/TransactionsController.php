<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TransactionsController extends Controller
{
    public function index(Request $request) {

        $validator = Validator::make($request->all(), [
            'from' => 'required|date',
            'to' => 'required|date',
            'client' => 'nullable|string',
            'role' => 'nullable'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $transactions = Payment::where('company_id', Auth::user()->company_id)
            ->where('date', '>=', $request->from.' 00:00:00')
            ->where('date', '<=', $request->to.' 23:59:59')
            ->where('active', true);

        if($request->role == 'clerk') {

            $transactions = $transactions->where('clerk_id', Auth::user()->employee_id);

        }

        if($request->client) {

            $transactions = $transactions->whereHas('client', function($query)use($request) {
                $query->where('name', 'LIKE', '%'.$request->client.'%');
            });
        }

        if($request->clerk) {

            $transactions = $transactions->whereHas('clerk', function($query)use($request) {
                $query->where('name', 'LIKE', '%'.$request->clerk.'%');
            });

        }

        if($request->payment_form_id) {

            $transactions = $transactions->where('payment_form_id', $request->payment_form_id);

        }

        $totalTransactions = $transactions->sum('value');

        return response()->json([
            "data" => $transactions->orderBy('id', 'DESC')->paginate(),
            "total" => $totalTransactions
        ]);

    }

    public function destroy($id) {

        $payment = Payment::find($id);

        if(!$payment) {

            return response()->json([
                "message" => "Pagamento não encontrado"
            ], 400);
        }

        $payment->update(["active" =>  false]);

        return response()->json(["message" => "Pagamento excluído com sucesso"]);

    }

}
