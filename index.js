/*dom
import cipher from './cipher.js';

console.log(cipher);*/
const button = document.getElementById("button")
button.addEventListener("click", crip)

function crip() {
    var deslocamento = Number(document.getElementById("desloc").value);
    var msg =  document.getElementById("mensagem").value;
    var resu = deslocamento + msg;

    document.getElementById("result").innerHTML = resu;

}


