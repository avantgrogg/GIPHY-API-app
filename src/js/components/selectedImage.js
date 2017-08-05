import { selectImageAction, removeSelectedImageAction } from '../actions';
import { domSelectors, display } from '../config';

/**
 * Determines what the next cell and column indeces are based on the current cell and column.
 * @param {Object} selected - The current selected column and cell
 * @param {Number} totalColumns - The total number of columns
 * @param {Number} count - The total number of image objects
 */
export function getNextImage({selected, totalColumns, count}) {
    if(selected.column === totalColumns-1 && selected.cell === count - 1 - ((totalColumns-1)*display.imagesPerColumn)) {
        return {
            nextCell: 0,
            nextColumn: 0
        }
    } else if(selected.cell === display.imagesPerColumn-1) {
        return {
            nextCell: 0,
            nextColumn: selected.column+1
        }
    } else {
        return {
            nextCell: selected.cell+1,
            nextColumn: selected.column
        }
    }
}

/**
 * Determines what the prev cell and column indeces are based on the current cell and column.
 * @param {Object} selected - The current selected column and cell
 * @param {Number} totalColumns - The total number of columns
 * @param {Number} count - The total number of image objects
 */
export function getPrevImage({selected, totalColumns, count}) {
    if(selected.column === 0 && selected.cell === 0) {
        return {
            prevCell: count - 1 - ((totalColumns-1)*display.imagesPerColumn),
            prevColumn: totalColumns-1
        }
    } else if(selected.cell === 0) {
        return {
            prevCell: display.imagesPerColumn - 1,
            prevColumn:selected.column - 1
        }
    } else {
        return {
            prevCell: selected.cell - 1,
            prevColumn: selected.column
        }
    }
}

export function template(state) {
    if(Object.keys(state.selectedImage).length > 0) {
        const {prevCell, prevColumn} = getPrevImage(state.meta);
        const {nextCell, nextColumn} = getNextImage(state.meta);

        return `<div class="lightbox show">
                    <button aria-label="Close" class="close">X</button>
                    <div class="contents">
                        <h2 id='lightbox-header'><a href="${state.selectedImage.url}" target="_blank">${state.selectedImage.slug}</a></h2>
                        <a href="${state.selectedImage.url}" target="_blank"><img src="${state.selectedImage.downsized_medium.url}" alt="${state.selectedImage.slug}"/></a>
                        <p> 
                            <span aria-label="previous" class="previous-selected pagination" data-column="${prevColumn}" data-cell="${prevCell}">Prev</span>
                            <span aria-label="next" class="next-selected pagination" data-column="${nextColumn}" data-cell="${nextCell}">Next</span>
                        </p>
                    </div>
                </div>`
    }
    return `<div class="lightbox"></div>`;
}

/**
 * Bind events related to items in the selected image div. If the lightbox div is showing a 
 * click event is bound to the lightbox. On a click event it is determined if its on prev, next, close, or the image
 * itself. Prev and next clicks update the selected image state, close clears the selected image state. A keyup event is also
 * bound to make the lightbox more accessible.
 * @param {Object} store - The current app store
 */
export function bindEvents(store) {
    const lightbox = document.querySelector(domSelectors.lightboxShown);
    if(lightbox) {
        lightbox.addEventListener('click', (e) => {
            if(e.target.classList.contains('previous-selected') || e.target.classList.contains('next-selected')) {
                const column = e.target.dataset['column'];
                const cell = e.target.dataset['cell'];
                store.updateState(selectImageAction(column, cell));
            }
            else if(e.target.classList.contains('contents') || e.target.classList.contains('close')) {
                store.updateState(removeSelectedImageAction());
            }
        })
        document.addEventListener('keyup', (e) => {
            if(e.which === 37) {
                const {column, cell} = document.querySelector('.previous-selected').dataset;
                store.updateState(selectImageAction(column, cell));
            } else if(e.which === 39) {
                const {column, cell} = document.querySelector('.next-selected').dataset;
                store.updateState(selectImageAction(column, cell));
            } else if(e.which === 27) {
                store.updateState(removeSelectedImageAction());
            }
        })
    }
}

export function onStateChange() {
    document.querySelector(domSelectors.selectedImage).innerHTML = template(this.getState());
    bindEvents(this);
}