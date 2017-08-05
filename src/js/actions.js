import { errors } from './config';

export const SAVE_RESPONSE_ACTION = 'SAVE_RESPONSE_ACTION';
export const SELECT_IMAGE_ACTION = 'SELECT_IMAGE_ACTION';
export const REMOVE_SELECTED_IMAGE_ACTION = 'REMOVE_SELECTED_IMAGE_ACTION';
export const UPDATE_RESPONSE_ACTION = 'UPDATE_RESPONSE_ACTION';
export const NO_RESPONSE_ACTION = 'NO_RESPONSE_ACTION';

export function saveResponseAction(response, searchTerm) {
    return {
        type: SAVE_RESPONSE_ACTION,
        payload: {
            response,
            searchTerm
        }
    }
}

export function selectImageAction(column, cell) {
    return {
        type: SELECT_IMAGE_ACTION,
        payload: {
            column: Number(column),
            cell: Number(cell)
        }
    }
}

export function removeSelectedImageAction() {
    return {
        type: REMOVE_SELECTED_IMAGE_ACTION
    }
}

export function updateResponseAction(response) {
    return {
        type: UPDATE_RESPONSE_ACTION,
        payload: {
            response
        }
    }
}

export function noResponseAction() {
    return {
        type: NO_RESPONSE_ACTION,
        payload: {
            error: errors.NO_RESPONSE_ERROR
        }
    }
}
