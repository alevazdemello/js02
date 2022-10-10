function repetir() {
  var inNome = document.getElementById("inNome");
  var inNum = document.getElementById("inNum");

  //determina as variaveis como string e number
  var nome = inNome.value;
  var num = Number(inNum.value);

  var resposta = "";

  for (var i = 1; i <= num; i++) {
    resposta = resposta + " * " + nome
  }

  document.getElementById("outRes").textContent = resposta;
}

btRepetir.addEventListener("click", repetir)