// открытие - закрытие бокового меню
const body = document.querySelector('.page');
const hasClass = document.querySelector('.closed-menu');
const menuBtn = document.querySelector('.open-menu-btn');

menuBtn.addEventListener('click', () => {
    body.classList.toggle('closed-menu');
});

//Взаимодействие с меню второго уровня
const submenuItem = document.querySelectorAll('.nav__link-icon');
const submenu = document.querySelector('.nav__item-submenu');
for(let i = 0; i < submenuItem.length; i++) {
    const item = submenuItem[i];
    item.addEventListener('click', () => {
        submenu.classList.toggle('nav__item-submenu_active');
        item.classList.toggle('nav__link-icon_active');
    })
}

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