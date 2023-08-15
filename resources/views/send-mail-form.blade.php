<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="/style/dist/send-mail-form.css">
</head>
<body>
   <div class="verification" >

      <form action="/code" method="POST"  class="input-wrapper">
         @csrf
         <input 
         class="input-verif" 
         placeholder="Введіть пошту"
         value="@isset($email){{$email}}@endisset" 
         name="mail" 
         type="mail">
         <button class="send-code" type="submit" name="submit-mail">Получить код</button>
      </form>
         @isset($access) <div class="access">{{$access}}</div>@endisset
         @isset($error) <div class="access">{{$error}}</div>@endisset
         @if(session('error'))
            <div class="access">
               {{ session('error') }}
            </div>
         @endif
      <form action="/info-form" method="POST" >
         @csrf
         <div class="input-wrapper">
            <input class="input-verif" type="text" name="code" placeholder="Введіть код">
         </div>
         
         <div class="verif-btn">
            <button class="abort-btn" >Отменить заказ</button>
            <button type="submit" class="acces-btn" name="submit-code" >Подтвердить</button>
         </div>
   
      </form>
   </div>
   <style>
      .access{
         color: white;
      }
   </style>
</body>
</html>