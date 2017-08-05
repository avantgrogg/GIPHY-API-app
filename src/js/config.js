//giphy api and default values
export const api_key = '0c5938d404ba497c81a5986e8ee64903';
export const protocol = 'http://';
export const host = 'api.giphy.com';
export const path = '/v1/gifs/search';
export const resultLimit = '100';
export const defaultOffset = '0';

export const myInit = { method: 'GET' };

//The initial state of the store
export const initialState = {
    grid: [],
    selectedImage: {},
    meta: {},
    errors: []
}

//Values used to represent elements for event binding
export const domSelectors = {
    searchForm: '#search-form',
    selectedImage: '#selected-image',
    grid: '#grid-container',
    searchForm: '#search-form',
    lightBox: '.lightbox',
    lightboxShown: '.lightbox.show',
    errors: '#errors'
}

//Values used to modify how much content is displayed
export const display = {
    imagesPerColumn: 4
}

//Selectors used to streamline retrieving data from the store
export const selectors = {
    searchTerm: (state) => state.meta.searchTerm,
    offset: (state) => state.meta.offset,
    count: (state) => state.meta.count
}

//Enums used to represent error responses
export const errors = {
    NO_RESPONSE_ERROR: 'The service did not return a response for your query. Please try a different search term.'
}