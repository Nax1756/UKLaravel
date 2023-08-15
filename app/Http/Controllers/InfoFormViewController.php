<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InfoFormViewController extends Controller
{
    public function __invoke(){
        
        return view('info-form');
    }
}
