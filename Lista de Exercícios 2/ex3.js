const frase = "olá olá mundo o brasil é o país do futebol futebol";

const todasAsPalavras = frase.split(" ");

const palavrasUnicas = [];

console.log("Frase original:" + frase);
console.log("Todas as palavras na frase:" + "todasAsPalavras");

for(let i = 0; i < todasAsPalavras.length; i++){
    const palavraAtual = todasAsPalavras[i];

    if(!palavrasUnicas.includes(palavraAtual)){
        palavrasUnicas.push(palavraAtual);
    
    }
}

console.log("Palavras únicas:" + palavrasUnicas);