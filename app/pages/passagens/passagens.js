let contagemRegressiva = document.getElementById("contagemRegressiva");
let dataPromocao = new Date("2023-05-01");

function atualizarContagemRegressiva() {
  let diferenca = Math.floor((dataPromocao - Date.now()) / 1000);

  let dias = Math.floor(diferenca / 86400);
  let horas = Math.floor((diferenca % 86400) / 3600);
  let minutos = Math.floor((diferenca % 3600) / 60);
  let segundos = diferenca % 60;
  

  contagemRegressiva.innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContagemRegressiva, 1000);

window.onload = function() {
  alert("Aproveite os preços! Sempre temos promoção!");
};
