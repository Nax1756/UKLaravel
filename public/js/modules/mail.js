"use strict"
export function redirectToGmail() {
    const link = document.querySelector(".info-block__email-link")
    var email = 'ukserviceofficial@gmail.com';
    var subject = 'Autoparts'; 

    var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(email) + '&su=' + encodeURIComponent(subject);
    link.onclick = () => window.location.href = gmailUrl;
}
redirectToGmail()