function numSimbolos() {
  var inNum = document.getElementById("inNum");
  var numero = Number(inNum.value);

  var estrelas = "";
  for (var i = 1; i <= numero; i++) {
    if (i % 2 == 1) {
      estrelas = estrelas + "*"
    } else {
      estrelas = estrelas + "-"
    }
  }
  outRes.textContent = estrelas;

}

btPreencher.addEventListener("click", numSimbolos)