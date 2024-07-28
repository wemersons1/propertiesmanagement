<?php

namespace App\Http\Controllers;

use App\Services\MercadoPago\Billing\GenerateBilling;
use App\Services\MercadoPago\CreditCard\CreditCard;
use App\Services\MercadoPago\Pix\GenerateQrCode;
use App\Services\MercadoPago\Pix\QrCode;
use App\Services\Plan\RegisterPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaymentPlanController extends Controller
{

    public function pix(Request $request) {
        $validator = Validator::make($request->all(), [
            'plan_id' => 'required|exists:plans,id',
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        try {

            (new RegisterPlan())->execute($request);

            $payment = (new QrCode())->execute($request);

        }catch(\Exception $e) {

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        return response()->json($payment);
    }

    public function billing(Request $request) {
        $validator = Validator::make($request->all(), [
            'plan_id' => 'required|exists:plans,id',
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        try {

            (new RegisterPlan())->execute($request);

            $payment = (new GenerateBilling())->execute($request);

        }catch(\Exception $e) {

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        return response()->json($payment);
    }

    public function credit(Request $request) {
        $validator = Validator::make($request->all(), [
            'plan_id' => 'required|exists:plans,id',
            'card' => 'nullable',
            'card.paymentMethodId' => 'required',
            'card.issuerId' => 'required',
            'card.cardholderEmail' => 'required',
            'card.token' => 'required',
            'card.installments' => 'required',
            'card.identificationNumber' => 'required',
            'card.identificationType' => 'required',
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        try {

            (new RegisterPlan())->execute($request);

            $payment = (new CreditCard())->execute($request);


        }catch(\Exception $e) {

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        return response()->json($payment);
    }
}
