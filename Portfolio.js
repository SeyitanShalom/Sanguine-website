"use strict";

const header = document.querySelector("header");
const sticky = document.querySelector(".sticky");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});
