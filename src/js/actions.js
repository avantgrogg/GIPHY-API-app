export const SAVE_RESPONSE_ACTION = 'SAVE_RESPONSE_ACTION';
export function saveResponseAction(response) {
    return {
        type: SAVE_RESPONSE_ACTION,
        payload: {
            response
        }
    }
}