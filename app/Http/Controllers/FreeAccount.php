<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\CompanyAddress;
use App\Models\CompanyPlan;
use App\Models\ConfigSystem;
use App\Models\Plan;
use App\Models\TaxesPaymentForm;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class FreeAccount extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'cnpj' => 'required|string',
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

            if(!Auth::user()->company) {

                $taxes['debit'] = 0;
                $taxes['credit1x'] = 0;
                $taxes['credit2x'] = 0;
                $taxes['credit3x'] = 0;
                $taxes['credit4x'] = 0;
                $taxes['credit5x'] = 0;
                $taxes['credit6x'] = 0;
                $taxes['credit7x'] = 0;
                $taxes['credit8x'] = 0;
                $taxes['credit9x'] = 0;
                $taxes['credit10x'] = 0;
                $taxes['credit11x'] = 0;
                $taxes['credit12x'] = 0;
                $taxes['credit12x'] = 0;

                $taxes = TaxesPaymentForm::create($taxes);

                $requestAll['taxes_id'] = $taxes->id;
            }

            if(!Auth::user()->company_id) {
                $company = Company::create($requestAll);

            } else {
                $company = Company::find(Auth::user()->company_id);
            }

            $company = Company::find($company->id);

            $user = User::find(Auth::user()->id);

            if(!$user->company_id) {

                $user->company_id = $company->id;
                $user->save();
            }

            CompanyPlan::where('company_id', $company->id)->update(['active' => false]);
            CompanyPlan::create([
                "plan_id" => 1,
                "company_id" => $company->id,
                "active" => true,
                "quantity_months" => 1,
                "date_limit" => date('Y-m-d', strtotime("+20 days"))
            ]);

            $config['active'] = true;
            $config['company_id'] = $company->id;
            $config['seller_apply_discount'] = true;
            $config['have_advisor'] = true;

            ConfigSystem::create($config);

            $company->used_free_plan = true;
            $company->save();

            $user = User::find(Auth::user()->id);

        }catch(\Exception $e) {

            return response()->json([
                "message" => $e->getMessage()
            ], 400);

            DB::rollBack();
        }

        DB::commit();

        return response()->json($user);
    }
}
