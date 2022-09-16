function calcularValor() {
  var valor = document.getElementById("invalor").value;
  var tempUso = document.getElementById("intemp").value;

  var pagar = Math.ceil(tempUso / 15) * valor
  if (valor <= 0) {
    window.alert('Digite um valor válido.')
  }
  if (tempUso <= 0) {
    window.alert('Digite um valor válido.')
  }
  document.getElementById("outres").textContent = `Valor a pagar R$: ${pagar.toFixed(2)}.`;
}

btpreco.addEventListener("click", calcularValor)
