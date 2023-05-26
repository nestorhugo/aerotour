document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário

    // Verifica se os campos são válidos
    var emailInput = document.getElementById('email');
    var senhaInput = document.getElementById('senha');

    if (emailInput.checkValidity() && senhaInput.checkValidity()) {
      alert('Login bem-sucedido!');
    } else {
      if (!emailInput.checkValidity()) {
        emailInput.setCustomValidity('Por favor, preencha um email válido.');
      } else {
        emailInput.setCustomValidity('');
      }

      if (!senhaInput.checkValidity()) {
        senhaInput.setCustomValidity('Por favor, preencha o campo de senha.');
      } else {
        senhaInput.setCustomValidity('');
      }

      // Atualiza a validação dos campos para exibir as mensagens personalizadas
      emailInput.reportValidity();
      senhaInput.reportValidity();
    }
  });
