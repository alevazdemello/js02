/* 1 declara/ inicia as variaveis contadoras e acumuladoras.
como elas estao para fora da funcao, sao variaveis globais */
var numProdutos = 0; 
var valTotal = 0;

//a variavel resposta é do tipo string onde as contas serão acumuladas
var resposta = "";

function listarCompras() {
    var inProduto = document.getElementById("inProduto");
    var inValor = document.getElementById("inValor");

/* conversão dos valores dos campos 
(obs na variavel produto, como se trata de texto a conversão é diferente da conversão feita com numero) */
    var produto = inProduto.value;
    var valor = Number(inValor.value);

if (produto == "" || valor == 0 || isNaN(valor)) {
    alert("Informe os dados corretamente!");
    inProduto.focus();
    return;
}

//adiciona valor ao contador e acumulador
    numProdutos++;
    valTotal = valTotal + valor;

//concatena a respota    
    resposta = resposta + produto + " - R$ " + valor.toFixed(2) + "\n";

//vincula a resposta com a tag correspondente    
    outListaCompras.textContent = resposta + "------------------";

//resposta total    
    outTotal.textContent = numProdutos + " Produto(s) - Total R$: " + valTotal.toFixed(2);
    
    inProduto.value = "";
    inValor.value = "";
    inProduto.focus()
}

function limparDados() {
    location.reload();
    document.getElementById("inProduto").focus;
}

btAdicionar.addEventListener("click", listarCompras);
btLimpar.addEventListener("click",limparDados);