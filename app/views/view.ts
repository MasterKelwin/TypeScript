export abstract class View<T> {

    protected elemento: HTMLElement;  //protected é um private, só que as classes filhas de view podem acessar o elemento.
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    
    public update(model: T): void {
        const template = this.template(model)
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string // A filha que defini os métodos abstratos
}

//O template será herdado das filhas NEGOCIACOESVIEW e MENSAGEMVIEW, pois lá eles sobreescrevem de acordo com a necessidade de cada um, utilizando a TIPAGEM GENERIC de cada um. 
//Já o método update, será importado exatamente igual o do Pai, pois as filhas não declaram update.