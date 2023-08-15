@include('fast.header')

@isset($_GET['login'])
  <style>
    .popup-container{
      display: flex;
    }
  </style>
@endisset
<div class="search-stroke__container">
        <div class="search-stroke__input-close">
          <input
            type="text"
            placeholder="Введіть код товару"
            class="search-input"
          />
          <p class="close-search">Натисніть 2 рази щоб закрити</p>
        </div>

        <ul class="search-stroke__list"></ul>
      </div>

              
      <div id="message"></div>
      
      <div class="cart-menu">
        <button class="close-item" id="close-cart">Закрити</button>
        <div class="items">
          <div class="isclear">
            <div class="icons">
              <img
                class="icons-image"
                src="./img/shopping-cart.svg"
                alt=""
              />
            </div>
            <div class="items-text">
              <h2 class="items-title">Ваш кошик порожній</h2>
              <p class="items-subtitle">Ви ще не додали жодного товару</p>
            </div>
          </div>
          <div class="isntclear"></div>
        </div>

        <div class="total-price__wrapper">
          <p class="total-price__text">0 грн</p>
          <button class="total-price__button-buy">Оформить заказ</button>
        </div>
      </div>

  
      <div class="menu-burger__wrapper">
        <nav>
          <ul class="menu--burger-list">
            <li class="menu--burger-item catalog" >
              <a class="menu--burger-item" href="#">Каталог</a>
            </li>
            <li class="menu--burger-item">
              <a class="menu--burger-item" href="#">Кліентам</a>
            </li>
            <li class="menu--burger-item">
              <a class="menu--burger-item" href="#">Популярне</a>
          </li>
          </ul>
        </nav>
      </div>

      <section class="wrapper__content">
        <div class="full-screen" id="promo">
          <div class="container__switcher" id="chevrolet" data-mark="chevrolet" style="display: none;">
              <div class="content">
                <div class="content__img" id="contentImg">
                  <img class="img active-car" src="/img/models/camaro-z28-2015-3d-model-51ca0bd31b-removebg-preview.png" alt="" id="img_side">
                  <img class="img unactive-car" src="/img/models/camaro-z28-2015-3d-model-25b6c62c19-removebg-preview.png" alt="" id="img_front"  >
                </div>
                

                <div class="text">
                  <div class="title">Chevrolet Cammaro</div>
                  <div class="more__btn" id="chevrolet-btn">
                    <p class="title">Детальніше</p>
                    <span id="line"></span>
                  </div>
                </div>
              
              </div>
            
          </div>

          <div class="container__switcher" id="dodge" data-mark="dodge">
            <div class="content">
              <div class="content__img" id="contentImg">
                <img class="img active-car" src="/img/models/dodge-challenger-srt-hellcat.png" alt="" id="img_side">
                <img class="img unactive-car" src="/img/models/dodge-challenger-srt-hellcat-3d-model-blend__1_-removebg-preview.png" alt="" id="img_front"  >
              </div>
              

              <div class="text">
                <div class="title">Dodge Challenger</div>
                <div class="more__btn" id="dodge-btn">
                  <p class="title">Детальніше</p>
                  <span id="line"></span>
                </div>
              </div>
            
            </div>
           
          </div>

          <div class="container__switcher" id="ford" " style="display: none;" data-mark="ford">
            <div class="content">
              <div class="content__img" id="contentImg">
                <img class="img active-car" src="/img/models/2020-ford-mustang-shelby-gt500-3d-model-rigged-obj-blend-dae-removebg-preview.png" alt="" id="img_side">
                <img class="img unactive-car" src="/img/models/2020-ford-mustang-shelby-gt500-3d-model-rigged-obj-blend-dae-removebg-preview (1).png" alt="" id="img_front"  >
              </div>
              

              <div class="text">
                <div class="title">Ford Mustang</div>
                <div class="more__btn" id="ford-btn">
                  <p class="title">Детальніше</p>
                  <span id="line"></span>
                </div>
              </div>
            
            </div>
        
          </div>
    
          <div class="slide-manage">
            <button class="button" id="prevButton"><img src="/img/arrow-switcher.png" alt="" class="img" ></button>
            <p id="slideNumber"><span id="currentSlide">1</span> / 3</p>            
            <button class="button" id="nextButton"><img src="/img/arrow-switcher.png" alt="" class="img" id="next-img"></button>
          </div>
        </div>
  
       
        <video autoplay muted loop preload="auto" class="full-screen__bg"style="display: none;"  data-mark="chevrolet" >
          <source type="video/webm" src="/img/models/Дизайн без названия (2).mp4">
        </video>
        
        <video autoplay muted loop preload="auto" class="full-screen__bg"   data-mark="dodge">
          <source type="video/webm" src="/img//models/Дизайн без названия (1).mp4">
        </video>
          
        <video autoplay muted loop preload="auto" class="full-screen__bg" style="display: none;" data-mark="ford">
            <source type="video/webm" src="/img//models/Дизайн без названия.mp4">
        </video>

       
       

  
        <div class="content">
          <h2 class="title">Марки, які ми обслуговуємо</h2>
            <div class="container">
              <div class="top">
                <div class="img-container"><img class="img" src="/img/jeep-logo.webp" alt=""id = "mark-img"></div>
                <div class="img-container"><img class="img" src="/img/ford-logo.webp" alt=""id = "mark-img"></div>
                <div class="img-container"><img class="img" src="/img/buick-logo.webp" alt=""id = "mark-img"></div>
                <div class="img-container"><img class="img" src="/img/cadillac-logo.webp" alt=""id = "mark-img"></div>

              </div>

              <div class="center">
                <div class="img-container"><img class="img" src="/img/gmc-logo-2.webp" alt=""id = "mark-img"></div>
                <div class="img-container"><img class="img" src="/img/chevrolet-logo.webp" alt=""id = "mark-img"></div>
                <div class="img-container"><img class="img" src="/img/renault.png" alt=""id = "mark-img"></div>
                <div class="img-container"><img class="img" src="/img/bmw-logo.png" alt=""id = "mark-img"></div>
                
            
           
                
              </div>

              <div class="bottom">
                <div class="img-container"><img class="img" src="/img/Mitsubishi_logo.png" alt=""id = "mark-img"></div>
                <div class="img-container"><img class="img" src="/img/toyota.png" alt=""id = "mark-img"></div>
                <div class="img-container"><img class="img" src="/img/volvo.png" alt=""id = "mark-img"></div>
                <div class="img-container"><img class="img" src="/img/nissan-logo-2020-white.png" alt=""id = "mark-img"></div>
              
              
              
              </div>
      
            </div>
        </div>
  
      </section>

@include('fast.footer')