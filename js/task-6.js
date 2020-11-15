const input = document.querySelector('#validation-input');
console.log('input', input.dataset.length);

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  event.currentTarget.value.length === Number(input.dataset.length)
    ? input.classList.add('valid') || input.classList.remove('invalid')
    : input.classList.add('invalid') || input.classList.remove('valid');
}
