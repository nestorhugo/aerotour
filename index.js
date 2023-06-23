'use strict';

import Viagem from './viagem-class.js';
import ViagemInternacional from './viagem-class.js';

// eslint-disable-next-line max-len
let viagemFozDoIguacu = new Viagem('Foz do Iguaçu', '11/10/2023', 3, 909.99); //criando
viagemFozDoIguacu.exibir(); //exibindo info

// eslint-disable-next-line max-len
let viagemFortaleza = new Viagem('Fortaleza', '16/11/2023', 4, 1439.99); //criando
viagemFortaleza.exibir(); //exibindo info

// eslint-disable-next-line max-len
let viagemRioDeJaneiro = new Viagem('Rio de Janeiro', '25/11/2023', 3, 1299.99); //criando
viagemRioDeJaneiro.exibir(); //exibindo info

let viagemFernandoDeNoronha = new Viagem(
  'Fernando de Noronha',
  '10/12/2023',
  3,
  5245
); //criando
viagemFernandoDeNoronha.exibir(); //exibindo info

// eslint-disable-next-line max-len
let viagemIntBuenosAires = new ViagemInternacional(
  'Buenos Aires',
  '12/07/2023',
  4,
  159329,
  'ARS'
); //criando
viagemIntBuenosAires.exibir(); //exibindo info internacional

var imagens = document.querySelectorAll('.card img');

for (var i = 0; i < imagens.length; i++) {
  imagens[i].onmousemove = function () {
    this.style.border = '5px solid #0D6EFD';
  };

  imagens[i].onmouseout = function () {
    this.style.border = 'none';
  };
}

$(document).ready(function () {
  $('#btnBuscarCep').click(function () {
    var cep = $('#cepInput').val();
    $.ajax({
      url: 'https://viacep.com.br/ws/' + cep + '/json/',
      method: 'GET',
      success: function (response) {
        $('#cidade').text(
          'Você está procurando viagens para ' + response.localidade
        );
      },
      error: function () {
        $('#cidade').text('Não foi possível obter o nome da cidade.');
      },
    });
  });
});
