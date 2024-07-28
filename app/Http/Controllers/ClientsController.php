<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Brand;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ClientsController extends Controller
{
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
        $requestAll['user_id'] = Auth::user()->id;

        $client = Client::create($requestAll);

        return response()->json($client);

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

        $client = Client::find($id);

        $client->update($requestAll);

        return response()->json($client);

    }

    public function show($id) {

        $client = Client::find($id);

        return response()->json($client);
    }

    public function index(Request $request) {

        $clients = Client::where('active', 1)->where('company_id', Auth::user()->company_id);

        if($request->name) {

            $clients = $clients->where('name', 'LIKE', '%'.$request->name.'%');

        }

        if($request->phone) {

            $clients = $clients->where('phone1', 'LIKE', $request->phone."%");

        }

        if($request->all) {

            return response()->json($clients->orderBy('id', 'desc')->get());
        }

        return response()->json($clients->paginate());

    }

    public function destroy($id) {

        $client = Client::find($id);

        if(!$client) {

            return response()->json([
                "message" => "Cliente não encontrado"
            ], 400);
        }

        $client->update(["active" => false]);

        return response()->json([
            "message" => "Cliente excluída com sucesso"
        ]);
    }
}
