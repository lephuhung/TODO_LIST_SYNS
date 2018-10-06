<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodoController extends Controller
{
    //
    public function Thongtindonhang(Request $req){
        $url = 'https://console.ghn.vn/api/v1/apiv3/OrderInfo';
        $data = array('token' => $req->input('token'), 'OrderCode' =>$req->input('OrderCode'));
        $payload = json_encode($data);
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
        $result = curl_exec($ch);
        return response()->json(['data' => json_decode($result)], 200);
    }
    public function AddData(){

    }
    public function DeleteData(){

    }
    
    public function TinhTien(Request $req){
        $data = array(
            "pick_province" => "Hà Nội",
            "pick_district" => "Quận Hai Bà Trưng",
            "province" => "Hà nội",
            "district" => "Quận Cầu Giấy",
            "address" => "P.503 tòa nhà Auu Việt, số 1 Lê Đức Thọ",
            "weight" => 1000,
            "value" => 3000000,
        );
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://services.giaohangtietkiem.vn/services/shipment/fee?" . http_build_query($data),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_HTTPHEADER => array(
                "Token: 04B3a956bF3C82e0278F2A161Dba8E3Bf66a97e6",
            ),
        ));

        $response = curl_exec($curl);
        return response()->json(['data' => json_decode($response)], 200);
    }
    

}
