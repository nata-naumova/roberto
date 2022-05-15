// открытие - закрытие бокового меню
const body = document.querySelector('.page');
const hasClass = document.querySelector('.closed-menu');
const menuBtn = document.querySelector('.open-menu-btn');

menuBtn.addEventListener('click', () => {
    body.classList.toggle('closed-menu');
});

//Взаимодействие с меню второго уровня
//dropdown__btn
//dropdown__menu
const menuItem = document.querySelectorAll('.dropdown__btn');
const submenu = document.querySelectorAll('.dropdown__menu');

menuItem.forEach(el => {
    el.addEventListener('click', (e) => {
        let currentItem = e.currentTarget;
        let drop = currentItem.closest('.nav__item').querySelector('.dropdown__menu');
        submenu.forEach(el => {
            if(el !== drop) {
                el.classList.remove('dropdown__menu_active');
            }
        });
        drop.classList.toggle('dropdown__menu_active');
    });
})

//Кнопка в таблице (троеточие)
const menuBtns = document.querySelectorAll('.dropdown-btn');
const drops = document.querySelectorAll('.dropdown');

menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
        let currentBtn = e.currentTarget;
        let drop = currentBtn.closest('.table-row__sect').querySelector('.dropdown');
        drops.forEach(el => {
            if(el !== drop) {
                el.classList.remove('dropdown_active');
            }
        });
        drop.classList.toggle('dropdown_active');
    });
})