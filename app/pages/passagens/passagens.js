const contagemRegressiva = document.getElementById("contagemRegressiva");
const dataPromocao = new Date("2023-05-01");

function atualizarContagemRegressiva() {
  const diferenca = Math.floor((dataPromocao - Date.now()) / 1000);

  const dias = Math.floor(diferenca / 86400);
  const horas = Math.floor((diferenca % 86400) / 3600);
  const minutos = Math.floor((diferenca % 3600) / 60);
  const segundos = diferenca % 60;
  

  contagemRegressiva.innerHTML = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarContagemRegressiva, 1000);


