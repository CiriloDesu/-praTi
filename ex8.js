function agruparVendas() {
    const arr = JSON.parse(document.getElementById('vendas').value);
    const r = arr.reduce((acc, curr) => {
        acc[curr.cliente] = (acc[curr.cliente] || 0) + curr.total;
        return acc;
    }, {});
    document.getElementById('resultado').innerText = JSON.stringify(r);
}