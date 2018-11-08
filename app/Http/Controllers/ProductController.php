<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use App\Product;
use Illuminate\Http\Request;
use Intervention\Image\Image;
use JWTAuth;

class ProductController extends Controller
{
    public function insert(Request $request)
    {
        try {

            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            } else {
                if ($request->get('file')) {
                    $productname=$request->get('productname');
                    
                    $unit_id=$request->get('unit_id');
                    $type=$request->get('type');
                    $brand_id=$request->get('brand_id');
                    $category_id=$request->get('category_id');
                    $sub_category_id=$request->get('sub_category_id');
                    $image = $request->get('file');
                    $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                    \Image::make($request->get('file'))->save(public_path('storage/images') . $name);
                    $product = new Product;
                    $product->filename = $name;
                    $product->name=$productname;
                    $product->unit_id=$unit_id;
                    $product->brand_id=$brand_id;
                    $product->category_id=$category_id;
                    $product->type=$type;
                    $product->sub_category_id=$sub_category_id;
                    $product->business_id=1;
                    $product->created_by=$user->id;
                    $product->save();
                    //$url = Storage::url('1541345242.jpeg');
                    return response()->json(['Successfully added'=>$product], 200);

            }}
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent'], $e->getStatusCode());

        }

    }
    public function getProduct(Request $request)
    {
        try {

            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            } else {
                    $product= new Product;
                    $list_product=Product::where('business_id',$request->get('business_id'))->get();
                    return response()->json([$list_product], 200);

            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent'], $e->getStatusCode());

        }

    }
}
