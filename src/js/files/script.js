// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const html = document.querySelector('html');
const headerList = document.querySelector('.header__container');

document.addEventListener("click", function (e) {
	if (headerList.classList.contains('_active-menu') && !e.target.closest('.main-header__list')) {
		html.classList.toggle('menu-open')
		headerList.classList.toggle('_active-menu')
	} else if (e.target.closest('.menu__icon')) {
		html.classList.toggle('menu-open')
		headerList.classList.toggle('_active-menu')
	}
});
/*
//run-line
let runLine = document.querySelector('.page__runline');
let text = runLine.innerHTML;
function runStroke() {
	text = text[text.length - 1] + text.substring(0, text.length - 1);
	runLine.innerHTML = text;

}
setInterval(runStroke, 1000);

*/
tippy('[data-tippy-content]', {
	content: "I'm a Tippy tooltip!",
});