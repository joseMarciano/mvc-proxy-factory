class Mensagem {

    constructor(texto = '') {
        this._texto = texto;
    }

    get getTexto() {
        return this._texto;
    }

    set setTexto(text) {
        this._texto = text;
    }
}