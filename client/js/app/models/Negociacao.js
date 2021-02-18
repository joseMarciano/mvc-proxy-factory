class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }

    get getVolume() {
        return this._quantidade * this._valor;
    }

    get getData() {
        return new Date(this._data.getTime())
    }

    get getQuantidade() {
        return this._quantidade;
    }
    set setQuantidade(quantidade) {
        this._quantidade = quantidade;
    }

    get getValor(){
        return this._valor;
    }
}