function deposito() {
  var inValor = document.getElementById("inValor");
  var valor = Number(inValor.value);
  var outRes1 = document.getElementById("outRes1");

  if (valor < 1) {
    alert("Valor Insuficiente!")
  }


  if (valor >= 3) {
    var tempo = Math.floor(valor / 3) * 120
    resto = valor % 3

    document.getElementById("outRes1").textContent = `Tempo: ${tempo} minutos.`;
    document.getElementById("outRes2").textContent = `Troco R$ ${resto}.`
  }

  if (valor >= 1.75 && valor < 3) {
    var tempo = Math.floor(valor / 1.75) * 60
    resto = valor % 1.75

    document.getElementById("outRes1").textContent = `Tempo: ${tempo} minutos.`;
    document.getElementById("outRes2").textContent = `Troco R$ ${resto}.`
  }

  if (valor >= 1 && valor < 1.75) {
    var tempo = Math.floor(valor / 1) * 30
    resto = valor % 1

    document.getElementById("outRes1").textContent = `Tempo: ${tempo} minutos.`;
    document.getElementById("outRes2").textContent = `Troco R$ ${resto}.`
  }

}

function limpar() {
  location.reload();
  document.getElementById("inValor").focus();
}

btConf.addEventListener("click", deposito);
btLimp.addEventListener("click", limpar)