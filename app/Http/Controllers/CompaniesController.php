<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\CompanyAddress;
use App\Models\CompanyPlan;
use App\Models\ConfigSystem;
use App\Models\PaymentForm;
use App\Models\Plan;
use App\Models\TaxesPaymentForm;
use Database\Seeders\PaymentFormSeeder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class CompaniesController extends Controller
{
    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string',
            'cnpj' => 'required|string',
            'representative' => 'required|string',
            'phone1' => 'required|string',
            'phone2' => 'required|string',
            'zip_code' => 'required|string',
            'state' => 'required|string',
            'city' => 'required|string',
            'neighborhood' => 'required|string',
            'street' => 'required|string',
            'complement' => 'nullable|string',
            'number' => 'required|string',
            'logo_image' => 'required',
            'seller_apply_discount' => 'required',
            'have_advisor' => 'nullable',
            'plan_id' => 'required|exists:plans,id'
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

            $taxes = TaxesPaymentForm::create($taxes);

            $address = CompanyAddress::create($request->all());
            $requestAll = $request->all();
            $requestAll['logo_image'] = $request->logo_image->store('logo');
            $requestAll['address_id'] = $address->id;
            $requestAll['taxes_id'] = $taxes->id;
            $requestAll['complement'] = $request->complement ?? '';
            $company = Company::create($requestAll);
            $plan = Plan::find($request->plan_id);

            CompanyPlan::create([
                "plan_id" => $request->plan_id,
                "company_id" => $company->id,
                "active" => true,
                "quantity_months" => $plan->quantity_months,
                "date_limit" => date('Y-m-d', strtotime("+{$request->quantity_months} months"))
            ]);

            $config['company_id'] = $company->id;
            $config['seller_apply_discount'] = $request->seller_apply_discount === "1";
            $config['have_advisor'] = $request->have_advisor === '1';

            ConfigSystem::create($config);

        }catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();

        return response()->json($company);

    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string',
            'cnpj' => 'required|string',
            'representative' => 'required|string',
            'phone1' => 'required|string',
            'phone2' => 'required|string',
            'zip_code' => 'required|string',
            'state' => 'required|string',
            'city' => 'required|string',
            'neighborhood' => 'required|string',
            'street' => 'required|string',
            'complement' => 'nullable|string',
            'number' => 'required|string',
            'logo_image' => 'nullable',
            'have_advisor' => 'nullable|boolean',
            'seller_apply_discount' => 'nullable',
            'plan_id' => 'required|exists:plans,id'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $company = Company::find($id);

        $requestAll = $request->all();

        if($request->logo_image) {
            Storage::delete($company->logo_image);
            $requestAll['logo_image'] = $request->logo_image->store('logo');

        }

        if($company->address_id) {

            $address = CompanyAddress::find($company->address_id);
            $address->update($request->all());

        } else {

            $address = CompanyAddress::create($request->all());
            $requestAll['address_id'] = $address->id;

        }

        $companyPlan = CompanyPlan::where('company_id', $id)
        ->where('active', true)->first();

        if($companyPlan) {

            if((int)$companyPlan->plan_id !== (int)$request->plan_id) {

                CompanyPlan::where('company_id', $id)
                ->update(["active" => false]);
                $plan = Plan::find($request->plan_id);

                CompanyPlan::create([
                    "plan_id" => $request->plan_id,
                    "company_id" => $company->id,
                    "active" => true,
                    "quantity_months" => $plan->quantity_months,
                    "date_limit" => date('Y-m-d', strtotime("+{$request->quantity_months} months"))
                ]);
            }

        } else {

            CompanyPlan::create([
                "plan_id" => $request->plan_id,
                "company_id" => $company->id,
                "active" => true,
                "date_limit" => date('Y-m-d', strtotime("+{$request->quantity_months} months"))
            ]);

        }

        $requestAll['complement'] = $request->complement ?? '';
        $company->update($requestAll);

        $configSystem = ConfigSystem::where('company_id', $company->id)->where('active', 1)->first();

        $config['company_id'] = $company->id;
        $config['seller_apply_discount'] = $request->seller_apply_discount === "1";
        $config['have_advisor'] = $request->have_advisor === "1";

        $configSystem->update($config);

        return response()->json($company);

    }

    public function show($id) {

        $company = Company::find($id);

        return response()->json($company);
    }

    public function index(Request $request) {

        $companies = Company::where('active', 1);

        if($request->name) {

            $companies = $companies->where('name', 'LIKE', '%'.$request->name.'%');

        }

        if($request->email) {

            $companies = $companies->where('email', 'LIKE', '%'.$request->email.'%');

        }

        if($request->all) {

            return response()->json(Company::all());
        }

        return response()->json($companies->paginate());

    }

    public function destroy(Request $request, $id) {

        $company = Company::find($id);

        if(Auth::user()->role->name !== 'master' || !$company) {

            return response()->json([
                "message" => "Usuário não encontrado"
            ], 400);
        }

        $company->update(["active" => false]);

        return response()->json([
            "message" => "Empresa excluída com sucesso"
        ]);
    }
}
