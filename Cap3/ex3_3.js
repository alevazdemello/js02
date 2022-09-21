function calculoFuso() {
  var inHoraBr = document.getElementById("inHoraBr");
  var horaBrasil = Number(inHoraBr.value);

  if (inHoraBr.value == "" || isNaN(horaBrasil)) {
    alert("Informe a hora no Brasil corretamente.")
    inHoraBr.focus();
    return;
  }

  var horaFranca = horaBrasil + 5
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24
  }

  document.getElementById("outRes").textContent = `A hora na França é ${horaFranca.toFixed(2)}.`;
}

btHora.addEventListener("click", calculoFuso);