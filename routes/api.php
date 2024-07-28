<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\RolesController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CompaniesController;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\BrandsController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ColorsController;
use App\Http\Controllers\ClientsController;
use App\Http\Controllers\ShoppingsCartsController;
use App\Http\Controllers\PaymentFormsController;
use App\Http\Controllers\AdvisorsController;
use App\Http\Controllers\CategoriesPlansController;
use App\Http\Controllers\ProductSizeController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\PaymentPersonaTypeController;
use App\Http\Controllers\PaymentEmployeeAdvisorController;
use App\Http\Controllers\TransactionsController;
use App\Http\Controllers\ConfigSystemController;
use App\Http\Controllers\ReceiptsController;
use App\Http\Controllers\ExpensesController;
use App\Http\Controllers\FreeAccount;
use App\Http\Controllers\MeController;
use App\Http\Controllers\MyAccountController;
use App\Http\Controllers\PaymentPlanController;
use App\Http\Controllers\PlansController;
use App\Http\Controllers\TestController;
use App\Models\ConfigSystem;

Route::prefix('v1')->group(function() {
    Route::post('/login', [SessionController::class, 'login']);

    Route::middleware('auth:sanctum')->group(function() {

        Route::delete('/logout', [SessionController::class, 'logout']);

    });
});
