<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentEmployeeAdvisor extends Model
{
    use HasFactory;

    protected $table = 'payments_employees_advisors';
    protected $fillable = [
        'amount',
        'date_init',
        'date_end',
        'description',
        'seller_id',
        'advisor_id',
        'company_id',
        'active',
        'user_id',
        'payment_form_id',
        'receipt_verified'
    ];

    protected $with = ['advisor', 'seller', 'user', 'paymentForm'];

    public function advisor() {

        return $this->hasOne(Advisor::class, 'id', 'advisor_id');
    }

    public function seller() {

        return $this->hasOne(Employee::class, 'id', 'seller_id');
    }

    public function user() {

        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function paymentForm() {

        return $this->hasOne(PaymentForm::class, 'id', 'payment_form_id');
    }
}
