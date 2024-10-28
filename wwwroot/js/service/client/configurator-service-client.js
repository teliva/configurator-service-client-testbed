import { ProductCollectionService } from '../services/product-collection-service.js';

class ConfiguratorServiceClient { 
    constructor(publicKey, configuratorApiUrl){
        this.publicKey = publicKey;
        this.configuratorApiUrl = configuratorApiUrl;
        this.productCollectionService = new ProductCollectionService(publicKey, configuratorApiUrl);
    };
}

export { ConfiguratorServiceClient };