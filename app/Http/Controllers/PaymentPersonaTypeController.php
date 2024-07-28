<?php

namespace App\Http\Controllers;

use App\Models\PaymentPersonaType;
use App\Services\Commission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaymentPersonaTypeController extends Controller
{

    public function commission(Request $request) {
        $validator = Validator::make($request->all(), [
            'from' => 'required|date',
            'to' => 'required|date',
            'id' => 'required|numeric',
            'type' => 'required|in:advisor,seller',
            'payment_advisor_id' => 'nullable|exists:payments_employees_advisors,id',
            'payment_seller_id' => 'nullable|exists:payments_employees_advisors,id'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $commission = new Commission($request->from, $request->to, $request->id, $request->payment_advisor_id, $request->payment_seller_id);

        if($request->type === 'advisor') {

            return response()->json($commission->advisor($request->size));

        } else {

            return response()->json($commission->seller($request->size));

        }

    }

    public function index() {

        return response()->json(PaymentPersonaType::all());

    }
}
