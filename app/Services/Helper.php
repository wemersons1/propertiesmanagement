<?php

namespace App\Services;

class Helper
{

    public static function clearString($string) {

        $string = explode('-', $string);
        $string = implode('', $string);

        $string = explode('.', $string);
        $string = implode('', $string);

        $string = explode('(', $string);
        $string = implode('', $string);

        $string = explode(')', $string);
        $string = implode('', $string);


        $string = explode(' ', $string);

        return implode('', $string);
    }

    public static function translateStatusPaymentMercadoPago($status) {
        switch($status) {
            case 'pending':
                return 8;
            case 'approved':
                return 1;
            case 'authorized':
                return 8;
            case 'in_process';
                return 11;
            case 'in_mediation';
                return 8;
            case 'canceled':
                return 3;
            case 'rejected':
                return 13;
            case 'refunded':
                return 9;
            default ;
                return 9;
        }
    }
}
