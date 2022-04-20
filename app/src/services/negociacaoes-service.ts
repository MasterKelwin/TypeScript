
import { NegociacoesDia } from '../controllers/interface/negociacao-do-dia.js';
import { Negociacao } from '../models/negociacao.js';

export class NegociacoesService {
    public registro = 1
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDia[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(), 
                        dadoDeHoje.vezes, 
                        dadoDeHoje.montante,
                        this.registro = 1
                    )
                })
            });
    }
}