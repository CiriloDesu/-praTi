const numeroSecreto = Math.floor(Math.random() * 100) +1;

let tentativas = 0;

let palpite;

console.log("Jogo da adivinhação ☻")
console.log("Insira um número inteiro de 1 a 100 para adivinhar o número secreto corretamente")

while( palpite !== numeroSecreto){
    palpite = parseInt(prompt("Qual seu palpite?"))

    tentativas++
    if(isNaN(palpite)){
        alert("Digite um número vaálido.")
        
    } else if(palpite < numeroSecreto){
        alert("Tente um número maior.")
        console.log(`Tentativa #${tentativas}: ${palpite} → mais alto!`)

    } else if(palpite > numeroSecreto){
        alert("Tente um número menor.")
        console.log(`Tentativa #${tentativas}: ${palpite} → mais baixo!`)

    } else {
        const final = `Parabéns, você acertou o número secreto ${numeroSecreto}`
        console.log(final)
        alert(final)
    }
}
console.log(`Fim de jogo após ${tentativas} tentativas`)