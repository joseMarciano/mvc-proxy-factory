class Bind {
    constructor(model, view, ...props) {
        const proxy = ProxyFactory.create(model, props, (model) => view.update(model));
        view.update(model);
        return proxy; //Os construtores em JS permitem retornar instancias outras classes... 
    }
}