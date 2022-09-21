function calcularNotas() {
    var inValor = document.getElementById("inValor");
    var outNotasCem = document.getElementById("outNotasCem");
    var outNotasCinquenta = document.getElementById("outNotasCinquenta");
    var outNotasDez = document.getElementById("outNotasDez");
    var saque = Number(inValor.value); //converte o conteúdo em número
    document.getElementById("outRes1").textContent = `Valor total solicitado ${saque}.`;

    //verifica se nao preencheu ou Nan

    if(saque == 0 || isNaN(saque)) {
        alert("Informe o valor do saque corretamente");
        inValor.focus();
        return;
    }


    //verificar se saque não é multiplo de 10:

    if(saque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$10, 50, 100)");
        inValor.focus();
        return;
    }


    var notasCem = Math.floor(saque / 100);
    //cria uma variavel resto para continuar a contabilidade das notas (caso necessario)
    resto = saque % 100;
    var notasCinquenta = Math.floor(resto / 50);
    //caso necessario a variavel resto é alterada
    resto = resto % 50 
    var notasDez = Math.floor(resto / 10);

    //exibe as notas apenas se houver:
    if (notasCem > 0) {
        outNotasCem.textContent = "Notas de R$100: " + notasCem;
    }
    if (notasCinquenta > 0) {
        outNotasCinquenta.textContent = "Notas de R$50: " + notasCinquenta;
    }
    if (notasDez > 0) {
        outNotasDez.textContent = "Notas de R$10: " + notasDez;
    }
}

function limparCampos() {
    location.reload();
    document.getElementById("inValor").focus();
}

btExibir.addEventListener("click", calcularNotas)
btLimparDados.addEventListener("click", limparCampos)
