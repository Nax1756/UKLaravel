"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.discount = discount;

function discount() {
  fetch("/app/server/api.php").then(function (response) {
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
    var discount = transformedData.filter(function (item) {
      if (item.discount > 0) {
        return item;
      }
    });
    makeDiscount(discount);
  });

  function makeDiscount(item) {
    var exclItem = item.slice(0, 1);
    exclItem.forEach(function (element) {
      var exchDollarNum = Number(element.exchange);
      var dollarPriceTotal = parseFloat(element.price) * exchDollarNum;
      var dollarPriceDiscount = element.discount * exchDollarNum;
      var toFixedDollarTotal = dollarPriceTotal.toFixed(2);
      var toFixedDollarDiscount = dollarPriceDiscount.toFixed(2);
      var status;

      if (element.count > 0) {
        status = "В наявностi";
      } else {
        status = "Не в наявностi";
      }

      var discItem = "\n            <div class=\"product\" data-id =\"".concat(element.id, "\">\n              <img class=\"product-image\" src=\"/app/").concat(element.image, "\" alt=\"img\">\n                  <div class = \"product-description\">\n                    <a class=\"product-title\">").concat(element.description, "</a>\n                    <p class=\"product-articul\">").concat(element.id, "</p>\n                  </div>\n                    <div class =\"product-info\">\n                        \n                        <div class = \"all-price\">\n                            <p class=\"product-price__dollar\">").concat(toFixedDollarTotal, " \u0433\u0440\u043D</p>\n                            <p class=\"product-price__grn\">").concat(toFixedDollarDiscount, " \u0433\u0440\u043D</p>\n                        </div>\n                        <div class= \"buy\">\n                            <p class=\"product-status\">").concat(status, "</p>\n                            <button class=\"product-button\" data >\u0412 \u043A\u043E\u0448\u0438\u043A</button>\n                        </div>\n\n                    </div>\n            </div>\n            ");
      discountWrapper.insertAdjacentHTML("beforeend", discItem);
    });
  }
}

discount();