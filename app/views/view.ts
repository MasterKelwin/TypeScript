export class View {

    protected elemento: HTMLElement;  //protected é um private, só que as classes filhas de view podem acessar o elemento.
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }
}