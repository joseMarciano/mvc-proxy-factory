class MensagemView extends View {

    constructor(elemento) {
        super(elemento)
    }

    template(model) {
        return model.getTexto ? ` <p class="alert alert-info">${model.getTexto}</p>` : '';
    }

}