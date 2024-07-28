<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'cnpj',
        'representative',
        'phone1',
        'phone2',
        'active',
        'address_id',
        'logo_image',
        'taxes_id',
        'used_free_plan'
    ];

    protected $with = ['address', 'configSystem', 'taxesPayment', 'plan'];

    protected $appends = ["imageLogoCode"];

    public function address() {

        return $this->hasOne(CompanyAddress::class, 'id', 'address_id');
    }

    public function plan() {

        return $this->belongsToMany(Plan::class, 'companies_plans', 'company_id', 'plan_id')
        ->where('companies_plans.active', true)
        ->withPivot('date_limit');
    }

    public function taxesPayment() {

        return $this->hasOne(TaxesPaymentForm::class, 'id', 'taxes_id');
    }

    public function configSystem() {

        return $this->hasMany(ConfigSystem::class, 'company_id', 'id');
    }

    public function getImageLogoCodeAttribute(){
        $data = null;

        if (Storage::disk()->exists($this->logo_image)) {
            $data = (Storage::disk()->get($this->logo_image));

        }
        return "data:;base64,".base64_encode($data);
    }
}
