"use strict";

function formRegister() {
  var selectRegister = document.querySelector("#register");
  var selectLogin = document.querySelector("#auth");
  var popupRegister = document.querySelector(".popup-register");
  var popupLogin = document.querySelector(".popup-login");
  var closePopup = document.querySelectorAll(".close-popup");
  var popup = document.querySelector(".popup-container");
  closePopup.forEach(function (item) {
    item.onclick = function () {
      popup.style.display = "none";
    };
  });

  selectRegister.onclick = function () {
    popupRegister.style.display = "flex";
    popupLogin.style.display = "none";
  };

  selectLogin.onclick = function () {
    popupLogin.style.display = "flex";
    popupRegister.style.display = "none";
  };
}

formRegister();