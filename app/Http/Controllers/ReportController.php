<?php

namespace App\Http\Controllers;

use App\Services\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReportController extends Controller
{
    public function reportSeller(Request $request) {

        $validator = Validator::make($request->all(), [
            'from' => 'required|date',
            'to' => 'required|date'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $report = new Report($request->from, $request->to);

        $report = $report->seller();

        return response()->json($report);

    }

    public function reportClerk(Request $request) {

        $validator = Validator::make($request->all(), [
            'from' => 'required|date',
            'to' => 'required|date'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $report = new Report($request->from, $request->to);

        $report = $report->clerk();

        return response()->json($report);

    }

    public function reportAdmin(Request $request) {

        $validator = Validator::make($request->all(), [
            'from' => 'required|date',
            'to' => 'required|date'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $report = new Report($request->from, $request->to);

        $report = $report->admin();

        return response()->json($report);

    }


}
