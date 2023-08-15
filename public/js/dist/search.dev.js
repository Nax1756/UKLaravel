"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = search;

function search() {
  var searchInput = document.querySelector(".search-input");
  var searchList = document.querySelector(".search-stroke__list");
  fetch('./app/server/api.php').then(function (response) {
    return response.json();
  }).then(function (data) {
    var transformedData = data.map(function (item) {
      return {
        name: item["Производитель"],
        id: item["Код"],
        description: item["Описание"],
        price: item["Цена у.е"],
        count: item["Наличие"],
        image: item["Фото"],
        discount: item["Скидка"],
        exchange: item["Курс"]
      };
    });
    var transformedDataExchange = transformedData.map(function (item) {
      var arrayPrices = [];
      arrayPrices.push(item.exchange);
      var arrayTrash = arrayPrices.shift();
      return arrayTrash;
    });
    var arrayClear = transformedDataExchange.filter(function (str) {
      return str !== '';
    });
    var exchangePriceStr = arrayClear[0];
    var exchangePrice = Number(exchangePriceStr);
    var reTransformedData = transformedData.map(function (item) {
      return {
        name: item.name,
        id: item.id,
        description: item.description,
        price: item.price,
        count: item.count,
        image: item.image,
        discount: item.discount,
        exchange: exchangePrice
      };
    });
    searchInput.addEventListener('input', function () {
      var searchTerm = searchInput.value.toLowerCase();
      var filteredId = reTransformedData.filter(function (item) {
        return item.id.toLowerCase().includes(searchTerm);
      });
      renderList(filteredId);
    });
  })["catch"](function (error) {
    return console.error(error);
  });

  function renderList(data) {
    searchList.innerHTML = '';
    data.forEach(function (item) {
      var ul = document.createElement('ul');
      var liDescription = document.createElement("li");
      var liName = document.createElement("li");
      liName.textContent = item.name;
      liName.style.color = "orange";
      liDescription.textContent = item.description;
      liDescription.addEventListener('click', function () {
        var cartAlready = {
          "name": item.description,
          "articul": item.name,
          "price": item.price,
          "id": item.id,
          "image": item.image,
          "count": item.count,
          "discount": item.discount,
          "exchange": item.exchange
        };
        var redirectUrl = "product.html?cartData=".concat(encodeURIComponent(JSON.stringify(cartAlready)));
        window.location.href = redirectUrl;
      });
      searchList.appendChild(ul);
      ul.appendChild(liDescription);
      ul.appendChild(liName);
    });
  }
}

search();