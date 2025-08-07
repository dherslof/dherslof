document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active navigation link on scroll and add section transition
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.sidebar-nav-menu a'); // Target the new sidebar menu

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Highlight section when 50% of it is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'active' class to the section for transition effect
                entry.target.classList.add('active');

                // Highlight active navigation link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            } else {
                // Remove 'active' class when section is not intersecting
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {

    // Project card expand/collapse
    document.querySelectorAll('.project-card-header').forEach(header => {
        header.addEventListener('click', function () {
            const card = this.closest('.project-card');
            const expanded = card.classList.toggle('expanded');
            // Update aria-expanded for accessibility
            this.setAttribute('aria-expanded', expanded);
            this.blur();
        });
        // Allow keyboard toggle
        header.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const landing = document.querySelector('.landing-section');
    if (landing) {
        setTimeout(() => {
            landing.classList.add('landed');
        }, 100); // slight delay for polish
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const landing = document.querySelector('#landing');

    function checkHeader() {
        const landingRect = landing.getBoundingClientRect();
        if (landingRect.bottom > 80) { // 80px = header height
            header.classList.add('hide-header');
        } else {
            header.classList.remove('hide-header');
        }
    }

    window.addEventListener('scroll', checkHeader);
    checkHeader(); // Initial check
});