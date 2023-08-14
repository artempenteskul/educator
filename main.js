'use strict';


// LOGIC FOR NAVBAR BACKGROUND ON SCROLL
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('nav-window-scroll', window.scrollY > 0)
})


// LOGIC FOR TABS (FAQS)
const faqs = document.querySelectorAll('.faq')
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        }
        else {
            icon.className = 'uil uil-plus'
        }
    })
})


// LOGIC FOR BURGER MENU
const menu = document.querySelector(".nav__menu")
const openMenuBtn = document.querySelector("#open-menu-btn")
const closeMenuBtn = document.querySelector("#close-menu-btn")

openMenuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeMenuBtn.style.display = 'inline-block';
    openMenuBtn.style.display = 'none';
})

closeMenuBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    closeMenuBtn.style.display = 'none';
    openMenuBtn.style.display = 'inline-block';
})
