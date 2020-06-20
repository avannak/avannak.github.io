AOS.init();
var openingpic = document.getElementById("openingpic");
var showwavydescbutton = document.getElementById("showwavydescription");
var wavydesc = document.getElementById("wavydescription");


  $(document).ready(function() {
    $('#view_details').on('click', function(){
        $('#hidden').toggle();
    
    });
});
  $("#showadultingappdescription").click(function(){
    $("#adultingappdescription").toggle();
  });
  $("#showmusicwebsitedescription").click(function(){
    $("#musicwebsitedescription").toggle();
  });
  $("#showweatherappdescription").click(function(){
    $("#weatherappdescription").toggle();
  });
  $("#showsnakegamedescription").click(function(){
    $("#snakegamedescription").toggle();
  });
  $("#showlavalampappdescription").click(function(){
    $("#lavalampappdescription").toggle();
  });





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
    $('html, body').animate({scrollTop : 0},800);
}
$('.scrollTo').click(function(){
    var getElement = $(this).attr('href');
    if($(getElement).length){
        var getOffset = $(getElement).offset().top;
        $('html,body').animate({
            scrollTop:getOffset
        }, 1000);
        }
        return false;
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
}
