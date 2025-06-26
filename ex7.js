function mapearOrdenar() {
    const arr = JSON.parse(document.getElementById('produtos').value);
    const r = arr.sort((a, b) => a.preco - b.preco).map(p => p.nome);
    document.getElementById('resultado').innerText = JSON.stringify(r);
}