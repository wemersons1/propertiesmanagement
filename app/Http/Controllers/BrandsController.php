<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\ProductSize;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class BrandsController extends Controller
{
    public function getSizes(Request $request) {

        $validator = Validator::make($request->all(), [
            'brand_id' => 'required|string',
        ]);

        if ($validator->fails()) {
            $errorValidator = $validator->messages();
            return response()->json([
                'message' => $errorValidator->first(),
                'error' => 'Dados inválidos'
            ], 400);
        }

        $productSize = ProductSize::where('brand_id', $request->brand_id)->get();

        return response()->json($productSize);

    }

    public function store(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'nullable|string',
            'active' => 'required|boolean',
            'sizes' => 'required',
            'sizes.*.name'
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

            $brand = Brand::create($requestAll);

            foreach ($request->sizes as $size) {

                $product['company_id'] = Auth::user()->company_id;
                $product['brand_id'] = $brand->id;
                $product['name'] = $size['name'];

                ProductSize::create($product);

            }

        }catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();


        return response()->json($brand);

    }

    public function update(Request $request, $id) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'description' => 'nullable|string',
            'active' => 'required|boolean',
            'sizes' => 'required',
            'sizes.*.name'
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

            $brand = Brand::find($id);

            $brand->update($requestAll);

            ProductSize::where('brand_id', $id)->update(['active' => false]);

            foreach ($request->sizes as $size) {

                $product = ProductSize::find($size['id'] ?? '');

                $productTreated['company_id'] = Auth::user()->company_id;
                $productTreated['brand_id'] = $brand->id;
                $productTreated['name'] = $size['name'];
                $productTreated['active'] = true;

                if($product) {

                    $product->update($productTreated);

                } else {

                    ProductSize::create($productTreated);

                }

            }

        }catch (\Exception $e) {

            DB::rollBack();

            return response()->json([
                "message" => $e->getMessage()
            ], 400);
        }

        DB::commit();

        return response()->json($brand);

    }

    public function show($id) {

        $brand = Brand::find($id);

        return response()->json($brand);
    }

    public function index(Request $request) {

        $brands = Brand::where('active', 1)->where('company_id', Auth::user()->company_id);

        if($request->name) {

            $brands = $brands->where('name', 'LIKE', '%'.$request->name.'%');

        }

        if($request->all) {

            return response()->json($brands->get());
        }


        return response()->json($brands->paginate());

    }

    public function destroy(Request $request, $id) {

        $brand = Brand::find($id);

        $brand->update(["active" => false]);

        return response()->json([
            "message" => "Marca excluída com sucesso"
        ]);

    }
}
