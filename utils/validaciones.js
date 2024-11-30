module.exports = {
  contieneMinimoPalabra(text) {
    const MAX_PALABRA = 20;
    const palabras = text.trim().split(/\s+/);
    return palabras >= MAX_PALABRA;
  },
  contieneMinimoCaracter(text) {
    const palabras = text.trim().split(/\s+/);
    if (palabras.length < 10) {
      return false;
    }
    const primeras10Palabras = palabras.slice(0, 10);
    const contadorC = primeras10Palabras.join(" ").length;
    return contadorC >= 100;
  },
  noSuperaCaracter(text) {
    return text.length <= 10000;
  },
};
