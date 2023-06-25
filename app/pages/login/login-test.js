'use strict';

document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

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

      emailInput.reportValidity();
      senhaInput.reportValidity();
    }
  });

//Leitura e escrita de dados simples:
localStorage.setItem('nome', 'Nestor');
const nome = localStorage.getItem('nome');
console.log(nome);

//Leitura e escrita de JSON:
const pessoa = { nome: 'Roni', idade: 25 };
localStorage.setItem('pessoa', JSON.stringify(pessoa));
const pessoaSalva = JSON.parse(localStorage.getItem('pessoa'));
console.log(pessoaSalva.nome);
console.log(pessoaSalva.idade);
