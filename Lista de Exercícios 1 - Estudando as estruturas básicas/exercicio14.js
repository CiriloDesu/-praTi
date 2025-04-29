let numero = parseInt(prompt("Insira um número inteiro para calcular fatorial: "));
let fatorial = 1;

if (numero < 0) {
    console.log("Fatorial não definido para números negativos.");
} else {
    for(let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log("O fatorial de " + numero + " é: " + fatorial);
}