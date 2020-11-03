const cipher = {
  encode: function(offset, string) {
    var maiusculas = string.toUpperCase();
    let novaStr = "";

    for (let i = 0; i<maiusculas.length; i++){
      let codigo = ((maiusculas.charCodeAt(i)-65+offset) %26) +65
      novaStr += String.fromCharCode(codigo)
    }
    document.getElementById("result").innerHTML = novaStr;
  }

  decode: function(offset2, string2) {
    let maiusculas2 = string2.toUpperCase();
    let novaStr2 = "";

    for (let e = 0; e<maiusculas2.length; e++){
      let codigo2 = ((maiusculas2.charCodeAt(e)+65-offset2) %26) -65;
      novaStr2 += String.fromCharCode(codigo2);
    }
    document.getElementById("result").innerHTML = novaStr2;
  }
};


export default cipher;
//[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
//[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
// "A".charCodeAt(0) --> 65
//String.fromCharCode(72) -->H
// ((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra
//codigoASC -> codigo0a25 -> desloc -> giro -> codigoASC
//               -65           +desl    %tam      +65


