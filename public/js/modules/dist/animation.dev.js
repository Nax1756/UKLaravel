"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.burgerMenu = burgerMenu;
exports.mediaAnim = mediaAnim;
exports.switcher = switcher;
exports.userSearch = userSearch;
exports["default"] = void 0;
var menuBtn;
var menu;
var cartMenu;
var menuItem;
var menuBtnSpan;

var animation = function animation() {
  userSearch();
  mediaAnim();
  burgerMenu();
  switcher();
};

var catalog = document.querySelector(".catalog-menu");

function burgerMenu() {
  menuBtn = document.querySelector('.menu-btn');
  menu = document.querySelector(".menu--burger-list");
  cartMenu = document.querySelector(".cart-menu");
  var documentHTML = document.querySelector("html");
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    menu.style.display = "flex";
    cartMenu.classList.remove("cart-active");
    documentHTML.style.position = "static";

    if (menuBtn.classList.contains("active")) {
      menuBtn.classList.add("fixed");
      menuBtn.classList.add("left");
    } else {
      menuBtn.classList.remove("fixed");
      menuBtn.classList.remove("left");
    }
  });
  return burgerMenu;
}

function mediaAnim() {
  var wrapperIconTg = document.querySelector("#telegram");

  wrapperIconTg.onmouseenter = function () {
    wrapperIconTg.style.transition = "1s";
    wrapperIconTg.style.width = "100px";
    iconTg.style.fill = "#0085FF";
  };

  wrapperIconTg.onmouseleave = function () {
    wrapperIconTg.style.transition = "1s";
    wrapperIconTg.style.width = "40px";
    iconTg.style.fill = "black";
  };

  var wrapperIconFacebook = document.querySelector(".svg-logo__wrapper-facebook");

  wrapperIconFacebook.onmouseenter = function () {
    wrapperIconFacebook.style.width = "100px";
    wrapperIconFacebook.style.transition = "1s";
    iconFacebook.style.fill = "#0057FF";
  };

  wrapperIconFacebook.onmouseleave = function () {
    wrapperIconFacebook.style.width = "40px";
    wrapperIconFacebook.style.transition = "1s";
    iconFacebook.style.fill = "black";
  };

  var wrapperIconInst = document.querySelector(".svg-logo__wrapper-inst");

  wrapperIconInst.onmouseenter = function () {
    wrapperIconInst.style.width = "100px";
    wrapperIconInst.style.transition = "1s";

    for (var i = 0; i < iconInst.length; i++) {
      iconInst[i].style.fill = "#3049CA";
    }
  };

  wrapperIconInst.onmouseleave = function () {
    wrapperIconInst.style.width = "40px";
    wrapperIconInst.style.transition = "1s";

    for (var i = 0; i < iconInst.length; i++) {
      iconInst[i].style.fill = "black";
    }
  };

  var iconTg = document.querySelector(".tg-logo__path");
  var iconFacebook = document.querySelector(".facebook-logo__path");
  var iconInst = document.querySelectorAll(".inst-logo__path");
  return mediaAnim;
}

