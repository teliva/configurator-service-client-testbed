class Configurator {
    constructor(param) {
        this.param = param;
    };
};

const initConfigurator = (param) => {
    console.log(globalThis.configuratorService);
    return new Configurator(param);
};

export { initConfigurator };