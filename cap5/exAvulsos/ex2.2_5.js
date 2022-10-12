function gerarNumero() {
  var numero = Math.floor(Math.random() * 100) + 1;
  document.getElementById("outRes").textContent = numero;

}

btDescobrir.addEventListener("click", gerarNumero)