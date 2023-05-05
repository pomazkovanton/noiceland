const menu = document.querySelector('.header__nav');
const page = document.querySelector('.page');

// Кнопки
const buttonMenu = document.querySelector('.header__nav-btn');

// Иконки
const iconOpenMenu = buttonMenu.querySelector('.header__nav-ico-menu');
const iconCloseMenu = buttonMenu.querySelector('.header__nav-ico-cross');

// Открытие / Закрытие меню
const toggleMenu = () => {
  iconOpenMenu.classList.toggle('header__nav-ico-menu_show');
  iconCloseMenu.classList.toggle('header__nav-ico-cross_show');
  menu.classList.toggle('header__nav_opened');
  page.classList.toggle('overflow');
};

buttonMenu.addEventListener('click', toggleMenu);