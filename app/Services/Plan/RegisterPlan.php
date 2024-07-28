<?php

namespace App\Services\Plan;

use App\Models\CompanyPlan;
use App\Models\Plan;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RegisterPlan{

    public function execute($request) {

        DB::beginTransaction();

        try {
            $companyPlan = CompanyPlan::where('company_id', Auth::user()->company_id)
            ->where('active', true)->first();

            CompanyPlan::where('company_id', Auth::user()->company_id)
            ->update([
                "active" => false
            ]);

            $plan = Plan::find($request->plan_id);

            if($companyPlan) {

                $diferencesInMonths = (int)(strtotime($companyPlan->date_limit) - strtotime(date('Y-m-d'))) / (60 * 60 * 24);

                if($diferencesInMonths > 0) {
                    $dateLimit = date('Y-m-d', strtotime("+{$plan->category->quantity_months} months"));
                    $dateLimit = date('Y-m-d', strtotime("+{$diferencesInMonths} days", strtotime($dateLimit)));
                }else {

                    $dateLimit = date('Y-m-d', strtotime("+{$plan->category->quantity_months} months"));
                }

            } else {

                $dateLimit = date('Y-m-d', strtotime("+{$plan->category->quantity_months} months"));
            }

            $companyPlan = CompanyPlan::create([
                "company_id" => Auth::user()->company_id,
                "date_limit" => $dateLimit,
                "plan_id" => $request->plan_id,
                "active" => true,
                "quantity_months" => $plan->category->quantity_months
            ]);
        }catch(\Exception $e) {
            DB::rollBack();
            throw new Exception($e->getMessage());
        }

        DB::commit();

        return $companyPlan;
    }

}
