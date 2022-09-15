function mostrarPromo() {
    var medic = document.getElementById("inmed").value;
    var valor = document.getElementById("inpreco").value; 
    var promo = Math.floor(valor) * 2
    document.getElementById("outres").textContent =  `Promoção de ${medic}.`;
    document.getElementById("outres2").textContent = `Leve 2 por apenas R$${promo}`;
}

btpromo.addEventListener("click", mostrarPromo);