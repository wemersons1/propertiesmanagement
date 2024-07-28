<?php

namespace App\Http\Controllers;

use App\Models\CategoryPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriesPlansController extends Controller
{

    public function index(Request $request) {

        $categories = new CategoryPlan();

        if($request->all) {
            return response()->json(CategoryPlan::orderByDesc('id')->get());
        }

        return response()->json($categories);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'quantity_months' => 'required|integer'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $category = CategoryPlan::create($request->all());

        return response()->json($category);
    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'quantity_months' => 'required|integer'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $category = CategoryPlan::find($id);
        $category = $category->update($request->all());

        return response()->json($category);
    }

    public function show(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $category = CategoryPlan::find($id);

        return response()->json($category);
    }

    public function destroy(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $category = CategoryPlan::find($id);
        $category->delete();

        return response()->json([
            "message" => "Operação realizada com sucesso"
        ]);
    }
}
