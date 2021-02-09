const input = document.querySelector('#validation-input');

// input.setAttribute(
//   'onkeyup',
//   'this.value = this.value.replace(/[^a-z0-9]/gi,"");',
// );

input.addEventListener('input', () => {
  input.value = input.value.replace(/[^a-z0-9]/gi, '');
});

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.target.value.length === 0) {
    input.classList.remove('invalid');
    input.classList.remove('valid');
  } else if (
    event.currentTarget.value.length === Number(input.dataset.length)
  ) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
