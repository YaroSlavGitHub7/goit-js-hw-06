// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль +
// // при клике на button.change - color и выводит значение цвета в span.color. +
// Для генерации случайного цвета используй функцию getRandomHexColor. +


const getButtonChangeColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

getButtonChangeColorEl.addEventListener('click', onChangeColorEl); 

function onChangeColorEl() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColorEl.textContent = `${color}`;
};

