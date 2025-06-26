function memorize(fn) {
    const cache ={};

    return function(...args) {
        const key = JSON.stringify(args);

        if(key in cache){
            console.log(`Buscando no cache ${key}`);
            return cache[key];
        } else {
            console.log(`calculando pela primeira vez ${key}`);
           const retulst = fn.apply(this, args);

           cache[key] = result;
           return result;
        }
    }
}

const fatorialMemo = memorize(function f(n) {
    if (n < 0) throw "Negativo!";
    if (n === 0) return 1;
    return n * f(n - 1);
});
function fatorialMemoizacao() {
    const n = parseInt(document.getElementById('numMemo').value);
    try {
        const r = fatorialMemo(n);
        document.getElementById('resultado').innerText = `Fatorial memoizado: ${r}`;
    } catch (e) {
        document.getElementById('resultado').innerText = e;
    }
}