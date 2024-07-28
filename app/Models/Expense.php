<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;
    protected $table = 'expenses';
    protected $fillable = [
        'value',
        'date_payment',
        'description',
        'expenses_name_id',
        'expenses_type_id',
        'payment_form_id',
        'company_id',
        'paid',
        'active',
        'payment_id',
        'payment_employee_advisor_id'
    ];

    protected $with = ['type', 'name', 'paymentForm', 'payment', 'paymentEmployeeAdvisor'];

    public function type() {
        return $this->hasOne(ExpenseType::class, 'id', 'expenses_type_id');
    }

    public function name() {
        return $this->hasOne(ExpenseName::class, 'id', 'expenses_name_id');
    }

    public function paymentForm() {
        return $this->hasOne(PaymentForm::class, 'id', 'payment_form_id');
    }

    public function payment() {
        return $this->hasOne(Payment::class, 'id', 'payment_id');
    }

    public function paymentEmployeeAdvisor() {
        return $this->hasOne(PaymentEmployeeAdvisor::class, 'id', 'payment_employee_advisor_id');
    }

}
