import cipher from './cipher.js';
console.log(cipher);

const button = document.getElementById("button")
button.addEventListener("click", crip)
const button2 = document.getElementById("button2")
button.addEventListener("click", decrip)

function crip() {
    let deslocamento = Number(document.getElementById("desloc").value);
    let msg =  document.getElementById("mensagem").value;
    let resu = cipher.encode(deslocamento, msg);

}

function decrip() {
    let deslocamento2 = Number(document.getElementById("desloc").value);
    let msg2 =  document.getElementById("mensagem").value;
    let resu2 = cipher.decode(deslocamento2, msg2);

}


