<?php

namespace App\Services\MercadoPago;

class MercadoPago {

    private $mercadoPago;

    public function __construct() {
        $accessToken = env("MERCADO_PAGO_ACCESS_TOKEN");  
        \MercadoPago\SDK::setAccessToken($accessToken);
    }

    public function checkStatus($transactionCodeId) {

        $payment = new \MercadoPago\Payment();
        $payment = $payment->get($transactionCodeId);

        return $payment;
    }

}