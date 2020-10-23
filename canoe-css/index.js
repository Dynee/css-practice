const menu = document.querySelector('.nav-menu');
const navOpener = document.querySelector('.nav-opener');

window.onload = function() {
    if (window.innerWidth <= 768) {
        menu.classList.add('hidden');
        navOpener.classList.remove('hidden');
    }
}

navOpener.addEventListener('click', function() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})

window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        menu.classList.add('hidden');
        navOpener.classList.remove('hidden');
    } else {
        menu.classList.remove('hidden');
        navOpener.classList.add('hidden');
    }
})