require('./style.css');

const burgerShowMenu = document.querySelector('.menuBurger-header');
const menu = document.querySelector('.menu');
const burgerHideMenu = document.querySelector('.button-hide-menu');

burgerShowMenu.onclick = function() {
    menu.classList.add('showMenu');
}

burgerHideMenu.onclick = function() {
    menu.classList.remove('showMenu');
}