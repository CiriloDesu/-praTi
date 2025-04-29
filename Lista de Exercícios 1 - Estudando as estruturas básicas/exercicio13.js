let soma = 0;
let count = 0;

while (true) {
    let numero = parseFloat(prompt("Digite um número decimal (ou 0 para finalizar):"));

    if (numero === 0) {
        break;
    }

    soma += numero;
    count++;
}

if (count > 0) {
    let media = soma / count;
    console.log("A média aritmética dos números fornecidos é: " + media);
} else {
    console.log("Nenhum número foi fornecido.");
}
