import { api_key, protocol, host, path, myInit, resultLimit, defaultOffset } from './config';
import { saveResponseAction } from './actions';

export function generateRequest(searchValue, offset) {
    return `${protocol}${host}${path}?api_key=${api_key}&limit=${resultLimit}&offset=${offset}&q=${searchValue}`;
}

export function performImgurSearch(searchValue, dispatch, offset = defaultOffset) {
    const request = generateRequest(searchValue, offset);
    fetch(request, myInit)
      .then((response) => response.json())
      .then((response) => dispatch(saveResponseAction(response)));
}