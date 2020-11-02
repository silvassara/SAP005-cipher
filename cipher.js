const cipher = {
  // ...
};

export default cipher;
//[A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
//[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]
// "A".charCodeAt(0) --> 65
//String.fromCharCode(72) -->H
// ((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1aLetra
//codigoASC -> codigo0a25 -> desloc -> giro -> codigoASC
//               -65           +desl    %tam      +65
function encode(offset, string) {
  offset = offset % 26;
  var maiusculas = string.toUpperCase();
  var alfabeto = "abcdefghijklmnopqrstuvwxyz".split(" ");
  var novaString = " ";
  for (let crip = 0; crip<string.length; crip++){
    var letraAtual = maiusculas[crip];
    if(letraAtual === " ") {
      novaString += letraAtual;
      continue;
    }
    var indiceAtual = alfabeto.indexOf(letraAtual);
    var novoIndice = indiceAtual + offset;
    if (novoIndice> 25 ) novoIndice = novoIndice - 26;
    if (novoIndice< 26 ) novoIndice = novoIndice + 26;
    if (string[crip] === string[crip].toUpperCase()) {
      novaString += alfabeto[novoIndice].toUpperCase();
    }
    else novaString += alfabeto[novoIndice];
  }
  return novaString

}