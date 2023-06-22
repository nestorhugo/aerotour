'use strict';

let contagemRegressiva = document.getElementById('contagemRegressiva');
let dataPromocao = new Date('2023-07-16');

function atualizarContagemRegressiva() {
  let diferenca = Math.floor((dataPromocao - Date.now()) / 1000);

  let dias = Math.floor(diferenca / 86400);
  let horas = Math.floor((diferenca % 86400) / 3600);
  let minutos = Math.floor((diferenca % 3600) / 60);
  let segundos = diferenca % 60;

  // eslint-disable-next-line max-len
  contagemRegressiva.innerHTML = `${dias} dias, ${horas} horas,${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContagemRegressiva, 1000);

window.onload = function () {
  alert('Aproveite os preços! Sempre temos promoção!');
};

//Requisições AJAX
$(document).ready(function () {
  $('#btnDestinos').click(function () {
    $.ajax({
      url: '/destinos',
      type: 'GET',
      success: function (destinos) {
        console.log(destinos);
      },
    });
  });
});

$(document).ready(function () {
  $('#btnVoos').click(function () {
    $.ajax({
      url: 'http://localhost:3000/voos',
      type: 'GET',
      success: function (voos) {
        // Aqui você pode manipular os dados retornados da rota /voos
        console.log(voos);
      },
    });
  });
});
