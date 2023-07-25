
const animItems =  document.querySelectorAll("._anim-items")

if(animItems.length > 0 ){
  window.addEventListener('scroll', animOnScroll); 
  function animOnScroll() {
	for (let index = 0; index < animItems.length; index++) {
	  const animItem = animItems[index];
	  const animItemHeight = animItem.offsetHeight;
	  const animItemOffset = offset(animItem).top;
	  const animStart = 4;

	  let animItemPoint = window.innerHeight - animItemHeight / animStart;
	  if (animItemHeight > window.innerHeight) {
		 animItemPoint = window.innerHeight - window.innerHeight / animStart;
	  }
		 if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
			animItem.classList.add('_anim-active');
		 } else {
		  if(animItem.classList.contains('_anim-no-hide')) {
			animItem.classList.remove('_anim-active');
		 }
	  }
  } 
}
function offset(el) {
	const rect = el.getBoundingClientRect(),
	  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
}   
  animOnScroll(() => {
	  animOnScroll();
  }, 300); 

}

// function init(input, shadow) {
// 	// дублируем стили input'a в div, это не обязательно - можно обойтись только конкретными
// 	const style = getComputedStyle(input);
// 	const exclude = /\b(fill|stroke|color)\b/;
// 	Array.from(style).forEach(
// 	  property => !exclude.test(property) && (shadow.style[property] = style[property])
// 	)
  
// 	// input скролится при переполнении, учитываем это
// 	function onscroll() {
// 	  shadow.style.left = -input.scrollLeft + 'px';
// 	}
	
// 	function oninput() {
// 	  shadow.innerHTML = '';
// 	  if(!input.value) return;
// 	  shadow.append(input.value.slice(0, -1));
	  
// 	  // оборачиваем последний символ в анимированый span, по хорошему тут надо оборачивать "разницу" с пердыдущим состоянием, но это уже самостоятельно
// 	  const span = document.createElement('span');
// 	  span.append(input.value.slice(-1));
	  
// 	  span.className = 'last-symbol';
// 	  shadow.append(span);
// 	}
  
// 	input.addEventListener('scroll', onscroll)
// 	input.addEventListener('input', oninput)
//   }
  
//   init(document.querySelector('.input'), document.querySelector('.input-shadow'));

