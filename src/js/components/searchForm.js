import { domSelectors } from '../config';
import { performImgurSearch } from '../request';
import { saveResponseAction, noResponseAction } from '../actions';

/**
 * Bind events to the search form. Binds a submit handler to the form. When the form is submitted a request 
 * is made with the entered search term. The results are then added to the store. If the response does not contain any
 * results then an error action is dispatched.
 * @param {Object} store - The current app store
 */
export function bindEvents(store) {
    document.querySelector(domSelectors.searchForm).addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = e.target.querySelector('input').value;
        const response = performImgurSearch(searchTerm)
                            .then((response) => {
                                if(response.data.length > 0) {
                                    store.updateState(saveResponseAction(response, searchTerm))
                                } else {
                                    store.updateState(noResponseAction())
                                }
                            });
    });
}

export function onStateChange() {
    bindEvents(this);
}