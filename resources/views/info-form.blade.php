<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/style/dist/form.css">
</head>
<body>
  <div class="wrapper">
    <img src="/app/img/UK.svg" alt="" class="logo">
    <!-- OLD form-content -->
   <form class="form" action="/lox" method="get" >
      <div class="personal-info">
        <div class="personal-info__client">
          <div class="info-input__wrapper">
            <input placeholder="Імя" type="text" class="info-input" name="name" id="name"  />
          </div>
          <div class="info-input__wrapper">
            <input placeholder="По-батькові" type="text" class="info-input" name="patronymic"  id="patronymic" />
          </div>
          <div class="info-input__wrapper">
            <input placeholder="Прізвище" type="text" class="info-input" name="surname"  id="surname" />
          </div>
          <div class="info-input__wrapper">
            <input name="phone" placeholder="Номер телефону" type="text" class="info-input" id="phone" 
            />
          </div>

          <div class="post-office">
            <div class="post-office__office">
              <div class="info-input__wrapper" id="info-input__post-office">
                <input
                  id="delivery-department"
                  name="delivery-department" 
                  placeholder="Номер відділу"
                  type="text"
                  class="info-input"
                />
              </div>
            </div>

            <div class="post-office__self">

              <div
                class="info-input__wrapper"
                id="info-input__post-office-self"
              >
                <input
                 id="delivery-solo"
                  name="delivery-solo"
                  placeholder="Самовивіз"
                  type="text"
                  class="info-input"
                />
               
              </div>
              <p class="accept-solo">Введіть 1</p>
            </div>
          </div>
          <input type="text" name="user-id" value="123123" id="unique-value" >
          <div class="accept-input">

          </div>
        </div>
          <div class="personal-info__payment">
            <div class="info__container">
              <div class="payment__info">
                <h3 class="payment__title">Метод платежу</h3>

                <div class="select-method">
                  <input type="checkbox" class="custom-checkbox" id="bank" name="bank" value="">
                  <label for="bank">Банківський перевод/Криптовалютний перевод</label>

                  <input type="checkbox" class="custom-checkbox" id="overlay" name="overlay" value="">
                  <label for="overlay">Накладений платіж</label>
                </div>

                <div class="payment__bank__method">
                  <div class="payment__item">
                    <img class="payment__item-img" src="./app/img/Privat24_Logo.png" alt="" id="privat">
                    <p class="payment__text">5168 7559 0616 6828</p>
                  </div>
                  <div class="payment__item">
                    <img class="payment__item-img" src="./app/img/monobank.png" alt="" id="mono">
                    <p class="payment__text">5168 7559 0616 6828</p>
                  </div>
                </div>
                <div class="crypto__method">
                  <div class="payment__item" data-crypto>
                      <img class="payment__item-img" src="./app/img/tether.png" alt="">
                      <div class="payment__net">
                        <p class="payment__text">
                            Polygon(MATIC):0x522d457db3e99c35126c43e9a6dba78a9d00a3dc
                        </p>
                        <p class="payment__text">
                          BSC(BEP-20):0x522d457db3e99c35126c43e9a6dba78a9d00a3dc
                        </p>
                      </div>
                  </div>
                </div>
            </div>
            <div class="user__info">
              <div class = "user__wrapper">
                <h3 class="user__title">Ваші дані</h3>
                <p class= "user-name"></p>
                <p class= "user-patronymic"></p>
                <p class= "user-surname"></p>
                <p class= "user-phone"></p>
                <p class= "user-delivery"></p>
              </div>
            </div>
            </div>
          </div>
      </div>

      <div class="block__product">
        <div class="block__product-item"></div>
        <div class="block__product-price"></div>
      </div>
      <button type="submit"  style=" width: 100px; height: 100px;" value="dick"></button>
   </form>
    
      <form action="./app/server/getImage.php" method="POST" class="form-payment" enctype="multipart/form-data">

        <div class="pay-img" id="image-container">
          <label for="fileInput" class="label-input">
            <img src="/app/img/gallery.png" alt="Выберите файл" id="image" class="image-input">
            <img src="" alt="Выберите файл" id="imagePreview" class="user-image" style="display: none;">
            <input type="file" id="fileInput" name="file" value="" style="display: none;">
            
          </label>
          <input class="pay-inputnone" type="text" value="" id="unique-valueimg" style="display: none;" name="user-id"/>
        </div>


        <button type="submit" name="submit" class="send-data" >Подтвердить</button>
      </form>

  </div>
 
</body>
<script type="module" src="/app/js/modules/forms.js"></script>
<script src="/app/js/modules/verify.js"></script>
</html>
