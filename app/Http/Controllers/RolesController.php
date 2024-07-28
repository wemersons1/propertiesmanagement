<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RolesController extends Controller
{
    public function index(Request $request) {

        if($request->type === 'master') {
            return response()->json(Role::where('name', 'master')->orWhere('name', 'admin')->where('name', '<>', 'client')->get());
        }

        return response()->json(Role::where('name', '<>', 'master')->where('name', '<>', 'client')->get());
    }
}
