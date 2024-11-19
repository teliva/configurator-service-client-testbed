import { asyncGet } from '../client/fetch-client.js';
import { Tilt } from './models/tilt.js';

class ProductCollectionService {
    #_configuratorApiUrl;
    #_getHttpHeader
    constructor(configuratorApiUrl, getHttpHeader) {
        this.#_configuratorApiUrl = configuratorApiUrl;
        this.#_getHttpHeader = getHttpHeader;
    };

    async fetchPcToc() {
        const endpoint = this.#_configuratorApiUrl + 'tilt?dataString=1';

        const response = await asyncGet(endpoint, this.#_getHttpHeader());
        return new Tilt(response);
    };
};

export { ProductCollectionService };