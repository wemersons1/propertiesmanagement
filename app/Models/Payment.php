<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $fillable = [
        'cart_id',
        'payment_form_id',
        'value',
        'date',
        'clerk_id',
        'company_id',
        'client_id',
        'active',
        'installments',
        'tax',
        'installments_value',
        'link_billing',
        'company_paid_id',
        'reference_billing_id',
        'reference_payment_method_id',
        'payment_status_id'
    ];

    protected $with = ['paymentForm', 'clerk', 'client', 'status'];

    public function status() {

        return $this->hasOne(PaymentStatus::class, 'id', 'payment_status_id');
    }

    public function paymentForm() {

        return $this->hasOne(PaymentForm::class, 'id', 'payment_form_id');
    }

    public function clerk() {

        return $this->hasOne(Employee::class, 'id', 'clerk_id');
    }

    public function client() {

        return $this->hasOne(Client::class, 'id', 'client_id');
    }

}
