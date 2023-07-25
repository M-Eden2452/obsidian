 #### Tags:
 #js #🌱  #💻  
 	
---	
## Размеры окна браузера 

### `clientWidth` и `clientHeight` 
```JS
 Доступная ширина и высота окна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

//-----------

// Ширина и высота окна вместе с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);
------------------------------------------------------

```


### Ширина и высота 
Включая прокрученную часть 
```JS
// Ширина и высота документа // включая прокрученную часть
let scrollwidth = Math.max(
document.body.scrollwidth, document.documentElement.scrollwidth, document.body.offsetwidth, document.documentElement.offsetwidth, document.body.clientwidth, document.documentElement.clientwidth );

let scrollHeight = Math.max(
document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight,
document.body.clientHeight,  document.documentElement.clientHeight);

console.log(scrollwidth); 
console.log(scrollHeight);

------------------------------------------------------

```
	
	
### `pageYOffset`  и  `pageXOffset`

работают только для чтения
```JS
const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);
------------------------------------------------------

```


## Скрол 

### `scrollBy`
каждый раз от 50px
```js
function setScrollBy() {
   window.scrollBy(0, 50);
   const windowScrollTop = window.pageYOffset;
   console.log(windowScrollTop);
}
```
	
	
	
	
### `scrollTo`	
Метод (pageX, pageY) прокручивает страницу на абсолютные координаты(pageX, pageY).
тоже самое что и window.`scroll`()

каждый раз от 0 до 50 
```js
function setScrollTo() {
	window.scrollTo(0, 50);
	const windowScrollTop = window.pageYOffset;
	console.log(windowScrollTop);
}

function setScrollToOptions() {
	window.scrollTo({
		top: 500,
		left: 0,
		// smooth, instant,
		// либо auto; по умолчанию auto
		behavior: "smooth"
	});
}
// Опции не работают в Safari	
```

### `setScrollIntoView`
```JS

Вызов elem.scrollIntoView(top) прокручивает страницу,
чтобы elem оказался вверху.У него есть один аргумент:

- если top = true(по умолчанию), то страница будет прокручена,
чтобы elem появился в верхней части окна.
Верхний край элемента совмещён с верхней частью окна.
- если top = false, то страница будет прокручена, чтобы elem
появился внизу.Нижний край элемента будет совмещён с нижним краем окна.

function setScrollIntoView(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
	const lessonSelected = document.querySelector('.lesson__selected');
	lessonSelected.scrollIntoView({
		//"start", "center", "end" или "nearest". По умолчанию "center".
		block: "center",
		//"start", "center", "end" или "nearest". По умолчанию "nearest".
		inline: "nearest",
		// "auto" или "smooth". По умолчанию "auto".
		behavior: "smooth"
	});
}
// Опции не работают в Safari

------------------------------------------------------

```
	
### Запретить прокрутку
```js
function setEnableDisableScroll() {
	// 1) вариант 
	document.body.style.overflow = "hidden";
	// 2) вариант 
	document.body.classList.toggle('scroll-lock');
}

Для прокрутки страницы из JavaScript её DOM должен
быть полностью построен.
Например, если мы попытаемся прокрутить страницу
из скрипта в <head>, это не сработает.	
```
	
#### Links:
   [[]]	
   [[]]
	
##### Source:
   []()
	
		
	
