//burger

const clickBurger = document.querySelector('.burger');
const closeMenu = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');

clickBurger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});