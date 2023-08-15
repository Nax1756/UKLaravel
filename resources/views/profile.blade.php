@include('fast.header')
  
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
       
        <div class="wrapper">

          <div class="top">
            <div class="block__data"> 
              <div class="user__data">
                <img class="img" src="/img/UK.svg" alt="">
                <div class="user__menu">
                  <p class="user__email">{{$user->email}}</p>
                  <div class="user__bonus">
                      <p class="title">-20%</p>
                      <p class="subtitle">0.45 грн</p>
                  </div>
                </div>
              </div>
              <div class="user__info">
                <div class="text">
                  <p class="title__name">{{$user->name}}</p>
                  <p class="title__patronymic">{{$user->surname}}</p>
                  <p class="title__surname">{{$user->patronymic}}</p>
                </div>
              
              </div>
            </div>
            <div class="user__panel__history">
              <h2 class="title">Історія замовлень</h2>
              <div class="content">
                <div class="history__item">
                  <p>Колесо</p>
                  <p>WAW32DD11ER</p>
                  <p>1000 грн</p>
                  <p>Упаковка</p>
                  <p>01.02.2023</p>
                </div>
                <div class="history__item">
                  <p>Колесо</p>
                  <p>WAW32DD11ER</p>
                  <p>1000 грн</p>
                  <p>Упаковка</p>
                  <p>01.02.2023</p>
                </div>
                <div class="history__item">
                  <p>Колесо</p>
                  <p>WAW32DD11ER</p>
                  <p>1000 грн</p>
                  <p>Упаковка</p>
                  <p>01.02.2023</p>
                </div>
                <div class="history__item">
                  <p>Колесо</p>
                  <p>WAW32DD11ER</p>
                  <p>1000 грн</p>
                  <p>Упаковка</p>
                  <p>01.02.2023</p>
                </div>
                
              </div>
                
            </div>
          </div>
        
          <div class="user__panel__order">
            <h3 class="title">Замовлення</h3>
            <div class="table-container">
              <table class="table">
                <tbody>
                  <tr class="panel">
                    <th>Ім'я</th>
                    <th>Код</th>
                    <th>Ціна</th>
                    <th>Статус</th>
                    <th>Дата Надсилання</th>
                  </tr>
                  <tr>
                    <td>Колесо</td>
                    <td>WAW32DD11ER</td>
                    <td>1000 грн</td>
                    <td>Упаковка</td>
                    <td>01.02.2023</td>
                  </tr>
                  <tr>
                    <td>Колесо</td>
                    <td>WAW32DD11ER</td>
                    <td>1000 грн</td>
                    <td>Упаковка</td>
                    <td>01.02.2023</td>
                  </tr>
                  <tr>
                    <td>Колесо</td>
                    <td>WAW32DD11ER</td>
                    <td>1000 грн</td>
                    <td>Упаковка</td>
                    <td>01.02.2023</td>
                  </tr>
                  <tr>
                    <td>Колесо</td>
                    <td>810700KB61</td>
                    <td>1000 грн</td>
                    <td>Упаковка</td>
                    <td>01.02.2023</td>
                  </tr>
                  <tr>
                    <td>Колесо</td>
                    <td>WAW32DD11ER</td>
                    <td>1000 грн</td>
                    <td>Упаковка</td>
                    <td>01.02.2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div class="panel">
              <p class="img">Фото</p>
              <p class="name-title">Ім'я</p>
              <p class="name-id">Код</p>
              <p class="name-price">Ціна</p>
              <p class="name-status">Статус</p>
              <p class="name-data">Дата Надсилання</p>
            </div>
            <div class="order">
                <img src="/img/UK.svg" alt="" class="img">
                <p class="name">Колесо</p>
                <p class="id">WAW32DD11ER</p>
                <p class="price">1000 грн</p>
                <p class="status">Упаковка</p>
                <p class="data">01.02.2023</p>
            </div> -->
          </div>
        </div>

        <x-auth-window/>
       
        
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
        @include('fast.footer')
