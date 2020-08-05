AOS.init();
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
window.addEventListener('load', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
var aboutcontainer = document.getElementById("aboutcontainer");
var sidenav = document.getElementById("mySidenav");



var openingpic = document.getElementById("openingpic");
var navisopen = false;



function openNav() {
  navisopen = true;

  document.getElementById("mySidenav").style.width = "35vmin";
  document.getElementById("mySidenav").style.height = "fit-content";

  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  $('.menu-toggler').hide();
}

function closeNav() {

  navisopen = false;

  document.getElementById("mySidenav").style.width = "0";

  document.body.style.backgroundColor = "white";
  $('.menu-toggler').show();
}

sidenav.addEventListener("mouseleave", function () {
  document.getElementById("mySidenav").style.backgroundColor = "rgba(0,0,0,0.0)"
});

sidenav.addEventListener("mouseenter", function () {
  document.getElementById("mySidenav").style.backgroundColor = "rgba(0,0,0,0.4)"
});

$(document).ready(function () {
  $('#view_details').on('click', function () {
    $('#hidden').toggle();

  });
});
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const allmodal = document.getElementsByClassName('modal');
let modalisopen = false;

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal)
    modalisopen = true;
    $("#menutoggler").fadeOut();
    $("#toTop").fadeOut();
    navisopen = false;

    document.getElementById("mySidenav").style.width = "0";

  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
    modalisopen = false;
    $("#menutoggler").fadeIn();
    $("#toTop").fadeIn();

  })
})


function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active');
}
window.onclick = function (event) {
  if (event.target == overlay) {
    for (let i = 0; i < allmodal.length; i++) {
      document.getElementsByClassName("modal")[i].classList.remove("active");
    }

    overlay.classList.remove('active');
    modalisopen = false;
    $("#menutoggler").fadeIn();
    $("#toTop").fadeIn();

  }

}

//Get the button:
mybutton = document.getElementById("toTop");
menutoggler = document.getElementById("menutoggler");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction(), menutogglerscrollFunction() };

function scrollFunction() {

  if (!modalisopen && document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    $("#toTop").fadeOut();
  }
}
function menutogglerscrollFunction() {
  if (!navisopen && !modalisopen && document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    menutoggler.style.display = "flex";


  } else {
    $("#menutoggler").fadeOut();
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('html, body').animate({ scrollTop: 0 }, 800);
}
$('.scrollTo').click(function () {
  var getElement = $(this).attr('href');
  if ($(getElement).length) {
    var getOffset = $(getElement).offset().top;
    $('html,body').animate({
      scrollTop: getOffset
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
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

}

var docWidth = document.documentElement.offsetWidth;



