<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConfigSystem extends Model
{
    use HasFactory;
    protected $table = 'config_system';
    protected $fillable = [
        'company_id',
        'seller_apply_discount',
        'active',
        'have_advisor'
    ];
    

}
