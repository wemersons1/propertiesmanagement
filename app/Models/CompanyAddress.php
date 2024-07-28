<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyAddress extends Model
{
    use HasFactory;

    protected $table = 'companies_addresses';

    protected $fillable = [
        'zip_code',
        'state',
        'city',
        'neighborhood',
        'street',
        'complement',
        'number'
    ];
}
