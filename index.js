//----------Scroll Icon------------//
//Get the button
var mybutton = document.getElementById("mybtn");
    
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//-------------Scroll Reveal--------------//
ScrollReveal(
  { 
    //reset: true,
    duration: 2500,
    distance: '50px',
    delay: 400,
   });

ScrollReveal().clean('.title-content' , { delay: 100 });    
ScrollReveal().reveal('.main-title', { delay: 100, origin: 'left' }); 
ScrollReveal().reveal('.product-details-1', { delay: 50, origin: 'top' }); 
ScrollReveal().reveal('.product-details-2', { delay: 70, origin: 'bottom' }); 
ScrollReveal().reveal('.product-details-3', { delay: 90, origin: 'right' }); 
ScrollReveal().reveal('.latest', { delay: 50, origin: 'bottom' }); 
ScrollReveal().reveal('.testimony-person', { delay: 50, origin: 'bottom' }); 
ScrollReveal().reveal('.partners-logo', { delay: 50, origin: 'right' }); 