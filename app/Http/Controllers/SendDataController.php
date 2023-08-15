<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SendDataController extends Controller
{
    public function __invoke(Request $request)  
    {
        // $data = [
        //     [
        //         'id_product' => '9407',
        //         'price' => '2000uah',
        //         'sum' => '5',
        //         'user_id' =>  12312
        //     ]
        // ];
        // $code = end($data[0]);
        // foreach ($data as $item) {
        //     BoughtProduct::create($item);

        //     $idProduct = $item['id_product'];
        //     $getNumber = Product::where('Код', $idProduct)->value('Наличие');
            
        //     $sum = $item['sum'];
        //     $result = $getNumber - $sum;
        //     Product::where('Код', $idProduct)->update(['Наличие' => $result]);  

        // }
        return view('send-mail-form');
    }
}
