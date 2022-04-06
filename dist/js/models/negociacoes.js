export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
}
const negociacoes = new Negociacoes();
//negociacoes.adiciona(new Negociacao());
