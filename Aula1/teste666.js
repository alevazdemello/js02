
alert("Bem-Vindo ao Mundo JavaScript!");

function mostrarOla() {
  var nome = document.getElementById("nome").value;
  document.getElementById("resposta").textContent = `Olá ${nome}! Bem vindo á página de testes de JS.`;
}

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarOla);