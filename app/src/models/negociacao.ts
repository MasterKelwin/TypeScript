import { Objeto } from "../controllers/interface/objeto.js";

export class Negociacao implements Objeto<Negociacao> {

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number,
        public _registro: number
        ) {}

    public static criaDe(dataString: string, quantidadeString: string, valorString: string, registro: number) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor, registro);
    }        

    get registro(): number {
        return this._registro++;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto(): string {
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor},
        Registro: ${this.registro}
        `
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear()
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }



}