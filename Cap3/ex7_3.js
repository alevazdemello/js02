function verificar() {
  var inVeloc = document.getElementById("inVeloc");
  var inVelocCon = document.getElementById("inVelocCon");

  var velocidadePerm = Number(inVeloc.value);
  var velocidadeCond = Number(inVelocCon.value);

  if (velocidadeCond <= velocidadePerm) {
    document.getElementById("outRes").textContent = `Sem Multa.`;
  } else if (velocidadeCond > velocidadePerm && velocidadeCond < (velocidadePerm * 1.2)) {
    document.getElementById("outRes").textContent = `Multa Leve.`;
  } else if (velocidadeCond > (velocidadePerm * 1.2)) {
    document.getElementById("outRes").textContent = `Multa Grave.`;
  }
}

function limparDados() {
  location.reload();
  document.getElementById("inVeloc").focus();
}

btVerificar.addEventListener("click", verificar);
btLimpar.addEventListener("click", limparDados);
