<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

// require '../vendor/PHPMailer/PHPMailer/src/SMTP.php';
// require '../vendor/PHPMailer/PHPMailer/src/Exception.php';
// require '../vendor/PHPMailer/PHPMailer/src/PHPMailer.php';

class SendCodeController extends Controller
{
    public function __invoke(Request $request){


        if(isset($_POST['submit-mail'])){
            // $code = rand(100000, 999999);

            // $mail = new PHPMailer(true);
            // $mail->isSMTP();
    
            // $mail->Host = 'smtp.gmail.com';
            // $mail->Port = 465;
            // $mail->SMTPAuth = true;
    
            // $mail->Username = 'verifyuks@gmail.com';
            // $mail->Password = 'lkgaddamkqmefcmv';
            // $mail->SMTPSecure = 'ssl';
    
            // $mail->setFrom($mail->Username);
    
            // $inputEmail = $request->input('mail');
            // $request->session()->put('mail', $inputEmail);
            
    
            // $mail->addAddress($inputEmail, 'JoeUser');
            // $mail->Subject = 'Verification code';   
            // $mail->Body = $code;
    
            // $mail->send();
            
            // $request->session()->put('code', $mail->Body);

            return view('send-mail-form', [
                'email' => $inputEmail,
                'access' => 'Код надіслано на вашу пошту',
                'code' => session('code')]);
        }

        return view('send-mail-form', ['email' => $request->session()->get('mail'), 'error' => 'Ты чо пидорас? Тупой шоли нахуй совсем, возьми скопирую там блять 6 цифр, мудак косорукий ALLAHU AKBAR бтв']);

        
    }
}
