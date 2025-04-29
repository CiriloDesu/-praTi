let nota = parseFloat(prompt("Insira a nota do aluno: "));
if (nota >= 7) {
    console.log("Aprovado");
}
else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
}
else if (nota < 5) {
    console.log("Reprovado");
}