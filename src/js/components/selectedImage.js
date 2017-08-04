import { selectImageAction, removeSelectedImageAction, selectImageAction } from '../actions';
import { domSelectors, display } from '../config';

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
                    <div class="contents"
                        <h1 class="previous-selected" data-column="${prevColumn}" data-cell="${prevCell}">Prev</h1>
                        <img src="${state.selectedImage.downsized_large.url}"/>
                        <h1 class="next-selected" data-column="${nextColumn}" data-cell="${nextCell}">Next</h1>
                    </div>
                </div>`
    }
    return `<div class="lightbox"></div>`;
}

export function bindEvents(store) {
    const lightbox = document.querySelector(domSelectors.lightboxShown);
    if(lightbox) {
        lightbox.addEventListener('click', (e) => {
            if(e.target.classList.contains('previous-selected') || e.target.classList.contains('next-selected')) {
                const column = e.target.dataset['column'];
                const cell = e.target.dataset['cell'];
                store.updateState(selectImageAction(column, cell));
            }
            else if(e.target === e.currentTarget) {
                store.updateState(removeSelectedImageAction());
            }
        })
    }
}

export function onStateChange() {
    document.querySelector(domSelectors.selectedImage).innerHTML = template(this.getState());
    bindEvents(this);
}