export const SAVE_RESPONSE_ACTION = 'SAVE_RESPONSE_ACTION';
export const SELECT_IMAGE_ACTION = 'SELECT_IMAGE_ACTION';
export const REMOVE_SELECTED_IMAGE_ACTION = 'REMOVE_SELECTED_IMAGE_ACTION';

export function saveResponseAction(response) {
    return {
        type: SAVE_RESPONSE_ACTION,
        payload: {
            response
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
