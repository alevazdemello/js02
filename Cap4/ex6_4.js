function repetir() {
    var inFruta = document.getElementById("inFruta");
    var inNum = document.getElementById("inNum");

    var fruta = inFruta.value;
    var num = Number(inNum.value);

    var resposta = "";

    for (var i = 1; i <= num; i++) {
        resposta = resposta + " * " + fruta
    }

    document.getElementById("outRes").textContent = resposta;

}

btRepetir.addEventListener("click", repetir);