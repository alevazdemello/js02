function IdentificadorId() {
    var idade = document.getElementById("inIdade"); 
    var IdadeV = Number(idade.value);

    var categoria = IdadeV >= 18 ? "Adulto" : "Juvenil";

    document.getElementById("outRes").textContent = categoria;
}

btIdade.addEventListener("click", IdentificadorId)