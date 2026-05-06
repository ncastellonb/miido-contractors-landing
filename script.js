document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
    this.reset();
});
