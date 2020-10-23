const mobileMenu = document.querySelector('.nav-menu-mobile');
const navOpener = document.querySelector('.nav-opener');
const menu = document.querySelector('.nav-menu');

window.addEventListener('resize', function() {
  if (window.innerWidth <= 768) {
    menu.classList.add('hidden');
    navOpener.classList.remove('hidden');
  } else {
    menu.classList.remove('hidden');
    navOpener.classList.add('hidden');
    if (!(mobileMenu.classList.contains('hidden'))) {
      mobileMenu.classList.add('hidden');
    }
  }
})

navOpener.addEventListener('click', function() {
  if (mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('hidden');
  }
})