import cipher from './cipher.js';
console.log(cipher);

const button = document.getElementById("button")
button.addEventListener("click", crip)
const button2 = document.getElementById("button2")
button2.addEventListener("click", decrip)

function crip() {
    let deslocamento = Number(document.getElementById("desloc").value);
    let msg =  document.getElementById("mensagem").value;
    document.getElementById("mensagem").value = cipher.encode(deslocamento, msg.toString().toUpperCase());

}

function decrip() {
    let deslocamento = Number(document.getElementById("desloc").value);
    let msg =  document.getElementById("mensagem").value;
    document.getElementById("mensagem").value = cipher.decode(deslocamento, msg.toString().toUpperCase());

}


