document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 2. Sticky Navbar & Active Link Update on Scroll
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section, header');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Sticky Navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link Highlight
        let current = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Account for navbar height
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // 3. Scroll Reveal Animation
    function reveal() {
        const reveals = document.querySelectorAll('.reveal');
        
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100; // Distance to trigger animation
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    // Trigger reveal on load and scroll
    window.addEventListener('scroll', reveal);
    reveal(); // Initial call
    
});

// Communication functions
function sendViaWhatsApp() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    if(!name || !message) {
        alert("Veuillez remplir votre nom et votre message avant d'envoyer.");
        return;
    }
    
    const text = encodeURIComponent(`Bonjour ETS ACTION MOSALA, je suis ${name}.\n\nMessage: ${message}`);
    window.open(`https://wa.me/243814877000?text=${text}`, '_blank');
}
