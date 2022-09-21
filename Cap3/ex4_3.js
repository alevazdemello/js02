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

/* Se a raiz for igual à aplicação da Math.floor() sobre a raiz, 
signica que não há decimais, pois 4.0 é igual a Math.floor(4.0),
por exemplo. Já 3.872983... é diferente de Math.floor(3.872983..) – que
retorna 3.0. */

btRaiz.addEventListener("click", calculoRaiz);
