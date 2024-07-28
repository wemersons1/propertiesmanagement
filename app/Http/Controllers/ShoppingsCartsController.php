<?php

namespace App\Http\Controllers;

use App\Models\ChartProduct;
use App\Models\Expense;
use App\Models\Payment;
use App\Models\Product;
use App\Models\ProductConfig;
use App\Models\ShoppingCart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ShoppingsCartsController extends Controller
{

    public function changePayment(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'payments_types' => 'required',
            'payments_types.*.payment_form_id' => 'required|exists:payments_forms,id',
            'payments_types.*.value' => 'required',
            'payments_types.*.installments' => 'nullable',
            'payments_types.*.value_installment' => 'nullable',
            'payments_types.*.taxes' => 'nullable',
            'discount' => 'nullable',
            'date_payment' => 'required|date',
            'advisor_id' => 'nullable|exists:advisors,id'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }


        DB::beginTransaction();

        $cart = ShoppingCart::find($id);

        try {

            $cart->advisor_id = $request->advisor_id;
            $cart->discount = $request->discount;
            $cart->date_paid = $request->date_payment. date(' H:i:s');
            $cart->save();

            foreach(Payment::where('cart_id', $id)->where('active', true)->get() as $payment) {

                $paymentExpense = Expense::where('payment_id', $payment->id)->first();

                if($paymentExpense) {

                    $paymentExpense->active = false;
                    $paymentExpense->save();

                }

                $payment->active = false;
                $payment->save();

            }

            if(count($request->payments_types) > 1) {

                $description = "Pagamento parcial, Pedido N° ";

            } else {

                $description = "Pagamento total, Pedido N° ";

            }

            foreach ($request->payments_types as $payment) {

                $paymentTreated['payment_form_id'] = $payment['payment_form_id'];
                $paymentTreated['tax'] = $payment['taxes'];
                $paymentTreated['installment_value'] = $payment['value_installment'];
                $paymentTreated['installments'] = $payment['installments'];
                $paymentTreated['value'] = $payment['value'];
                $paymentTreated['cart_id'] = $id;
                $paymentTreated['clerk_id'] = Auth::user()->employee->id ?? null;
                $paymentTreated['date'] = $request->date_payment.date(' H:i:s');
                $paymentTreated['company_id'] = Auth::user()->company_id;
                $paymentTreated['client_id'] = $cart->client_id;
                $paymentTreated['active'] = true;

                $payment = Payment::create($paymentTreated);

                $paymentTreated = null;
                $paymentTreated['payment_id'] = $payment->id;
                $paymentTreated['active'] = true;
                $paymentTreated['date_payment'] = $payment->date;
                $paymentTreated['paid'] = true;
                $paymentTreated['company_id'] = $payment->company_id;
                $paymentTreated['payment_form_id'] = $payment->payment_form_id;
                $paymentTreated['expenses_type_id'] = 1;//Entrada
                $paymentTreated['value'] = $payment->value;
                $paymentTreated['description'] = "{$description} {$id}" ;

                Expense::create($paymentTreated);

            }

            $chartProducts = ChartProduct::where('cart_id', $id)
                ->where('canceled', false)
                ->get();

            $request->discount = $request->discount ?? 0;

            foreach ($chartProducts as $item) {

                $item->advisor_id = $request->advisor_id;
                $item->discount_by_product = round($request->discount/count($chartProducts), 2);
                $item->save();
            }


        }catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();

    }

    public function receive($id) {
        $cart = ShoppingCart::find($id);

        if($cart) {

            $cart->status_object_id = 1;//RECEIVED
            $cart->expedition_id = Auth::user()->employee_id;//RECEIVED

            $cart->save();

        } else {

            return response()->json([
                "message" => "Carrinho não encontrado"
            ],400);
        }

        return response()->json($cart);
    }

    public function cancel($id) {

        DB::beginTransaction();

        try {
            $cart = ShoppingCart::find($id);

            if($cart) {

                Payment::where('cart_id', $id)->update(["active" => false]);

                $cart->clerk_id = Auth::user()->employee->id;
                $cart->status_id = 3;//CANCELED
                $cart->save();

            } else {

                return response()->json([
                    "message" => "Carrinho não encontrado"
                ],400);
            }
        }catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();

        return response()->json($cart);

    }

    public function approve(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'payments_types' => 'required',
            'payments_types.*.payment_form_id' => 'required|exists:payments_forms,id',
            'payments_types.*.value' => 'required',
            'payments_types.*.installments' => 'nullable',
            'payments_types.*.value_installment' => 'nullable',
            'payments_types.*.taxes' => 'nullable',
            'products' => 'required',
            'products.*.product_config_id' => 'required|exists:products_configs,id',
            'products.*.price_final' => 'required',
            'products.*.quantity' => 'required',
            'date_payment' => 'required|date',
            'advisor_id' => 'nullable|exists:advisors,id'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        DB::beginTransaction();

        $cart = ShoppingCart::find($id);

        if(count($request->payments_types) > 1) {

            $description = "Pagamento parcial, Pedido N° ";

        } else {

            $description = "Pagamento total, Pedido N° ";

        }

        try {

            foreach ($request->payments_types as $payment) {

                $paymentTreated['payment_form_id'] = $payment['payment_form_id'];
                $paymentTreated['tax'] = $payment['taxes'];
                $paymentTreated['installment_value'] = $payment['value_installment'];
                $paymentTreated['installments'] = $payment['installments'];
                $paymentTreated['value'] = $payment['value'];
                $paymentTreated['cart_id'] = $id;
                $paymentTreated['clerk_id'] = Auth::user()->employee->id ?? null;
                $paymentTreated['date'] = $request->date_payment.date(' H:i:s');
                $paymentTreated['company_id'] = Auth::user()->company_id;
                $paymentTreated['client_id'] = $cart->client_id;
                $paymentTreated['active'] = true;

                $payment = Payment::create($paymentTreated);

                $paymentTreated = null;
                $paymentTreated['payment_id'] = $payment->id;
                $paymentTreated['active'] = true;
                $paymentTreated['date_payment'] = $payment->date;
                $paymentTreated['paid'] = true;
                $paymentTreated['company_id'] = $payment->company_id;
                $paymentTreated['payment_form_id'] = $payment->payment_form_id;
                $paymentTreated['expenses_type_id'] = 1;//Entrada
                $paymentTreated['value'] = $payment->value;
                $paymentTreated['description'] = "{$description} {$id}" ;

                Expense::create($paymentTreated);

            }


            ChartProduct::where('cart_id', $id)->update(["canceled" => true]);

            foreach ($request->products as $product) {

                $productTreated = [];

                $productConfigCurrent = ProductConfig::find($product['product_config_id']);

                $productConfigCurrent->quantity = (int)$productConfigCurrent->quantity - (int)$product['quantity'];
                $productConfigCurrent->save();

                $chartProduct = ChartProduct::where('cart_id', $id)
                    ->where('product_config_id', $product['product_config_id'])->first();

                $productTreated['quantity'] = $product['quantity'];
                $productTreated['price_final'] = $product['price_final'];
                $productTreated['canceled'] = false;
                $productTreated['advisor_id'] = $request->advisor_id;

                if($chartProduct) {

                    $chartProduct->update($productTreated);

                } else {


                    $productReference = Product::whereHas('configs', function($query)use($product) {
                        $query->where('id', $product['product_config_id']);
                    })->first();


                    $productTreated['advisor_id'] = $request->advisor_id;
                    $productTreated['name'] = $productReference->name;
                    $productTreated['price'] = ProductConfig::find($product['product_config_id'])->price;
                    $productTreated['commission_seller'] = $cart->commission_seller;
                    $productTreated['cart_id'] = $id;
                    $productTreated['advisor_id'] = $cart->advisor_id;
                    $productTreated['product_config_id'] = $product['product_config_id'];
                    $productTreated['seller_id'] = $cart->employee_id;
                    $productTreated['price_cost'] = ProductConfig::find($product['product_config_id'])->price_cost;
                    ChartProduct::create($productTreated);

                }
            }


            $chartProducts = ChartProduct::where('cart_id', $id)
                ->where('canceled', false)
                ->get();

            $request->discount = $request->discount ?? 0;

            foreach ($chartProducts as $item) {

                $item->discount_by_product = round($request->discount/count($chartProducts), 2);
                $item->save();
            }

            if($cart) {

                $cart->advisor_id = $request->advisor_id;
                $cart->discount = $request->discount;
                $cart->status_id = 1;//PAID
                $cart->clerk_id = Auth::user()->employee->id ?? null;
                $cart->date_paid = $request->date_payment.date(' H:i:s');

                $cart->save();

            } else {

                return response()->json([
                    "message" => "Carrinho não encontrado"
                ],400);
            }

        }catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();

        return response()->json($cart);

    }

    public function me(Request $request) {

        $orders = new ShoppingCart();

        $orders = $orders->where('employee_id', Auth::user()->employee->id)
            ->where('active', true)->orderByDesc('id');

        if($request->pending) {
            $orders = $orders->where('status_id', 2);
        }

        return response()->json($orders->paginate());

    }

    public function getItems(Request $request) {

        $validator = Validator::make($request->all(), [
            'products' => 'required|array',
            'products.*.id' => 'required|exists:products_configs,id',
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $productsIds = collect($request->products)->pluck('id');

        $products = Product::whereHas('configs', function($query)use($productsIds){
            $query->whereIn('id', $productsIds);
        })->get();

        return response()->json($products);

    }

    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'discount' => 'nullable',
            'client_id' => 'required|numeric|exists:clients,id',
            'advisor_id' => 'nullable|numeric|exists:advisors,id',
            'payment_form_id' => 'required|exists:payments_forms,id',
            'installments' => 'required|numeric',
            'products' => 'required|array',
            'products.*.id' => 'numeric|exists:products_configs,id',
            'products.*.quantity' => 'required|numeric',
            'products.*.price_final' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        DB::beginTransaction();

        try {

            $requestAll = $request->all();
            $requestAll['employee_id'] = Auth::user()->employee->id;
            $requestAll['company_id'] = Auth::user()->company_id;
            $requestAll['status_id'] = 2;//PENDING
            $requestAll['discount'] = $request->discount ?? 0;
            $requestAll['status_object_id'] = 3;//PENDENTE
            $requestAll['commission_seller'] = Auth::user()->employee->commission;
            $requestAll['advisor_id'] = $request->advisor_id;
            $requestAll['verified_receipt_client'] = false;
            $requestAll['verified_receipt_advisor'] = false;
            $requestAll['active'] = true;

            $shoppingCart = ShoppingCart::create($requestAll);

            foreach ($request->products as $product) {

                $productCurrent = ProductConfig::find($product['id']);
                $productSearched = Product::find($productCurrent->product_id);
                $chartProduct['product_config_id'] = $product['id'];
                $chartProduct['cart_id'] = $shoppingCart->id;
                $chartProduct['quantity'] = $product['quantity'];
                $chartProduct['price'] = $productCurrent->price;
                $chartProduct['name'] = $productSearched->name;
                $chartProduct['price_final'] = $product['price_final'];
                $chartProduct['advisor_id'] = $request->advisor_id;
                $chartProduct['seller_id'] = Auth::user()->employee->id;
                $chartProduct['commission_seller'] = Auth::user()->employee->commission;
                $chartProduct['price_cost'] = $productCurrent->price_cost;
                $chartProduct['canceled'] = false;

                $productCurrent->save();

                ChartProduct::create($chartProduct);
            }


        }catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();

        return response()->json($shoppingCart);

    }

    public function update(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'discount' => 'nullable',
            'client_id' => 'required|numeric|exists:clients,id',
            'advisor_id' => 'nullable|numeric|exists:advisors,id',
            'payment_form_id' => 'required|exists:payments_forms,id',
            'installments' => 'required|numeric',
            'products' => 'required|array',
            'products.*.id' => 'numeric|exists:products_configs,id',
            'products.*.quantity' => 'required|numeric',
            'products.*.price_final' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        DB::beginTransaction();

        try {

            $shoppingCart = ShoppingCart::find($id);

            if($shoppingCart && (int)$shoppingCart->status_id === 1) {

                return response()->json([

                    "message" => "Carrinho já aprovado pelo caixa"

                ], 400);

            }

            $requestAll = $request->all();
            $requestAll['employee_id'] = Auth::user()->employee->id;
            $requestAll['company_id'] = Auth::user()->company_id;
            $requestAll['status_id'] = 2;//PENDING
            $requestAll['discount'] = $request->discount ?? 0;
            $requestAll['status_object_id'] = 3;//PENDENTE
            $requestAll['commission_seller'] = Auth::user()->employee->commission;
            $requestAll['advisor_id'] = $request->advisor_id;
            $requestAll['verified_receipt_client'] = false;
            $requestAll['verified_receipt_advisor'] = false;
            $requestAll['active'] = true;

            $shoppingCart->update($requestAll);

            ChartProduct::where('cart_id', $id)->update(["canceled" => true]);

            foreach ($request->products as $product) {

                $productCurrent = ProductConfig::find($product['id']);
                $productSearched = Product::find($productCurrent->product_id);
                $chartProduct['product_config_id'] = $product['id'];
                $chartProduct['cart_id'] = $id;
                $chartProduct['quantity'] = $product['quantity'];
                $chartProduct['price'] = $productCurrent->price;
                $chartProduct['name'] = $productSearched->name;
                $chartProduct['price_final'] = $product['price_final'];
                $chartProduct['advisor_id'] = $request->advisor_id;
                $chartProduct['seller_id'] = Auth::user()->employee->id;
                $chartProduct['commission_seller'] = Auth::user()->employee->commission;
                $chartProduct['price_cost'] = $productCurrent->price_cost;
                $chartProduct['canceled'] = false;

                $productCurrent->save();

                ChartProduct::create($chartProduct);
            }


        }catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();

        return response()->json($shoppingCart);

    }

    public function show($id) {

        $shoppingCart = ShoppingCart::find($id);

        return response()->json($shoppingCart);
    }

    public function index(Request $request) {

        $shoppingCart = ShoppingCart::where('company_id', Auth::user()->company_id)->where('active', true);

        if($request->type === 'expedition') {

            $shoppingCart = $shoppingCart->where('status_id', 1);

        }

        if($request->order_id) {

            $shoppingCart = ShoppingCart::where('company_id', Auth::user()->company_id)->where('id', $request->order_id);

            $total = ShoppingCart::calculateTotal($shoppingCart->get());

            return response()->json([
                "data" => $shoppingCart->orderBy('updated_at', 'DESC')->paginate(),
                "total" => $total
            ]);

        }

        if($request->from) {

            if((int)$request->status_id === 1) {

                $shoppingCart = $shoppingCart->where('date_paid',  '>=', $request->from.' 00:00:00');

            } else {

                $shoppingCart = $shoppingCart->where('created_at', '>=', $request->from.' 00:00:00');

            }

        }

        if($request->to) {


            if((int)$request->status_id === 1) {

                $shoppingCart = $shoppingCart->where('date_paid', '<=', $request->to.' 23:59:59');

            } else {

                $shoppingCart = $shoppingCart->where('created_at', '<=', $request->to.' 23:59:59');

            }

        }

        if($request->status_id) {

            $shoppingCart = $shoppingCart->where('status_id', $request->status_id);
        }

        if($request->seller_id) {

            $shoppingCart = $shoppingCart->where('employee_id', $request->seller_id);
        }

        if($request->advisor_id) {

            $shoppingCart = $shoppingCart->where('advisor_id', $request->advisor_id);
        }

        if($request->payment_form_id) {

            if((int)$request->status_id !== 2 && (int)$request->status_id !== 3) {

                $shoppingCart = $shoppingCart->where(function($query)use($request) {
                    $query->whereHas('payments', function($query)use($request){
                        $query->where('payment_form_id', $request->payment_form_id);
                    });
                });

            } else {

                $shoppingCart = $shoppingCart->where('payment_form_id', $request->payment_form_id);

            }

        }

        if($request->client_id) {

            $shoppingCart = $shoppingCart->where('client_id', $request->client_id);

        }

        $total = ShoppingCart::calculateTotal($shoppingCart->get());

        return response()->json([
            "data" => $shoppingCart->orderBy('updated_at', 'DESC')->paginate(),
            "total" => $total
        ]);

    }

    public function destroy(Request $request, $id) {

        $shoppingCart = ShoppingCart::find($id);

        DB::beginTransaction();

        try {

            if($shoppingCart->status->name === 'paid') {

                $products = ChartProduct::where('cart_id', $id)->where('canceled', false)->get();

                foreach ($products as $product) {

                    $config = ProductConfig::find($product->product_config_id);
                    $config->quantity = (int)$config->quantity + (int)$product->quantity;
                    $config->save();

                }

            }

            $shoppingCart->update(["active" => false]);

            foreach(Payment::where('cart_id', $id)->where('active', true)->get() as $payment) {

                $paymentExpense = Expense::where('payment_id', $payment->id)->first();

                if($paymentExpense) {

                    $paymentExpense->active = false;
                    $paymentExpense->save();

                }

                $payment->active = false;
                $payment->save();

            }

        }catch (\Exception $e) {

            return response()->json([
                "message" => $e->getMessage()
            ], 400);

        }

        DB::commit();


        return response()->json([
            "message" => "Carrinho de compra excluído com sucesso"
        ]);
    }
}
