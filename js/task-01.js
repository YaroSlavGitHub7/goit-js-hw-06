// Напиши скрипт который:
// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

const allUlCategoriesEl = document.querySelectorAll('#categories .item');
const numberOfCategoriesEl = allUlCategoriesEl.length;
console.log(`number of categories: ${numberOfCategoriesEl}`);

allUlCategoriesEl.forEach((element) => {
    const titleOfItemEl = element.firstElementChild.textContent;
    console.log(`title of categories: ${titleOfItemEl}`);
    const itemEl = element.lastElementChild;
const numberOfitemEl = itemEl.querySelectorAll('li');
    console.log(`number of items: ${numberOfitemEl.length}`);
});