function validarFormularioCompra() {
  let nomeCompleto = document.getElementById("nomeCompleto").value.trim();
  let cpf = document.getElementById("cpf").value.trim();
  let numeroCartao = document.getElementById("numeroCartao").value.trim();
  let validade = document.getElementById("validade").value.trim();
  let cvv = document.getElementById("cvv").value.trim();

  if (nomeCompleto === "" || cpf.length !== 11 || isNaN(cpf) ||
      numeroCartao.length !== 14 || isNaN(numeroCartao) ||
      validade.length !== 6 || isNaN(validade) ||
      cvv.length !== 3 || isNaN(cvv)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return false;
  }

  return true;
}

function finalizarCompraComSucesso(mensagem, tempo) {
  let meuBotao = document.getElementById("botaoCompra");

  meuBotao.addEventListener("click", function() {
    if (validarFormularioCompra()) {
      window.alert(mensagem);
      setTimeout(function() {
        window.location.href = "/index.html";
      }, tempo); 
    }
  });
}

finalizarCompraComSucesso("Compra realizada com sucesso!", 2000);