
 #### Tags:
# # # #	
---	

### grid-template-columns
### grid-template-rows

```css
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 20% 20% 20% 20%;

-------------------------------------------
25 - кубиков
```
	
----

### grid-column
Позиция grid в ряд  
	
	
	
### grid-column-end	
количество grid в ряд 
	
### grid-gap
```css 
grid-colum-gap: 10px;
grid-row-gap: 10px;
grid-gap: 10px; 
// оступы п овертикали и по горизонтали 
```

----

### minmax
```css
.container {
	grid-auto-rows: minmax(200px, auto); 
	
	// первое минимальное значение, второе максимальное значение, значение - auto, будет подстраиватся под количество текста в блоке
	
}
```
	
-----
### justify-content
```css
justify-content: center/start/end
```

---
### align-content
```css
align-content: center/end/start
```


###  justify-items,  align-items
элементы в которых свободное пространство выставляются относительно ячейки 


### justify-self, align-self
Принцип тот же что и выше , но работает с одни элементом 
 
----
### end, start 
```css
grid-row-start: 1;
grid-row-end: 2;
grid-column-end: 1;
grid-column-start: 2;

```

### grid-colum, grid-row
более короткая запись 
```css
grid-colum: 1/3;
```

---

#### Links:
   [[]]	
   [[]]
	
##### Source:
   []()
	
		
	


