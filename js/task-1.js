const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории`);

categories.forEach(el =>
  console.log(
    `Категория: ${el.firstElementChild.textContent}\nКоличество элементов: ${el.lastElementChild.children.length}`,
  ),
);
