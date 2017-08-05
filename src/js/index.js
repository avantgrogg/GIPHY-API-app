import { performImgurSearch } from './request';
import { generateStore } from './state';
import { initialState } from './config';
import { onStateChange as gridOnStateChange } from './components/grid';
import { onStateChange as selectedImageOnStateChange } from './components/selectedImage';
import { onStateChange as errorsOnStateChange } from './components/errors';
import { onStateChange as searchFormStateChange } from './components/searchForm';

//Instantiate the store
const store = generateStore(initialState);
//Subscribe components to store changes
store.subscribe(gridOnStateChange.bind(store));
store.subscribe(selectedImageOnStateChange.bind(store));
store.subscribe(errorsOnStateChange.bind(store));
//Fire the search form state change so its submit event can bind
searchFormStateChange.bind(store)();
//Attach the store to the window for debugging purposes
window.__store = store;

