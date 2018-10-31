<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
class ProductController extends Controller
{
    public function insert(Request $req)
    {
        try {

        if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
        }
        else{

        }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response()->json(['token_expired'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response()->json(['token_invalid'], $e->getStatusCode());

        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent'], $e->getStatusCode());

        }

         return response()->json(['data'=>'12345'],200);
    }
    public function save(Request $request)
    {
        if($request->get('file'))
       {
          $image = $request->get('file');
          $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
          Image::make($request->get('file'))->save(public_path('images/').$name);
        }



        $fileupload = new Fileupload();
        $fileupload->filename=$name;
        $fileupload->save();
        return response()->json('Successfully added');

    }
}
