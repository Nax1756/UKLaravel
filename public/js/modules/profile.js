"use strict"

function formRegister(){
    const selectRegister = document.querySelector("#register")
    const selectLogin = document.querySelector("#auth")
    const popupRegister = document.querySelector(".popup-register")
    const popupLogin = document.querySelector(".popup-login")
    const closePopup =document.querySelectorAll(".close-popup")
    const popup = document.querySelector(".popup-container")

    closePopup.forEach(item =>{
        item.onclick = ()=>{
            popup.style.display = "none"
        }
    })

    selectRegister.onclick = ()=>{
        popupRegister.style.display = "flex"
        popupLogin.style.display = "none"
    }
    selectLogin.onclick = ()=>{
        popupLogin.style.display = "flex"
        popupRegister.style.display = "none"
    }
}
formRegister()