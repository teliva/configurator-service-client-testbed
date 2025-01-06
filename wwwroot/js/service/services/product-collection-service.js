import { asyncGet } from '../client/fetch-client.js';
import { Tilt } from './models/tilt.js';
import { PCToc } from './models/PCToc.js';

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

    async getPcToc(pcId, pck, tocLevel) {
        const endpoint = this.#_configuratorApiUrl + 'pc/' + pcId + '/tocs?pck=' + pck + '&tocLevel=' + tocLevel;
        const ret2 = await asyncGet('https://catfact.ninja/fact', this.#_getHttpHeader());
        const response = await asyncGet(endpoint, this.#_getHttpHeader());

        
        return new PCToc(response);
    }
};

export { ProductCollectionService };