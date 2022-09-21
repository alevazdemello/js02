function calculoRaiz() {
  var inNum = document.getElementById("inNum");
  var num = Number(inNum.value);
  var raizQuadrada = Math.sqrt(num);

  if (num == 0 || isNaN(num)) {
    alert("Informe um número válido.")
    inNum.focus();
    return;
  }


  if (raizQuadrada == Math.floor(raizQuadrada)) {
    document.getElementById("outRes").textContent = `A Raiz Quadrada de ${num} é ${raizQuadrada}.`;
  } else {
    document.getElementById("outRes").textContent = `Nao há raiz exata para ${num}.`;
  }

}



btRaiz.addEventListener("click", calculoRaiz);
