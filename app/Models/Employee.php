<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_id',
        'name',
        'email',
        'cpf',
        'rg',
        'birth_date',
        'active',
        'phone1',
        'phone2',
        'admission_date',
        'emitting_organ',
        'commission'
    ];

    protected $with = ['company'];

    public function company() {

        return $this->hasOne(Company::class, 'id', 'company_id');
    }
}
