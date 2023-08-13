'use strict';

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('nav-window-scroll', window.scrollY > 0)
})