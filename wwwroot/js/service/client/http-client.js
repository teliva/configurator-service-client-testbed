const get = async (headers, endpoint, postData, responseType) => {
    return sendRequest('GET', headers, endpoint, postData, responseType);
}

const sendRequest = async (method, headers, endpoint, postData, responseType = 'json') => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, endpoint);
        setHeaders(xhr, headers);
        xhr.responseType = responseType;
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(formatResponse(xhr));
            }
            else {
                reject(
                    new Error('Bad response from Configurator API', {
                        cause: {
                            status: xhr.status,
                            response: xhr.response
                        }
                    }
                    )
                )
            }
        }
        xhr.send(postData);
    });
};

const formatResponse = (xhr) => {
    console.log(xhr.response);
    debugger;
    switch (xhr.responseType) {
        case 'json':
            return {
                data: xhr.response,
                status: xhr.status
            }
        default:
            return {
                data: xhr.response,
                status: xhr.status
            }
    }
};

const setHeaders = (xhr, headers) => {
    xhr.setRequestHeader('Content-Type', headers.contentType);
    xhr.setRequestHeader('Accept', headers.acceptType);
    xhr.setRequestHeader('X-KitsConfigurator-SharedKey', headers.sharedKey);
};


export { get };