const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', () => {
  for (
    let i = +input.getAttribute('value');
    i < +input.getAttribute('max');
    i++
  ) {
    text.style.color = `#${Math.random().toString(16).substr(-6)}`;
    text.style.fontSize = input.value + 'px';
  }
});
