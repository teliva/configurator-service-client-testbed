const asyncGet = async (endpoint, myHeaders) => {
    const response = await fetch(endpoint, {
        method: "GET",
        headers: myHeaders
    });

    if (!response.ok) {
        throw new Error(`Bad response from API: ${response.status}`);
    }
    if (response.status === 204) {
        return '';
    }
    return JSON.parse(await response.json());
};


export { asyncGet };