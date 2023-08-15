"use strict";
export function search() {
  const searchInput = document.querySelector(".search-input");
  const searchList = document.querySelector(".search-stroke__list");

  fetch('./app/server/api.php')
    .then(response => response.json())
    .then(data => {
    const transformedData = data.map(item => ({
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

    const reTransformedData = transformedData.map(item=>({
      name: item.name,
      id: item.id,
      description: item.description,
      price:item.price,
      count: item.count,
      image:item.image,
      discount:item.discount,
      exchange:exchangePrice
    }))
      searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredId = reTransformedData.filter(item => item.id.toLowerCase().includes(searchTerm));
        renderList(filteredId);
      });
    })
    .catch(error => console.error(error));
    function renderList(data) {
      searchList.innerHTML = '';
      data.forEach(item => {
        const ul = document.createElement('ul');
        const liDescription = document.createElement("li")
        const liName = document.createElement("li")
        liName.textContent = item.name
        liName.style.color = "orange"
        liDescription.textContent = item.description;

        liDescription.addEventListener('click', () => {
          const cartAlready  = {
            "name": item.description,
            "articul": item.name,
            "price": item.price,
            "id":item.id,
            "image":item.image,
            "count":item.count,
            "discount":item.discount,
            "exchange":item.exchange
          }
          const redirectUrl = `product.html?cartData=${encodeURIComponent(JSON.stringify(cartAlready))}`;
          window.location.href = redirectUrl;
          
        });
        searchList.appendChild(ul);
        ul.appendChild(liDescription)
        ul.appendChild(liName)
      });
    }
   
}

search();