```JS
 function Calculator() {

  this.read = function() {
    this.a = +prompt('какое число а?', 0);
    this.b = +prompt('какое число b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mu1 = function() {
    return this.a * this.b;
  };

}
  let calculator = new Calculator();
  calculator.read();

  alert("Получаем суммирование= " + calculator.sum() );
  alert("Получаем умножение= " + calculator.mu1() );
------------------------------------------------------

```


```JS
function Accumulator(startingValue) { 

	this.value = startingValue; 
	this.read = function() { 
	this.value += +prompt('Сколько нужно добавить?', 0); }; } 
	
	let accumulator = new Accumulator(1); 
	accumulator.read(); 
	accumulator.read(); 
	alert(accumulator.value);
------------------------------------------------------

```
