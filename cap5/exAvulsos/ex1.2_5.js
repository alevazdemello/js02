var atendimentos = [];

function adicionarAtendimento() {
  var inCorretor = document.getElementById("inCorretor");
  var outLista = document.getElementById("outLista");

  var corretor = inCorretor.value;

  if (corretor == "") {
    alert('Informe um nome válido');
    inCorretor.focus;
    return;
  }

  //adiciona o nome no fim do vetor
  atendimentos.push(corretor);

  //string p concatenar corretores
  var lista = "";

  //percorre os elementos do vetor
  for (i = 0; i < atendimentos.length; i++) {
    lista += (i + 1) + ". " + atendimentos[i] + "\n";
  }

  //altera o conteudo da tag outres
  outLista.textContent = lista;

  inCorretor.value = "";
  inCorretor.focus();
}



function atenderCorretor() {
  if (atendimentos.length == 0) {
    alert("Não há corretores na lista de espera.");
    inCorretor.focus();
    return;
  }

  var outAtendimento = document.getElementById("outAtendimento");
  var outLista = document.getElementById("outLista");

  var atender = atendimentos.shift();

  outAtendimento.textContent = atender;

  var lista = "";

  for (i = 0; i < corretor.length; i++) {
    lista += (i + 1) + ". " + corretor[i] + "\n"
  }

  outLista.textContent = lista;

}

btAdd.addEventListener("click", adicionarAtendimento)
btAtender.addEventListener("click", atenderCorretor)
