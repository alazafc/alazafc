// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn'); // New close button for menu

burger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Updated to match new class
    burger.classList.toggle('toggle');
    document.body.classList.toggle('no-scroll'); // Prevent scrolling when menu is open
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active'); // Close menu when close button is clicked
    burger.classList.remove('toggle');
    document.body.classList.remove('no-scroll');
});

// Close mobile menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
        document.body.classList.remove('no-scroll');
    });
});

// Modal Logic
const modal = document.getElementById('promoModal');
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal-btn'); // Ensure this matches your modal close button

openModalBtn.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.classList.add('no-scroll'); // Prevent scrolling when modal is open
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.classList.remove('no-scroll');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }
});
