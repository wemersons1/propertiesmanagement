<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

Route::get('/plans', [ProductsController::class, 'getImagePlan']);
Route::get('/product/image', [ProductsController::class, 'getImage']);

Route::get('/fechamento-diario', function() {

    return view('pdf.fechamento_diario');
});

Route::view('/{path?}', 'app')
    ->where('path', '.*');
