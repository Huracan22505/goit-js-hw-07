import ingredients from './data/ingredients.js';

const listItem = document.querySelector('#ingredients');

let items = [];

ingredients.map(el => {
  let createLi = document.createElement('li');
  createLi.textContent = el;
  items.push(createLi);
});

listItem.append(...items);
