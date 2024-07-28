<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Employee;
use App\Models\RoleUser;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Helpers\Helper;
use App\Models\CompanyPlan;
use App\Models\Token;

class UsersController extends Controller
{
    public function createAccount(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string|confirmed',
            'name' => 'required|string',
        ]);
        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        try {
            $requestAll = $request->all();
            $requestAll['email_verified_at'] = date('Y-m-d H:i:s');
            $requestAll['password'] = Hash::make($request->password);
            $user = User::create($requestAll);

            RoleUser::create([
                "user_id" => $user->id,
                "role_id" => 2//ADMIN
            ]);

        }catch(\Exception $e) {

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        return response()->json($user);
    }

    public function checkEmail(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'nullable|string'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $company = User::where('email', $request->email)->where('active', true)->first();

        if($company) {

            return response()->json([
                "message" => "Email já cadastrado"
            ], 400);
        }

        return response()->json([
            "message" => "Email disponível"
        ]);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|confirmed|string',
            'company_id' => 'nullable|numeric|exists:companies,id',
            'roles' => 'required|array',
            'roles.*.id' => 'required|numeric|exists:roles,id'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        if(Helper::checkUserLogged('admin')) {

            $companyPlan = CompanyPlan::where('company_id', Auth()->user()->company_id)
            ->where('active', true)->first();

            $quantityUsers = User::where('company_id', Auth::user()->company_id)
            ->where('active', true)->count();

            if((int)$quantityUsers >= (int)$companyPlan->plan->quantity_users) {

                return response()->json([
                    "message" => "Quantidade máxima de usuários"
                ], 400);
            }
        }

        DB::beginTransaction();

        try {

            $requestAll = $request->all();
            $requestAll['password'] = Hash::make($request->password);

            if(Helper::checkUserLogged('admin') ) {
                $requestAll['company_id'] = Auth::user()->company_id;
            }

             if($request->company_id) {//cadastro de usuário administrativo para loja

                 $company = Company::find($request->company_id);

                 $employee['name'] = $company->name;
                 $employee['email'] = $company->email;
                 $employee['cpf'] = "00000000000";
                 $employee['rg'] = "0000000";
                 $employee['admission_date'] = date("Y-m-d");
                 $employee['birth_date'] = date("Y-m-d");
                 $employee['phone1'] = "99999999999";
                 $employee['phone2'] = "99999999999";
                 $employee['company_id'] = $request->company_id;
                 $employee['active'] = true;

                 $employee = Employee::create($employee);

                 $requestAll['employee_id'] = $employee->id;
                 $requestAll['company_id'] = $request->company_id;

             }

            $requestAll['email_verified_at'] = date('Y-m-d H:i:s');

            $user = User::create($requestAll);

            foreach ($request->roles as $role) {
                RoleUser::create([
                    "role_id" => $role['id'],
                    "user_id" => $user->id
                ]);
            }

        } catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);

        }

        DB::commit();

        return response()->json($user);

    }

    public function update(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string',
            'password' => 'nullable|confirmed|string',
            'company_id' => 'nullable|numeric|exists:companies,id',
            'roles' => 'required|array',
            'roles.*.id' => 'required|numeric|exists:roles,id'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }


        try {

            $requestAll = $request->all();

            $user = User::find($id);

            if($request->password) {
                $requestAll['password'] = Hash::make($request->password);
            }

            $user->update($requestAll);

            RoleUser::where('user_id', $user->id)->delete();

            foreach ($request->roles as $role) {
                RoleUser::create([
                    "role_id" => $role['id'],
                    "user_id" => $user->id
                ]);
            }

        }catch (\Exception $e) {

            return response()->json([
                "message" => $e->getMessage()
            ], 400);

        }

        return response()->json($user);

    }

    public function show($id) {

        $user = User::find($id);

        return response()->json($user);
    }

    public function index(Request $request) {

        $users = User::where('active', 1);

        if(!Helper::checkUserLogged('master')) {
            $users = $users->where('company_id', Auth::user()->company_id);
        }

        if($request->name) {
            $users = $users->where('name', 'LIKE', '%'.$request->name.'%');
        }

        if($request->email) {

            $users = $users->where('email', 'LIKE', '%'.$request->email.'%');

        }

        if($request->role_name) {

            $users = $users->whereHas('roles', function($query)use($request) {
                $query->where(function($query)use($request) {
                    $query->where('name', $request->role_name)->orWhere('name', 'admin');
                });
            });
        }

        if($request->all) {

            return response()->json($users->get());
        }

        return response()->json($users->paginate());

    }

    public function destroy(Request $request, $id) {

        $user = User::find($id);

        if(Auth::user()->role->name !== 'master' || !$user) {

            return response()->json([
                "message" => "Usuário não encontrado"
            ], 400);
        }

        $user->update(["active" => false]);
        Token::where('tokenable_id', $user->id)->delete();

        return response()->json([
            "message" => "Usuário excluído com sucesso"
        ]);

    }
}
