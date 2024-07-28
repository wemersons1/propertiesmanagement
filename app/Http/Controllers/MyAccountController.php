<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\ConfigSystem;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class MyAccountController extends Controller
{
    public function storeCompany(Request $request) {
        $validator = Validator::make($request->all(), [
            'cnpj' => 'required|string',
            'name' => 'required|string',
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        DB::beginTransaction();

        try {

            $requestAll = $request->all();
            $requestAll['email'] = Auth::user()->email;
            $requestAll['representative'] = Auth::user()->name;

            if(Auth::user()->company_id) {
                $company = Company::find(Auth::user()->company_id);
                $company->update($request->all());
                $company = Company::find(Auth::user()->company_id);
            } else{
                $company = Company::create($requestAll);
                $user = User::find(Auth::user()->id);
                $user->company_id = $company->id;
                $user->save();
            }

            $config['active'] = true;
            $config['company_id'] = $company->id;
            $config['seller_apply_discount'] = true;
            $config['have_advisor'] = true;

            ConfigSystem::create($config);

        }catch(\Exception $e) {

            DB::rollBack();

            return response()->json($e->getMessage());
        }

        DB::commit();

        return response()->json($company);
    }

    public function show() {

        $user = User::find( Auth::user()->id);

        return response()->json($user);
    }
}
