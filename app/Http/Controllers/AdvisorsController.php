<?php

namespace App\Http\Controllers;

use App\Models\Advisor;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AdvisorsController extends Controller
{

    public function me(Request $request) {

        $advisors = Advisor::where('active', true)->where('employee_id', Auth::user()->employee_id);

        if($request->all) {

            return response()->json($advisors->get());
        }

        return response()->json($advisors->paginate());

    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'nullable|string',
            'document' => 'nullable|string',
            'rg' => 'nullable|string',
            'phone1' => 'nullable|string',
            'active' => 'nullable|boolean',
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $requestAll = $request->all();
        $requestAll['company_id'] = Auth::user()->company_id;

        $advisor = Advisor::create($requestAll);

        return response()->json($advisor);

    }

    public function update(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'nullable|string',
            'document' => 'nullable|string',
            'rg' => 'nullable|string',
            'phone1' => 'nullable|string',
            'active' => 'nullable|boolean',
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $requestAll = $request->all();
        $requestAll['company_id'] = Auth::user()->company_id;
        $requestAll['employee_id'] = Auth::user()->employee->id;

        $advisor = Advisor::find($id);

        $advisor->update($requestAll);

        return response()->json($advisor);

    }

    public function show($id) {

        $advisor = Advisor::find($id);

        return response()->json($advisor);
    }

    public function index(Request $request) {

        $advisors = Advisor::where('active', 1)->where('company_id', Auth::user()->company_id);

        if($request->name) {

            $advisors = $advisors->where('name', 'LIKE', '%'.$request->name.'%');

        }

        if($request->phone) {

            $advisors = $advisors->where('phone1', 'LIKE', $request->phone.'%');

        }

        if($request->all) {

            return response()->json($advisors->orderBy('id', 'desc')->get());
        }

        return response()->json($advisors->paginate());

    }

    public function destroy($id) {

        $advisor = Advisor::find($id);

        $advisor->update(["active" => false]);

        return response()->json([
            "message" => "Assessor excluído com sucesso"
        ]);
    }
}
