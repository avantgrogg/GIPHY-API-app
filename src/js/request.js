import { api_key, protocol, host, path, myInit, resultLimit, defaultOffset } from './config';

/**
 * Create a route with params for the request.
 * @param {String} searchValue - The entered value to be requested against the giphy api
 * @param {Array} offset - The offset to use when requesting results
 */
export function generateRequest(searchValue, offset) {
    return `${protocol}${host}${path}?api_key=${api_key}&limit=${resultLimit}&offset=${offset}&q=${searchValue}`;
}

/**
 * Based on searchValue and the config make a request for the searchValue
* @param {String} searchValue - The entered value to be requested against the giphy api
 * @param {Array} offset - The offset to use when requesting results
 */
export function performImgurSearch(searchValue, offset = defaultOffset) {
    const request = generateRequest(searchValue, offset);
    return fetch(request, myInit)
            .then((response) => response.json())
}