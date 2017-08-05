import { selectImageAction, updateResponseAction } from '../actions';
import { domSelectors, selectors} from '../config';
import { performImgurSearch } from '../request';

/**
 * Creates a template string based on the current column
 * @param {Object} image - The image object in the current cell
 * @param {Number} cell - The current cell index
 */
export function cell(image, cell) {
    return `<img class='result-image' data-cell='${cell}' src='${image.downsized_still.url}' alt='${image.slug}'/>`;
}

/**
 * Creates a template string based on the current column
 * @param {Object} images - The image objects in the current column
 * @param {Number} column - The current column index
 */
export function columns(images, column) {
    return `<div class='column' data-column='${column}'>${images.reduce((prev, img, idx) => prev+cell(img, idx), '')}</div>`;
}

/**
 * Creates a template string based on grid values
 * @param {Object} state - The current app state
 */
export function template(state) {
    if(state.grid.length > 0) {
        return `<div class='grid'>
                    ${state.grid.reduce((prev, images, idx) => `${prev+columns(images, idx)}`, ``)}
                </div>
                <button class='load-more'>Load More</button>`;
    }
    return ``;
}

/**
 * Bind events related to items in the grid. Binds a click eventListener to all images which when engaged 
 * updates selectedImage values leading to the lightbox being shown. 
 * Also binds a click event to the load more button, on click a new request is made, 
 * and then the response is added to the exiisting response.
 * @param {Object} store - The current app store
 */
export function bindEvents(store) {
    [...document.querySelectorAll('.result-image')].map((el) => el.addEventListener('click', (e) => {
        const column = e.target.parentElement.dataset["column"];
        const cell = e.target.dataset["cell"];
        store.updateState(selectImageAction(column, cell));
    }))
    if(document.querySelector('.load-more')) {
        document.querySelector('.load-more').addEventListener('click', (e) => {
            const searchTerm = selectors.searchTerm(store.getState());
            const offset = selectors.offset(store.getState()) + selectors.count(store.getState());
            const response = performImgurSearch(searchTerm, offset)
                                .then((response) => store.updateState(updateResponseAction(response)));
        })
    }
}

export function onStateChange() {
    document.querySelector(domSelectors.grid).innerHTML = template(this.getState());
    bindEvents(this);
}
