const verificarFrete = valorCompra =>
    valorCompra > 150 ? "Frete Grátis" : "Frete R$ 20,00";

console.log(verificarFrete(200));