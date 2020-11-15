const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  input.value === ''
    ? (output.textContent = 'незнакомец')
    : (output.textContent = event.currentTarget.value);
}
