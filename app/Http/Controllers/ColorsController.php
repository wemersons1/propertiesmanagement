<?php

namespace App\Http\Controllers;

use App\Models\Color;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ColorsController extends Controller
{
    public function index(Request $request) {

        if($request->all) {

            return response()->json(Color::where('company_id', Auth::user()->company_id)->get());
        }

    }
}
