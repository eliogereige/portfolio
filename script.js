

// Simple navigation function
function navigateToSection(sectionId) {
    var target = document.querySelector(sectionId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Make it available globally
window.navigateToSection = navigateToSection;

// Optimized Portfolio Animations - Lightweight & Fast
document.addEventListener('DOMContentLoaded', function() {
    // Initialize only essential features for performance
    initScrollTriggeredReveals();
    initScrollProgress();
    initSimpleHoverEffects();
    initShootingStars();
    initSmoothScrolling(); // Add smooth scrolling for navigation
    initMobileNavigation(); // Add mobile navigation initialization
    initAppleStyleExperience(); // Add Apple-style experience functionality
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
function initSmoothScrolling() {
    console.log('Initializing smooth scrolling...');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('Found nav links:', navLinks.length);
    
    if (navLinks.length === 0) {
        console.error('No navigation links found!');
        return;
    }
    
    navLinks.forEach((link, index) => {
        console.log(`Setting up link ${index + 1}:`, link.getAttribute('href'));
        
        link.addEventListener('click', function (e) {
            console.log('Link clicked:', this.getAttribute('href'));
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            console.log('Target element found:', target);
            
            if (target) {
                // Close mobile menu if open
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (hamburger && navMenu) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
                
                // Get the target position, accounting for fixed header
                const targetPosition = target.offsetTop - 100; // Account for fixed header height
                
                console.log('Scrolling to position:', targetPosition);
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.error('Target not found:', targetId);
            }
        });
    });
    
    console.log('Smooth scrolling setup complete!');
}

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

        // Mobile menu will be closed by the smooth scrolling function

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

// 3D Carousel Experience Section
function initAppleStyleExperience() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const experienceDetails = document.querySelectorAll('.experience-detail');
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!carouselItems.length || !experienceDetails.length) return;
    
    let currentIndex = 0;
    const totalItems = carouselItems.length;
    
    // Position carousel items vertically
    function positionCarouselItems() {
        carouselItems.forEach((item, index) => {
            // Remove all state classes
            item.classList.remove('active', 'prev', 'next');
            
            // Add appropriate state classes
            if (index === currentIndex) {
                item.classList.add('active');
            } else if (index === currentIndex - 1) {
                item.classList.add('prev');
            } else if (index === currentIndex + 1) {
                item.classList.add('next');
            }
        });
        
        // Move the track to center the active item
        const track = document.querySelector('.carousel-track');
        const itemHeight = 100; // Height of each item
        const gap = 16; // Gap between items (1rem = 16px)
        const totalItemHeight = itemHeight + gap;
        const centerOffset = (600 - itemHeight) / 2; // Center the active item
        const translateY = centerOffset - (currentIndex * totalItemHeight);
        
        track.style.transform = `translateY(${translateY}px)`;
    }
    
    // Update experience details
    function updateExperienceDetails() {
        const activeItem = carouselItems[currentIndex];
        const targetExperience = activeItem.getAttribute('data-experience');
        
        // Hide all experience details
        experienceDetails.forEach(detail => {
            detail.classList.remove('active');
            detail.style.visibility = 'hidden';
            detail.style.opacity = '0';
            detail.style.transform = 'translateX(30px)';
        });
        
        // Show target experience detail
        setTimeout(() => {
            const targetDetail = document.getElementById(targetExperience);
            if (targetDetail) {
                targetDetail.style.visibility = 'visible';
                
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo(targetDetail, 
                        { 
                            opacity: 0, 
                            x: 30,
                            scale: 0.95
                        },
                        { 
                            opacity: 1, 
                            x: 0,
                            scale: 1,
                            duration: 0.6,
                            ease: "power2.out"
                        }
                    );
                }
                
                targetDetail.classList.add('active');
            }
        }, 50);
    }
    
    // Navigate to next item
    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        positionCarouselItems();
        updateExperienceDetails();
    }
    
    // Navigate to previous item
    function prevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        positionCarouselItems();
        updateExperienceDetails();
    }
    
    // Add click handlers to carousel items
    carouselItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            positionCarouselItems();
            updateExperienceDetails();
        });
    });
    
    // Add button event listeners
    if (prevBtn) prevBtn.addEventListener('click', prevItem);
    if (nextBtn) nextBtn.addEventListener('click', nextItem);
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') prevItem();
        if (e.key === 'ArrowRight') nextItem();
    });
    
    // Initialize carousel
    positionCarouselItems();
    updateExperienceDetails();
}

 