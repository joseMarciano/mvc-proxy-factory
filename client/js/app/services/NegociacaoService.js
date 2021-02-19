class NegociacaoService {

    constructor(httpService) {
        this._HttpService = httpService;
    }

    obterNegociacoesDaSemana() {
        return new Promise((resolve, reject) => {
            this._HttpService.get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(data => new Negociacao(new Date(data.data), data.quantidade, data.valor)));
                })
                .catch(erro => reject(erro));
        });
    }

    obterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, reject) => {
            this._HttpService.get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(data => new Negociacao(new Date(data.data), data.quantidade, data.valor)));
                })
                .catch(erro => reject(erro));
        });
    }
    obterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, reject) => {
            this._HttpService.get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(data => new Negociacao(new Date(data.data), data.quantidade, data.valor)));
                })
                .catch(erro => reject(erro));
        });
    }

}