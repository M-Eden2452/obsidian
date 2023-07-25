 #### Tags:
 #js  #🌱  #💻  #	
 
---	
### `onclick`
```JS
<input value="Нажми меня" _onclick__="alert('Клик!')"_ type="button">
-----------------------------------------------------

```


```JS
<script> 
function countRabbits() { 
	for(let i=1; i<=3; i++) { alert("Кролик номер " + i); } } 

</script> <input type="button" _onclick__="countRabbits()"_ value="Считать
------------------------------------------------------

```


### `addEventListener`
```js
const btn = document.querySelector('.button__main');

btn.addEventListener('click', function() {
   console.log('клик');
});

btn.addEventListener('click', function() {
   console.log('sdffdfs');
});
```
	
### `removeEventListener`	

	
	
### `event`	
```JS

const button = document.querySelector('.button'); 
function showConsolt-(event) {

// Тип события
consoLe.Log(event.type);

// Объект на котором сработал обработчик 
consoLe.Log(event.target);

// Объект к которому назначен обработчик 
console.log(event.currentTarget);

// Положение курсора по оси X
consoLe.Log(event.cLientX);

// Положение курсора по оси Y j
console.Log(event.cLientY);

// Все детали события
consoLe.Log(event);
}
button.addEventListener("click", showConsole); button.addEventListener("mouseenter"j showConsoLe);
------------------------------------------------------

```

	
## Всплытие 
 ```JS
// Всплытие и погружение 
const block = document.querySelector('.block');
const blocklnner = document.querySelector(block_____inner’);
const blocklnnerlnner = document.querySelector(block____inner-inner');

Всплытие
Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.
   
block.addEventListener("click", function (event) {
	console.log('Клик на Блок!');
//consoLe.Log(event.target);

});
blocklnner.addEventListener("click", function (event) {
	console.log(’Клик на Блок второго уровня!');
});
blocklnnerlnner.addEventListener("click", function (event) { 
	console.log('Клик на Блок третьего уровня!');
// Остановка всплытия 								    //event.stopPropagation(); 
});
------------------------------------------------------

```

	
## Делегирование событий 
```JS
// Делегирование событий
const lesson = document.querySelector('.lesson'); 

function showConsole() { 
	console.log('Ура!');
}
lesson.addEventListener("click", function (event) { 
     if (event.target.closest('.button')) {  //-- условие отвечает за то, что если даже в баттоне будет какой-то спан например, она будет клик все ровно сработает
	showConsole();
     }
});
------------------------------------------------------
вешаем на родителя кнопок к примеру (все кнопки будут рабоать и более оптимизирование ) 
```

```JS
const menuBody = document.querySelector('.menu'); 

document.addEventListener("click", menu); 

function menu(event) {
   if (event.target.closest('.menu___button')) {
menuBody.classList.toggle('_active');
   }
   if (!event.target.closest('.menu')) { menuBody.classList.remove('_active');
   }
}
---------------------------------------------------
Кликаем по област вне кнопки и меню закрывается. Это более оптимизированый вариант 
```

### Делегирование событий наведения мыши  

![](_attachments/c9bc183c13d69010c8dbce2d82e2bbfe.png)	
```JS
const blockForMouse = document.querySelector('.block-for-mouse');

blockForMouse.addEventListener('mouseenter', function (event) { 
   let target = event.target.closest('span');
// переход не на <span> - игнорировать
   if (Itarget) return;
target.style.cssText = 'background-color: #77608d;';
});

blockForMouse.addEventListener("mouseleave", function (event) { 
   let target = event.target.closest(’span’);
// переход не на <span> - игнорировать
   if (Itarget) return;
   target.style.cssText =
});
------------------------------------------------------

```


#### Links:
   [[]]	
   [[]]
	
##### Source:
   []()
	
		
	
