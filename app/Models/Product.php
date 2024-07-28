<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'brand_id',
        'active',
        'company_id',
        'image',
        'bar_code'
    ];

    protected $with = [
        'brand',
        'configs'
    ];

    protected $hidden = [
        'brand_id',
        'company_id',
        'updated_at'
    ];

/*    protected $appends = ["imageProductCode"];*/

    public function brand() {

        return $this->hasOne(Brand::class, 'id', 'brand_id');
    }

    public function configs() {

        return $this->hasMany(ProductConfig::class, 'product_id', 'id')->where('active', true);
    }

    public function getImageProductCodeAttribute(){
        $data = null;

        if (Storage::disk()->exists($this->image)) {
            $data = (Storage::disk()->get($this->image));

        }
        return "data:;base64,".base64_encode($data);
    }
}
