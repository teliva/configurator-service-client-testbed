class ConfiguratorHttpHeader {
    constructor(contentType, acceptType, sharedKey) {
        this.contentType = contentType;
        this.textContentType ='text/plain';
        this.acceptType = acceptType;
        this.sharedKey = sharedKey;
    }
};

export { ConfiguratorHttpHeader };