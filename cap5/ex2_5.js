//declara VETOR de escopo GLOBAL que irá armazenar os numeros ja apostados
var erros = [];

//gera um número aleatorio entre 0 e 100
var sorteado = Math.floor(Math.random() * 100) + 1;

//declara constante com numero de chances
const CHANCES = 6;

function apostarNumero() {
  var inNum = document.getElementById("inNum");
  var numero = Number(inNum.value);

  if (numero <= 0 || numero > 100 || isNaN(numero)) {
    alert("Informe um número válido");
    inNum.focus();
    return;
  }

  //referencia espacos das saidas de dados
  var outDica = document.getElementById("outDica");
  var outErros = document.getElementById("outErros");
  var outChances = document.getElementById("outChances");


  //se a aposta for igual ao numero sorteado 
  if (numero == sorteado) {
    alert("Parabéns, você acertou!");
    //troca os status dos botoes 
    btApostar.disabled = true;
    btJogar.className = "exibe";
    outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
  } else {
    //se o numeor existe no vetor erros
    if (erros.indexOf(numero) >= 0) {
      alert("Você já apostou o número " + numero + ". Tente outro.");
    } else {
      erros.push(numero); //adiciona numero ao vetor
      var numErros = erros.length; //obtem o tamanho do vetor
      var numChances = CHANCES - numErros; //calcula o numero de chances

      //exibe o numero de erros, conteudo do vetor e numero de chances
      outErros.textContent = numErros + " (" + erros.join(", ") + ")";
      outChances.textContent = numChances;
      if (numChances == 0) {
        alert("Suas chances acabaram!")
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = "Game over! Número sorteado: " + sorteado;
      } else {
        //usa operador ternario(condicional) p mensagem da dica
        var dica = numero < sorteado ? "maior" : "menor";
        outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
      }
    }
  }

  //limpa campo de entrada e posiciona o cursor neste campo
  inNum.value = "";
  inNum.focus();
}


function jogarNovamente() {
  location.reload();

}

var btApostar = document.getElementById("btApostar");
var btJogar = document.getElementById("btJogar");
btApostar.addEventListener("click", apostarNumero);
btJogar.addEventListener("click", jogarNovamente);




