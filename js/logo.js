let logo = document.getElementById("sitelogo");
let gifSrc = "./img/logo-animated.gif";
let imgSrc = "./img/logo.png";
function logoSpin() {
    logo.src = gifSrc;
}
function logoStop() {
    logo.src = imgSrc;
}