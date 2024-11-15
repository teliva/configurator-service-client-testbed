import { get } from '../client/http-client.js';
import { ConfiguratorHttpHeader } from '../client/models/header.js';
import { Tilt } from './models/tilt.js';

class ProductCollectionService {
    #_sharedKey;
    #_configuratorApiUrl;
    #_httpHeader;

    constructor(sharedKey, configuratorApiUrl) {
        this.#_sharedKey = sharedKey;
        this.#_configuratorApiUrl = configuratorApiUrl;
        this.#_httpHeader = new ConfiguratorHttpHeader('application/json', 'application/json', sharedKey);
    };

    async getPcToc() {
        //const endpoint = this.#_configuratorApiUrl + '/pc/119/tocs?pck=AA01F7E0-9D92-42A5-B099-A17A5ECE5709&tocLevel=2';
        const endpoint = this.#_configuratorApiUrl + 'tilt?dataString=1';
        return get(this.#_httpHeader, endpoint, null, 'json').then(ans =>
        {
            return new Tilt(ans.data);
        });
    };
};

export { ProductCollectionService };