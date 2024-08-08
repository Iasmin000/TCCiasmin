document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Previne o envio do formulário para validação
    event.preventDefault();
    
    // Obtém os elementos do formulário e mensagens de erro
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

   
    let isValid = true;

  
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    
    if (!emailInput.checkValidity()) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (messageInput.value.trim() === '') {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    if (isValid) {
        alert('Formulário enviado com sucesso!');
       
        document.getElementById('contactForm').reset();
    }
});