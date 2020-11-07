const cipher = {
  encode(offset, string) {
    const tamanhoAlfabeto = 26
    const letrasMaiusculas = 65

    let novaStr = ''

    for (let i = 0; i<string.length; i++){
      let codigoASC = string.charCodeAt(i);

      if (codigoASC>=65 && codigoASC<=90) {
        let codigo = ((codigoASC-letrasMaiusculas+offset)%tamanhoAlfabeto) +letrasMaiusculas;
        novaStr += String.fromCharCode(codigo)
      }else {
        novaStr += String.fromCharCode(codigoASC)
      }
    }
    return novaStr

  },

  decode(offset, string) {
    const tamanhoAlfabeto = 26
    const fimAlfabeto = 90

    let novaStr = ''

    for (let i = 0; i<string.length; i++){
      let codigoASC = string.charCodeAt(i);

      if (codigoASC>=65 && codigoASC<=90) {
        let codigo = ((codigoASC-fimAlfabeto-offset)%tamanhoAlfabeto) +fimAlfabeto
        novaStr += String.fromCharCode(codigo)
      }else {
        novaStr += String.fromCharCode(codigoASC)
      }
    }
    return novaStr
  }
};
export default cipher;
