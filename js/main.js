// js/main.js - Dark mode only
document.addEventListener('DOMContentLoaded', function() {
    // Scripts loaded
    
    // 1. Set current year in footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // 2. Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            // Toggle mobile menu visibility
            mobileMenu.classList.toggle('mobile-menu-hidden');
            mobileMenu.classList.toggle('mobile-menu-show');
        });
    }
    
    // 3. Apply dark mode as default (no toggle)
    document.documentElement.classList.add('dark');
});