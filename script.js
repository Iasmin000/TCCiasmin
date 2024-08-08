const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const submitBtn = document.querySelector('.submit-btn');

function validateForm() {
    let valid = true;
name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'O nome é obrigatório.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = 'Email inválido.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    if (messageInput.value.trim() === '') {
        messageError.textContent = 'A mensagem é obrigatória.';
        valid = false;
    } else {
        messageError.textContent = '';
    }

    submitBtn.disabled = !valid;

    return valid;
}

form.addEventListener('input', validateForm);

form.addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});