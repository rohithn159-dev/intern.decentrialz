document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const buttons = document.querySelectorAll('.nav-links button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`You clicked ${button.textContent}. This is a demo button.`);
        });
    });

    form.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!name || !email) {
            alert('Please enter both name and email.');
            return;
        }

        alert(`Thank you, ${name}! Your form has been submitted.`);
        form.reset();
    });
});
