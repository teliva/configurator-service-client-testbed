import { ProductCollectionService } from '../services/product-collection-service.js';

class ConfiguratorServiceClient {
    constructor(publicKey, configuratorApiUrl) {
        this.publicKey = publicKey;
        this.configuratorApiUrl = configuratorApiUrl;

        


        let newHeader = new Headers();
        newHeader.append("Content-Type", "application/json");
        newHeader.append("Accept", "application/json");
        newHeader.append('X-KitsConfigurator-SharedKey', publicKey);


        this.httpHeader = newHeader;





        this.productCollectionService = new ProductCollectionService(configuratorApiUrl, this.getHttpHeader.bind(this));
    };

    httpHeader;

    getHttpHeader() {
        return this.httpHeader;
    };
};

export { ConfiguratorServiceClient };