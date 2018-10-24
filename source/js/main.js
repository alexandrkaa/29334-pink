//=require node_modules/picturefill/dist/picturefill.min.js

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

var contactsMap = document.querySelector(".contacts__map--no-js");
if(contactsMap) {
  contactsMap.classList.remove("contacts__map--no-js");
  contactsMap.classList.add("contacts__map--js");
}

var mainNav = document.querySelector(".main-nav--no-js");
if(mainNav) {
  mainNav.classList.remove("main-nav--no-js");
  mainNav.classList.add("main-nav--js");
  mainNav.classList.remove("main-nav--opened");
  mainNav.classList.add("main-nav--closed");
}

var menuButton = document.querySelector('.main-nav__toggle');
if(menuButton) {
  menuButton.addEventListener('click', toggleMenu);
}
