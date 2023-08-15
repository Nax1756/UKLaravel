<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Session;

class CheckCodeMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(isset($_POST['submit-code'])){
            $EmailCode = $request->session()->get('code');
            $inputCode = $request->input('code');
    
            if($EmailCode == $inputCode){
                return $next($request);
            }

            return redirect()->back();  
        }
       
        return redirect('/');  
        
    }
}
