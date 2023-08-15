<div class="popup-register" id="popup-register" >
   <img src="/app/img/close.svg" alt="" class="close-popup">
   <h2 class="title">Реєстрація</h2>
   <form action="{{ route('register') }}" method="POST" class="form-register">
     @csrf
       <div class="input__wrapper">
           <input type="text" name="email" class="input" placeholder="Ваша пошта">
       </div>
     
       <div class="input__wrapper">
           <input type="password" name="password" class="input" placeholder="Пароль">
       </div>
       <div class="input__wrapper">
         <input type="text" name="name" class="input" placeholder="Ім'я">
       </div>
       <div class="input__wrapper">
         <input type="text" name="surname" class="input" placeholder="По-батькові">
       </div>
       <div class="input__wrapper">
         <input type="text" name="patronymic" class="input" placeholder="Прізвище">
        </div>
     <button type="submit" class="button">Зареєструватися</button>
   </form>
   <div class="enaible-account">
       <p class="title">Є обліковий запис?</p>
       <button class="button" id="auth">Авторизуватися</button>
   </div>
</div>              