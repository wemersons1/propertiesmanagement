<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\CompanyPlan;
use App\Models\Employee;
use App\Models\RoleUser;
use App\Models\SanctumPersonalToken;
use App\Models\Token;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class EmployeesController extends Controller
{

    public function updateMe(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'nullable|string|email',
            'cpf' => 'required|string',
            'rg' => 'nullable|string',
            'birth_date' => 'nullable|date',
            'phone1' => 'nullable|string',
            'phone2' => 'nullable|string',
            'emitting_organ' => 'required|string',
            'admission_date' => 'required|date',
            'password' => 'nullable|string',

        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $employee = Employee::find(Auth::user()->employee_id);

        if(!$employee) {
            return response()->json([
                "message" => "Funcionário não encontrado"
            ], 400);
        }

        DB::beginTransaction();

        try {

            $user = User::where('employee_id', Auth::user()->employee_id)->first();

            if($request->password && strlen($request->password)) {

                if($user) {

                    $user->password = Hash::make($request->password);

                }
            }

            $user->save();

            $employee->update($request->all());


        }catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();

        return response()->json($employee);

    }

    public function me() {

      return response()->json(Auth::user()->employee);

    }

    public function index(Request $request) {

        $employees = Employee::where('company_id', Auth::user()->company_id)->where('active', true);

        if(Helper::checkUserLogged('company')) {
            $employees = $employees->where('company_id', Auth::user()->company_id);
        }

        if($request->company_id) {
            $employees = $employees->where('company_id', $request->company_id);
        }

        if($request->name) {
            $employees = $employees->where('name', 'LIKE', '%'.$request->name.'%');
        }

        if($request->cpf) {
            $employees = $employees->where('cpf', 'LIKE', '%'.$request->cpf.'%');
        }

        if($request->rg) {
            $employees = $employees->where('rg', 'LIKE', '%'.$request->rg.'%');
        }

        if($request->email) {
            $employees = $employees->where('email', 'LIKE', '%'.$request->email.'%');
        }

        if($request->phone1) {
            $employees = $employees->where('phone1', 'LIKE', $request->phone1.'%');
        }

        if($request->all) {
            return response()->json($employees->where('active', true)->get());
        }

        if($request->all) {
            return response()->json($employees->where('active', true)->get());
        }

        return response()->json($employees->paginate());
    }

    public function show($id) {

        $employee = Employee::find($id);
        $employee['roles'] = User::where('employee_id', $id)->first()->roles;

        return response()->json($employee);
    }

    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'company_id' => 'nullable|numeric|exists:companies,id',
            'name' => 'required|string',
            'email' => 'nullable|string|email',
            'cpf' => 'required|string',
            'rg' => 'nullable|string',
            'birth_date' => 'nullable|date',
            'active' => 'required|boolean',
            'phone1' => 'nullable|string',
            'phone2' => 'nullable|string',
            'emitting_organ' => 'required|string',
            'admission_date' => 'required|date',
            'commission' => 'nullable|string',
            'password' => 'required|string',
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
                    "message" => "Quantidade máxima de usuários que seu plano disponibiliza já foi preenchida "
                ], 400);
            }
        }

        $requestTreated = $request->all();
        if(!$request->company_id) {
            $requestTreated['company_id'] = Auth::user()->company_id;
        }

        DB::beginTransaction();


        try {
            $employee = Employee::create($requestTreated);

            $user['company_id'] = Auth::user()->company_id;
            $user['name'] = $request->name;
            $user['password'] = Hash::make($request->password);
            $user['employee_id'] = $employee->id;
            $user['email'] = $request->email;

            $user = User::create($user);

            foreach ($request->roles as $role) {

                $roleTreated['user_id'] = $user->id;
                $roleTreated['role_id'] = $role['id'];

                RoleUser::create($roleTreated);

            }


        } catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();

        return response()->json($employee);
    }

    public function update(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'company_id' => 'nullable|numeric|exists:companies,id',
            'name' => 'required|string',
            'email' => 'nullable|string|email',
            'cpf' => 'required|string',
            'rg' => 'nullable|string',
            'birth_date' => 'nullable|date',
            'active' => 'required|boolean',
            'phone1' => 'nullable|string',
            'phone2' => 'nullable|string',
            'emitting_organ' => 'required|string',
            'admission_date' => 'required|date',
            'commission' => 'nullable',
            'password' => 'nullable|string',
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

        $employee = Employee::find($id);

        if(!$employee) {
            return response()->json([
                "message" => "Funcionário não encontrado"
            ], 400);
        }

        DB::beginTransaction();

        try {

            $user = User::where('employee_id', $id)->first();

            if($request->password && strlen($request->password)) {

                if($user) {

                    $user->password = Hash::make($request->password);

                }
            }

            $user->email = $request->email;

            RoleUser::where('user_id', $user->id)->delete();

            foreach ($request->roles as $role) {
                RoleUser::create([
                    "role_id" => $role['id'],
                    "user_id" => $user->id
                ]);
            }

            $user->save();

            $employee->update($request->all());

            if(!$request->active) {
                SanctumPersonalToken::where('name', $employee->email)->delete();
            }


        }catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();

        return response()->json($employee);
    }

    public function destroy($id) {

        $employee = Employee::findOrFail($id);
        $employee->update(["active" => false]);

        User::where('employee_id', $id)->update(["active" => false]);

        SanctumPersonalToken::where('name', $employee->email)->delete();

        return response()->json([
            "message" => "Funcionário deletado com sucesso!"
        ]);
    }
}
