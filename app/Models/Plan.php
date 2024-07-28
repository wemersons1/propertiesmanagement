<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'value_by_month',
        'value_total',
        'quantity_users',
        'description',
        'active',
        'is_free',
        'quantity_days',
        'category_id',
        'path_image'
    ];
    protected $with = ['category'];

    public function category() {
        return $this->hasOne(CategoryPlan::class, 'id', 'category_id');
    }
}
