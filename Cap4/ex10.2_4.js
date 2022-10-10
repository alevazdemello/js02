function divisores() {
    var inNum = document.getElementById("inNum")
    var numero = Number(inNum.value);

    var divisores = "Divisores do " + numero + ": 1"

    for (var i = 2; i <= numero / 2; i++){
        if (numero % i == 0) {
            divisores = divisores + ", " + i;
        }
    }
    document.getElementById("outRes").textContent = divisores;
}

btVerificar.addEventListener("click", divisores)