let numero1 = 0, numero2 = 1;

console.log("Primeiros 10 numeros da seq de fibonacci: ");
for (let i = 0; i <= 10 ; i++) {
   console.log(numero1);
    let proximoNumero = numero1 + numero2;
    numero1 = numero2;
    numero2 = proximoNumero;
} 