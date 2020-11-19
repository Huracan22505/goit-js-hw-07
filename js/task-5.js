const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

// input.setAttribute('onkeyup', 'this.value = this.value.replace(/[0-9]/g,"");');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  output.textContent =
    input.value.trim() === '' ? 'незнакомец' : event.currentTarget.value;
}
