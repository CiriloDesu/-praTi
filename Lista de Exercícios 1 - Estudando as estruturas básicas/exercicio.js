console.log("VOCÊ É 1. PEIXE\n2. GATO\n3. CACHORRO");
let opcao = parseInt(prompt("Escolha uma opção: "));
switch(opcao) {
    case 1:
        console.log("Você escolheu PEIXE.");
        break;
    case 2:
        console.log("Você escolheu GATO.");
        break;
    case 3:
        console.log("Você escolheu CACHORRO.");
        break;
    default:
        console.log("Opção inválida.");
}
