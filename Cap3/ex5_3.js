function exibirNotas() {
  var inValor = document.getElementById("inValor");
  var saque = Number(inValor.value);
  var outNotadeCem = document.getElementById("outNotaCem");
  var outNotadeCinquenta = document.getElementById("outNotadeCinquenta");
  var outNotadeDez = document.getElementById("outNotadeDez");

  outNotadeCem.textContent = "";
  outNotadeCinquenta.textContent = "";
  outNotadeDez.textContent = "";


  if (saque == 0 || isNaN(saque)) {
    alert("Informe o valor do saque corretamente");
    inValor.focus()
    return;
  }

  if (saque % 10 != 0) {
    alert("Valor inválido para notas disponíveis (R$10, 50, 100)");
    inValor.focus();
    return;
  }

  var notasCem = Math.floor(saque / 100);
  var resto = saque % 100;
  var notasCinquenta = Math.floor(resto / 50);
  var resto = saque % 50;
  var notasDez = Math.floor(resto / 10);

  if (notasCem > 0) {
    outNotaCem.textContent = "Notas de R$100: " + notasCem;
  }
  if (notasCinquenta > 0) {
    outNotaCinquenta.textContent = "Notas de R$50: " + notasCinquenta;
  }
  if (notasDez > 0) {
    outNotaDez.textContent = "Notas de R$10: " + notasDez;
  }
}

btExibir.addEventListener("click", exibirNotas);