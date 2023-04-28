let logo = document.getElementById("sitelogo");
let gifSrc = "./img/logo-animated.gif";
let imgSrc = "./img/logo.png";
function logoSpin() {
    logo.src = gifSrc;
}
function logoStop() {
    logo.src = imgSrc;
}

// Automatic Slideshow 

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function onclickAlert() {
  alert("This is a placeholder")
}

// homepage newsletter subscribe button alert

function subscribe(){
  alert("Subscribed!");
}


// parallex effect on about us page
const text = document.querySelector('#textaboutus');
const image = document.querySelector('#imageaboutus');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  const textY = text.offsetTop;
  const imageY = image.offsetTop;
  const textSpeed = 0.5;
  const imageSpeed = 0.2;

  text.style.transform = `translateY(${scrollY * textSpeed}px)`;
  image.style.transform = `translateY(${(scrollY - imageY) * imageSpeed}px)`;
});

window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  let parallax = document.querySelector(".parallax-content");
  parallax.style.transform = `translateY(${offset * 0.4}px)`;
});




