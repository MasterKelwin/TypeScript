export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
//O template será herdado das filhas NEGOCIACOESVIEW e MENSAGEMVIEW, pois lá eles sobreescrevem de acordo com a necessidade de cada um, utilizando a TIPAGEM GENERIC de cada um. 
//Já o método update, será importado exatamente igual o do Pai, pois as filhas não declaram update.
