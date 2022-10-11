var pacientes = []; //declara vetor global

function adicionarPaciente() {
  var inPaciente = document.getElementById("inPaciente");
  var outRes = document.getElementById("outRes");

  var nome = inPaciente.value;


  if (nome == "") {
    alert("Informe o nome do paciente.");
    inPaciente.focus();
    return;
  }

  //adiciona o nome no final do vetor
  pacientes.push(nome);

  //string p concatenar pacientes
  var lista = "";

  //percorre os elementos do vetor
  for (i = 0; i < pacientes.length; i++) {

    //se nao colocarmos a variavel pacientes com o [i], ele nao adiciona um item de forma ordenada.
    //aqui o valor da lista é adicionado a 1, pois seria estranho se começasse no 0
    //o operador += indica que a variavel recebera o proprio conteudo da variavel + um novo valor
    lista += (i + 1) + ". " + pacientes[i] + "\n";

  }

  //altera o conteudo da tag outRes
  outRes.textContent = lista;

  //limpa o campo e posiciona o cursor em inPaciente
  inPaciente.value = "";
  inPaciente.focus();
}

function atenderPaciente() {
  if (pacientes.length == 0) {
    alert("Não há pacientes na lista de Espera.");
    inPaciente.focus();
    return;
  }

  var outAtendimento = document.getElementById("outAtendimento");
  var outRes = document.getElementById("outRes")

  var atender = pacientes.shift();

  outAtendimento.textContent = atender;

  var lista = ""

  for (i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + ". " + pacientes[i] + "\n"
  }

  outRes.textContent = lista;
}





btAdd.addEventListener("click", adicionarPaciente);
btAtender.addEventListener("click", atenderPaciente)