let quantidadeMaca = parseInt(prompt("Quantas maçãs você comprou? "));
let precoPorMaca = 0.30; 
let precoPorMacaComDesconto = 0.25; 
let precoTotal = 0; 

if (quantidadeMaca < 12) {
    precoTotal = quantidadeMaca * precoPorMaca;
}else {
    precoTotal = quantidadeMaca * precoPorMacaComDesconto; 
}

console.log("O preço total é: R$ " + precoTotal.toFixed(2));