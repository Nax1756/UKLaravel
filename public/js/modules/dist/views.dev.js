"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.views = views;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cartItems = [];

function views() {
  var cartMenu = document.querySelector(".cart-menu");
  var menuBtn;
  var menu;
  var cartWrapper = document.querySelector(".isntclear");
  var isclear = document.querySelector(".isclear");
  var totalPrice = document.querySelector(".total-price__wrapper");
  var showForm = document.querySelector(".total-price__button-buy");
  var formWrap = document.querySelector(".form-order__background");
  var cartIcon = document.querySelector(".shopping-card__link");
  var cartClose = document.getElementById("close-cart");
  var documentHTML = document.querySelector("html");
  menuBtn = document.querySelector('.menu-btn');
  menu = document.querySelector(".menu--burger-list");
  document.querySelector(".total-price__text").innerHTML = localStorage.getItem("price") + "грн";
  document.addEventListener("DOMContentLoaded", function () {
    var card;

    if (cartItems.length > 0) {
      isclear.style.display = "none";
      cartWrapper.style.display = "flex";
      totalPrice.style.display = "flex";
    }

    cartIcon.onclick = function () {
      cartMenu.classList.add("cart-active");

      if (cartItems.length <= 0) {
        isclear.style.display = "flex";
        cartWrapper.style.display = "none";
        totalPrice.style.display = "none";
      } else {
        isclear.style.display = "none";
        cartWrapper.style.display = "flex";
        totalPrice.style.display = "flex";
      }

      if (window.innerWidth < 560) {
        documentHTML.style.position = "fixed";
        documentHTML.style.height = "100vh";
        documentHTML.style.width = "100%";
        documentHTML.style.top = "0";
        documentHTML.style.margin = "0 auto";
      } else if (window.innerWidth < 560) {
        documentHTML.style.position = "static";
      }
    };

    cartClose.addEventListener("click", function () {
      cartMenu.classList.remove("cart-active");
      documentHTML.style.position = "static";
      localStorage.setItem("stateActive", "flex");
      localStorage.setItem("statePassive", "none");
    });

    function handleClick(item) {
      var key = 'key_' + item.data;
      var value = JSON.stringify(item);
      localStorage.setItem(key, value);

      if (item.count <= 0) {
        localStorage.removeItem(key);
      }
    }

    function updateAvailability(productId, count) {
      var getProductInfo = localStorage.getItem("key_" + productId);
      var productInfo = JSON.parse(getProductInfo);

      if (productInfo.count === 0) {
        console.log("negr");
      }
    }

    var checkedFormItems = [];
    window.addEventListener("click", function (event) {
      if (event.target.hasAttribute("data")) {
        var start = function start() {
          var existingItem = findCartItem(productId);
          cartMenu.classList.add("cart-active");
          cartWrapper.style.display = "flex";
          totalPrice.style.display = "flex";
          isclear.style.display = "none";
          var formPrice;

          var added = _card.getAttribute("data-added");

          localStorage.setItem("isclear", "none");
          localStorage.setItem("isntclear", "flex");

          if (added === "true") {
            return;
          }

          added = "true";

          _card.setAttribute("data-added", added);
          /* -----------------------------------------------------------------------*/

          /*                                Card Item                               */

          /* -----------------------------------------------------------------------*/


          if (existingItem) {
            var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
            countElem.textContent = Number(countElem.textContent) + 1;
            return;
          }

          var productInfo = {
            id: productId,
            imgSrc: _card.querySelector(".product-image").getAttribute("src"),
            title: _card.querySelector(".product-title").innerText,
            status: _card.querySelector(".product-status").innerText,
            price: _card.querySelector(".product-price__grn").innerText,
            count: 0,
            data: "".concat(productId)
          };
          localStorage.setItem("idItem", productInfo.id);
          productInfo.count++;
          var itemInCart = "<div class=\"item\" data-id=\"".concat(productInfo.data, "\" >\n                    <img src=\"").concat(productInfo.imgSrc, "\" alt=\"\" class=\"item-image\">\n                    <p class=\"item-name\">").concat(productInfo.title, "</p>\n                    <p class=\"item-price\">").concat(productInfo.price, "</p>\n                    <div class=\"item__button__add-delete\">\n                        <button class=\"button-primary__plus\" data-id=\"").concat(productInfo.data, "\">+</button>\n                        <p class=\"item-count\" data-counter=\"").concat(productInfo.id, "\">").concat(productInfo.count, "</p>\n                        <button class=\"button-primary__minus\" data-id=\"").concat(productInfo.data, "\" id=\"minus\">-</button>\n                    </div>\n                </div>\n            ");
          cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
          cartItems.push(productInfo);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          handleClick(productInfo);
          buttons();
          updateTotalPrice();
        };

        var _card = event.target.closest(".product");

        var productId = _card.dataset.id;
        fetch("/app/server/api.php").then(function (res) {
          return res.json();
        }).then(function (data) {
          var transformedData = data.map(function (item) {
            return {
              name: item["Производитель"],
              id: item["Код"],
              description: item["Описание"],
              price: item["Цена у.е."],
              count: item["Наличие"],
              image: item["Фото"]
            };
          });
          transformedData.forEach(function (product) {
            if (product.id == productId && product.count >= 1) {
              start();
            }
          });
        });
      }
    });
    window.addEventListener("load", function () {
      var images = [];
      document.querySelectorAll("img").forEach(function (img) {
        images.push(img.src);
      });
      var imagesLoaded = 0;

      for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.src = images[i];

        img.onload = function () {
          imagesLoaded++;

          if (imagesLoaded == images.length) {
            document.querySelector("#preloader").style.display = "none";
          }
        };
      }

      var savedItems = getAllItemsFromStorage();
      var savedId = localStorage.getItem('idItem');
      console.log(savedId);
      var productElement = document.querySelector("[data-id=\"".concat(savedId, "\"]"));
      console.log(productElement);

      if (productElement) {
        productElement.setAttribute('data-added', 'true');
      }

      savedItems.forEach(function (item) {
        var itemInCart = "<div class=\"item\" data-id=\"".concat(item.data, "\">\n          <img src=\"").concat(item.imgSrc, "\" alt=\"\" class=\"item-image\">\n          <p class=\"item-name\">").concat(item.title, "</p>\n          <p class=\"item-price\">").concat(item.price, "</p>\n          <div class=\"item__button__add-delete\">\n              <button class=\"button-primary__plus\" data-id=\"").concat(item.data, "\">+</button>\n              <p class=\"item-count\" data-counter=\"").concat(item.id, "\">").concat(item.count, "</p>\n              <button class=\"button-primary__minus\" data-id=\"").concat(item.data, "\" id=\"minus\">-</button>\n          </div>\n        </div>");
        cartWrapper.insertAdjacentHTML("beforeend", itemInCart);
        cartItems.push(item);
        buttons();
      });
    });

    function buttons() {
      var btnPlus = document.querySelectorAll(".button-primary__plus");
      var btnMinus = document.querySelectorAll(".button-primary__minus");
      btnPlus.forEach(function (button) {
        button.removeEventListener("click", handlePlusClick);
        button.addEventListener("click", handlePlusClick);
      });
      btnMinus.forEach(function (button) {
        button.removeEventListener("click", handleMinusClick);
        button.addEventListener("click", handleMinusClick);
      });

      function handlePlusClick(event) {
        if (event.target.dataset.clicked === "true") {
          return;
        }

        event.target.dataset.clicked = "true";
        var productId = event.target.dataset.id;
        var getProductInfo = localStorage.getItem("key_" + productId);
        var productInfo = JSON.parse(getProductInfo);
        var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
        fetch("/app/server/api.php").then(function (res) {
          return res.json();
        }).then(function (data) {
          var transformedData = data.map(function (item) {
            return {
              name: item["Производитель"],
              id: item["Код"],
              description: item["Описание"],
              price: item["Цена у.е."],
              count: item["Наличие"],
              image: item["Фото"]
            };
          });
          transformedData.forEach(function (item) {
            if (item.id == productId) {
              var element = findCartItem(productId);
              var itemNum = Number(item.count);
              var countElemNum = Number(element.count);
              element.count++;
              countElem.innerHTML = element.count;
              handleClick(element);
              updateTotalPrice();
              localStorage.setItem("cartItems", JSON.stringify(cartItems));
              updateAvailability(productId, 1);

              if (itemNum === countElemNum) {
                countElem.innerHTML = itemNum;
                handleClick(element);
                element.count = itemNum;
                localStorage.setItem("cartItems", JSON.stringify(cartItems));
                updateTotalPrice();
              }
            }
          });
        });
        setTimeout(function () {
          event.target.removeAttribute("data-clicked");
        }, 500);
      }

      function handleMinusClick(event) {
        if (event.target.dataset.clicked === "true") {
          return;
        }

        event.target.dataset.clicked = "true";
        var productId = event.target.dataset.id;
        var item = findCartItem(productId);
        var getProductInfo = localStorage.getItem("key_" + productId);
        var productInfo = JSON.parse(getProductInfo);
        var countElem = document.querySelector(".item-count[data-counter=\"".concat(productId, "\"]"));
        var countElemAttr = countElem.getAttribute("data-counter");
        localStorage.setItem("counterElem", countElemAttr);

        if (countElemAttr == productInfo.data) {
          item.count--;
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          handleClick(item);
          updateAvailability(productId, 0);
        }

        if (item.count === 0) {
          removeCartItem(productId);
          getProductInfo;
          localStorage.setItem("cartItems", JSON.stringify(cartItems));

          if (cartItems.length <= 0) {
            isclear.style.display = "flex";
            cartWrapper.style.display = "none";
            totalPrice.style.display = "none";
          }
        } else {
          countElem.textContent = item.count;
          updateTotalPrice();
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }

        setTimeout(function () {
          event.target.removeAttribute("data-clicked");
        }, 100);
      }
    }

    function getAllItemsFromStorage() {
      var items = [];

      for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        if (key.startsWith('key_')) {
          var value = localStorage.getItem(key);
          var item = JSON.parse(value);
          items.push(item);
        }
      }

      return items;
    }

    function findCartItem(id) {
      return cartItems.find(function (item) {
        return item.id === id;
      });
    }

    function removeDataAddedAttribute() {
      var products = document.querySelectorAll(".product");
      products.forEach(function (product) {
        if (product.hasAttribute("data-added")) {
          product.removeAttribute("data-added");
        }
      });
    }

    function generateId() {
      var randomNumber = '';

      for (var i = 0; i < 10; i++) {
        randomNumber += Math.floor(Math.random() * 10);
      }

      return randomNumber;
    }

    var randomNum = generateId();
    localStorage.setItem("userId", randomNum);

    function sendDataToServer(data) {
      var url = "app/server/addProduct.php";
      var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      fetch(url, options).then(function (response) {
        return response.json();
      }).then(function (result) {
        console.log("Успешно", result);
      })["catch"](function (error) {});
    }

    showForm.addEventListener("click", function () {
      var localCartItems = JSON.parse(localStorage.getItem("cartItems"));
      localCartItems.forEach(function (product) {
        checkedFormItems.push([product.id, product.price, product.count]);
      });
      var transferredItems = [];
      checkedFormItems.forEach(function (item) {
        transferredItems.push.apply(transferredItems, _toConsumableArray(item));
      });

      if (transferredItems.length > 0) {
        transferredItems.push(randomNum);
        var itemJson = {
          items: transferredItems.flat()
        };
        console.log(itemJson);
        sendDataToServer(itemJson);
      }

      window.location.href = "/app/html/inputsSend.php";
    });

    function removeCartItem(id) {
      var index = cartItems.findIndex(function (item) {
        return item.id === id;
      });
      cartItems.splice(index, 1);
      var item = document.querySelector("[data-id=\"".concat(id, "\"]")).closest(".item");
      item.parentNode.removeChild(item);
      updateTotalPrice();
    }

    function updateTotalPrice() {
      var itemPrices = document.querySelectorAll(".item-price");
      var totalPriceCash = 0;
      var totalPriceSum = 0;
      itemPrices.forEach(function (item) {
        var productId = item.closest(".item").querySelector(".button-primary__plus").dataset.id;
        var itemInfo = findCartItem(productId);
        totalPriceCash += parseFloat(item.textContent) * itemInfo.count;
        totalPriceSum = totalPriceCash.toFixed(2);
      });
      document.querySelector(".total-price__text").innerHTML = totalPriceSum + " грн";

      function stateMoney() {
        localStorage.setItem("price", totalPriceSum);
      }

      stateMoney();
    }
  });
  return views;
}

views();