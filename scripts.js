// Inizializza le animazioni quando l'utente scrolla la pagina
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('h1, h2, p, .gallery img');

    const fadeInElement = (element) => {
        element.classList.add('fade-in');
    };

    elements.forEach((el) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    fadeInElement(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(el);
    });
});
