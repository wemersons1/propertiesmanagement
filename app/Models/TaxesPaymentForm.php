<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaxesPaymentForm extends Model
{
    use HasFactory;

    protected $table = 'taxes_payment_form';

    protected $fillable = [
        'debit',
        'credit1x',
        'credit2x',
        'credit3x',
        'credit4x',
        'credit5x',
        'credit6x',
        'credit7x',
        'credit8x',
        'credit9x',
        'credit10x',
        'credit11x',
        'credit12x',
    ];
}
