<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductSize extends Model
{
    use HasFactory;
    protected $table = 'products_sizes';
    protected $fillable = [
        'company_id',
        'name',
        'description',
        'brand_id',
        'active'
    ];

    protected $hidden = [
        'company_id',
        'updated_at'
    ];
}
