<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    use HasFactory;

    protected $fillable = [
      'company_id',
      'name',
      'description',
      'active'
    ];

    protected $hidden = [
        'company_id',
        'updated_at'
    ];

    protected $with = ['sizes'];

    public function sizes() {

        return $this->hasMany(ProductSize::class, 'brand_id', 'id') ->where('active', true);
    }
}
