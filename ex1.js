function ehDataValida(dia, mes, ano) {
    const data = new Date(ano, mes - 1, dia);

    const anoValido = data.getFullYear() === ano;
    const mesValido = data.getMonth() === mes - 1;
    const diaValido = data.getDate() === dia;

    return anoValido && mesValido && diaValido;
}

console.log(ehDataValida(29, 2, 2020)); // true
