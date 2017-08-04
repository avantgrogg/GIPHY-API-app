import { SAVE_RESPONSE_ACTION, SELECT_IMAGE_ACTION, REMOVE_SELECTED_IMAGE_ACTION } from './actions';

export function responseWithColumns(columns, response) {
    const columnsArr = new Array(columns).fill(0);
    return columnsArr.map((val, idx) => {
        return [...response.slice(idx*4,idx*4+4)]
    });
}

export function getTotalColumns(totalImages) {
    return Math.floor(totalImages/4) + totalImages%4;
}

export function adaptResponse(response) {
    const adaptedResponse = response.map((image) => Object.assign({}, image.images, {slug: image.slug}));
    const totalImages = adaptedResponse.length;
    const columns = getTotalColumns(totalImages)
    return responseWithColumns(columns, adaptedResponse);
}

export function lookupImage({column, cell}, gridValues) {
    return Object.assign({}, gridValues[column][cell]);
}

export function incrementSelected({column, cell}) {

}
/**
 * Updates the apps state based on the type of update that just occured.
 * @param {Object} state - The apps current state
 * @param {Object} update - The update describing the change to the state
 */
function updateGrid(state, update) {
    if(update.type === SAVE_RESPONSE_ACTION) {
        return adaptResponse(update.payload.response.data);
    }
    return state;
}

function updateSelectedImage(state, update, gridValues) {
    if(update.type === SELECT_IMAGE_ACTION) {
        return lookupImage(update.payload, gridValues);
    } else if(update.type === REMOVE_SELECTED_IMAGE_ACTION) {
        return {};
    }
    return state;
}

function updateMeta(state, update) {
    if(update.type === SAVE_RESPONSE_ACTION) {
        return Object.assign({}, update.payload.response.meta, update.payload.response.pagination, {
            totalColumns: getTotalColumns(update.payload.response.data.length)
        });
    } else if(update.type === SELECT_IMAGE_ACTION) {
        return Object.assign({}, state, {
            selected: update.payload
        });
    }

    return state;
}
/**
 * Update all of the state
 * @param {Object} state - The current state of the app
 * @param {Object} update - The description of the state change
 */
function determineStateChange(state, update) {
    return Object.assign({}, {
        grid: updateGrid(state.grid, update),
        selectedImage: updateSelectedImage(state.selectedImage, update, state.grid),
        meta: updateMeta(state.meta, update)
    });
}

/**
 * Maps over all subscribed callbacks and executes them
 * @param {Array} subscribers - A list of callback fns
 */
function notifySubscribers(subscribers, state) {
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
