class NegociacaoController {

    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        
        const self = this;
        this._listaNegociacoes = ProxyFactory.create(
            new ListaNegociacoes(),
            ['adiciona','esvazia'],
            model => this._negociacoesView.update(model));

        this._mensagem = ProxyFactory.create(
            new Mensagem(),
            ['setTexto'],
            model => this._mensagemView.update(model)
        );

        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
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
}