//declara/inicializa os contadores e acumuladores(variaveis globais)
var numContas = 0;
var valTotal = 0;

//variavel string que acumula as contas
var resposta = "";

function registrarConta() {
  var inDescricao = document.getElementById("inDescricao");
  var inValor = document.getElementById("inValor");
  var outListasContas = document.getElementById("outListasContas");
  var outTotal = document.getElementById("outTotal");

  //obtem/converte o conteudo dos campos

  var descricao = inDescricao.value;
  var valor = Number(inValor.value);

  //verifica o preenchimento dos campos

  if (descricao == "" || valor == 0 || isNaN(valor)) {
    alert("Informe os dados corretamente!");
    inDescricao.focus()
    return;
  }

  //adiciona valor ao contador e acumulador
  numContas++;
  valTotal = valTotal + valor;

  //concatena as contas
  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";


  //altera o conteudo das tags de resposta
  outListasContas.textContent = resposta + "---------------------";
  outTotal.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

  //limpa campos e posiciona cursor
  inDescricao.value = "";
  inValor.value = "";
  inDescricao.focus();
}

function limparDados() {
  location.reload();
  document.getElementById("inDescricao").focus;
}

var btRegistro = document.getElementById("btRegistro");
btRegistro.addEventListener("click", registrarConta);
btLimpar.addEventListener("click", limparDados);