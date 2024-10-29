import { initConfigurator } from 'Configurator';
import { ConfiguratorServiceClient } from 'ConfiguratorServiceClient';

const init = async () => {
    try {
        const apiURL = 'https://localhost:7151/';
        //const solnUrl = 'https://www32.kisp.com/api';
        globalThis.configuratorService = new ConfiguratorServiceClient('kfi-826132', apiURL);
        let ret = await globalThis.configuratorService.productCollectionService.getPcToc();

        console.log(ret);
    } catch (e) {
        console.error(e.message);
        console.log(e.cause);
    }
};

window.onLoad = init();