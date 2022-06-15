"use strict";

function toggleMenu(event) {
    var navBar = document.getElementById("mainNav");
    var expanded = event.currentTarget.getAttribute("aria-expanded");
    if (expanded === "true") {
        navBar.classList.add("closed");
        navBar.classList.remove("opened");
        event.currentTarget.setAttribute('aria-expanded', 'false');
    } else {
        navBar.classList.add("opened");
        navBar.classList.remove("closed");
        event.currentTarget.setAttribute('aria-expanded', 'true');
    }

}

document.getElementById('menuButton').addEventListener('click', toggleMenu, false);