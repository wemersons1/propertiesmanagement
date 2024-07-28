<?php

namespace App\Services\MercadoPago\CreditCard;

use App\Models\CompanyPlan;
use App\Models\Dependent;
use App\Models\DependentConfig;
use App\Models\PartnerPlan;
use App\Models\Payment;
use App\Models\PaymentStatus;
use App\Models\Plan;
use App\Services\Helper as ServicesHelper;
use App\Utils\Helper;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CreditCard {

    public function __construct()
    {
        $accessToken = env('MERCADO_PAGO_ACCESS_TOKEN', '');

        \MercadoPago\SDK::setAccessToken($accessToken); // Either Production or

    }

    public function execute($request) {

        DB::beginTransaction();

        try {

            $plan = Plan::find($request->plan_id);
            $payment = new \MercadoPago\Payment();
            $payment->transaction_amount = (float)$plan->value_total;
            $payment->token = $request->card['token'];

            $payment->description = "BIRDSDIGITAL - ".$plan->name;
            $payment->installments = (int)$request->card['installments'];
            $payment->payment_method_id = $request->card['paymentMethodId'];
            $payment->issuer_id = $request->card['issuerId'];

            $payer = new \MercadoPago\Payer();
            $payer->email = $request->card['cardholderEmail'];
            $payer->identification = array(
                "type" =>  $request->card['identificationType'],
                "number" =>  $request->card['identificationNumber']
            );
            $payment->payer = $payer;

            $payment->save();

            if(!$payment->id) {
                throw new \Exception($payment->error->message);
            }

            if(!$payment->id) {
                throw new \Exception($payment->error->message);
            }

            $dataPayment = [
                'reference_payment_method_id' => $payment->id,
                'payment_status_id' => PaymentStatus::where('name', $payment->status)->first()->id,
                'payment_form_id' => 7,//CRÉDITO ONLINE
                'company_paid_id' => Auth::user()->company_id,
                'value' => $plan->value_total,
                'company_id' => 2//LOJA VÍNCULADA AO USUÁRIO MASTER
            ];

            if((int)$dataPayment['payment_status_id'] === 1) {

                $plan = CompanyPlan::where('company_id', Auth::user()->company_id)->orderByDesc('id')->first();
                $plan->active = true;
                $plan->save();
            }

            $payment = Payment::create($dataPayment);

        }catch(\Exception $e) {

            throw new \Exception($e->getMessage());
        }

        DB::commit();

        return $dataPayment;
    }

}
