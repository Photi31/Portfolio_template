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


//skills

const skillBlock = document.querySelectorAll('.skills__block');

skillBlock.forEach(function(elem) {
    let percent = elem.childNodes[1].outerText;
    let nowSkills = elem.childNodes[2].children[1];
    nowSkills.style.width = `${percent}`;
})