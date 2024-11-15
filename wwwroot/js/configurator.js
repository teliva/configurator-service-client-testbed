class Configurator {
    constructor(param) {
        this.param = param;
    };
};

const initConfigurator = (param) => {
    return new Configurator(param);
};

export { initConfigurator };