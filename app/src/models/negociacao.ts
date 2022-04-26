import { Imprimivel } from "../utils/imprimivel.js";

export class Negociacao implements Imprimivel {

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

    get volume(): number {
        return this.quantidade * this.valor;
    }



}