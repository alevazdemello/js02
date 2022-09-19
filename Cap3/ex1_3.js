function mostrarDados() {
  var nomeAluno = document.getElementById("inNome").value;
  var inNota1 = document.getElementById("inNota1");
  var inNota2 = document.getElementById("inNota2");

  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);
  var media = (nota1 + nota2) / 2

  document.getElementById("outRes1").textContent = `Média das notas ${media}.`

  if (media >= 7) {
    document.getElementById("outRes2").textContent = `Parabéns ${nomeAluno}, Você foi aprovado(a)!`;
    outRes2.style.color = "blue";
  }
  else if (media >= 4) {
    document.getElementById("outRes2").textContent = `Atenção ${nomeAluno}, você está em recuperação!`
    outRes2.style.color = "green";
  }
  else {
    document.getElementById("outRes2").textContent = `Ops, ${nomeAluno}! Você foi reprovado.`;
    outRes2.style.color = "red";
  }

}



btMedia.addEventListener("click", mostrarDados);
