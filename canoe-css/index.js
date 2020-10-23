const menu = document.querySelector('#nav-menu');
const burgerIcon = document.querySelector('#burger-icon');

window.onload = function() {
    if (window.innerWidth <= 768) {
        menu.classList.add('hidden');
        burgerIcon.classList.remove('hidden');
    }
}

burgerIcon.addEventListener('click', function() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})

window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        menu.classList.add('hidden');
        burgerIcon.classList.remove('hidden');
    } else {
        menu.classList.remove('hidden');
        burgerIcon.classList.add('hidden');
    }
})