@include('fast.header')
          <div class="cart-menu">
            <button class="close-item" id="close-cart">Закрити</button>
            <div class="items">
              <div class="isclear">
                <div class="icons">
                  <img
                    class="icons-image"
                    src="../img/shopping-cart-svg.svg"
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
    
          <div class="checkout-menu">
            <div class="checkout__product-price">
              <div class="product-price__product-wrapper">
                <div class="product-wrapper">
                  <img
                    src="../img/d2690dd9e88799e1903.webp"
                    alt=""
                    class="product-wrapper__image"
                  />
                  <p class="product-wrapper__name">Name</p>
                  <p class="product-wrapper__count">5</p>
                  <p class="product-wrapper__price">$212</p>
                </div>
                <div class="product-wrapper">
                  <img
                    src="../img/d2690dd9e88799e1903.webp"
                    alt=""
                    class="product-wrapper__image"
                  />
                  <p class="product-wrapper__name">Name</p>
                  <p class="product-wrapper__count">5</p>
                  <p class="product-wrapper__price">$212</p>
                </div>
                <div class="product-wrapper">
                  <img
                    src="../img/d2690dd9e88799e1903.webp"
                    alt=""
                    class="product-wrapper__image"
                  />
                  <p class="product-wrapper__name">Name</p>
                  <p class="product-wrapper__count">5</p>
                  <p class="product-wrapper__price">$212</p>
                </div>
              </div>
              <div class="product-price__price-wrapper">
                <p class="price-wrapper__text">Total Price</p>
                <p class="price-wrapper__price">$10</p>
              </div>
            </div>
            <div class="checkout__data">
              <form action="GET" class="form-data">
                <input placeholder="Name" type="text" class="form-input__name" />
                <input placeholder="Name" type="text" class="form-input__name" />
                <input placeholder="Name" type="text" class="form-input__name" />
                <input placeholder="Name" type="text" class="form-input__name" />
                <input placeholder="Name" type="text" class="form-input__name" />
              </form>
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
    
          <section class="content">
            <div class="content__container">
                <div class="deliver__wrapper">
                    <h2 class="title">Доставка</h2>
                    <div class="content-part">
                        <object class="content-part__block" data="" type="">
                           <img src="../img/delivery.webp" alt="" class="block__image">                                
                        </object>
                        <p class="content__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus amet, qui quaerat iure deserunt cum mollitia sunt in porro, quibusdam quia architecto vel perferendis veritatis consequuntur quae alias accusamus.
                        </p>
                    </div>
                </div>
        
                <div class="payment__wrapper">
                    <h2 class="title">Оплата</h2>
                    <div class="content-part">
                        <object class="content-part__block" data="" type="">
                            <img src="../img/cash.webp" alt="" class="block__image">
                        </object>
                        <p class="content__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus amet, qui quaerat iure deserunt cum mollitia sunt in porro, quibusdam quia architecto vel perferendis veritatis consequuntur quae alias accusamus.
                        </p>
                    </div>
                </div>
        
                <div class="purchase-return__wrapper">
                    <h2 class="title">Возврат товара</h2>
                    <div class="content-part">
                        <object class="content-part__block" data="" type="">
                            <img src="../img/delivery-return.webp" alt="" class="block__image">
                        </object>
                        <p class="content__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus amet, qui quaerat iure deserunt cum mollitia sunt in porro, quibusdam quia architecto vel perferendis veritatis consequuntur quae alias accusamus.
                        </p>
                    </div>
                </div>
            </div>
           
        
        </section>
    

@include('fast.footer')