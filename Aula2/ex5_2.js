function calcularValor(){
    var valor = document.getElementById("invalor").value;
    var tempUso = document.getElementById("intemp").value;

    document.getElementById("outres").textContent = valor;
}

btpreco.addEventListener("click", calcularValor)