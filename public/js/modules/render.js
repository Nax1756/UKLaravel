const popularContainer = document.querySelector("#popular__container");

export async function getProductsPopular() {
  const response = await fetch("./app/server/api.php")
  let documentHTML = document.querySelector("html")
 
  const productArray = await response.json();
 
  const transformedData = productArray.map(item => ({
    name: item["Производитель"],
    id: item["Код"],
    description: item["Описание"],
    price: item["Цена у.е"],
    count: item["Наличие"],
    image:item["Фото"],
    discount:item["Скидка"],
    exchange:item["Курс"]
    
  }));
  const transformedDataExchange = transformedData.map(item =>{
    const arrayPrices = []
    arrayPrices.push(item.exchange)
    const arrayTrash = arrayPrices.shift()
    return arrayTrash    
  })
  const arrayClear = transformedDataExchange.filter(str => str !== '')
  const exchangePriceStr = arrayClear[0]
  const exchangePrice  = Number(exchangePriceStr)


  const firstFiveProducts = transformedData.slice(0, 4)
  firstFiveProducts.forEach((item) => {
    const priceNumber = parseFloat(item.price.replace(',', '.'));
    const convertedPrice = priceNumber * exchangePrice
    const existPrice = convertedPrice.toFixed(2)
    let status
    if(item.count > 0){
     status = "В наявностi"
    }else{
      status = "Не в наявностi"
      
    }
    const productHTML = `
        <div class="product" data-id ="${item.id}">
          <img class="product-image" src="./app/img/Frame-27.png" alt="img">
              <div class = "product-description">
                <a class="product-title">${item.name}</a>
                <p class="product-articul">${item.id}</p>
              </div>
              <div class ="product-info">
                <div class ="product-info__price"> 
                <div class = "all-price">
                  <p class="product-price__dollar">${item.price}$</p>
                  <p class="product-price__grn">${existPrice} грн</p>
                </div>
                  <p class="product-status">${status}</p>
                </div>
              <button class="product-button" data >В кошик</button>
            </div>
        </div>`
    
    documentHTML.setAttribute("load" ,true)
  })
  const productTitle = document.querySelectorAll(".product-title")
  renderData(productTitle)
}
export function renderData(data) {
  data.forEach(item => {
    item.addEventListener("click", (e) => {
      const closestCard = e.target.closest(".product");
      const priceInNumber = closestCard.querySelector(".product-price__dollar").textContent
      var number = parseInt(priceInNumber);
      const cartAlready = {
        "image": closestCard.querySelector(".product-image").src,
        "name": closestCard.querySelector(".product-title").textContent,
        "articul": closestCard.querySelector(".product-articul").textContent,
        "price": number,
        "id":closestCard.getAttribute("data-id")
      };

      const url = `product.html?cartData=${encodeURIComponent(JSON.stringify(cartAlready))}`;
      window.location.href = url;
    });
  });
}

