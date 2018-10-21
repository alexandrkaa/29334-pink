function toggleMenu(e) {
  var menu = document.querySelector('.main-nav');
  e.preventDefault();

  if (form.classList.contains('main-nav--opened')) {
    form.classList.remove('main-nav--opened');
    form.classList.add('main-nav--closed');
  } else {
    form.classList.add('main-nav--opened');
    form.classList.remove('main-nav--closed');
  }
}

var menuButton = document.querySelector('.main-nav__toggle');
menuButton.addEventListener('click', showForm);
