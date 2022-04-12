export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
//O template será herdado das filhas NEGOCIACOESVIEW e MENSAGEMVIEW, pois lá eles sobreescrevem de acordo com a necessidade de cada um, utilizando a TIPAGEM GENERIC de cada um. 
//Já o método update, será importado exatamente igual o do Pai, pois as filhas não declaram update.
