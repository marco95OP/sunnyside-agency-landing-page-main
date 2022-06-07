"use strict";

const hamburgerIcon = document.querySelector(".hamburger-icon");
const navLinks = document.querySelectorAll(".nav-links");
const nav = document.getElementsByTagName("nav");

hamburgerIcon.addEventListener("click", () =>{
   nav.classList.toggle("active");
});

navLinks.forEach(function (nav){
    nav.addEventListener("click", function(){
        console.log(this);
    });
});

