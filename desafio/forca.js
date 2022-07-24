class Forca {
  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.status = "aguardando chute";
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavra = [];
    for (let letter in this.palavraSecreta) {
      this.palavra.push("_");
    }
  }
  chutar(letra) {
    let verificarLetraChutada = this.palavraSecreta.includes(letra);
    this.letra = letra.toLowerCase();
    if (!verificarLetraChutada) {
      this.vidas--;
    }

    if (letra.length > 1) {
      console.log("Apenas uma letra por vez, por favor");
    }

    if (this.letrasChutadas.includes(this.letra)) {
      return;
    }

    this.letrasChutadas.push(this.letra);
    if (this.palavraSecreta.includes(this.letra)) {
      this.palavra = this.palavraSecreta.split("").map((letter, index) => {
        if (letter === this.letra) {
          return this.letra;
        }
        return this.palavra[index];
      });
    }
  }
  buscarEstado() {
    if (this.vidas === 0) {
      return (this.status = "perdeu");
    }
    if (this.palavra.join("") === this.palavraSecreta && this.vidas > 0) {
      return (this.status = "ganhou");
    }

    return this.status;
  }

  buscarDadosDoJogo() {
    return {
      vidas: this.vidas,
      palavra: this.palavra,
      letrasChutadas: this.letrasChutadas,
    };
  }
}

module.exports = Forca;
