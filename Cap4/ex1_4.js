function tabuada() {
    var inNum = document.getElementById("inNum");
    var num = Number(inNum.value);

    var resposta = "";
    for (var i = 1; i <= 10; i++) {
        resposta = resposta + num + " x " + i + " = " + num * i + "\n";
    }

    document.getElementById("outTabuadax").textContent = resposta; 

}


function limparDados() {
    location.reload();
    document.getElementById("inNum").focus();
}


btValor.addEventListener("click", tabuada);
btLimparDados.addEventListener("click", limparDados);