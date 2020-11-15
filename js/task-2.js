import ingredients from './data/ingredients.js';

const listItem = document.querySelector('#ingredients');

const createItem = ingredient => {
  let createLi = document.createElement('li');
  createLi.textContent = ingredient;
  listItem.appendChild(createLi);
  return createLi;
};

ingredients.map(ingredient => createItem(ingredient));
