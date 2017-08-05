import { domSelectors } from '../config';

/**
 * Creates a template string based on error values
 * @param {Object} state - The current app state
 */
export function template(state) {
    if(state.errors.length > 0) {
        return state.errors.reduce((prev, error) => `${prev}<h3>${error}</h3>`, ``);
    }
    return ``;
}

export function onStateChange() {
    document.querySelector(domSelectors.errors).innerHTML = template(this.getState());
}
