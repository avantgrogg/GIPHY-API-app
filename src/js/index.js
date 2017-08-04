import { performImgurSearch } from './request';
import { generateStore } from './state';
import { initialState } from './config';
import { onStateChange as gridOnStateChange } from './components/grid';
import { onStateChange as selectedImageOnStateChange } from './components/selectedImage';

const store = generateStore(initialState);
store.subscribe(gridOnStateChange.bind(store));
store.subscribe(selectedImageOnStateChange.bind(store));

window.__store = store;

document.querySelector('#search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = e.target.querySelector('input').value;
    performImgurSearch(searchTerm, store.updateState)
})

