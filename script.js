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

// Registration form price calculator
const categorySelect = document.getElementById('category');
const participationTypeSelect = document.getElementById('participationType');
const priceDisplay = document.getElementById('priceDisplay');

const prices = {
    student: { offline: '₹3,500', online: '₹2,000' },
    academic: { offline: '₹8,000', online: '₹4,000' },
    industry: { offline: '₹12,000', online: '₹7,000' }
};

function updatePrice() {
    const selectedCategory = categorySelect?.value;
    const selectedParticipationType = participationTypeSelect?.value;
    
    if (selectedCategory && selectedParticipationType && prices[selectedCategory] && priceDisplay) {
        const price = prices[selectedCategory][selectedParticipationType];
        priceDisplay.innerHTML = `<strong>${price}</strong>`;
    } else if (priceDisplay) {
        priceDisplay.textContent = 'Select category and participation type to see price';
    }
}

if (categorySelect && participationTypeSelect && priceDisplay) {
    categorySelect.addEventListener('change', updatePrice);
    participationTypeSelect.addEventListener('change', updatePrice);
}

// Form submissions (since this is a standalone website, we'll show alerts)
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formType = this.classList.contains('reg-form') ? 'Registration' :
                        this.classList.contains('submit-form') ? 'Submission' :
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
            if (priceDisplay) {
                priceDisplay.textContent = 'Select category to see price';
            }
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