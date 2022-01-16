// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputSymbolsEl = document.querySelector('#validation-input');

inputSymbolsEl.addEventListener("blur", (event) => {
    event.currentTarget.value.length === Number(inputSymbolsEl.dataset.length)
    ? inputSymbolsEl.setAttribute("class", "valid")
    : inputSymbolsEl.setAttribute("class", "invalid");
    console.log(event.currentTarget.value.length);    
    console.log(Number(inputSymbolsEl.dataset.length));    
});
