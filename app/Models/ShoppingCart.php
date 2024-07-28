<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ShoppingCart extends Model
{
    use HasFactory;

    protected $table = 'shopping_carts';

    protected $fillable = [
        'discount',
        'client_id',
        'employee_id',
        'status_id',
        'company_id',
        'advisor_id',
        'status_object_id',
        'expedition_id',
        'commission_seller',
        'payment_form_id',
        'installments',
        'active',
        'verified_receipt_advisor',
        'verified_receipt_client',
        'date_paid'
    ];

    protected $with = [
        'client',
        'status',
        'employee',
        'products',
        'statusObject',
        'receivedBy',
        'advisor',
        'payments',
        'clerk',
        'paymentForm',
    ];

    public function paymentForm() {

        return $this->hasOne(PaymentForm::class, 'id', 'payment_form_id');
    }

    public function advisor() {

        return $this->hasOne(Advisor::class, 'id', 'advisor_id');
    }

    public function receivedBy() {

        return $this->hasOne(StatusObject::class, 'id', 'expedition_id');
    }

    public function statusObject() {

        return $this->hasOne(StatusObject::class, 'id', 'status_object_id');
    }

    public function client() {

        return $this->hasOne(Client::class, 'id', 'client_id');
    }

    public function status() {

        return $this->hasOne(ShoppingCartStatus::class, 'id', 'status_id');
    }
    //REFERENCIA O VENDEDOR
    public function employee() {

        return $this->hasOne(Employee::class, 'id', 'employee_id');
    }

    public function products() {

        return $this->belongsToMany(ProductConfig::class, 'cart_product', 'cart_id', 'product_config_id')
            ->withPivot('price_final', 'name', 'quantity', 'discount_by_product')
            ->where('canceled', false);
    }

    public function payments() {

        return $this->hasMany(Payment::class, 'cart_id', 'id')->where('active', true);
    }

    public function clerk() {

        return $this->hasOne(Employee::class, 'id', 'clerk_id');
    }

    public static function calculateTotal($shoppingCart) {

        $result = 0;

        foreach ($shoppingCart as $item) {

            foreach ($item->products as $product) {

                $result = $result + (($product->pivot->price_final * $product->pivot->quantity) - (float)$product->pivot->discount_by_product);
            }

        }

        return $result;

    }

}
