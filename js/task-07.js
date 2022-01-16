// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputFontEl = document.querySelector('#font-size-control');
const spanFontEl = document.querySelector('#text');

const inputFont = function (event) {
    spanFontEl.style.fontSize = `${event.currentTarget.value}px`;
    console.log(spanFontEl);
};

