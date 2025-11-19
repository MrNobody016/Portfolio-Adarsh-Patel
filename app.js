// Header scroll effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Explore button scroll to about section
const exploreBtn = document.getElementById('exploreBtn');
exploreBtn.addEventListener('click', () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// Animate skill progress bars on scroll
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });

    skillBars.forEach(bar => observer.observe(bar));
};

// Initialize skill bar animations
animateSkillBars();

// Scroll animations for sections
const observeElements = () => {
    const elements = document.querySelectorAll('.about-image-wrapper, .about-content, .project-card, .timeline-item, .skill-category, .contact-info, .contact-form-wrapper');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
};

// Initialize scroll animations
observeElements();

// Project Modal
const projectData = {
    0: {
        title: 'Anime Relics: E-Commerce Mobile App',
        image: 'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYyMzc0NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: ['UI/UX', 'Mobile', 'E-Commerce'],
        description: 'Designed the full mobile shopping experience in Figma—from the initial mobile login all the way through to a quick, painless checkout. Organized the entire store\'s structure (Information Architecture), creating clear categories for over 6 types of merchandise (like T-shirts, Hoodies, and Cosplay) to make product discovery simple and fun. Built the interactive, high-fidelity prototype that shows how users can seamlessly browse, view product details (including size selection), add items to the cart, and complete their purchase. My goal was simple: make finding awesome anime gear a joyful, engaging experience for fans.',
        technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Wireframing', 'User Research'],
        liveUrl: 'https://shorturl.at/FyJNY',
        githubUrl: '#'
    }
};

const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const viewProjectBtns = document.querySelectorAll('.view-project-btn');

// Open modal
viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = btn.getAttribute('data-project');
        const project = projectData[projectId];
        
        if (project) {
            modalBody.innerHTML = `
                <img src="${project.image}" alt="${project.title}" class="modal-project-image">
                <div class="modal-badges">
                    ${project.category.map(cat => `<span class="badge">${cat}</span>`).join('')}
                </div>
                <h3 class="modal-title">${project.title}</h3>
                <p class="modal-description">${project.description}</p>
                <div>
                    <h4 class="modal-tech-heading">Technologies Used</h4>
                    <div class="modal-tech-list">
                        ${project.technologies.map(tech => `<span class="modal-tech-badge">${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="modal-links">
                    <a href="${project.liveUrl}" class="modal-link modal-link-primary" target="_blank" rel="noopener noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        View Live
                    </a>
                    <a href="${project.githubUrl}" class="modal-link modal-link-secondary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                        View Code
                    </a>
                </div>
            `;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Contact Form
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

const showToast = (title, description) => {
    toast.innerHTML = `
        <div class="toast-title">${title}</div>
        <div class="toast-description">${description}</div>
    `;
    toast.classList.add('show', 'success');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
};

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    showToast('Message sent successfully!', 'Thank you for reaching out. I\'ll get back to you soon.');
    
    // Reset form
    contactForm.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
});

// Parallax effect for gradient orbs (subtle)
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 10;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(${orb.dataset.scale || 1})`;
    });
});

// Add active state to current section in navigation
const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// Initialize AOS (Animate On Scroll) alternative
const initAnimations = () => {
    const elements = document.querySelectorAll('.hero-content, .section-header');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));
};

initAnimations();

// Add smooth reveal animation to elements as they enter viewport
const revealElements = () => {
    const reveals = document.querySelectorAll('.about-grid, .projects-grid, .timeline-container, .skills-grid, .contact-grid');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(reveal => {
        reveal.style.opacity = '0';
        reveal.style.transform = 'translateY(30px)';
        reveal.style.transition = 'all 0.6s ease';
        observer.observe(reveal);
    });
};

revealElements();

// Add typing effect to hero title (optional enhancement)
const addTypingEffect = () => {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    heroTitle.style.opacity = '1';
    
    let index = 0;
    const typeInterval = setInterval(() => {
        if (index < text.length) {
            heroTitle.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, 50);
};

// Uncomment to enable typing effect
// setTimeout(addTypingEffect, 500);

// Performance optimization: Lazy load images
const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

lazyLoadImages();

// Add cursor trail effect (optional, can be removed if too much)
const createCursorTrail = () => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor following animation
    const animateCursor = () => {
        const diffX = mouseX - cursorX;
        const diffY = mouseY - cursorY;
        
        cursorX += diffX * 0.1;
        cursorY += diffY * 0.1;
        
        requestAnimationFrame(animateCursor);
    };

    // Uncomment to enable cursor trail
    // animateCursor();
};

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    
    // Add a subtle fade-in effect to the body
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Page is hidden');
    } else {
        console.log('Page is visible');
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Navigate sections with arrow keys
    if (e.key === 'ArrowDown' && e.ctrlKey) {
        e.preventDefault();
        const currentScroll = window.pageYOffset;
        const nextSection = Array.from(sections).find(section => section.offsetTop > currentScroll + 100);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        const currentScroll = window.pageYOffset;
        const prevSection = Array.from(sections).reverse().find(section => section.offsetTop < currentScroll - 100);
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add print styles handler
window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
});

// Performance monitoring (optional)
if (window.performance) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
        }, 0);
    });
}

// Service Worker registration (for PWA support - optional)
if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered'))
    //     .catch(err => console.log('Service Worker registration failed'));
}

// Add easter egg (optional fun feature)
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        console.log('🎉 Konami Code activated!');
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});
