<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\File;
use App\Models\Product;
use App\Models\ProductConfig;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProductsController extends Controller
{
    public function image(Request $request) {
        $validator = Validator::make($request->all(), [
            'image' => 'nullable',
            'product_id' => 'required|exists:products,id'
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $product = Product::find($request->product_id);

        if(!$product) {

            return response()->json([
                "message" => "Produto não encontrado"
            ], 400);
        }

        if($product->image && $request->image) {

            Storage::delete($product->image);

        }

        if($request->image) {

            $product->image = $request->image->store('products');
            $product->save();
        }

        return response()->json([
            "image" => "Imagem cadastrada com sucesso"
        ]);

    }

    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'nullable|string',
            'brand_id' => 'required|exists:brands,id',
            'active' => 'required|boolean',
            'bar_code' => 'nullable|string',
            'configs' => 'required|array',
            'configs.*.size_id' => 'nullable|exists:products_sizes,id',
            'configs.*.price' => 'nullable',
            'configs.*.quantity' => 'nullable|numeric',
            'configs.*.price_cost' => 'nullable'
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
            $requestAll['company_id'] = Auth::user()->company_id;
            $requestAll['description'] = $request->description ?? '';

            $product = Product::create($requestAll);

            foreach ($request->configs as $config) {

                $productTreated['quantity'] = $config['quantity'];
                $productTreated['size_id'] = $config['size_id'];
                $productTreated['price'] = $config['price'] ?? 0;
                $productTreated['product_id'] = $product->id;
                $productTreated['company_id'] = Auth::user()->company_id;
                $productTreated['price_cost'] = $config['price_cost'];
                ProductConfig::create($productTreated);

            }

        }catch (\Exception $exception) {

            DB::rollBack();

            return response()->json([
                "message" => $exception->getMessage()
            ], 400);

        }

        DB::commit();

        return response()->json($product);

    }

    public function update(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'nullable|string',
            'brand_id' => 'required|exists:brands,id',
            'active' => 'required|boolean',
            'bar_code' => 'nullable|string',
            'configs' => 'required|array',
            'configs.*.size_id' => 'nullable|exists:products_sizes,id',
            'configs.*.price' => 'nullable',
            'configs.*.quantity' => 'nullable|numeric',
            'configs.*.price_cost' => 'nullable'
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

            $product = Product::find($id);

            $requestAll = $request->all();
            $requestAll['company_id'] = Auth::user()->company_id;

            $product->update($requestAll);

            ProductConfig::where('product_id', $id)->update(["active" => false]);

            foreach ($request->configs as $config) {

                $productTreated['quantity'] = $config['quantity'];
                $productTreated['size_id'] = $config['size_id'];
                $productTreated['price'] = $config['price'] ?? 0;
                $productTreated['product_id'] = $product->id;
                $productTreated['company_id'] = Auth::user()->company_id;
                $productTreated['active'] = true;
                $productTreated['price_cost'] = $config['price_cost'];

                $productConfig = ProductConfig::where('size_id', $config['size_id'])->where('product_id', $id)->first();

                if($productConfig) {

                    $productConfig->update($productTreated);

                } else {
                   ProductConfig::create($productTreated);
                }
            }

        }catch (\Exception $exception) {

            DB::rollBack();

            return response()->json([
                "message" => $exception->getMessage()
            ], 400);
        }

        DB::commit();

        return response()->json($product);

    }

    public function show($id) {

        $product = Product::find($id);

        return response()->json($product);
    }

    public function index(Request $request) {

        $products = Product::where('active', 1)->where('company_id', Auth::user()->company_id);

        if($request->all) {

            if($request->name) {

                $products = $products->where(function($query)use($request) {
                    $query->where('name', 'LIKE', '%'.$request->name.'%')
                        ->orWhereHas('brand', function($query)use($request){
                            $query->where('name', 'LIKE', '%'.$request->name.'%');
                        });
                });

                return response()->json($products->get());
            }

            $idProducts = DB::select('select sum(total) as total, id from (
                                            select count(*) as total, p.id from products_configs as pc
                                            inner join cart_product as cp
                                            on cp.product_config_id = pc.id
                                            inner join products as p
                                            on p.id = pc.product_id
                                            where p.active = 1
                                            and p.company_id = ?
                                            group by cp.product_config_id
                                        ) as count_configs group by count_configs.id order by total desc;', [Auth::user()->company_id]);


            $allProducts = [];

            if($idProducts && (count($idProducts) === Product::where('company_id', Auth::user()->company_id)->where('active', true)->count())) {

                foreach ( collect($idProducts)->pluck('id') as $id) {

                    $allProducts[] = Product::find($id);

                }

            } else {

                return response()->json(Product::where('company_id', Auth::user()->company_id)->where('active', true)->get());

            }

            return response()->json($allProducts);
        }

        if($request->name) {

            $products = $products->where(function($query)use($request) {
                $query->where('name', 'LIKE', '%'.$request->name.'%')
                    ->orWhereHas('brand', function($query)use($request){
                        $query->where('name', 'LIKE', '%'.$request->name.'%');
                    });
            });

        }

        if($request->category_id) {

            $products = $products->where('brand_id', $request->category_id);

        }

        return response()->json($products->paginate($request->size ?? 15));

    }

    public function destroy(Request $request, $id) {

        $product = Product::find($id);

        $product->update(["active" => false]);

        return response()->json([
            "message" => "Produto excluído com sucesso"
        ]);
    }

    public function getImagePlan(Request $request) {

        $path = $request->image;

        if (Storage::disk()->exists($path)) {

            $path = storage_path('app/'.$path);

            if (!File::exists($path)) {
                abort(404);
            }

            $file = File::get($path);
            $type = File::mimeType($path);

            $response = Response::make($file);
            $response->header("Content-Type", $type);

            return $response;
        }

        abort(404);
    }

    public function getImage(Request $request) {

        if (Storage::disk()->exists($request->image)) {

            $path = storage_path('app/'.$request->image);

            if (!File::exists($path)) {
                abort(404);
            }

            $file = File::get($path);
            $type = File::mimeType($path);

            $response = Response::make($file);
            $response->header("Content-Type", $type);

            return $response;
        }

        abort(404);

    }

}
