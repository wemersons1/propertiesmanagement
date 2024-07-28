<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChartProduct extends Model
{
    use HasFactory;
    protected $table = 'cart_product';

    protected $fillable = [
        'cart_id',
        'product_id',
        'canceled',
        'quantity',
        'price',
        'name',
        'product_config_id',
        'price_final',
        'advisor_id',
        'discount_by_product',
        'seller_id',
        'commission_seller',
        'payment_advisor_id',
        'payment_employee_id',
        'price_cost'
    ];

}
