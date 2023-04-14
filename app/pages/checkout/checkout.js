let meuBotao = document.getElementById("botaoCompra");

meuBotao.addEventListener("click", function() {
    window.alert("Compra realizada com sucesso!");
    setTimeout(function() {
        window.location.href = "/index.html";
    }, 2000); 
});
