<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductConfig extends Model
{
    use HasFactory;
    protected $table = 'products_configs';

    protected $fillable = [
        'quantity',
        'price',
        'product_id',
        'size_id',
        'active',
        'price_cost'
    ];

    protected $with = [
        'size',
        'color'
    ];

    public function size() {

        return $this->hasOne(ProductSize::class, 'id', 'size_id');
    }

    public function color() {

        return $this->hasOne(Color::class, 'id', 'color_id');
    }

}
