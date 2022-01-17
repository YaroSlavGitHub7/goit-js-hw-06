// 1.Обработка отправки формы form.login-form должна быть по событию submit.+
// 2.При отправке формы страница не должна перезагружаться.+
// 3.Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.+
// 4.Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
// где имя поля будет именем свойства, а значение поля - значением свойства.+
// Для доступа к элементам формы используй свойство elements.+
// 5.Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.+

/*блок выборки элементов */
const formEl = document.querySelector('.login-form'); 

/*блок подписок, вынесен во внешнюю фун-ю*/
formEl.addEventListener('submit', onFormElSubmit); /*событие отправки формы*/

/*блок обработки событий*/
function onFormElSubmit(event) {
    event.preventDefault(); /*предотвратить перегрузку браузера по умолчанию*/
 const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset(); /* перегрузка сброс*/

};



/*Кусок Кода Репеты с видео мод7зан14 мин=39: здесь работает не так */
//  const formData = new FormData(event.curentTarget);
//     console.log(formData);

// formData.forEach((value, name) => {
//     console.log('onFormElSubmit -> name', name);
//     console.log('onFormElSubmit -> value', value);
// });

/*Кусок Кода Репеты с видео здесь выдает ошибку */
    // const onFormElements = event.curentTarget.elements;
    // console.dir(onFormElements);

