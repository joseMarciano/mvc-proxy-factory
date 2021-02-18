class ProxyFactory {

    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get: function (target, prop, receiver) {
                if (props.includes(prop) &&
                    ProxyFactory._isFunction(target[prop])) {
                    return function () {
                        console.log(`interceptando ${prop}`);
                        acao(target);
                        return Reflect.apply(target[prop], target, arguments);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set: function (target, prop, value, receiver) {
                const result = Reflect.set(target, prop, value, receiver);
                if (props.includes(prop)) acao(target);

                return result;
            }
        });
    }

    static _isFunction(func) {
        return typeof (func) === typeof (Function)
    }
}