require('./style.css');

const burgerShowMenu = document.querySelector('.menuBurger-header');
const menu = document.querySelector('.menu');
const burgerHideMenu = document.querySelector('.button-hide-menu');
const page = document.querySelector('.page');

burgerShowMenu.onclick = function() {
    menu.classList.add('showMenu');
    menu.style.display = 'block';
    page.classList.add('no-scroll');
}

burgerHideMenu.onclick = function() {
    menu.classList.add('againHide');
    page.classList.remove('no-scroll');
    setTimeout(()=> {
        menu.style.display = 'none';
        menu.classList.remove('showMenu');
        menu.classList.remove('againHide');
    }, 1000)
}