/*O comando for é particularmente interessante de ser utilizado quando 
soubermos o número de repetições que devem ocorrer no programa. */ 

function contagem() {
    var inNum = document.getElementById("inNum");
    var outRes = document.getElementById("outRes");
    var num = Number(inNum.value);

    if (num == 0 || isNaN(num)) {
        alert("Informe um número válido!");
        inNum.focus();
        return;
    }

    var resposta = "Entre " + num + " e 1: ";
    for (var i = num; i > 1; i = i - 1) {
        resposta = resposta + i + ", "; //variável local que existe na função.
    }
    resposta = resposta + i + ".";
    outRes.textContent = resposta;
/* Após o término do laço, ela mantém o valor do último incremento/decremento da repetição.
    Portanto, ao referenciar o i fora do laço, o conteúdo “1” + “.” é acrescentado à resposta. */

}

function limparDados() {
    location.reload();
    document.getElementById("inNum").focus();
}

var btDecre = document.getElementById("btDecre");
btDecre.addEventListener("click", contagem);
btLimp.addEventListener("click", limparDados);
