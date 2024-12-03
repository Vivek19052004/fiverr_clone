document.querySelectorAll('.footer-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const li = button.nextElementSibling;
        const isActive = button.classList.toggle('active');
        li.style.display = isActive ? 'block' : 'none';
    });
});
