//=require node_modules/picturefill/dist/picturefill.min.js

var contactsMap = document.querySelector(".contacts__map--no-js");
contactsMap.classList.remove("contacts__map--no-js");
contactsMap.classList.add("contacts__map--js");

var mainNav = document.querySelector(".main-nav--no-js");
mainNav.classList.remove("main-nav--no-js");
mainNav.classList.add("main-nav--js");

function toggleMenu(e) {
  var topMenu = document.querySelector('.main-nav');
  e.preventDefault();

  if (topMenu.classList.contains('main-nav--opened')) {
    topMenu.classList.remove('main-nav--opened');
    topMenu.classList.add('main-nav--closed');
  } else {
    topMenu.classList.add('main-nav--opened');
    topMenu.classList.remove('main-nav--closed');
  }
}

var menuButton = document.querySelector('.main-nav__toggle');
menuButton.addEventListener('click', toggleMenu);
