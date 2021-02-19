class NegociacaoController {

    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            'adiciona', 'esvazia');

        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            'setTexto');
    }

    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.setTexto = 'Negociações apagadas com sucesso';
    }

    adiciona(event) {
        event.preventDefault();

        const negociacao = this._criaNegociacao();
        this._listaNegociacoes.adiciona(negociacao);
        this._mensagem.setTexto = `Negociação adicionada com sucesso`;
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textToDate(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    importaNegociacoes() {
        const service = new NegociacaoService(new HttpService());

        Promise.all([
            service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada(),
        ]).then(negociacoes => {
            negociacoes
                .reduce((flatten, array) => flatten.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));

            this._mensagem.setTexto = 'Negociacoes importadas com sucesso';
        })
            .catch(erro => this._mensagem.setTexto = erro);

        // service.obterNegociacoesDaSemana()
        // .then((negociacoes) => {
        //     this._mensagem.setTexto = 'Negociações importadas com sucesso';
        //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))  
        // })
        // .catch((erro) => this._mensagem.setTexto = erro);

        // service.obterNegociacoesDaSemanaAnterior()
        // .then((negociacoes) => {
        //     this._mensagem.setTexto = 'Negociações importadas com sucesso';
        //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))  
        // })
        // .catch((erro) => this._mensagem.setTexto = erro);

        // service.obterNegociacoesDaSemanaRetrasada()
        // .then((negociacoes) => {
        //     this._mensagem.setTexto = 'Negociações importadas com sucesso';
        //     negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))  
        // })
        // .catch((erro) => this._mensagem.setTexto = erro);
    }
}