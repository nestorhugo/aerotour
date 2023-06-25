'use strict';

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (validarEmail(email) && validarSenha(senha)) {
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);

    window.location.href = '/index.html';
  } else {
    alert('Email ou senha inválidos. Por favor, tente novamente.');
  }
});

function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validarSenha(senha) {
  if (senha.length < 6) {
    return false;
  }
  const numerosRegex = /[0-9]/;
  if (!numerosRegex.test(senha)) {
    return false;
  }
  const maiusculaRegex = /[A-Z]/;
  if (!maiusculaRegex.test(senha)) {
    return false;
  }
  const minusculaRegex = /[a-z]/;
  if (!minusculaRegex.test(senha)) {
    return false;
  }
  return true;
}

//Leitura e escrita de dados simples:
localStorage.setItem('nome', 'Nestor');
const nome = localStorage.getItem('nome');
console.log(nome);

//Leitura e escrita de JSON:
const pessoa = { nome: 'Roni', idade: 39 };
localStorage.setItem('pessoa', JSON.stringify(pessoa));
const pessoaSalva = JSON.parse(localStorage.getItem('pessoa'));
console.log(pessoaSalva.nome);
console.log(pessoaSalva.idade);
