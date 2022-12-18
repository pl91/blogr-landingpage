// save nav variable
var nav = document.querySelector(".nav");
// add mobile-menu class to header 
function mobileMenu() {
    if (nav.className === "nav") nav.className += " mobile-menu";
    else nav.className = "nav";
}
// close mobile menu on resize 
function reSize() {
    nav.className = "nav";
}

//# sourceMappingURL=index.579125c3.js.map
