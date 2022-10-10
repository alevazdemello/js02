function criacao() {
  var inNum = document.getElementById("inNum");
  var inAnos = document.getElementById("inAnos");

  var numero = Number(inNum.value);
  var anos = Number(inAnos.value);

  var resposta = "";
  var total = numero;


  for (var i = 1; i <= anos; i++) {
    resposta = resposta + i + "° Ano: " + total + " Chinchilas\n";
    total = total * 3
  }
  document.getElementById("outRes").textContent = resposta;
}

btCalculo.addEventListener("click", criacao);