import { SAVE_RESPONSE_ACTION, SELECT_IMAGE_ACTION, REMOVE_SELECTED_IMAGE_ACTION, UPDATE_RESPONSE_ACTION, NO_RESPONSE_ACTION } from './actions';
import { display } from './config';

/**
 * Uses the response array to create a new multi-dimensional array
 * @param {Number} columns - The number of columns
 * @param {Array} response - The array of image values
 */
export function responseWithColumns(columns, response) {
    const ipc = display.imagesPerColumn;
    const columnsArr = new Array(columns).fill(0);
    return columnsArr.map((val, idx) => {
        return [...response.slice(idx*ipc,idx*ipc+ipc)]
    });
}

/**
 * Updates the apps grid state based on the type of update that just occured.
 * @param {Number} totalImages - The total number of image objects
 */
export function getTotalColumns(totalImages) {
    const ipc = display.imagesPerColumn;
    const finalColumn = totalImages%ipc > 0 ? 1 : 0;
    return Math.floor(totalImages/ipc) + finalColumn;
}

/**
 * Determines how many columns a response needs then modifies the response into a multi-dimensional array
 * @param {Array} response - The unaltered response from the service
 */
export function adaptResponse(response) {
    const adaptedResponse = response.map((image) => Object.assign({}, image.images, {
        slug: image.slug,
        url: image.bitly_gif_url
    }));
    const totalImages = adaptedResponse.length;
    const columns = getTotalColumns(totalImages)
    return responseWithColumns(columns, adaptedResponse);
}

/**
 * Determines how many columns a response needs then modifies the response into a multi-dimensional array
 * @param {Number} column - The selected column
 * @param {Number} cell - The selected cell
 * @param {Array} gridValues - The current multi-dimensional array of image objects
 */
export function lookupImage({column, cell}, gridValues) {
    return Object.assign({}, gridValues[column][cell]);
}

/**
 * Updates the apps grid state based on the type of update that just occured.
 * @param {Object} state - grids current state
 * @param {Object} update - The update describing the change to the state
 */
export function updateGrid(state, update, cache) {
    if(update.type === SAVE_RESPONSE_ACTION) {
        return adaptResponse(update.payload.response.data);
    } else if(update.type === UPDATE_RESPONSE_ACTION){
        return adaptResponse([...cache, ...update.payload.response.data]);
    } else if(update.type === NO_RESPONSE_ACTION) {
        return {}
    }

    return state;
}

/**
 * Updates the selectedImage state based on the type of update that just occured.
 * @param {Object} state - selectedImage current state
 * @param {Object} update - The update describing the change to the state
 */
export function updateSelectedImage(state, update, gridValues) {
    if(update.type === SELECT_IMAGE_ACTION) {
        return lookupImage(update.payload, gridValues);
    } else if(update.type === REMOVE_SELECTED_IMAGE_ACTION) {
        return {};
    }
    return state;
}

/**
 * Updates the meta state based on the type of update that just occured.
 * @param {Object} state - meta current state
 * @param {Object} update - The update describing the change to the state
 */
export function updateMeta(state, update) {
    if(update.type === SAVE_RESPONSE_ACTION) {
        return Object.assign({}, update.payload.response.meta, update.payload.response.pagination, {
            totalColumns: getTotalColumns(update.payload.response.data.length),
            searchTerm: update.payload.searchTerm
        });
    } else if(update.type === SELECT_IMAGE_ACTION) {
        return Object.assign({}, state, {
            selected: update.payload
        });
    } else if(update.type === UPDATE_RESPONSE_ACTION) {
        return Object.assign({}, state, update.payload.response.pagination)
    }

    return state;
}

/**
 * Updates the caches state based on the type of update that just occured.
 * @param {Object} state - cache current state
 * @param {Object} update - The update describing the change to the state
 */
export function updateCache(state, update) {
    if(update.type === SAVE_RESPONSE_ACTION) {
        return [...update.payload.response.data];
    } else if(update.type === UPDATE_RESPONSE_ACTION) {
        return [...state, ...update.payload.response.data];
    }

    return state;
}

/**
 * Updates the errors state based on the type of update that just occured.
 * @param {Object} state - errors current state
 * @param {Object} update - The update describing the change to the state
 */
export function updateErrors(state, update) {
    if(update.type === NO_RESPONSE_ACTION) {
        return [update.payload.error];
    }

    return [];
}
/**
 * Update all of the state
 * @param {Object} state - The current state of the app
 * @param {Object} update - The description of the state change
 */
export function determineStateChange(state, update) {
    return Object.assign({}, {
        grid: updateGrid(state.grid, update, state.cache),
        selectedImage: updateSelectedImage(state.selectedImage, update, state.grid),
        meta: updateMeta(state.meta, update),
        cache: updateCache(state.cache, update),
        errors: updateErrors(state.errors, update)
    });
}

/**
 * Maps over all subscribed callbacks and executes them
 * @param {Array} subscribers - A list of callback fns
 */
export function notifySubscribers(subscribers, state) {
    subscribers.map((subscriber) => subscriber(state));
}

/**
 * Creates a new store object
 * @param {Object} initialState - State used to hydrate the store
 * @param {Object} options - Addional data to be attached to the store
 */
export function generateStore(initialState = {}, options = {}) {
    let state = initialState;
    let subscribers = [];
    return Object.assign({}, options, {
        getState: () => Object.assign({}, state),
        updateState: (update) => {
            state = determineStateChange(state, update);
            notifySubscribers(subscribers, state);
        },
        subscribe: (subscriber) => subscribers.push(subscriber),
    });
}
