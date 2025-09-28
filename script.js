document.addEventListener('DOMContentLoaded', () => {

    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
            typeSlogan();
        }, 2000); // 2 segundos
    }

    // Typewriter effect
    const sloganText = "Dejamos de crear marcas bonitas. Creamos marcas estratégicas que venden.";
    const sloganElement = document.getElementById('slogan');
    let i = 0;

    function typeSlogan() {
        if (i < sloganText.length) {
            sloganElement.innerHTML += sloganText.charAt(i);
            i++;
            setTimeout(typeSlogan, 50); // Velocidad de escritura
        }
    }

    // Animaciones On-Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section:not(.hero-section)').forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

});