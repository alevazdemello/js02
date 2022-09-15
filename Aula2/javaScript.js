function mostrarDadosFilme() {
  var nomeFilme = document.getElementById("infilme").value;
  var duracaoFilme = document.getElementById("indura").value;
  var horasFilme = Math.floor(duracaoFilme / 60)
  var minutosFilme = duracaoFilme % 60
  document.getElementById("outres1").textContent = `O filme assistido foi '${nomeFilme}'.`;
  document.getElementById("outres2").textContent = `Sua duração foi de ${horasFilme} hora(s) e ${minutosFilme} minutos.`;
}



btconv.addEventListener("click", mostrarDadosFilme);