// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
};

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// tap on window
window.addEventListener('click', function(e){
  if(e.target != hamburger && e.target != navMenu){
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// back to top scroll
const scrollToTopButton = document.getElementById('scrollToTopButton');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.remove('hidden');
  } else {
    scrollToTopButton.classList.add('hidden');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth'});
});

// dark mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
  if(darkToggle.checked){
    html.classList.add('dark');
    localStorage.theme = 'dark'
  } else{
     html.classList.remove('dark');
     localStorage.theme = 'light'
  }
});

// memindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}