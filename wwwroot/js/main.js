import { initConfigurator } from 'Configurator';
import { ConfiguratorServiceClient } from 'ConfiguratorServiceClient';

const init = async () => {
    try {
        const apiURL = 'https://localhost:7151/';
        globalThis.configuratorServiceClient = new ConfiguratorServiceClient('kfi-826132', apiURL);
    } catch (e) {
        console.error(e);
    }
};

window.onLoad = init();