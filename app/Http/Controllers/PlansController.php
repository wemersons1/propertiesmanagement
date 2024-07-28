<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Plan;
use App\Models\PlanType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class PlansController extends Controller
{

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'value_by_month' => 'required',
            'value_total' => 'required',
            'quantity_users' => 'required|numeric',
            'description' => 'nullable|string',
            'active' => 'required|boolean',
            'is_free' => 'required',
            'quantity_days' => 'nullable|numeric',
            'category_id' => 'required|exists:plans_categories,id',
            'image' => 'required'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $requestAll = $request->all();
        $requestAll['path_image'] = $request->image->store('plans');

        $plan = Plan::create($requestAll);

        return response()->json($plan);

    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'value_by_month' => 'required',
            'value_total' => 'required',
            'quantity_users' => 'required|numeric',
            'description' => 'nullable|string',
            'active' => 'required',
            'is_free' => 'required',
            'quantity_days' => 'nullable|numeric',
            'category_id' => 'required|exists:plans_categories,id'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $plan = Plan::find($id);

        $requestAll = $request->all();
        if($request->image) {
            Storage::delete($plan->path_image);
            $requestAll['path_image'] = $request->image->store('plans');

        }

        $plan->update($requestAll);

        return response()->json($plan);

    }

    public function show($id) {

        $plan = Plan::find($id);

        return response()->json($plan);
    }

    public function allPlans(Request $request) {

        $plans = new Plan();

        if($request->category_id) {
            $plans = $plans->where('category_id', $request->category_id);
        }

        return response()->json($plans->where('active', true)->get());
    }

    public function index(Request $request) {

        $plans = new Plan();

        if($request->name) {
            $plans = $plans->where('name', 'LIKE', '%'.$request->name.'%');
        }

        if($request->category_id) {
            $plans = $plans->where('category_id', $request->category_id);
        }

        if($request->all) {

            if(Helper::checkUserLogged('master')) {
                return response()->json($plans->get());
            }

            return response()->json($plans->where('active', true)->get());
        }

        return response()->json($plans->paginate());

    }

    public function destroy(Request $request, $id) {

        $plan = Plan::find($id);


        $plan->update(["active" => false]);

        return response()->json([
            "message" => "Usuário excluído com sucesso"
        ]);

    }}
