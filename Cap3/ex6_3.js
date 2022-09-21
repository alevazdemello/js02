function Verificar() {
 var inNum = document.getElementById("inNum");
 var num = Number(inNum.value);


 if(num % 2 != 0) {
    document.getElementById("outRes").textContent = `${num} é ímpar.`;
 } else {
    document.getElementById("outRes").textContent = `${num} é par.`
 }

}

function LimparCampos() {
    location.reload();
    document.getElementById("inNum").focus();
}

btVerifica.addEventListener("click", Verificar);
btLimpar.addEventListener("click", LimparCampos);