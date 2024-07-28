<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class SessionController extends Controller
{
    public function login(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)
            ->where('active', true)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {

            return response()->json([
                "message" => "Usuários ou senha inválidos"
            ], 400);
        }

        $token =  $user->createToken($request->email)->plainTextToken;

        return response()->json([
            "token" => $token,
            "user" => $user
        ]);

    }

    public function logout(Request $request) {

        $request->user()->currentAccessToken()->delete();

        return response()->json([
            "message" => "Usuário deslogado com sucesso"
        ]);

    }
}
