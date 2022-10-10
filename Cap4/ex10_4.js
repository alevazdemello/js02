function calcular() {
    var inNum = document.getElementById("inNum");
    var numero = Number(inNum.value);
    var outDivisores = document.getElementById("outDivisores");

    var divisores = "Divisores do " + numero + ": 1";
    var soma = 1;

    //percorre os possiveis divisores e acumula
    for (var i = 2; i <= numero / 2; i++){
        if (numero % i == 0) {
            divisores = divisores + ", " + i;
            soma = soma + i;
        }
    }

    divisores = divisores + " (Soma: " + soma + ")";

    document.getElementById("outRes").textContent = numero;
    outDivisores.textContent = divisores;

    if (numero == soma) {
        outRes.textContent = numero + " É um número Perfeito."
    } else {outRes.textContent = numero + " Não é um número Perfeito."}

}

btVerificar.addEventListener("click", calcular)