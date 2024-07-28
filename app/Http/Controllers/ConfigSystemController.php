<?php

namespace App\Http\Controllers;

use App\Models\ConfigSystem;
use App\Models\PaymentForm;
use App\Models\TaxesPaymentForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ConfigSystemController extends Controller
{
    public function showAdmin() {
        $configSystem = ConfigSystem::where('company_id', Auth::user()->company_id)->first();
        return response()->json($configSystem);
    }

    public function updateAdmin(Request $request) {
        $validator = Validator::make($request->all(), [
            'seller_apply_discount' => "required|boolean",
            "have_advisor" => "required|boolean",
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $configSystem = ConfigSystem::where('company_id', Auth::user()->company_id)->first();

        $configSystem->update($request->all());

        return response()->json($configSystem);
    }

    public function updatePaymentForms(Request $request) {
        $validator = Validator::make($request->all(), [
            'payments' => "required",
            "payments.*.id" => "required|numeric",
            "payments.*.name" => "required|string",
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        foreach($request->payments as $item) {

            $payment = PaymentForm::find($item['id']);

            if($payment) {
                $payment->name = $item['name'];
                $payment->save();
            }

        }

        return response()->json([
            "message" => "Operação realizada com sucesso"
        ]);
    }

    public function storePaymentsForms(Request $request) {
        $validator = Validator::make($request->all(), [
            'payments' => "required",
            "payments.*.name" => "required|string",
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        foreach($request->payments as $item) {

            $payment = new PaymentForm();
            $payment->name = $item['name'];
            $payment->active = true;
            $payment->save();

        }

        return response()->json($payment);

    }

    public function deletePaymentForms(Request $request, $id) {

        $payment = PaymentForm::find($id);

        if($payment) {
            $payment->active = false;
            $payment->save();
        }

        return response()->json([
            "message" => "Operação realizada com sucesso"
        ]);

    }

    public function update(Request $request) {

        $validator = Validator::make($request->all(), [
            'taxes' => "required",
            "taxes.debit" => "required|numeric",
            "taxes.credit1x" => "required|numeric",
            "taxes.credit2x" => "required|numeric",
            "taxes.credit3x" => "required|numeric",
            "taxes.credit4x" => "required|numeric",
            "taxes.credit5x" => "required|numeric",
            "taxes.credit6x" => "required|numeric",
            "taxes.credit7x" => "required|numeric",
            "taxes.credit8x" => "required|numeric",
            "taxes.credit9x" => "required|numeric",
            "taxes.credit10x" => "required|numeric",
            "taxes.credit11x" => "required|numeric",
            "taxes.credit12x" => "required|numeric",
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $taxes = TaxesPaymentForm::find(Auth::user()->company->taxes_id);

        $taxes->update($request->taxes);

        return response()->json(["message" => "Taxas de pagamento cadastrada com sucesso"]);

    }

    public function index(Request $request) {

        $paymentsForms = PaymentForm::where('active', true)->get();

        return response()->json([
            "payments_forms" => $paymentsForms,
            "taxes" => Auth::user()->company->taxesPayment ?? null
        ]);
    }

}
