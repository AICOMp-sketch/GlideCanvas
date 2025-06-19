// script.js

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

function openMobileMenu() {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenuOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
}

function closeMobileMenu() {
    mobileMenu.classList.add('translate-x-full');
    mobileMenuOverlay.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

mobileMenuButton.addEventListener('click', openMobileMenu);
closeMobileMenuButton.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu); // Close when clicking outside menu

// Smooth scroll for navigation links (optional, but good for UX)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        closeMobileMenu(); // Close mobile menu after clicking a link
    });
});
