import { selectImageAction } from '../actions';

export function cell(image, cell) {
    return `<img class='result-image' data-cell='${cell}' src='${image.downsized_large.url}'/>`;
}

export function columns(images, column) {
    return `<div class='column' data-column='${column}'>${images.reduce((prev, img, idx) => prev+cell(img, idx), '')}</div>`;
}

export function template(state) {
    if(state.grid.length > 0) {
        return state.grid.reduce((prev, images, idx) => `${prev+columns(images, idx)}`, ``);
    }
    return ``;
}

export function bindEvents(store) {
    [...document.querySelectorAll('.result-image')].map((el) => el.addEventListener('click', (e) => {
        const column = e.target.parentElement.dataset["column"];
        const cell = e.target.dataset["cell"];
        store.updateState(selectImageAction(column, cell));
    }))
}

export function onStateChange() {
    document.querySelector('#grid').innerHTML = template(this.getState());
    bindEvents(this);
}
