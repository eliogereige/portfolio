

// Premium Portfolio Animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all premium features
    initHeroBackground();
    initPremiumScrollAnimations();
    initFloatingElements();
    initScrollProgress();
    initMagneticEffect();
    initSectionBackgrounds();
});

// Enhanced Hero Background with Premium Particles
function initHeroBackground() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Premium particle system
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const geometry = new THREE.SphereGeometry(0.1, 8, 8);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x098698,
            transparent: true,
            opacity: Math.random() * 0.5 + 0.2
        });
        
        const particle = new THREE.Mesh(geometry, material);
        particle.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        );
        
        particle.velocity = {
            x: (Math.random() - 0.5) * 0.02,
            y: (Math.random() - 0.5) * 0.02,
            z: (Math.random() - 0.5) * 0.02
        };
        
        scene.add(particle);
        particles.push(particle);
    }
    
    camera.position.z = 5;
    
    function animate() {
        requestAnimationFrame(animate);
        
        particles.forEach(particle => {
            particle.position.add(particle.velocity);
            
            // Wrap around edges
            if (particle.position.x > 10) particle.position.x = -10;
            if (particle.position.x < -10) particle.position.x = 10;
            if (particle.position.y > 10) particle.position.y = -10;
            if (particle.position.y < -10) particle.position.y = 10;
            if (particle.position.z > 10) particle.position.z = -10;
            if (particle.position.z < -10) particle.position.z = 10;
            
            // Rotate particle
            particle.rotation.x += 0.01;
            particle.rotation.y += 0.01;
        });
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Responsive resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Premium Scroll Animations with GSAP
function initPremiumScrollAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-content', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    });
    
    gsap.from('.hero-stats', {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: 'power2.out',
        delay: 1.2,
        stagger: 0.2
    });
    
    // Section title animations
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        });
    });
    
    // Card reveal animations
    gsap.utils.toArray('.experience-card, .education-card, .skill-card, .tool-card, .project-card, .leadership-card, .certification-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 60,
            opacity: 0,
            scale: 0.95,
            ease: 'power2.out'
        });
    });
    
    // Icon animations
    gsap.utils.toArray('.experience-icon, .education-icon, .skill-icon, .tool-icon, .leadership-icon, .certification-icon').forEach(icon => {
        gsap.from(icon, {
            scrollTrigger: {
                trigger: icon,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            rotation: 180,
            scale: 0,
            ease: 'back.out(1.7)'
        });
    });
    
    // Text reveal animations
    gsap.utils.toArray('h3, h4, p, li').forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top 90%',
                end: 'bottom 10%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            y: 20,
            opacity: 0,
            ease: 'power1.out'
        });
    });
}

// Interactive Floating Elements
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-elements > *');
    
    floatingElements.forEach(element => {
        // Add parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            element.style.transform += `translateY(${rate}px)`;
        });
        
        // Add hover interaction
        element.addEventListener('mouseenter', () => {
            gsap.to(element, {
                duration: 0.3,
                scale: 1.2,
                opacity: 0.8,
                ease: 'power2.out'
            });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                duration: 0.3,
                scale: 1,
                opacity: element.classList.contains('hero') ? 0.6 : 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Enhanced Scroll Progress with Premium Styling
function initScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (!scrollProgress) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = scrolled + '%';
        
        // Add glow effect based on scroll position
        if (scrolled > 50) {
            scrollProgress.style.boxShadow = '0 2px 20px rgba(9, 134, 152, 0.5)';
        } else {
            scrollProgress.style.boxShadow = '0 2px 10px rgba(9, 134, 152, 0.3)';
        }
    });
}

// Premium Magnetic Effect for Cards
function initMagneticEffect() {
    const cards = document.querySelectorAll('.experience-card, .education-card, .skill-card, .tool-card, .project-card, .leadership-card, .certification-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (y / rect.height) * 10;
            const rotateY = (x / rect.width) * 10;
            
            gsap.to(card, {
                duration: 0.3,
                rotationX: rotateX,
                rotationY: rotateY,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.5,
                rotationX: 0,
                rotationY: 0,
                ease: 'power2.out'
            });
        });
    });
}

// Enhanced Section Backgrounds
function initSectionBackgrounds() {
    const sections = ['about', 'experience', 'education', 'skills', 'projects', 'leadership', 'certifications'];
    
    sections.forEach(sectionId => {
        const canvas = document.getElementById(`${sectionId}-canvas`);
        if (!canvas) return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        // Create geometric shapes for each section
        const shapes = [];
        const shapeCount = 8;
        
        for (let i = 0; i < shapeCount; i++) {
            let geometry, material;
            
            if (i % 3 === 0) {
                geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
                material = new THREE.MeshBasicMaterial({ 
                    color: 0x098698,
                    transparent: true,
                    opacity: 0.1
                });
            } else if (i % 3 === 1) {
                geometry = new THREE.SphereGeometry(0.3, 8, 8);
                material = new THREE.MeshBasicMaterial({ 
                    color: 0xAEC0C2,
                    transparent: true,
                    opacity: 0.08
                });
            } else {
                geometry = new THREE.ConeGeometry(0.3, 0.6, 8);
                material = new THREE.MeshBasicMaterial({ 
                    color: 0x74B3A8,
                    transparent: true,
                    opacity: 0.12
                });
            }
            
            const shape = new THREE.Mesh(geometry, material);
            shape.position.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            );
            
            shape.rotation.set(
                Math.random() * Math.PI,
                Math.random() * Math.PI,
                Math.random() * Math.PI
            );
            
            scene.add(shape);
            shapes.push(shape);
        }
        
        camera.position.z = 5;
        
        function animate() {
            requestAnimationFrame(animate);
            
            shapes.forEach((shape, index) => {
                shape.rotation.x += 0.005 * (index + 1);
                shape.rotation.y += 0.003 * (index + 1);
                shape.rotation.z += 0.004 * (index + 1);
                
                // Gentle floating movement
                shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
                shape.position.x += Math.cos(Date.now() * 0.001 + index) * 0.001;
            });
            
            renderer.render(scene, camera);
        }
        
        animate();
        
        // Responsive resize
        const resizeObserver = new ResizeObserver(() => {
            camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
        });
        
        resizeObserver.observe(canvas);
    });
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: { y: target, offsetY: 80 },
                ease: 'power2.inOut'
            });
        }
    });
});

// Mobile navigation toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileNavToggle.classList.toggle('active');
    });
}

// Form handling with premium animations
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add premium submit animation
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        gsap.to(submitBtn, {
            duration: 0.3,
            scale: 0.95,
            ease: 'power2.out'
        });
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            gsap.to(submitBtn, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
            
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

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations and effects
}, 16)); // 60fps

 