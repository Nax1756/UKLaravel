"use strict"
document.addEventListener("DOMContentLoaded" , validation())
export function validation() {
    let exam = {
      name: false,
      patronymic: false,
      surname: false,
      phone: false,
      deliveryDepartment: false,
      deliverySolo: false,
      sended: false
    } 
    console.log(exam.sended)

   
    function countTrueProperties(obj) {
      let count = 0;
      for (let prop in obj) {
        if (obj[prop] === true) {
          count++;
        }
      }
      
      return count;
    }
    document.getElementById("name").addEventListener("input", validateName);
    document.getElementById("patronymic").addEventListener("input", validatePatronymic);
    document.getElementById("surname").addEventListener("input", validateSurname);
    document.getElementById("phone").addEventListener("input", validatePhone);
    document.getElementById("delivery-department").addEventListener("input", validateDeliveryDepartment);
    document.getElementById("delivery-solo").addEventListener("input", validateDeliverySolo);


    function validateName() {
        var nameInput = document.getElementById("name");
        var parentDiv = nameInput.parentElement;
        var regex = /^[A-Za-zА-Яа-яЁё]+$/;
        
        if (nameInput.value.trim() === '' || !regex.test(nameInput.value)) {
          parentDiv.style.border = "2px solid red";
          exam.name = false
        } else {
          parentDiv.style.border = "2px solid transparent";
          exam.name = true
        }
        
        checkAllFields();
      }
      
    function validatePatronymic() {
        var patronymicInput = document.getElementById("patronymic");
        var parentDiv = patronymicInput.parentElement;
        var regex = /^[A-Za-zА-Яа-яЁё]+$/;
        
        if (patronymicInput.value.trim() === '' || !regex.test(patronymicInput.value)) {
          parentDiv.style.border = "2px solid red";
          exam.patronymic = false
        } else {
          parentDiv.style.border = "2px solid transparent";
          exam.patronymic = true
        }
        
        checkAllFields();
    }
      
    function validateSurname() {
        var surnameInput = document.getElementById("surname");
        var parentDiv = surnameInput.parentElement;
        var regex = /^[A-Za-zА-Яа-яЁё]+$/;
        
        if (surnameInput.value.trim() === '' || !regex.test(surnameInput.value)) {
          parentDiv.style.border = "2px solid red";
          exam.surname = false
        } else {
          parentDiv.style.border = "2px solid transparent";
          exam.surname = true
        }
        
        checkAllFields();
    }
      
    function validatePhone() {
        var phoneInput = document.getElementById("phone");
        var parentDiv = phoneInput.parentElement;
        var regex = /^\d+$/;
        
        if (phoneInput.value.trim() === '' || !regex.test(phoneInput.value)) {
          parentDiv.style.border = "2px solid red";
          exam.phone = false
        } else {
          parentDiv.style.border = "2px solid transparent";
          exam.phone = true
        }
        
        checkAllFields();
    }
      
    function validateDeliveryDepartment() {
        var deliveryDepartmentInput = document.getElementById("delivery-department");
        var parentDiv = deliveryDepartmentInput.parentElement;
        var regex = /(http|https|ftp):\/\/[^\s/$.?#].[^\s]*/i;
        
        if (deliveryDepartmentInput.value.trim() === '' || !regex.test(deliveryDepartmentInput.value)) {
          parentDiv.style.border = "2px solid red";
          exam.deliveryDepartment = false
        } else {
          parentDiv.style.border = "2px solid transparent";
          exam.deliveryDepartment = true
        }
        
        var deliverySoloInput = document.getElementById("delivery-solo");
        if (deliveryDepartmentInput.value.trim() !== "") {
          deliverySoloInput.disabled = true;
          deliverySoloInput.value = "";
          exam.deliverySolo = true
          parentDiv.style.border = "2px solid transparent";
        } else {
          deliverySoloInput.disabled = false;
          exam.deliverySolo = false
        }
        
        checkAllFields();
    }
    const acceptSolo = document.querySelector(".accept-solo")
  
    function validateDeliverySolo() {
        var deliverySoloInput = document.getElementById("delivery-solo");
        var parentDiv = deliverySoloInput.parentElement;
        var regex = /^[\d\s]+$/;
        
        if (deliverySoloInput.value.trim() === '' || !regex.test(deliverySoloInput.value)) {
          parentDiv.style.border = "2px solid red";
          exam.deliverySolo = false
        } else {
          parentDiv.style.border = "2px solid transparent";
          exam.deliverySolo = true
        }
        
        var deliveryDepartmentInput = document.getElementById("delivery-department");
        if (deliverySoloInput.value === "1") {
          deliveryDepartmentInput.disabled = true;
          deliveryDepartmentInput.value = "";
        } else {
          deliveryDepartmentInput.disabled = false;
        }
        checkAllFields();
    }
    const sendPhoto = document.querySelector(".send-photo")
    const imageContainer = document.getElementById("imageContainer")
    const deleteButton = document.getElementById('deleteButton');

   
    sendPhoto.addEventListener("click", function() {
      if (imageContainer.hasAttribute("image-add")) {
        exam.sended = true
        checkAllFields() 
      }
    });
    // deleteButton.addEventListener('click', function() {
    //   if(!sendPhoto.hasAttribute("sended")){
    //     exam.sended = false
    //     checkAllFields()  
    //   }
    
    // });

    const uniqueInput = document.querySelector("#unique-value")
    const uniqueInputImage  = document.querySelector("#unique-input__value")
    uniqueInput.value = localStorage.getItem("userId")
    uniqueInputImage.value =  localStorage.getItem("userId")
    
    function checkAllFields() {
      console.log(exam)
        var toCheckedButton = document.querySelector(".send-data");
        if (countTrueProperties(exam) == 6 ){
          toCheckedButton.style.display = "block"
         
        }else if(countTrueProperties(exam) < 6){
          toCheckedButton.style.display = "none"
          
        }
    }
       
}
validation()