<?php

namespace App\Http\Controllers;

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
                    // return response()->json('Successfully added12312',200);
                    $image = $request->get('file');
                    $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
                    \Image::make($request->get('file'))->save(public_path('images/') . $name);
                    $fileupload = new Product;
                    $fileupload->filename = $name;
                    $fileupload->save();
                    return response()->json('Successfully added', 200);
                }

                
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent'], $e->getStatusCode());

        }

    }
    public function saveImage(Request $request)
    {
        if ($request->input('file')) {
            $image = $request->get('file');
            $name = time() . '.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
            Image::make($request->get('file'))->save(public_path('images/') . $name);
        }

        $fileupload = new \Product();
        $fileupload->filename = $name;
        $fileupload->save();
        return response()->json('Successfully added');

    }
}
