let render = document.querySelector('button[data-action="render"]');
let destroy = document.querySelector('button[data-action="destroy"]');
let input = document.querySelector('#controls > input');
const boxes = document.querySelector('#boxes');

function createDives(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    size += 10;
    let createDiv = document.createElement('div');
    boxes.appendChild(createDiv);
    createDiv.style.width = `${size}px`;
    createDiv.style.height = `${size}px`;
    createDiv.style.backgroundColor =
      '#' + ((Math.random() * 0xfffff0) << 0).toString(16);
  }
}

render.addEventListener('click', createBoxes);

function createBoxes() {
  let value = Number(input.value);
  createDives(value);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
destroy.addEventListener('click', destroyBoxes);