function switcher() {
  var contentSwitcher = document.querySelectorAll(".content__img");
  contentSwitcher.forEach(function (item) {
    item.onmouseenter = function () {
      var sideImg = item.querySelector("#img_side");
      var frontImg = item.querySelector("#img_front");

      if (sideImg.classList.contains('active-car')) {
        sideImg.classList.remove("active-car");
        sideImg.classList.add("unactive-car");
        frontImg.classList.add("active-car");
        frontImg.classList.remove("unactive-car");
      } else {
        sideImg.classList.add("active-car");
        sideImg.classList.remove("unactive-car");
        frontImg.classList.remove("active-car");
        frontImg.classList.add("unactive-car");
      }
    };
  });
  var markImg = document.querySelectorAll("#mark-img");
  markImg.forEach(function (item) {
    item.onmouseenter = function () {
      item.style.width = "40" + "%";
      item.style.transition = "1s";
    };

    item.onmouseleave = function () {
      item.style.width = "30" + "%";
      item.style.transition = "1s";
    };
  });
  var prevButton = document.getElementById('prevButton');
  var nextButton = document.getElementById('nextButton');
  var slides = document.querySelectorAll('.container__switcher');
  var videos = document.querySelectorAll('.full-screen__bg');
  var currentSlideSpan = document.getElementById('currentSlide');
  var slideOrder = ['chevrolet', 'dodge', 'ford'];
  var currentSlideIndex = 0;

  function showSlide(index) {
    slides.forEach(function (slide, i) {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
    videos.forEach(function (video, i) {
      if (i === index) {
        video.style.display = 'block';
      } else {
        video.style.display = 'none';
      }
    });
    currentSlideSpan.textContent = index + 1;
  }

  prevButton.addEventListener('click', function () {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
  });
  nextButton.addEventListener('click', function () {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  });
  showSlide(currentSlideIndex); // По умолчанию показываем первый слайд
  // const prevButton = document.getElementById('prevButton');
  // const nextButton = document.getElementById('nextButton');
  // const slides = document.querySelectorAll('.container__switcher');
  // const videos = document.querySelectorAll('.full-screen__bg');
  // const slideNumber = document.getElementById('slideNumber');
  // const slideOrder = ['chevrolet', 'dodge', 'ford'];
  // let currentSlideIndex = 0;
  // function showSlide(index) {
  // slides.forEach((slide, i) => {
  //     if (i === index) {
  //     slide.style.display = 'block';
  //     } else {
  //     slide.style.display = 'none';
  //     }
  // });
  // videos.forEach((video, i) => {
  //     if (i === index) {
  //     video.style.display = 'block';
  //     } else {
  //     video.style.display = 'none';
  //     }
  // });
  // slideNumber.textContent = ` ${index + 1} / 3`;
  // }
  // prevButton.addEventListener('click', () => {
  //     currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  //     showSlide(currentSlideIndex);
  // });
  // nextButton.addEventListener('click', () => {
  //     currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  //     showSlide(currentSlideIndex);
  // });
  // showSlide(currentSlideIndex); 

  var moreBtnChevrolet = document.querySelector('#chevrolet-btn');
  var moreBtnDodge = document.querySelector('#dodge-btn');
  var moreBtnFord = document.querySelector('#ford-btn');
  var btnLine = document.querySelectorAll("#line");

  function btnDecoration() {
    moreBtnChevrolet.onmouseenter = function () {
      moreBtnChevrolet.style.background = "#ffae19b3";
      moreBtnChevrolet.style.transition = "1s";
      btnLine.forEach(function (item) {
        item.style.width = "65px";
        item.style.marginRight = "5" + "px";
        item.style.transition = "1s";
      });
    };

    moreBtnChevrolet.onmouseleave = function () {
      moreBtnChevrolet.style.background = "#ffae194f";
      moreBtnChevrolet.style.transition = "1s";
      btnLine.forEach(function (item) {
        item.style.width = "50px";
        item.style.marginRight = "20" + "px";
        item.style.transition = "1s";
      });
    };

    moreBtnDodge.onmouseenter = function () {
      moreBtnDodge.style.background = "#a91313e7";
      moreBtnDodge.style.transition = "1s";
      btnLine.forEach(function (item) {
        item.style.width = "65px";
        item.style.marginRight = "5" + "px";
        item.style.transition = "1s";
      });
    };

    moreBtnDodge.onmouseleave = function () {
      moreBtnDodge.style.background = "#ff1f1f54";
      moreBtnDodge.style.transition = "1s";
      btnLine.forEach(function (item) {
        item.style.width = "50px";
        item.style.marginRight = "20" + "px";
        item.style.transition = "1s";
      });
    };

    moreBtnFord.onmouseenter = function () {
      moreBtnFord.style.background = "#050dfdfb";
      moreBtnFord.style.transition = "1s";
      btnLine.forEach(function (item) {
        item.style.width = "65px";
        item.style.marginRight = "5" + "px";
        item.style.transition = "1s";
      });
    };

    moreBtnFord.onmouseleave = function () {
      moreBtnFord.style.background = "#050dfd50";
      moreBtnFord.style.transition = "1s";
      btnLine.forEach(function (item) {
        item.style.width = "50px";
        item.style.marginRight = "20" + "px";
        item.style.transition = "1s";
      });
    };
  }

  btnDecoration();
}

function userSearch() {
  var btnSearch = document.querySelector(".button-search");
  var closeSearch = document.querySelector(".close-search");
  var searchStroke = document.querySelector(".search-stroke__container");
  var searchStrokeInput = document.querySelector(".search-input");
  var searchList = document.querySelector(".search-stroke__list");
  var header = document.querySelector(".full-screen__header__container ");
  btnSearch.addEventListener("click", function () {
    searchStroke.classList.add("search-stroke__active");
    btnSearch.style.display = "none";
    header.style.display = 'none';
  });

  searchStroke.ondblclick = function () {
    searchStroke.classList.remove("search-stroke__active");
    btnSearch.style.display = "block";
    searchList.style.display = "none";
    header.style.display = 'flex';
  };

  searchStrokeInput.addEventListener('input', function () {
    if (searchStrokeInput.value !== '') {
      closeSearch.style.display = 'none';
      searchList.style.display = "flex";
    } else {
      closeSearch.style.display = 'block';
      searchList.style.display = "none";
    }
  });
  return userSearch;
} // export function progressLine() {
//     function startTimer(duration, display) {
//       let timer = duration;
//       let timerBar = document.querySelector(".timer-bar");
//       let width = 100;
//       let timerInterval = setInterval(function () {
//         timer--;
//         width = (timer / duration) * 100;
//         timerBar.style.width = width + "%";
//         timerBar.style.borderRadius = "0" + "px";
//         if (timer <= 0) {
//           clearInterval(timerInterval);
//           document.querySelector(".succes__popup").classList.remove("active-popup");
//         }
//       }, 1000);
//       timerBar.addEventListener("animationend", function () {
//         document.querySelector(".succes__popup").classList.remove("active-popup");
//       });
//     }
//     document.addEventListener("DOMContentLoaded", function () {
//       const timerContainer = document.querySelector(".succes__popup");
//       document.querySelector(".send-data").addEventListener("click", function () {
//         timerContainer.classList.add("active-popup");
//         startTimer(7, timerContainer);
//       });
//     });
// }


animation();
var _default = animation;
exports["default"] = _default;