function contagem() {
    var inNum = document.getElementById("inNum");
    var num = Number(inNum.value);

    var resposta = "";
    for (var i = num; i > 0; i = i - 1) {
        resposta =  resposta + i + " " ;
    }
    document.getElementById("outRes").textContent = `A contagem decrescente de ${num} é: \n ${resposta}.`;
}

function limparDados() {
    location.reload();
    document.getElementById("inNum").focus();
}

btDecre.addEventListener("click", contagem);
btLimp.addEventListener("click", limparDados);