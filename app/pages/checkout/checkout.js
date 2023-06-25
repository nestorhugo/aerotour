'use strict';

$(document).ready(function () {
  //jquery
  // Seletores CSS - id, classe e tag
  $('#name').css('color', 'blue');
  $('.form-control').addClass('highlight');
  $('label').css('font-weight', 'bold');

  // Seletores hierárquicos estáticos
  $('.form-group input[type="text"]').css('background-color', '#F8F8F8');

  // Seletores hierárquicos dinâmicos via métodos do jQuery
  $('input').on('input', function () {
    $(this).parent().addClass('has-feedback');
  });

  // Efeitos fade ou slide
  $('#flightForm').on('submit', function (e) {
    e.preventDefault();
    $('#message')
      .text('Formulário enviado com sucesso!')
      .fadeIn()
      .delay(2000)
      .fadeOut();
  });

  // Manipulação do conteúdo de um input e div usando jQuery
  $('#departureDate').val('01011990');
  $('#message').text('Erro: campo obrigatório').addClass('error');

  // Aplicar um plugin do jQuery (jQuery Mask Plugin)
  $('#departureDate').mask('99/99/9999');
});

let cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('keydown', function (event) {
  // verifica se o keyCode é um número de 0 a 9 ou a tecla backspace ou delete
  if (
    !(event.keyCode >= 48 && event.keyCode <= 57) &&
    event.keyCode !== 8 &&
    event.keyCode !== 46
  ) {
    event.preventDefault();
  }
});

localStorage.setItem('dadosCompra', JSON.stringify(dadosCompra));

function validarFormularioCompra() {
  let nomeCompleto = document.getElementById('nomeCompleto').value.trim();
  let cpf = document.getElementById('cpf').value.trim();
  let numeroCartao = document.getElementById('numeroCartao').value.trim();
  let validade = document.getElementById('validade').value.trim();
  let cvv = document.getElementById('cvv').value.trim();

  if (
    nomeCompleto === '' ||
    cpf.length !== 11 ||
    isNaN(cpf) ||
    numeroCartao.length !== 14 ||
    isNaN(numeroCartao) ||
    validade.length !== 6 ||
    isNaN(validade) ||
    cvv.length !== 3 ||
    isNaN(cvv)
  ) {
    alert('Por favor, preencha todos os campos corretamente.');
    return false;
  }

  return true;
}

function finalizarCompraComSucesso(mensagem, tempo) {
  let meuBotao = document.getElementById('botaoCompra');

  meuBotao.addEventListener('click', function () {
    if (validarFormularioCompra()) {
      window.alert(mensagem);
      setTimeout(function () {
        window.location.href = '/index.html';
      }, tempo);
    }
  });
}

finalizarCompraComSucesso('Compra realizada com sucesso!', 2000);
