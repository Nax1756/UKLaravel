"use strict"
import {views} from "../modules/views.js"
import {search} from "./localSearch.js"
import {renderData} from "../modules/render.js"
import animation from "../modules/animation.js"
function getProductData() {
    const productContainer = document.querySelector(".products__container")
    const urlParams = new URLSearchParams(window.location.search);
    const cartData = urlParams.get("cartData");
    if (cartData) {
      const parsedCartData = JSON.parse(decodeURIComponent(cartData));
      const priceNumber = parseFloat(parsedCartData.price.replace(',', '.'));
      
      let setPrice = priceNumber * parsedCartData.exchange
      const priceNumberFixed = setPrice.toFixed(2)
      const product = `
        <div class="product" data-id ="${parsedCartData.id}">
        <img src="./app/img/UK.svg" alt="" class="product-image">
        <div class="product-content">
        <div class = "product-text"> 
            <a href = "" class="product-title">${parsedCartData.name !== '' ? parsedCartData.name : ''}</a>
            <a href = "" class="product__articul">${parsedCartData.articul}</a>
            <a href = "" class="product__id">${parsedCartData.id}</a>
        </div>
            
            <p class= "product-status"> </p>
            <div class="product-buy">
                <p class="product-price__grn">${priceNumberFixed } грн</p>
                <button class="product-btn" data><img src="./app/img/shopping-cart.svg" alt="" class="product-image"></button>
            </div>
        </div>
    </div>
      `
      productContainer.insertAdjacentHTML("beforeend" , product)
    }
  }
  
getProductData();
  