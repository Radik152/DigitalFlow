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
];

const offerItemsLastRow = [
    {id: 12, class: 'offer-promotion', title: 'Продвижение в социальных сетях'},
    {id: 14, class: 'offer-awards', title: 'Высокий уровень исполнения '},
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

const buildOfferItem = (item) => {
    const divContainer = document.createElement('div');
    const divIcon = document.createElement('div');
    const spanTitle = document.createElement('span');
    spanTitle.classList.add('offer-item-title');
    spanTitle.innerHTML = item.title;
    divIcon.classList.add(`${item.class}`);
    if(item.id === 12 || item.id === 14) {divContainer.classList.add(`offer-item-low`)}
    else {divContainer.classList.add(`offer-item`)}
    if(item.id % 5 !== 0) {
        divContainer.classList.add('offer-item-right-border');
    }
    divContainer.appendChild(divIcon);
    divContainer.appendChild(spanTitle);
    offerBlock.appendChild(divContainer);
}

const buildEmptyDiv = () => {
    const emptyDiv = document.createElement('div');
    offerBlock.appendChild(emptyDiv);
}

const buildDivWithButton = () => {
    const div = document.createElement('div');
    const button = document.createElement('button');
    const span = document.createElement('span');
    span.textContent = 'Подробнее';
    const arrowDiv = document.createElement('div');
    div.classList.add('offer-button-container');
    button.classList.add('offer-button');
    arrowDiv.classList.add('offer-button-arrow');
    button.appendChild(span);
    button.appendChild(arrowDiv);
    div.appendChild(button);
    offerBlock.appendChild(div);
}

offerItems.map(item => buildOfferItem(item));
buildEmptyDiv();
buildOfferItem(offerItemsLastRow[0]);
buildDivWithButton();
buildOfferItem(offerItemsLastRow[1]);
buildEmptyDiv();