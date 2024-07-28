<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyPlan extends Model
{
    use HasFactory;

    protected $table = 'companies_plans';
    protected $fillable = [
        'company_id', 'plan_id', 'active', 'quantity_months', 'date_limit'
    ];
    protected $with = ['plan'];

    public function plan() {

        return $this->hasOne(Plan::class, 'id', 'plan_id');
    }

}
