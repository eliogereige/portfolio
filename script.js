

// 3D Background Animation
function initHeroBackground() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Create floating particles
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 8, 8);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x098698,
            transparent: true,
            opacity: 0.3
        });
        const particle = new THREE.Mesh(geometry, material);
        
        particle.position.x = (Math.random() - 0.5) * 20;
        particle.position.y = (Math.random() - 0.5) * 20;
        particle.position.z = (Math.random() - 0.5) * 20;
        
        particle.velocity = {
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
            z: (Math.random() - 0.5) * 0.01
        };
        
        particles.push(particle);
        scene.add(particle);
    }

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        
        particles.forEach(particle => {
            particle.position.x += particle.velocity.x;
            particle.position.y += particle.velocity.y;
            particle.position.z += particle.velocity.z;
            
            // Wrap around edges
            if (particle.position.x > 10) particle.position.x = -10;
            if (particle.position.x < -10) particle.position.x = 10;
            if (particle.position.y > 10) particle.position.y = -10;
            if (particle.position.y < -10) particle.position.y = 10;
            if (particle.position.z > 10) particle.position.z = -10;
            if (particle.position.z < -10) particle.position.z = 10;
            
            // Rotate particles
            particle.rotation.x += 0.01;
            particle.rotation.y += 0.01;
        });
        
        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Section 3D Backgrounds
function initSectionBackgrounds() {
    const sections = [
        { id: 'about-canvas', color: 0xAEC0C2 },
        { id: 'experience-canvas', color: 0x098698 },
        { id: 'education-canvas', color: 0xBAB1AD },
        { id: 'skills-canvas', color: 0x3D444B },
        { id: 'projects-canvas', color: 0x505A63 },
        { id: 'leadership-canvas', color: 0xD9D4D1 },
        { id: 'certifications-canvas', color: 0x098698 }
    ];

    sections.forEach(section => {
        const canvas = document.getElementById(section.id);
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setClearColor(0x000000, 0);

        // Create geometric shapes
        const shapes = [];
        const shapeCount = 15;
        
        for (let i = 0; i < shapeCount; i++) {
            const geometry = Math.random() > 0.5 ? 
                new THREE.BoxGeometry(0.2, 0.2, 0.2) : 
                new THREE.SphereGeometry(0.1, 8, 8);
            
            const material = new THREE.MeshBasicMaterial({ 
                color: section.color,
                transparent: true,
                opacity: 0.1
            });
            const shape = new THREE.Mesh(geometry, material);
            
            shape.position.x = (Math.random() - 0.5) * 15;
            shape.position.y = (Math.random() - 0.5) * 15;
            shape.position.z = (Math.random() - 0.5) * 15;
            
            shape.velocity = {
                x: (Math.random() - 0.5) * 0.005,
                y: (Math.random() - 0.5) * 0.005,
                z: (Math.random() - 0.5) * 0.005
            };
            
            shapes.push(shape);
            scene.add(shape);
        }

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            
            shapes.forEach(shape => {
                shape.position.x += shape.velocity.x;
                shape.position.y += shape.velocity.y;
                shape.position.z += shape.velocity.z;
                
                // Wrap around edges
                if (shape.position.x > 7.5) shape.position.x = -7.5;
                if (shape.position.x < -7.5) shape.position.x = 7.5;
                if (shape.position.y > 7.5) shape.position.y = -7.5;
                if (shape.position.y < -7.5) shape.position.y = 7.5;
                if (shape.position.z > 7.5) shape.position.z = -7.5;
                if (shape.position.z < -7.5) shape.position.z = 7.5;
                
                // Rotate shapes
                shape.rotation.x += 0.005;
                shape.rotation.y += 0.005;
            });
            
            renderer.render(scene, camera);
        }

        animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        });
    });
}

// GSAP Animations
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    gsap.from('.hero-title', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.hero-subtitle', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.hero-description', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        delay: 0.6,
        ease: 'power3.out'
    });

    gsap.from('.hero-buttons', {
        duration: 1,
        y: 30,
        opacity: 0,
        delay: 0.9,
        ease: 'power3.out'
    });

    // Section title animations
    gsap.from('.section-title', {
        scrollTrigger: {
            trigger: '.section-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    // Experience cards animations
    gsap.from('.experience-card', {
        scrollTrigger: {
            trigger: '.experience',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Education cards animations
    gsap.from('.education-card', {
        scrollTrigger: {
            trigger: '.education',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Skill cards animations
    gsap.from('.skill-card', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Tool cards animations
    gsap.from('.tool-card', {
        scrollTrigger: {
            trigger: '.tools-grid',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Project cards animations
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Leadership cards animations
    gsap.from('.leadership-card', {
        scrollTrigger: {
            trigger: '.leadership',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Certification cards animations
    gsap.from('.certification-card', {
        scrollTrigger: {
            trigger: '.certifications',
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Icon animations
    gsap.from('.experience-icon, .education-icon, .skill-icon, .tool-icon, .leadership-icon, .certification-icon', {
        scrollTrigger: {
            trigger: '.experience-icon, .education-icon, .skill-icon, .tool-icon, .leadership-icon, .certification-icon',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        scale: 0,
        rotation: 180,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)'
    });

    // Floating shapes animations
    gsap.to('.shape', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        stagger: 0.5,
        repeat: -1,
        yoyo: true
    });

    // Particle animations
    gsap.to('.particle', {
        y: -100,
        x: 50,
        duration: 8,
        ease: 'none',
        repeat: -1,
        stagger: 0.5
    });

    // Geometric shapes animations
    gsap.to('.geo-shape', {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
        stagger: 2
    });

    // Text reveal animations
    gsap.from('.experience-content h3, .education-content h3, .skill-content h4, .leadership-content h3, .certification-content h3', {
        scrollTrigger: {
            trigger: '.experience-content h3, .education-content h3, .skill-content h4, .leadership-content h3, .certification-content h3',
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        x: -50,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeroBackground();
    initSectionBackgrounds();
    // initGSAPAnimations(); // Temporarily disabled to check content visibility
    initScrollProgress();
});

// Scroll Progress Indicator
function initScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        scrollProgress.style.width = scrollPercent + '%';
    });
}

// Magnetic Effect for Cards
function initMagneticEffect() {
    const cards = document.querySelectorAll('.experience-card, .education-card, .skill-card, .tool-card, .project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
}

// Initialize magnetic effect
document.addEventListener('DOMContentLoaded', () => {
    initMagneticEffect();
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .skill-item, .tool-item');
    animateElements.forEach(el => observer.observe(el));
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        this.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#098698'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Trigger skill bar animation when skills section is visible
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        // Only apply typing effect if it's not too long
        if (originalText.length < 50) {
            typeWriter(heroTitle, originalText, 100);
        }
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Timeline animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Initialize timeline animation
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateTimeline();
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const experienceSection = document.querySelector('.experience');
    if (experienceSection) {
        timelineObserver.observe(experienceSection);
    }
});

 