import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    
    protected elemento: HTMLElement;  //protected é um private, só que as classes filhas de view podem acessar o elemento.

    constructor(seletor: string) { //a "?" antes dos ":" faz o parâmetro ser opcional! Apenas os últimos parâmetros podem ser opcionais. 
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM`)
        }
        
    
    }

    //@inspect()
    //@logarTempoDeExecucao()
    public update(model: T): void {
        let template = this.template(model)
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string // A filha que defini os métodos abstratos
}

//O template será herdado das filhas NEGOCIACOESVIEW e MENSAGEMVIEW, pois lá eles sobreescrevem de acordo com a necessidade de cada um, utilizando a TIPAGEM GENERIC de cada um. 
//Já o método update, será importado exatamente igual o do Pai, pois as filhas não declaram update.