// Toggle sidebar sublists
document.querySelectorAll('.region').forEach(region => {
    region.addEventListener('click', () => {
        const sublist = region.querySelector('.sublist');
        if (sublist.style.display === 'block') {
            sublist.style.display = 'none';
        } else {
            sublist.style.display = 'block';
        }
    });
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
