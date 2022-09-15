function mostrarDadosVeic() {
    var modeloVeic = document.getElementById("inveiculo").value;
    var valorVeic = document.getElementById("invalor").value;

    var entrada = valorVeic / 2;
    var res = entrada / 12;
    document.getElementById("outres1").textContent = `Promoção '${modeloVeic}'`;
    document.getElementById("outres2").textContent = `Entrada de R$ ${entrada}.`;
    document.getElementById("outres3").textContent = `+ 12x de R$ ${res}.`;
}


btpromo.addEventListener("click", mostrarDadosVeic);
