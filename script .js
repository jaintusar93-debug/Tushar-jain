/* ==========================================================================
   PRELOADER ANIMATION & SCROLL OBSERVER
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth Preloader removal
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('preloader-hidden');
            // Remove from DOM after fade out to free up memory
            setTimeout(() => { preloader.style.display = 'none'; }, 600);
        }
    }, 2000); 

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.12 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeSections = document.querySelectorAll('.section-fade');
    fadeSections.forEach(section => {
        observer.observe(section);
    });

    // Make hero section visible immediately after preloader starts fading
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        setTimeout(() => {
            heroSection.classList.add('visible');
        }, 1800); 
    }
});
