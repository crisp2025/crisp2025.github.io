// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link (except parent nav-links with dropdowns)
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', (e) => {
    // Don't close menu if it's a parent nav-link with dropdown
    if (!n.classList.contains('has-dropdown')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// Prevent default click behavior for parent nav-links with dropdowns
document.querySelectorAll('.nav-link.has-dropdown').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        // Toggle dropdown visibility on mobile
        const parentItem = link.closest('.nav-item');
        if (parentItem) {
            // Toggle active class on the parent nav-item (for CSS compatibility)
            parentItem.classList.toggle('active');
            
            // Close other dropdowns
            document.querySelectorAll('.nav-item').forEach(otherItem => {
                if (otherItem !== parentItem && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
    }
});

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

// Form submissions (since this is a standalone website, we'll show alerts)
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formType = this.classList.contains('submit-form') ? 'Submission' :
                        this.classList.contains('contact-form-element') ? 'Contact' : 'Form';
        
        // Basic form validation
        const requiredFields = this.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#e53e3e';
            } else {
                field.style.borderColor = '#e2e8f0';
            }
        });
        
        if (isValid) {
            alert(`${formType} submitted successfully! We will contact you soon.`);
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add fade-in animation to elements
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.theme-card, .committee-card, .stat-item, .pricing-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// File upload validation
const fileInputs = document.querySelectorAll('input[type="file"]');

fileInputs.forEach(input => {
    input.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            const maxSize = 10 * 1024 * 1024; // 10MB
            
            if (!allowedTypes.includes(file.type)) {
                alert('Please upload only PDF or Word documents.');
                this.value = '';
                return;
            }
            
            if (file.size > maxSize) {
                alert('File size should not exceed 10MB.');
                this.value = '';
                return;
            }
        }
    });
});

// Add loading states to buttons
document.querySelectorAll('.btn').forEach(btn => {
    if (btn.type === 'submit') {
        btn.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Processing...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    }
});

// Add hover effects to committee cards
document.querySelectorAll('.committee-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Copy contact information to clipboard
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        const text = this.querySelector('p').textContent;
        if (text && text !== 'IIT (ISM) Dhanbad\nDhanbad, Jharkhand, India') {
            navigator.clipboard.writeText(text).then(() => {
                const originalContent = this.innerHTML;
                this.style.background = '#f0fff4';
                setTimeout(() => {
                    this.style.background = 'transparent';
                }, 1000);
            });
        }
    });
});

// Auto-hide mobile menu on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    lastScrollTop = st <= 0 ? 0 : st;
});

// Add current year to footer if needed
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace('2025', currentYear);
}

// Accordion functionality for registration section
function toggleAccordion(accordionId) {
    const content = document.getElementById(accordionId + '-content');
    const icon = document.getElementById(accordionId + '-icon');
    
    if (content && icon) {
        const isActive = content.classList.contains('active');
        
        if (isActive) {
            content.classList.remove('active');
            icon.classList.remove('rotated');
        } else {
            content.classList.add('active');
            icon.classList.add('rotated');
        }
    }
}

// Make toggleAccordion available globally
window.toggleAccordion = toggleAccordion;

// Dark Mode Toggle Functionality
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('theme-toggle');
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.theme);
        
        // Add event listener to toggle button
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addListener((e) => {
            if (!localStorage.getItem('theme')) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateToggleIcon();
        this.updateNavbarOnScroll();
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Add a subtle animation to indicate the change
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    updateToggleIcon() {
        if (this.themeToggle) {
            const icon = this.themeToggle.querySelector('i');
            if (icon) {
                if (this.theme === 'dark') {
                    icon.className = 'fas fa-sun';
                    this.themeToggle.setAttribute('aria-label', 'Switch to light mode');
                } else {
                    icon.className = 'fas fa-moon';
                    this.themeToggle.setAttribute('aria-label', 'Switch to dark mode');
                }
            }
        }
    }

    updateNavbarOnScroll() {
        // Update navbar background for current theme
        const header = document.querySelector('.header');
        if (header) {
            const scrollY = window.scrollY;
            if (this.theme === 'dark') {
                header.style.background = scrollY > 100 ? 'rgba(26, 32, 44, 0.98)' : 'rgba(26, 32, 44, 0.95)';
            } else {
                header.style.background = scrollY > 100 ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)';
            }
        }
    }

    // Get current theme
    getCurrentTheme() {
        return this.theme;
    }

    // Check if user prefers dark mode
    prefersColorScheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.themeManager = new ThemeManager();
    
    // Initialize existing accordion functionality
    const offlineAccordion = document.getElementById('offline-content');
    const offlineIcon = document.getElementById('offline-icon');
    const onlineAccordion = document.getElementById('online-content');
    const onlineIcon = document.getElementById('online-icon');
    
    // // Keep registration accordions open by default
    // if (offlineAccordion && offlineIcon) {
    //     offlineAccordion.classList.add('active');
    //     offlineIcon.classList.add('rotated');
    // }
    
    // if (onlineAccordion && onlineIcon) {
    //     onlineAccordion.classList.add('active');
    //     onlineIcon.classList.add('rotated');
    // }
    
    // Initialize committee accordions as closed (default state)
    const coreCommitteeAccordion = document.getElementById('core-committee-content');
    const coreCommitteeIcon = document.getElementById('core-committee-icon');
    const advisoryCommitteeAccordion = document.getElementById('advisory-committee-content');
    const advisoryCommitteeIcon = document.getElementById('advisory-committee-icon');
    
    // These will remain closed by default (no active class added)
    // Icons will point down by default (no rotated class added)
});

// Update navbar scroll behavior to work with dark mode
window.addEventListener('scroll', function() {
    if (window.themeManager) {
        window.themeManager.updateNavbarOnScroll();
    } else {
        // Fallback for before theme manager is initialized
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
});

// Keyboard shortcut for theme toggle (Ctrl/Cmd + Shift + D)
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        if (window.themeManager) {
            window.themeManager.toggleTheme();
        }
    }
});