require('./style.css');

const burgerShowMenu = document.querySelector('.menuBurger-header');
const menu = document.querySelector('.menu');
const burgerHideMenu = document.querySelector('.button-hide-menu');
const page = document.querySelector('.page');
const dots = document.getElementsByClassName('dot-item');
const offerBlock = document.querySelector('.offer-list-container');

const offerItems = [
    {id: 1, class: "offer-high-level", title: "Высокий уровень исполнения "},
    {id: 2, class: "offer-awards", title: "Гарантируем качество работы"},
    {id: 3, class: "offer-stopwatch", title: "Выполним работу быстро"},
    {id: 4, class: "offer-mail", title: "Обеспечим поток заявок"},
    {id: 5, class: "offer-automat", title: "Автоматизируем работу "},
    {id: 6, class: "offer-design", title: "Разработаем уникальный дизайн"},
    {id: 7, class: "offer-code", title: "Напишем чистый код"},
    {id: 8, class: "offer-advertisement", title: "Контекстная реклама"},
    {id: 9, class: "offer-advertisement_2", title: "Третированная реклама"},
    {id: 10, class: "offer-seo", title: "SEO продвижение"}
]


burgerShowMenu.onclick = function() {
    menu.style.display = 'block';
    menu.classList.add('showMenu');
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

offerItems.map(item => {
    const divContainer = document.createElement('div');
    const divIcon = document.createElement('div');
    const spanTitle = document.createElement('span');
    spanTitle.classList.add('offer-item-title');
    spanTitle.innerHTML = item.title;
    divIcon.classList.add(`${item.class}`);
    divContainer.classList.add(`offer-item`);
    if(item.id % 5 !== 0) {
        divContainer.classList.add('offer-item-right-border');
    }
    divContainer.appendChild(divIcon);
    divContainer.appendChild(spanTitle);
    offerBlock.appendChild(divContainer);
})