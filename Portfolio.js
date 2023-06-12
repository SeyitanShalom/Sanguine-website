"use strict";

// const header = document.querySelector("header");
// const sticky = document.querySelector(".sticky");

// window.addEventListener("scroll", function () {
//   header.classList.toggle("sticky", window.scrollY > 100);
// });

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "seyitanoluwapelumi@gmail.com",
    Password: "shalom03@",
    To: "seyitanoluwapelumi@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
