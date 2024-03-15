import { goods } from "./db.js";

const container = document.querySelector(".container");

reload(goods, container);

function reload(arr, place) {
    for (let item of arr) {
        let main_div = document.createElement('div');
        let picture = document.createElement('img');
        let describe = document.createElement('div');
        let title = document.createElement('span');
        let p = document.createElement('p');
        let row = document.createElement('div');
        let rate = getRateBlock('../public/icons/dollar.svg', '109');
        let rate2 = getRateBlock('../public/icons/star.svg', '3.9');
        let rate3 = getRateBlock('../public/icons/box.svg', '120');
        let save_button = document.createElement('button');

        main_div.classList.add('item');
        picture.classList.add('item-img');
        describe.classList.add('describe-block');
        row.classList.add('row');
        picture.src = "../public/images/bag.png";
        picture.alt = 'bag';

        title.innerHTML = item.title;
        p.innerHTML = item.description;
        save_button.innerHTML = "В корзину";

        main_div.append(picture, describe);
        describe.append(title, p, row, save_button);
        row.append(rate, rate2, rate3);
        place.append(main_div);
    }
}

function getRateBlock(path, text) {
    let rate = document.createElement('div');
    let img = document.createElement('img');
    let span = document.createElement('span');

    rate.classList.add('rate');
    img.src = path;
    span.innerHTML = text;

    rate.append(img, span);
    return rate;
}

const openButton = document.querySelector('.open-button');
const modal = document.querySelector('.modal');

openButton.onclick = () => {
    modal.style.display = "block";
};

const closeButton = document.querySelector('.close-button');

closeButton.onclick = () => {
    modal.style.display = "none";
};

window.onclick = () => {
    if (window === modal) {
        modal.style.display = "none";
    }
};
