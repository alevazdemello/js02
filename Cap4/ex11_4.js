function linhas () {
    var inNum = document.getElementById("inNum");
    numero = Number(inNum.value);

    var estrelas = "";
    for (var i = 1; i <= numero; i++) {
        for (var j = 1; j <= i; j++) {
            estrelas = estrelas + "*"
        }
        estrelas = estrelas + "\n";
    }
    document.getElementById("outRes").textContent = estrelas;
}

btCriar.addEventListener("click", linhas)