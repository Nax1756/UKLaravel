<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>UK Service</title>

    <link rel="stylesheet" href="./style/dist/preloader.css">
    <link rel="stylesheet" href="./style/normalize.css">
    <link rel="stylesheet" href="./style/dist/style.css">
    <link rel="icon" type="image/png" href="/img/favicon-32x32.png">

</head>

  <body>
    <!-- <div id="preloader">
      <div class="rotating-image">
        <img src="/img/UK.svg" alt="">
      </div>
    </div> -->

    <main class="main">  
      <header class="full-screen__header__container">
        <a class="logo-link" href="/">
          <img src="./img/UK.svg" alt="logo" class="logo-img" />
        </a> 
        <nav class="menu">
          <ul class="menu__list">
            <!-- <li class="menu__list-item catalog" >
              <a href="#" class="menu__list-link">Каталог</a>
            </li> -->
            
            <li class="menu__list-item">
              <a href="/client" class="menu__list-link">Кліентам</a>
            </li>
            <li class="menu__list-item">
              <a href="#" class="menu__list-link">Контакти</a>
            </li>
            <li class="menu__list-item">
              <a href="#" class="menu__list-link">Про нас</a>
            </li> 
            @auth
            <form method="POST" action="{{ route('logout') }}">
                    @csrf

                    <x-responsive-nav-link :href="route('logout')"
                            onclick="event.preventDefault();
                                        this.closest('form').submit();">
                        {{ __('Log Out') }}
                    </x-responsive-nav-link>
                </form> 
            @endauth
            
           
          </ul>
        </nav>

        <div class="user-ui">
          <button class="button-search">
            <img src="./img/search-svg.svg" alt="img" />
          </button>
          <img
            class="shopping-card__link"
            src="./img/shopping-cart.svg"
            alt="img"
          />
          @auth
            <a href="/profile"  class="button-profile">
              <img src="/img/3643745-human-man-people-person-profile_113435 1.png" alt="" class="profile__img">
            </a>
          @else
              <a class="button-profile" id="button-profile">
                <img src="/img/3643745-human-man-people-person-profile_113435 1.png" alt="" class="profile__img">
              </a>
          @endauth
          <style>
            .button-profile{
              cursor: pointer;
            }
          </style>


        </div>

        <div class="menu-btn">
          <span></span>
          <span></span>
        </div>
      </header>

      
  <div class="popup-container" id="popup-container">
    <x-auth-window/>
    <x-reg-window/>
  </div>

      
      

  
      
      