const formFields = document.querySelectorAll('input');

formFields.forEach(field => {
  field.addEventListener('keydown', event => {
    // Verifica se a tecla pressionada é a tecla "Enter"
    if (event.Code === 13) {
      // Seleciona o próximo campo do formulário
      const nextField = field.nextElementSibling;
      // Verifica se o próximo campo é um campo de entrada de texto
      if (nextField && nextField.nodeName === 'INPUT') {
        // Move o foco para o próximo campo
        nextField.focus();
      }
    }
  });
});