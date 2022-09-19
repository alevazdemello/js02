function calculoPeso() {
  var nome = document.getElementById("inNome").value;
  var rbMasc = document.getElementById("rbMasc").value;
  var rbFem = document.getElementById("rbFem").value;
  var inAlt = document.getElementById("inAlt");
  var alt = Number(inAlt.value);
  var masculino = rbMasc.checked;
  var feminino = rbFem.checked;

  if (masculino) {
    var pesoIdeal = 22 * (alt * alt)
    document.getElementById("outRes").textContent = `${nome}: seu peso ideal é o ${pesoIdeal}`
  }
  else {
    var pesoIdeal = 21 * (alt * alt)
    document.getElementById("outRes").textContent = `${nome}: seu peso ideal é de ${pesoIdeal}`
  }
}

btCalculo.addEventListener("click", calculoPeso);