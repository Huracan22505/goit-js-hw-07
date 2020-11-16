const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const input = document.querySelector('#controls > input');
const boxes = document.querySelector('#boxes');

let dives = [];

function createDives(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    size += 10;
    let createDiv = document.createElement('div');
    createDiv.style.width = `${size}px`;
    createDiv.style.height = `${size}px`;
    createDiv.style.backgroundColor =
      '#' + ((Math.random() * 0xfffff0) << 0).toString(16);
    dives.push(createDiv);
  }
  boxes.append(...dives);
}

render.addEventListener('click', createBoxes);

function createBoxes() {
  let value = Number(input.value);
  createDives(value);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  dives = [];
  input.value = '';
}
destroy.addEventListener('click', destroyBoxes);
