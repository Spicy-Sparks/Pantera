export const transformResponse = async (config, response) => {
    if (response.bodyUsed)
        return;
    switch (config.responseType) {
        case 'json':
            return await response.json();
        case 'blob':
            return await response.blob();
        case 'text':
        default:
            return await response.text();
    }
};
