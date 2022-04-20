import { Negociacao } from '../models/negociacao.js';
export class NegociacoesService {
    constructor() {
        this.registro = 1;
    }
    obterNegociacoesDoDia() {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante, this.registro = 1);
            });
        });
    }
}
