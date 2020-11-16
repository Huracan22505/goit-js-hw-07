import ingredients from './data/ingredients.js';

const listItem = document.querySelector('#ingredients');

let items = [];
for (let i = 0; i < ingredients.length; i++) {
  let createLi = document.createElement('li');
  createLi.textContent = ingredients[i];
  items.push(createLi);
}

listItem.append(...items);
