"use strict"
let menuBtn;
let menu;
let cartMenu;
let menuItem;
let menuBtnSpan;

const animation = () => {
    userSearch()
    mediaAnim()
    burgerMenu()
    switcher()
    
}

let catalog = document.querySelector(".catalog-menu")
export function burgerMenu() {
    menuBtn = document.querySelector('.menu-btn');
    menu = document.querySelector(".menu--burger-list");
    cartMenu = document.querySelector(".cart-menu");
    let documentHTML = document.querySelector("html")
  
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        menu.style.display = "flex"
        cartMenu.classList.remove("cart-active")
        documentHTML.style.position = "static"
        
        if (menuBtn.classList.contains("active")) {
            menuBtn.classList.add("fixed")
            menuBtn.classList.add("left")
        } else {
            menuBtn.classList.remove("fixed")
            menuBtn.classList.remove("left")
        }
    })

    return burgerMenu
}

export function mediaAnim() {
    let wrapperIconTg = document.querySelector("#telegram")
    wrapperIconTg.onmouseenter = () => {
        wrapperIconTg.style.transition = "1s"
        wrapperIconTg.style.width = "100px"
        iconTg.style.fill = "#0085FF"
    }
    wrapperIconTg.onmouseleave = () => {
        wrapperIconTg.style.transition = "1s"
        wrapperIconTg.style.width = "40px"
        iconTg.style.fill = "black"
    }
    let wrapperIconFacebook = document.querySelector(".svg-logo__wrapper-facebook")
    wrapperIconFacebook.onmouseenter = () => {
        wrapperIconFacebook.style.width = "100px"
        wrapperIconFacebook.style.transition = "1s"
        iconFacebook.style.fill = "#0057FF"
    }
    wrapperIconFacebook.onmouseleave = () => {
        wrapperIconFacebook.style.width = "40px"
        wrapperIconFacebook.style.transition = "1s"
        iconFacebook.style.fill = "black"
    }
    let wrapperIconInst = document.querySelector(".svg-logo__wrapper-inst")
    wrapperIconInst.onmouseenter = () => {
        wrapperIconInst.style.width = "100px"
        wrapperIconInst.style.transition = "1s"
        for (let i = 0; i < iconInst.length; i++) {
            iconInst[i].style.fill = "#3049CA";
        }

    }
    wrapperIconInst.onmouseleave = () => {
        wrapperIconInst.style.width = "40px"
        wrapperIconInst.style.transition = "1s"
        for (let i = 0; i < iconInst.length; i++) {
            iconInst[i].style.fill = "black";
        }
    }

    let iconTg = document.querySelector(".tg-logo__path")
    let iconFacebook = document.querySelector(".facebook-logo__path")
    let iconInst = document.querySelectorAll(".inst-logo__path")

    return mediaAnim
}

