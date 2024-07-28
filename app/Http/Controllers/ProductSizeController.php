<?php

namespace App\Http\Controllers;

use App\Models\Color;
use App\Models\ProductSize;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductSizeController extends Controller
{
    public function index(Request $request) {

        if($request->all) {

            return response()->json(ProductSize::where('company_id', Auth::user()->company_id)->get());
        }

    }
}
