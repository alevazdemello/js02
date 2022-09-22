function lados() {
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");

  var ladoA = Number(inLadoA.value);
  var ladoB = Number(inLadoB.value);
  var ladoC = Number(inLadoC.value);

  if (ladoA > (ladoB + ladoC)) {
    document.getElementById("outRes1").textContent = `Os lados não podem formar um triângulo.`;
  }
  else if (ladoB > (ladoA + ladoC)) {
    document.getElementById("outRes1").textContent = `Os lados não podem formar um triângulo.`;
  }
  else if (ladoC > (ladoA + ladoB)) {
    document.getElementById("outRes1").textContent = `Os lados não podem formar um triângulo.`;
  }
  else {
    document.getElementById("outRes1").textContent = `Os lados podem formar um triângulo.`;
  }

  if (ladoA == 0 || isNaN(ladoA)) {
    alert("O valor não pode ser zero!");
    location.reload();
    ininLadoA.focus();
    return;
  }
  if (ladoB == 0 || isNaN(ladoB)) {
    alert("O valor não pode ser zero!");
    location.reload();
    ininLadoA.focus();
    return;
  }
  if (ladoC == 0 || isNaN(ladoC)) {
    alert("O valor não pode ser zero!");
    location.reload();
    ininLadoA.focus();
    return;
  }


  if (ladoA == ladoB && ladoB == ladoC) {
    document.getElementById("outRes2").textContent = `Tipo de Triângulo Equilátero`;
  }
  if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
    document.getElementById("outRes2").textContent = `Tipo de Triângulo Escaleno`
  }
  if (ladoA == ladoB && ladoB != ladoC) {
    document.getElementById("outRes2").textContent = `Tipo de Triângulo Isósceles`
  }
  if (ladoA == ladoC && ladoB != ladoA) {
    document.getElementById("outRes2").textContent = `Tipo de Triângulo Isósceles`
  }
  if (ladoB == ladoC && ladoC != ladoA) {
    document.getElementById("outRes2").textContent = `Tipo de Triângulo Isósceles`
  }

}

function limparDados() {
  location.reload();
  document.getElementById("inLadoA").focus();
}

btVerificar.addEventListener("click", lados);
LimpDados.addEventListener("click", limparDados);
