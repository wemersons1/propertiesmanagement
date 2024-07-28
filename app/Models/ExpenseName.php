<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExpenseName extends Model
{
    use HasFactory;
    protected $table = 'expenses_name';
    protected $fillable = [
        'name',
        'company_id'
    ];
}
