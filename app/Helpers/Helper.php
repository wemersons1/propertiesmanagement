<?php

namespace App\Helpers;


use App\Models\User;
use Illuminate\Support\Facades\Auth;

class Helper
{
    public static function checkUserLogged(string $user)
    {

        return Auth::user()->roles()->where('name', $user)->first() ?? null;
    }

}
