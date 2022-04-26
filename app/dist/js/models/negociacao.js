export class Negociacao {
    constructor(_data, quantidade, valor, _registro) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
        this._registro = _registro;
    }
    static criaDe(dataString, quantidadeString, valorString, registro) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor, registro);
    }
    get registro() {
        return this._registro++;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    paraTexto() {
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor},
        Registro: ${this.registro}
        `;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
