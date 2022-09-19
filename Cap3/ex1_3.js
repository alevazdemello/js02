function calculoPeso() {
    var nome = document.getElementById("inNome").value;
    var rbMasc = document.getElementById("rbMasc").value;
    var rbFem = document.getElementById("rbFem").value;
    var inAlt = document.getElementById("inAlt");
    var alt = Number(inAlt.value);
    var masculino = rbMasc.checked;
    var feminino = rbFem.checked;


    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo");
        inNome.focus(); // posiciona (joga o foco) no campo de edição
        inNome
        return;
        }
  
     if (alt == 0 || isNaN(alt)) {
        alert("Por favor, informe a altura corretamente");
       inAltura.focus();
       return;
            }


    if (masculino) {
    var peso = 22 * Math.pow(alt, 2); // Math.pow eleva ao quadrado
      } else {
    var peso = 21 * Math.pow(alt, 2);
    }

    outRes.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg";
    outRes.style.color = "blue";
    }
  
     btCalculo.addEventListener("click", calculoPeso);


  function limparCampos() {
    // recarrega a página
    location.reload();
    // posiciona (joga o foco) no elemento inNome
    document.getElementById("inNome").focus();
    }
    var btLimpar = document.getElementById("btLimp");
    btLimp.addEventListener("click", limparCampos);
