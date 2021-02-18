class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }
    template(listaNegociacoes) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
            ${listaNegociacoes.getNegociacoes.map
                (neg => `<tr>
                    <td>${DateHelper.dateToText(neg.getData)}</td>
                    <td>${neg.getQuantidade}</td>
                    <td>${neg.getValor}</td>
                    <td>${neg.getVolume}</td>
                </tr>`)
            }
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${listaNegociacoes.getNegociacoes
                .reduce((total, neg) => total + neg.getVolume, 0.0)
            }
                </td>
            </tfoot>
        </table>
        `
    }
}