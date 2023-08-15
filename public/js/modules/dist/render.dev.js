"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsPopular = getProductsPopular;
exports.renderData = renderData;
var popularContainer = document.querySelector("#popular__container");

function getProductsPopular() {
  var response, documentHTML, productArray, transformedData, transformedDataExchange, arrayClear, exchangePriceStr, exchangePrice, firstFiveProducts, productTitle;
  return regeneratorRuntime.async(function getProductsPopular$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("./app/server/api.php"));

        case 2:
          response = _context.sent;
          documentHTML = document.querySelector("html");
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          productArray = _context.sent;
          transformedData = productArray.map(function (item) {
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
          transformedDataExchange = transformedData.map(function (item) {
            var arrayPrices = [];
            arrayPrices.push(item.exchange);
            var arrayTrash = arrayPrices.shift();
            return arrayTrash;
          });
          arrayClear = transformedDataExchange.filter(function (str) {
            return str !== '';
          });
          exchangePriceStr = arrayClear[0];
          exchangePrice = Number(exchangePriceStr);
          firstFiveProducts = transformedData.slice(0, 4);
          firstFiveProducts.forEach(function (item) {
            var priceNumber = parseFloat(item.price.replace(',', '.'));
            var convertedPrice = priceNumber * exchangePrice;
            var existPrice = convertedPrice.toFixed(2);
            var status;

            if (item.count > 0) {
              status = "В наявностi";
            } else {
              status = "Не в наявностi";
            }

            var productHTML = "\n        <div class=\"product\" data-id =\"".concat(item.id, "\">\n          <img class=\"product-image\" src=\"./app/img/Frame-27.png\" alt=\"img\">\n              <div class = \"product-description\">\n                <a class=\"product-title\">").concat(item.name, "</a>\n                <p class=\"product-articul\">").concat(item.id, "</p>\n              </div>\n              <div class =\"product-info\">\n                <div class =\"product-info__price\"> \n                <div class = \"all-price\">\n                  <p class=\"product-price__dollar\">").concat(item.price, "$</p>\n                  <p class=\"product-price__grn\">").concat(existPrice, " \u0433\u0440\u043D</p>\n                </div>\n                  <p class=\"product-status\">").concat(status, "</p>\n                </div>\n              <button class=\"product-button\" data >\u0412 \u043A\u043E\u0448\u0438\u043A</button>\n            </div>\n        </div>");
            documentHTML.setAttribute("load", true);
          });
          productTitle = document.querySelectorAll(".product-title");
          renderData(productTitle);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
}

function renderData(data) {
  data.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var closestCard = e.target.closest(".product");
      var priceInNumber = closestCard.querySelector(".product-price__dollar").textContent;
      var number = parseInt(priceInNumber);
      var cartAlready = {
        "image": closestCard.querySelector(".product-image").src,
        "name": closestCard.querySelector(".product-title").textContent,
        "articul": closestCard.querySelector(".product-articul").textContent,
        "price": number,
        "id": closestCard.getAttribute("data-id")
      };
      var url = "product.html?cartData=".concat(encodeURIComponent(JSON.stringify(cartAlready)));
      window.location.href = url;
    });
  });
}