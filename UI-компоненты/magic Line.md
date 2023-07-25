```JS
document.addEventListener('DOMContentLoaded', () => {

    const nav = document.querySelector('.nav__tabs'),

        navLine = document.querySelector('.quiz__indicator'),

        navItem = document.querySelectorAll('.tabs__item');

    navLine.style.width = `${navItem[0].offsetWidth}px`;

    navItem.forEach(el => {

        el.addEventListener('moussenter', (e)  => {

            navLine.style.width = `${e.currentTarget.offsetWidth}px`;

            navLine.style.left = `${e.currentTarget.offsetLeft}px`

        });

    });

});
------------------------------------------------------

```
