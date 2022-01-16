// Создай переменную counterValue в которой будет храниться текущее значение счетчика
//  и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;
const getCounterValueEl = document.querySelector('#value');
const decrementListenerBtnEl = document.querySelector('[data-action="decrement"]');
const incrementListenerBtnEl = document.querySelector('[data-action="increment"]');

decrementListenerBtnEl.addEventListener("click", () => {
    counterValue = counterValue - 1;
    getCounterValueEl.textContent = counterValue;
});

incrementListenerBtnEl.addEventListener("click", () => {
    counterValue++
    getCounterValueEl.textContent = counterValue;
});
