
function verificar() {
  var inNum = document.getElementById("inNum");
  var numero = Number(inNum.value);


  //document.getElementById("outRes").textContent = numero;


  var numDivisores = 0; //declara e inicializa o contador

  //abaixo, percorre todos os possiveis divisores do numero
  for (var i = 1; i <= numero; i++) {
    //verifica se i é divisor do numero
    if (numero % i == 0) {
      numDivisores++; //se é, incrementa contador
    }
  }

  //se possui apenas 2 divisores, é primo
  if (numDivisores == 2) {
    outRes.textContent = "Número " + numero + " é primo.";
  } else {
    outRes.textContent = "Número " + numero + " não é primo."
  }

}

btVerificar.addEventListener("click", verificar);