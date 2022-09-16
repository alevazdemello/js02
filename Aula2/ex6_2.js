function verPromo () {
    var produto = document.getElementById("inProd").value;  
    var preco = document.getElementById("inPreco").value;
    var promo = preco * 3 - (preco / 2)
    var produtoFinal = preco / 2
    document.getElementById("outRes").textContent = `${produto} - Promoção: Leve 3 por R$${promo.toFixed(2)}.`
    document.getElementById("outRes2").textContent = `O terceiro produto custa apenas R$${produtoFinal.toFixed(2)}.`
}

btPromo.addEventListener("click", verPromo)