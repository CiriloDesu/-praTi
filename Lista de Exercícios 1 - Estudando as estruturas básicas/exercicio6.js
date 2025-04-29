let a = parseFloat(prompt("Insira o valor de A: "));
let b = parseFloat(prompt("Insira o valor de B: "));
let c = parseFloat(prompt("Insira o valor de C: "));

if ( a + b > c && a + c > b && b + c > a) {
    console.log("Os valores formam um triângulo.");

    if (a === b && b === c) {
        console.log("Triângulo equilátero.");
    }
    else if (a === b || a === c || b === c) {
        console.log("Triângulo isósceles.");
    } else {
        console.log("Triângulo escaleno.");
    }
} else {
    console.log("Os valores não formam um triângulo.");
}
/*
Condição para formar um triângulo: 
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/