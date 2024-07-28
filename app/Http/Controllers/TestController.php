<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function store() {

        \MercadoPago\SDK::setAccessToken(env("ACCESS_TOKEN"));

        $payment = new \MercadoPago\Payment();
        $payment->transaction_amount = 100;
        $payment->description = "Título do produto";
        $payment->payment_method_id = "pix";
        $payment->payer = array(
            "email" => "test@test.com",
            "first_name" => "Test",
            "last_name" => "User",
            "identification" => array(
                "type" => "CPF",
                "number" => "19119119100"
             )
          );

        $payment->save();
        

    }
}
