import { ConfiguratorServiceClient } from 'ConfiguratorServiceClient';

const init = async () => {
    try {
        const apiURL = 'https://localhost/kitsconfigurator/api/';
        globalThis.configuratorServiceClient = new ConfiguratorServiceClient('ais-246560', apiURL);
        /*let ret = await globalThis.configuratorServiceClient.productCollectionService.fetchPcToc();*/

        let ret = await globalThis.configuratorServiceClient.productCollectionService.getPcToc(133, 'FD3EB101-37A5-49E2-B9BB-734647847717', 1);
        console.log(ret);

    } catch (e) {
        console.error(e);
    }
};

window.onLoad = init();