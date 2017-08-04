//giphy api
export const api_key = '0c5938d404ba497c81a5986e8ee64903';
export const protocol = 'http://';
export const host = 'api.giphy.com';
export const path = '/v1/gifs/search';
export const resultLimit = '25';
export const defaultOffset = '0';

export const myInit = { method: 'GET' };

export const initialState = {
    grid: [],
    selectedImage: {},
    meta: {}
}

export const domSelectors = {
    selectedImage: '#selected-image',
    grid: '#grid',
    searchForm: '#search-form',
    lightBox: '.lightbox',
    lightboxShown: '.lightbox.show'
}

export const display = {
    imagesPerColumn: 4
}