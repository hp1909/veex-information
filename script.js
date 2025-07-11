// FAQ Toggle Functionality
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');
    const isActive = answer.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-answer.active').forEach(activeAnswer => {
        if (activeAnswer !== answer) {
            activeAnswer.classList.remove('active');
            const activeIcon = activeAnswer.previousElementSibling.querySelector('.faq-icon');
            activeIcon.textContent = '+';
            activeIcon.style.transform = 'rotate(0deg)';
        }
    });
    
    // Toggle current FAQ item
    if (isActive) {
        answer.classList.remove('active');
        icon.textContent = '+';
        icon.style.transform = 'rotate(0deg)';
    } else {
        answer.classList.add('active');
        icon.textContent = '−';
        icon.style.transform = 'rotate(180deg)';
    }
    
    // Add subtle animation
    element.style.transform = 'scale(0.98)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 150);
}

// Enhanced Form Submission
function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // Validate form fields
    if (!name.trim() || !email.trim() || !message.trim()) {
        showNotification('Please fill in all fields before sending.', 'error');
        return;
    }
    
    // Animate button
    submitButton.style.transform = 'scale(0.95)';
    submitButton.textContent = 'Sending...';
    
    setTimeout(() => {
        // Create enhanced mailto link
        const subject = `Veex Support Request from ${name}`;
        const body = `Hi,

I need help with Veex - Minimal Expense Tracker.

From: ${name}
Email: ${email}

Message:
${message}

---
Sent from Veex Support Website`;
        
        const mailtoLink = `mailto:hoangphuc1909@live.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form and button
        form.reset();
        submitButton.textContent = 'Send Message';
        submitButton.style.transform = 'scale(1)';
        
        showNotification('Your email client should open shortly with your message prepared!', 'success');
    }, 800);
}

// Enhanced Modal Functions
function showModal(modalType) {
    const modal = document.getElementById(`${modalType}-modal`);
    if (!modal) return;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animate modal in
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.transform = 'scale(0.9) translateY(-20px)';
    modalContent.style.opacity = '0';
    
    requestAnimationFrame(() => {
        modalContent.style.transition = 'all 0.3s ease';
        modalContent.style.transform = 'scale(1) translateY(0)';
        modalContent.style.opacity = '1';
    });
    
    // Close on backdrop click
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal(modalType);
        }
    });
}

function closeModal(modalType) {
    const modal = document.getElementById(`${modalType}-modal`);
    if (!modal) return;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.transform = 'scale(0.9) translateY(-20px)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        modalContent.style.transition = '';
    }, 300);
}

// Enhanced Notification System
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Notification styles
    const bgColor = type === 'error' ? '#ef4444' : '#10b981';
    const iconColor = type === 'error' ? '⚠️' : '✓';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        z-index: 1001;
        font-weight: 500;
        font-size: 0.875rem;
        max-width: 400px;
        transform: translateX(100%);
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    
    // Add icon
    notification.innerHTML = `<span style="margin-right: 8px;">${iconColor}</span>${message}`;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Intersection Observer for Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.support-card, .feature-card');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

// Parallax Effect for Screenshots
function initializeParallax() {
    const screenshots = document.querySelectorAll('.phone-mockup');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        screenshots.forEach((screenshot, index) => {
            const speed = 0.5 + (index * 0.1);
            screenshot.style.transform += ` translateY(${rate * speed}px)`;
        });
    });
}

// Smooth Scroll for Internal Links
function initializeSmoothScroll() {
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
}

// Header Scroll Effect
function initializeHeaderEffect() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Form Field Enhancements
function initializeFormEnhancements() {
    const formFields = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    formFields.forEach(field => {
        // Add floating label effect
        field.addEventListener('focus', function() {
            this.style.borderColor = '#4A90E2';
            this.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)';
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.style.borderColor = '#e2e8f0';
                this.style.boxShadow = 'none';
            }
        });
        
        // Add input validation styling
        field.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.style.borderColor = '#10b981';
            } else {
                this.style.borderColor = '#ef4444';
            }
        });
    });
}

// Lazy Loading for Images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Enhanced Phone Mockup Interactions
function initializePhoneMockups() {
    const phoneMockups = document.querySelectorAll('.phone-mockup');
    
    phoneMockups.forEach(mockup => {
        mockup.addEventListener('mouseenter', function() {
            this.style.transform += ' scale(1.05)';
            this.style.zIndex = '10';
        });
        
        mockup.addEventListener('mouseleave', function() {
            // Reset to original transform
            if (this.classList.contains('phone-1')) {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            } else if (this.classList.contains('phone-2')) {
                this.style.transform = 'scale(0.95) translateY(20px)';
            } else if (this.classList.contains('phone-3')) {
                this.style.transform = 'scale(0.9) translateY(40px)';
            }
            this.style.zIndex = '';
        });
    });
}

// Main Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all enhancements
    initializeScrollAnimations();
    initializeSmoothScroll();
    initializeHeaderEffect();
    initializeFormEnhancements();
    initializeLazyLoading();
    initializePhoneMockups();
    
    // Add animate-in class definition
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .phone-mockup {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .faq-question {
            transition: all 0.2s ease;
        }
        
        .contact-form input, .contact-form textarea {
            transition: all 0.2s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Global keyboard shortcuts
    document.addEventListener('keydown', function(event) {
        // ESC to close modals
        if (event.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal[style*="block"]');
            openModals.forEach(modal => {
                const modalType = modal.id.replace('-modal', '');
                closeModal(modalType);
            });
        }
        
        // Ctrl/Cmd + K to focus search (if we had one)
        if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
            event.preventDefault();
            const firstInput = document.querySelector('.contact-form input');
            if (firstInput) {
                firstInput.focus();
                showNotification('Contact form focused - start typing your name!', 'success');
            }
        }
    });
    
    // Add loading states
    const supportCards = document.querySelectorAll('.support-card');
    supportCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Performance optimization: throttle scroll events
    let ticking = false;
    
    function updateScrollEffects() {
        initializeHeaderEffect();
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
    
    console.log('🚀 Veex Support Website Loaded Successfully!');
});