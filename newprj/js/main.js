const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function (){
  navIcon.classList.toggle('nav-icon--active');
  nav.classList.toggle('header__top-row--mobile');
  document.body.classList.toggle('no-scroll');
}


/*Phone Mask*/
mask('[data-tel-input]');

// удаляем "+" если ничего не введено 

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});



/* Yandex Mар */

// Функция уmaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
// Создание карты.
var myMap = new ymaps.Map("map", {
// Координаты центра карты.
// Порядок по умолчанию: «широта, долгота».
// Чтобы не определять координаты центра карты вручную,
// воспользуйтесь инструментом Определение координат.
center: [59.936147, 30.343024],
// Уровень масштабирования. Допустимые значения:
// от 0 (весь мир) до 19.
zoom: 16
});
}