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
const tableDots = document.querySelectorAll('.table-row__btn');

for(let i = 0; i < tableDots.length; i++) {
    const tableItem = tableDots[i];
    tableItem.addEventListener('click', (evt) => {
        const tableList = evt.target.closest('.table-row__wrap').querySelector('.table-row__cells');
        tableList.classList.toggle('active');
        const tableRow = evt.target.closest('.table-row__sect');
        tableRow.classList.toggle('table-row__sect_active');
    })
}