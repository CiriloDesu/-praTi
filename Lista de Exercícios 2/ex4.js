function fatorial(n) {

    //tratar erro caso n seja menor que 0
    if(n < 0) {
        throw new Error("Fatorial de número negativo não é definido")
    }
    //caso 2 se n === 0 retornar 1
    if(n === 0){
        return 1;
    }

    return n * fatorial(n - 1);
}
console.log(fatorial(3));


