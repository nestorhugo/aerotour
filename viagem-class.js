'use strict';

export default class Viagem {
  constructor(destino, data, duracao, preco) {
    this.destino = destino;
    this.data = data;
    this.duracao = duracao;
    this.preco = preco;
  }

  exibir() {
    console.log(
      `Viagem para ${this.destino} - ${this.duracao} dias por R$ ${this.preco}`
    );
  }
}

// eslint-disable-next-line no-unused-vars
class ViagemInternacional extends Viagem {
  constructor(destino, data, duracao, preco, moeda) {
    super(destino, data, duracao, preco);
    this.moeda = moeda;
  }

  exibir() {
    // eslint-disable-next-line max-len
    console.log(
      // eslint-disable-next-line max-len
      `Viagem internacional para ${this.destino} - ${this.duracao} dias por ${this.preco} ${this.moeda}`
    );
  }
}
