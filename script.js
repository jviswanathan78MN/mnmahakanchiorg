// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA button click handler
document.querySelectorAll('.cta, .donate-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            alert('Thank you for your interest in supporting our cause!');
        }
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
    }
}

// Scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;
    
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            input.style.borderColor = 'green';
        }
    });
    
    return isValid;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Nonprofit website loaded successfully');
});

// Keyboard navigation support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        console.log('Escape key pressed');
    }
});