export function switcher(){
    const contentSwitcher = document.querySelectorAll(".content__img")
    contentSwitcher.forEach(item =>{
        item.onmouseenter = ()=>{
            const sideImg  = item.querySelector("#img_side")
            const frontImg  = item.querySelector("#img_front")
            if(sideImg.classList.contains('active-car')){
                sideImg.classList.remove("active-car")
                sideImg.classList.add("unactive-car")
                frontImg.classList.add("active-car")
            
                frontImg.classList.remove("unactive-car")
            }else{
                sideImg.classList.add("active-car")
                sideImg.classList.remove("unactive-car")
                frontImg.classList.remove("active-car")
                frontImg.classList.add("unactive-car")
            }
    
            
        }
    })
    
    const markImg = document.querySelectorAll("#mark-img")
    markImg.forEach(item =>{
        item.onmouseenter = ()=>{
            item.style.width = "40" + "%"
            item.style.transition = "1s"
        }
        item.onmouseleave = ()=>{
            item.style.width = "30" + "%"
            item.style.transition = "1s"
        }
       
    })
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const slides = document.querySelectorAll('.container__switcher');
    const videos = document.querySelectorAll('.full-screen__bg');
    const currentSlideSpan = document.getElementById('currentSlide');

    const slideOrder = ['chevrolet', 'dodge', 'ford'];
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
            slide.style.display = 'block';
            } else {
            slide.style.display = 'none';
            }
        });

        videos.forEach((video, i) => {
            if (i === index) {
            video.style.display = 'block';
            } else {
            video.style.display = 'none';
            }
        });

        currentSlideSpan.textContent = index + 1;
    }


    prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
    });

    nextButton.addEventListener('click', () => {
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


    const moreBtnChevrolet = document.querySelector('#chevrolet-btn')
    const moreBtnDodge = document.querySelector('#dodge-btn')
    const moreBtnFord = document.querySelector('#ford-btn')

    const btnLine = document.querySelectorAll("#line")
    function btnDecoration(){
        moreBtnChevrolet.onmouseenter = ()=>{
            moreBtnChevrolet.style.background = "#ffae19b3"
            moreBtnChevrolet.style.transition = "1s"
            btnLine.forEach(item =>{
                item.style.width = "65px"
                item.style.marginRight = "5" + "px"
                item.style.transition = "1s"
            })
           
        }
        moreBtnChevrolet.onmouseleave = ()=>{
            moreBtnChevrolet.style.background = "#ffae194f"
            moreBtnChevrolet.style.transition = "1s"
            btnLine.forEach(item =>{
                item.style.width = "50px"
                item.style.marginRight = "20" + "px"
                item.style.transition = "1s"
            })
       
        }

        moreBtnDodge.onmouseenter = ()=>{
            moreBtnDodge.style.background = "#a91313e7"
            moreBtnDodge.style.transition = "1s"
            btnLine.forEach(item =>{
                item.style.width = "65px"
                item.style.marginRight = "5" + "px"
                item.style.transition = "1s"
            })
        }
        moreBtnDodge.onmouseleave = ()=>{
            moreBtnDodge.style.background = "#ff1f1f54"
            moreBtnDodge.style.transition = "1s"
            btnLine.forEach(item =>{
                item.style.width = "50px"
                item.style.marginRight = "20" + "px"
                item.style.transition = "1s"
            })
        }

        moreBtnFord.onmouseenter = ()=>{
            moreBtnFord.style.background = "#050dfdfb"
            moreBtnFord.style.transition = "1s"
            btnLine.forEach(item =>{
                item.style.width = "65px"
                item.style.marginRight = "5" + "px"
                item.style.transition = "1s"
            })
        }
        moreBtnFord.onmouseleave = ()=>{
            moreBtnFord.style.background = "#050dfd50"
            moreBtnFord.style.transition = "1s"
            btnLine.forEach(item =>{
                item.style.width = "50px"
                item.style.marginRight = "20" + "px"
                item.style.transition = "1s"
            })
        }
    }

    btnDecoration()
}

export function userSearch() {
    const btnSearch = document.querySelector(".button-search")
    const closeSearch = document.querySelector(".close-search")
    const searchStroke = document.querySelector(".search-stroke__container")
    const searchStrokeInput = document.querySelector(".search-input")
    const searchList = document.querySelector(".search-stroke__list")
    const header = document.querySelector(".full-screen__header__container ")
    btnSearch.addEventListener("click" ,  () => {
        searchStroke.classList.add("search-stroke__active")
        btnSearch.style.display = "none"
        header.style.display = 'none'
        
    })

    searchStroke.ondblclick = () => {
        searchStroke.classList.remove("search-stroke__active")
        btnSearch.style.display = "block"
        searchList.style.display = "none"
        header.style.display = 'flex'
    }
    searchStrokeInput.addEventListener('input', () => {
        if (searchStrokeInput.value !== '') {
            closeSearch.style.display = 'none';
            searchList.style.display = "flex"
        } else {
            closeSearch.style.display = 'block';
            searchList.style.display = "none"
        }
    });
    return userSearch
}

// export function progressLine() {
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
 

animation()

export default animation