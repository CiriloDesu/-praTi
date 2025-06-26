function paresParaObjeto() {
    const arr = JSON.parse(document.getElementById('inputPares').value);
    const r = Object.fromEntries(arr);
    document.getElementById('resultado').innerText = JSON.stringify(r);
}
function objetoParaPares() {
    const obj = JSON.parse(document.getElementById('inputObjeto').value);
    const r = Object.entries(obj);
    document.getElementById('resultado').innerText = JSON.stringify(r);
}