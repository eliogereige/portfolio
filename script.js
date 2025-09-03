

// Optimized Portfolio Animations - Lightweight & Fast
document.addEventListener('DOMContentLoaded', function() {
    // Initialize only essential features for performance
    initScrollTriggeredReveals();
    initScrollProgress();
    initSimpleHoverEffects();
    initShootingStars();
    initMobileNavigation(); // Add mobile navigation initialization
});

// Scroll-Triggered Reveal Effects
function initScrollTriggeredReveals() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Reveal section content
                const section = entry.target;
                const sectionContent = section.querySelector('.section-content');
                if (sectionContent) {
                    sectionContent.classList.add('revealed');
                }
                
                // Reveal individual cards with staggered timing
                const cards = section.querySelectorAll('.experience-card, .education-card, .skill-card, .tool-card, .project-card, .leadership-card, .certification-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('revealed');
                    }, index * 100); // 100ms delay between each card
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Magical Shooting Stars - Reduced frequency, less annoying
function initShootingStars() {
    const shootingStars = document.querySelectorAll('.shooting-star');
    
    shootingStars.forEach((star, index) => {
        // Much longer random delay between 2-5 minutes
        const randomDelay = Math.random() * 180 + 120; // 2-5 minutes
        star.style.animationDelay = `${randomDelay}s`;
        
        // Random animation duration between 2-5 seconds
        const randomDuration = Math.random() * 3 + 2;
        star.style.animationDuration = `${randomDuration}s`;
        
        // Random starting position
        const randomY = Math.random() * 80 + 10; // 10% to 90% of viewport height
        star.style.setProperty('--start-y', `${randomY}vh`);
        
        // Random angle between 30-75 degrees
        const randomAngle = Math.random() * 45 + 30;
        star.style.setProperty('--angle', `${randomAngle}deg`);
    });
    
    // Add new shooting stars much less frequently
    setInterval(() => {
        if (Math.random() < 0.02) { // Reduced from 8% to 2% chance
            createRandomShootingStar();
        }
    }, 120000); // Check every 2 minutes instead of 25 seconds
}

// Create additional random shooting stars
function createRandomShootingStar() {
    const shootingStarsContainer = document.querySelector('.shooting-stars');
    if (!shootingStarsContainer) return;
    
    const newStar = document.createElement('div');
    newStar.className = 'shooting-star random';
    
    // Random properties
    const randomY = Math.random() * 80 + 10;
    const randomAngle = Math.random() * 45 + 30;
    const randomDuration = Math.random() * 3 + 2;
    
    newStar.style.cssText = `
        --start-y: ${randomY}vh;
        --angle: ${randomAngle}deg;
        animation: shooting-star-random ${randomDuration}s ease-out forwards;
    `;
    
    shootingStarsContainer.appendChild(newStar);
    
    // Remove after animation
    setTimeout(() => {
        if (newStar.parentNode) {
            newStar.parentNode.removeChild(newStar);
        }
    }, randomDuration * 1000 + 1000);
}

// Simple Scroll Progress Bar
function initScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (!scrollProgress) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// Simple Hover Effects - No Heavy 3D Transforms
function initSimpleHoverEffects() {
    const cards = document.querySelectorAll('.experience-card, .education-card, .skill-card, .tool-card, .project-card, .leadership-card, .certification-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '';
        });
    });
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle - Fixed hamburger menu functionality
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Form handling with simple animations
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                this.reset();
            }, 2000);
        }, 1500);
    });
}

 