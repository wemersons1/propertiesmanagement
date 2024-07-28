<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryPlan extends Model
{
    use HasFactory;
    protected $table = 'plans_categories';
    protected $fillable = ['name', 'quantity_months'];
}
