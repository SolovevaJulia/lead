console.log("Подключен");

const buttons = {
    more: document.querySelector(".header-menu-list-item__more"),
    menu: document.querySelector(".header-menu-mobile-button"),
};
const wrapper = {
    menu: document.querySelector(".header-menu-list-mobile"),
    mobile: document.querySelector(".modal-menu"),
};

const listenerButtons = (e) => {
    console.log("buttons", wrapper.menu.style.display);
    if (wrapper.menu.style.display === "block") {
        wrapper.menu.style.display = "none";
    } else {
        wrapper.menu.style.display = "block";
    }
};

buttons.more.addEventListener("click", (e) => listenerButtons(e));
buttons.menu.addEventListener("click", (e) => {
    if (wrapper.mobile.style.display === "flex") {
        wrapper.mobile.style.display = "none";
        document.body.style.overflow = "visible";
    } else {
        document.body.style.overflow = "hidden";
        wrapper.mobile.style.display = "flex";
    }
});

// Настройка ширины линии
let wrapperCard = {
    cardItem: document.querySelectorAll(".card-body"),
    cardItemLenght: document.querySelectorAll(".card-body").length,
};

let cardItemIndex = 0;

const resizeWrapper = () => {
    let cardItem = wrapperCard.cardItem[cardItemIndex];
    if (cardItemIndex === wrapperCard.cardItemLenght) {
        cardItem = 0;
        return;
    } else {
        const t = cardItem.offsetWidth;
        const left = cardItem.querySelector(".card-body-text").offsetWidth;
        const right = cardItem.querySelector(".card-body-num").offsetWidth;
        const line = cardItem.querySelector(".card-body-line");
        const raschet = t - left - right - 20;
        line.style.width = `${raschet}px`;
        cardItemIndex = cardItemIndex + 1;
        resizeWrapper();
    }
};

if (window.innerWidth <= 576) {
    resizeWrapper();
}
