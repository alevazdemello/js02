function calculoPreco() {
    var buffetkg = document.getElementById("inquilo").value; 
    var consumo = document.getElementById("incons").value;
    var preco = buffetkg / 1000 * consumo
    document.getElementById("outres").textContent = `Valor a pagar: R$${preco}.`;
}

btpreco.addEventListener("click", calculoPreco)