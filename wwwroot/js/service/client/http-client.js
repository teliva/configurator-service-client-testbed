const get = async (headers, endpoint, postData, responseType) => {
    return sendRequest('GET', headers, endpoint, postData, responseType);
}

const sendRequest = async (method, headers, endpoint, postData, responseType = 'json', fullResponseWhenError = false) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, endpoint);
        setHeaders(xhr, headers);
        xhr.responseType = responseType;
        xhr.onload = () => {
            console.log(xhr);
            if (xhr.status === 200) {
                const response = {
                    data: xhr.response,
                    status: xhr.status
                };
                resolve(response);
            }
            else {
                if (fullResponseWhenError) {
                    reject({
                        status: xhr.status,
                        response: xhr.response
                    })
                }
                else {
                    reject(xhr.statusText);
                }
            }
        }
        xhr.send(postData);
    });
};

const setHeaders = (xhr, headers) => {
    xhr.setRequestHeader('Content-Type', headers.contentType);
    xhr.setRequestHeader('Accept', headers.acceptType);
    xhr.setRequestHeader('X-KitsConfigurator-SharedKey', headers.sharedKey);
};


export { get };