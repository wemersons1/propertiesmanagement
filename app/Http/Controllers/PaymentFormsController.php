<?php

namespace App\Http\Controllers;

use App\Models\PaymentForm;
use App\Models\TaxesPaymentForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PaymentFormsController extends Controller
{

    public function taxes() {

        return response()->json(Auth::user()->company->taxesPayment);
    }

    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'payments' => 'required|array',
            'payments.*.name' => 'required|string',
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $idsActive = [];

        foreach ($request->payments as $payment) {

            $paymentForm = PaymentForm::where('name', $payment['name'])->where('active', true)->first();

            if(!$paymentForm) {

                $requestTreated['name'] = $payment['name'];
                $requestTreated['active'] = true;

                $paymentCreated = PaymentForm::create($requestTreated);

                $idsActive[] = $paymentCreated->id;

            } else {

                $idsActive[] = $paymentForm->id;

            }

        }

        PaymentForm::whereNotIn('id', $idsActive)->update(["active" => 0]);

        return response()->json(["message" => "forma de pagamento cadastrada com sucesso"]);

    }

    public function index(Request $request) {

        return response()->json(PaymentForm::all());
    }

}
