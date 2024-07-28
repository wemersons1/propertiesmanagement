<?php

namespace App\Http\Controllers;

use App\Models\PaymentEmployeeAdvisor;
use App\Models\ShoppingCart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ReceiptsController extends Controller
{
    public function change(Request $request) {

        $validator = Validator::make($request->all(), [
            'payment_id' => 'nullable|exists:payments_employees_advisors,id',
            'order_id' => 'nullable|exists:shopping_carts,id',
            'type' => 'required|in:client,advisor,advisor_seller'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }


        if($request->type === 'client' || $request->type === 'advisor') {

            $order = ShoppingCart::find($request->order_id);


            if(!$order) {

                return response()->json([
                    "message" => "Pedido não encontrado"
                ], 400);
            }

            switch ($request->type) {

                case 'client':
                    $order->verified_receipt_client = true;
                    break;
                default:
                    $order->verified_receipt_advisor = true;

            }

            $order->save();


            return response()->json($order);

        }

        if($request->type === 'advisor_seller') {


            $payment = PaymentEmployeeAdvisor::find($request->payment_id);

            if(!$payment) {

                return response()->json([
                    "message" => "Pagamento não encontrado"
                ], 400);
            }

            $payment->receipt_verified = true;
            $payment->save();

            return response()->json($payment);

        }


    }
}
