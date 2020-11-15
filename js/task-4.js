const incremButton = document.querySelector("button[data-action='increment']");
const decremButton = document.querySelector("button[data-action='decrement']");
let counterValue = document.querySelector('#value');

decremButton.addEventListener('click', () => {
  counterValue.textContent -= 1;
});

incremButton.addEventListener('click', () => {
  counterValue.textContent = +counterValue.textContent + 1;
});
