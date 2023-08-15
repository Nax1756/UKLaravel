<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

class ApiController extends Controller
{
    public function __invoke()
    {
        $all_products = Products::all();
        $response = ['lox' => $all_products];
        return $response;
    }
}
