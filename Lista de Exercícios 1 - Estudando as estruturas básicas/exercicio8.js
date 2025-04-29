let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));
if ( valor1 == valor2) {
    console.log("Os valores são iguais.");
} else if (valor1 > valor2) {
    console.log(valor2, valor1);
} else {
    console.log(valor1, valor2);
}
