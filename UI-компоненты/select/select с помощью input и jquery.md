

![[attachments/chrome_0KEGBShPTl.mp4]]

https://codepen.io/calliko/pen/RwrwGPW

```html

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script><div class="select">
    <input class="select__input" type="hidden" name="">
    <div class="select__head">Выберите</div>
    <ul class="select__list" style="display: none;">
        <li class="select__item">Стилизация select CSS</li>
        <li class="select__item">Стилизация select JavaScript</li>
        <li class="select__item">Стилизация select, используя input</li>
    </ul>
</div>
------------------------------------------------------

```

```css
.select {
    position: relative;
    display: block;
    min-width: 220px;
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
}

.select__head {
    width: 100%;
    max-width: 100%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 14px 15px;
    font-size: 14px;
    line-height: 18px;
    color: rgba(66, 67, 72, 0.8);
    cursor: pointer;
}

.select__head::after {
    width: 10px;
    height: 6px;
    background: #FFF url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M4.50495 5.78413L0.205241 1.25827C-0.0684138 0.970375 -0.0684138 0.503596 0.205241 0.215836C0.478652 -0.0719461 0.922098 -0.071946 1.19549 0.215837L5.00007 4.22052L8.80452 0.215953C9.07805 -0.0718292 9.52145 -0.0718292 9.79486 0.215953C10.0684 0.503736 10.0684 0.970492 9.79486 1.25839L5.49508 5.78425C5.35831 5.92814 5.17925 6 5.00009 6C4.82085 6 4.64165 5.928 4.50495 5.78413Z' fill='%23ED266A'/%3E%3C/svg%3E%0A") no-repeat center / cover;
    position: absolute;
    right: 20px;
    bottom: 50%;
    transform: translateY(50%);
    content: '';
    display: block;
    transition: .2s ease-in;
}

.select__head.open::after {
    transform: translateY(50%) rotate(180deg);
}

.select__list {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin-top: 5px;
    max-height: 205px;
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 100;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #424348;
    scrollbar-color: dark;
    scrollbar-width: thin;
    overscroll-behavior: contain;
}

.select__list::-webkit-scrollbar {
    width: 7px;
    background-color: #F8F9FA;
    padding: 5px;
}

.select__list::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #D9D9D9;
}

.select__list .select__item {
    position: relative;
    border-top: 1px solid rgba(224, 229, 231, 0.5);
    padding: 10px 15px;
    cursor: pointer;
    list-style-type: none;
}

.select__list .select__item:hover {
    background-color: rgba(224, 229, 231, 0.5);
}
%%------------------------------------------------------%%



```


```JS
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});
------------------------------------------------------

```
