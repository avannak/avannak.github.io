AOS.init();
var openingpic = document.getElementById("openingpic");

var act = $('.navbar').hasClass('open');
$(document).ready(function(){
    

    $('.menu-toggler').on('click', function () {
        
        if(!act){
            
            $(this).toggleClass('open');
        $('.navbar').toggleClass('open');
        }
        
        
       

    });
    
});
var navbar = document.getElementById('navigationbar');
navbar.addEventListener("mouseout", function(){
    navbar.style.background = "transparent";
})
navbar.addEventListener("mouseover", function(){
    navbar.style.background = "rgba(0,0, 0, 0.5)";
})
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
