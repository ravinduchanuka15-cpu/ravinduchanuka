
// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-dark/90', 'shadow-lg');
        navbar.classList.remove('glass');
    } else {
        navbar.classList.remove('bg-dark/90', 'shadow-lg');
        navbar.classList.add('glass');
    }
});

console.log("R.C.MOBILE Website Loaded Successfully");
