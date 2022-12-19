// save nav and icon variables
var nav = document.querySelector(".nav");
var icon = document.querySelector(".icon");

// add mobile-menu class to header and change icon source 
function mobileMenu() {
  if (nav.className === "nav") {
    nav.className += " mobile-menu";
    icon.src = "icon-close.8b0baa94.svg";
  } else {
    nav.className = "nav";
    icon.src = "icon-hamburger.9b6ee044.svg";
  }
}

// close mobile menu on and reset icon resize 
function reSize() {
  nav.className = "nav";
  icon.src = "icon-hamburger.9b6ee044.svg";
}