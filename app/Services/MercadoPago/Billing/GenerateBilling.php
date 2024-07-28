<?php

namespace App\Services\MercadoPago\Billing;

use App\Helpers\Helper as HelpersHelper;
use App\Models\DependentConfig;
use App\Models\PartnerPlan;
use App\Models\Payment;
use App\Models\PaymentStatus;
use App\Models\Plan;
use App\Utils\Helper;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class GenerateBilling {

    public function __construct() {
        $accessToken = env("MERCADO_PAGO_ACCESS_TOKEN");
        \MercadoPago\SDK::setAccessToken($accessToken);
    }

    public function execute($request) {

        DB::beginTransaction();

        try {

            $name = explode(' ', Auth::user()->name);
            $firstName = $name[0];
            $lastName = $name[1] ?? 'Sobrenome';

            $plan = Plan::find($request->plan_id);
            $payment = new \MercadoPago\Payment();
            $payment->transaction_amount = $plan->value_total;
            $payment->description = "BIRDSDIGITAL - ".$plan->name;
            $payment->payment_method_id = "bolbradesco";
            $payment->payer = array(
                "email" => Auth::user()->company->email,
                "first_name" => $firstName,
                "last_name" => $lastName,
                "identification" => array(
                    "type" => "CPF",
                    "number" => str_replace(array("-", ".", " "), '', Auth::user()->company->cnpj)
                )
            );

            $payment->save();

            $dataPayment = [
                'reference_payment_method_id' => $payment->id,
                'payment_status_id' => PaymentStatus::where('name', $payment->status)->first()->id,
                'payment_form_id' => 6,//BOLETO
                'link_billing' => $payment->transaction_details->external_resource_url,
                'company_paid_id' => Auth::user()->company_id,
                'value' => $plan->value_total,
                'company_id' => 2//LOJA VÍNCULADA AO USUÁRIO MASTER
            ];

            $payment = Payment::create($dataPayment);

        }catch(\Exception $e) {

            return $e->getMessage();
        }

        DB::commit();

        return $payment;
    }

}
