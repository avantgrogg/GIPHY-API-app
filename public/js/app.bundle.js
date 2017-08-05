/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["h"] = saveResponseAction;
/* harmony export (immutable) */ __webpack_exports__["i"] = selectImageAction;
/* harmony export (immutable) */ __webpack_exports__["g"] = removeSelectedImageAction;
/* harmony export (immutable) */ __webpack_exports__["j"] = updateResponseAction;
/* harmony export (immutable) */ __webpack_exports__["f"] = noResponseAction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(1);


const SAVE_RESPONSE_ACTION = 'SAVE_RESPONSE_ACTION';
/* harmony export (immutable) */ __webpack_exports__["c"] = SAVE_RESPONSE_ACTION;

const SELECT_IMAGE_ACTION = 'SELECT_IMAGE_ACTION';
/* harmony export (immutable) */ __webpack_exports__["d"] = SELECT_IMAGE_ACTION;

const REMOVE_SELECTED_IMAGE_ACTION = 'REMOVE_SELECTED_IMAGE_ACTION';
/* harmony export (immutable) */ __webpack_exports__["b"] = REMOVE_SELECTED_IMAGE_ACTION;

const UPDATE_RESPONSE_ACTION = 'UPDATE_RESPONSE_ACTION';
/* harmony export (immutable) */ __webpack_exports__["e"] = UPDATE_RESPONSE_ACTION;

const NO_RESPONSE_ACTION = 'NO_RESPONSE_ACTION';
/* harmony export (immutable) */ __webpack_exports__["a"] = NO_RESPONSE_ACTION;


function saveResponseAction(response, searchTerm) {
    return {
        type: SAVE_RESPONSE_ACTION,
        payload: {
            response,
            searchTerm
        }
    }
}

function selectImageAction(column, cell) {
    return {
        type: SELECT_IMAGE_ACTION,
        payload: {
            column: Number(column),
            cell: Number(cell)
        }
    }
}

function removeSelectedImageAction() {
    return {
        type: REMOVE_SELECTED_IMAGE_ACTION
    }
}

function updateResponseAction(response) {
    return {
        type: UPDATE_RESPONSE_ACTION,
        payload: {
            response
        }
    }
}

function noResponseAction() {
    return {
        type: NO_RESPONSE_ACTION,
        payload: {
            error: __WEBPACK_IMPORTED_MODULE_0__config__["e" /* errors */].NO_RESPONSE_ERROR
        }
    }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//giphy api and default values
const api_key = '0c5938d404ba497c81a5986e8ee64903';
/* harmony export (immutable) */ __webpack_exports__["a"] = api_key;

const protocol = 'http://';
/* harmony export (immutable) */ __webpack_exports__["j"] = protocol;

const host = 'api.giphy.com';
/* harmony export (immutable) */ __webpack_exports__["f"] = host;

const path = '/v1/gifs/search';
/* harmony export (immutable) */ __webpack_exports__["i"] = path;

const resultLimit = '100';
/* harmony export (immutable) */ __webpack_exports__["k"] = resultLimit;

const defaultOffset = '0';
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultOffset;


const myInit = { method: 'GET' };
/* harmony export (immutable) */ __webpack_exports__["h"] = myInit;


//The initial state of the store
const initialState = {
    grid: [],
    selectedImage: {},
    meta: {},
    errors: []
}
/* harmony export (immutable) */ __webpack_exports__["g"] = initialState;


//Values used to represent elements for event binding
const domSelectors = {
    searchForm: '#search-form',
    selectedImage: '#selected-image',
    grid: '#grid-container',
    searchForm: '#search-form',
    lightBox: '.lightbox',
    lightboxShown: '.lightbox.show',
    errors: '#errors'
}
/* harmony export (immutable) */ __webpack_exports__["d"] = domSelectors;


//Values used to modify how much content is displayed
const display = {
    imagesPerColumn: 4
}
/* harmony export (immutable) */ __webpack_exports__["c"] = display;


//Selectors used to streamline retrieving data from the store
const selectors = {
    searchTerm: (state) => state.meta.searchTerm,
    offset: (state) => state.meta.offset,
    count: (state) => state.meta.count
}
/* harmony export (immutable) */ __webpack_exports__["l"] = selectors;


//Enums used to represent error responses
const errors = {
    NO_RESPONSE_ERROR: 'The service did not return a response for your query. Please try a different search term.'
}
/* harmony export (immutable) */ __webpack_exports__["e"] = errors;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_grid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_selectedImage__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_errors__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_searchForm__ = __webpack_require__(8);








//Instantiate the store
const store = Object(__WEBPACK_IMPORTED_MODULE_1__state__["a" /* generateStore */])(__WEBPACK_IMPORTED_MODULE_2__config__["g" /* initialState */]);
//Subscribe components to store changes
store.subscribe(__WEBPACK_IMPORTED_MODULE_3__components_grid__["a" /* onStateChange */].bind(store));
store.subscribe(__WEBPACK_IMPORTED_MODULE_4__components_selectedImage__["a" /* onStateChange */].bind(store));
store.subscribe(__WEBPACK_IMPORTED_MODULE_5__components_errors__["a" /* onStateChange */].bind(store));
//Fire the search form state change so its submit event can bind
__WEBPACK_IMPORTED_MODULE_6__components_searchForm__["a" /* onStateChange */].bind(store)();
//Attach the store to the window for debugging purposes
window.__store = store;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export generateRequest */
/* harmony export (immutable) */ __webpack_exports__["a"] = performImgurSearch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(1);


/**
 * Create a route with params for the request.
 * @param {String} searchValue - The entered value to be requested against the giphy api
 * @param {Array} offset - The offset to use when requesting results
 */
function generateRequest(searchValue, offset) {
    return `${__WEBPACK_IMPORTED_MODULE_0__config__["j" /* protocol */]}${__WEBPACK_IMPORTED_MODULE_0__config__["f" /* host */]}${__WEBPACK_IMPORTED_MODULE_0__config__["i" /* path */]}?api_key=${__WEBPACK_IMPORTED_MODULE_0__config__["a" /* api_key */]}&limit=${__WEBPACK_IMPORTED_MODULE_0__config__["k" /* resultLimit */]}&offset=${offset}&q=${searchValue}`;
}

/**
 * Based on searchValue and the config make a request for the searchValue
* @param {String} searchValue - The entered value to be requested against the giphy api
 * @param {Array} offset - The offset to use when requesting results
 */
function performImgurSearch(searchValue, offset = __WEBPACK_IMPORTED_MODULE_0__config__["b" /* defaultOffset */]) {
    const request = generateRequest(searchValue, offset);
    return fetch(request, __WEBPACK_IMPORTED_MODULE_0__config__["h" /* myInit */])
            .then((response) => response.json())
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export responseWithColumns */
/* unused harmony export getTotalColumns */
/* unused harmony export adaptResponse */
/* unused harmony export lookupImage */
/* unused harmony export updateGrid */
/* unused harmony export updateSelectedImage */
/* unused harmony export updateMeta */
/* unused harmony export updateCache */
/* unused harmony export updateErrors */
/* unused harmony export determineStateChange */
/* unused harmony export notifySubscribers */
/* harmony export (immutable) */ __webpack_exports__["a"] = generateStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);



/**
 * Uses the response array to create a new multi-dimensional array
 * @param {Number} columns - The number of columns
 * @param {Array} response - The array of image values
 */
function responseWithColumns(columns, response) {
    const ipc = __WEBPACK_IMPORTED_MODULE_1__config__["c" /* display */].imagesPerColumn;
    const columnsArr = new Array(columns).fill(0);
    return columnsArr.map((val, idx) => {
        return [...response.slice(idx*ipc,idx*ipc+ipc)]
    });
}

/**
 * Updates the apps grid state based on the type of update that just occured.
 * @param {Number} totalImages - The total number of image objects
 */
function getTotalColumns(totalImages) {
    const ipc = __WEBPACK_IMPORTED_MODULE_1__config__["c" /* display */].imagesPerColumn;
    const finalColumn = totalImages%ipc > 0 ? 1 : 0;
    return Math.floor(totalImages/ipc) + finalColumn;
}

/**
 * Determines how many columns a response needs then modifies the response into a multi-dimensional array
 * @param {Array} response - The unaltered response from the service
 */
function adaptResponse(response) {
    const adaptedResponse = response.map((image) => Object.assign({}, image.images, {
        slug: image.slug,
        url: image.bitly_gif_url
    }));
    const totalImages = adaptedResponse.length;
    const columns = getTotalColumns(totalImages)
    return responseWithColumns(columns, adaptedResponse);
}

/**
 * Determines how many columns a response needs then modifies the response into a multi-dimensional array
 * @param {Number} column - The selected column
 * @param {Number} cell - The selected cell
 * @param {Array} gridValues - The current multi-dimensional array of image objects
 */
function lookupImage({column, cell}, gridValues) {
    return Object.assign({}, gridValues[column][cell]);
}

/**
 * Updates the apps grid state based on the type of update that just occured.
 * @param {Object} state - grids current state
 * @param {Object} update - The update describing the change to the state
 */
function updateGrid(state, update, cache) {
    if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SAVE_RESPONSE_ACTION */]) {
        return adaptResponse(update.payload.response.data);
    } else if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* UPDATE_RESPONSE_ACTION */]){
        return adaptResponse([...cache, ...update.payload.response.data]);
    } else if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* NO_RESPONSE_ACTION */]) {
        return {}
    }

    return state;
}

/**
 * Updates the selectedImage state based on the type of update that just occured.
 * @param {Object} state - selectedImage current state
 * @param {Object} update - The update describing the change to the state
 */
function updateSelectedImage(state, update, gridValues) {
    if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* SELECT_IMAGE_ACTION */]) {
        return lookupImage(update.payload, gridValues);
    } else if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* REMOVE_SELECTED_IMAGE_ACTION */]) {
        return {};
    }
    return state;
}

/**
 * Updates the meta state based on the type of update that just occured.
 * @param {Object} state - meta current state
 * @param {Object} update - The update describing the change to the state
 */
function updateMeta(state, update) {
    if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SAVE_RESPONSE_ACTION */]) {
        return Object.assign({}, update.payload.response.meta, update.payload.response.pagination, {
            totalColumns: getTotalColumns(update.payload.response.data.length),
            searchTerm: update.payload.searchTerm
        });
    } else if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* SELECT_IMAGE_ACTION */]) {
        return Object.assign({}, state, {
            selected: update.payload
        });
    } else if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* UPDATE_RESPONSE_ACTION */]) {
        return Object.assign({}, state, update.payload.response.pagination)
    }

    return state;
}

/**
 * Updates the caches state based on the type of update that just occured.
 * @param {Object} state - cache current state
 * @param {Object} update - The update describing the change to the state
 */
function updateCache(state, update) {
    if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SAVE_RESPONSE_ACTION */]) {
        return [...update.payload.response.data];
    } else if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* UPDATE_RESPONSE_ACTION */]) {
        return [...state, ...update.payload.response.data];
    }

    return state;
}

/**
 * Updates the errors state based on the type of update that just occured.
 * @param {Object} state - errors current state
 * @param {Object} update - The update describing the change to the state
 */
function updateErrors(state, update) {
    if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* NO_RESPONSE_ACTION */]) {
        return [update.payload.error];
    }

    return [];
}
/**
 * Update all of the state
 * @param {Object} state - The current state of the app
 * @param {Object} update - The description of the state change
 */
function determineStateChange(state, update) {
    return Object.assign({}, {
        grid: updateGrid(state.grid, update, state.cache),
        selectedImage: updateSelectedImage(state.selectedImage, update, state.grid),
        meta: updateMeta(state.meta, update),
        cache: updateCache(state.cache, update),
        errors: updateErrors(state.errors, update)
    });
}

/**
 * Maps over all subscribed callbacks and executes them
 * @param {Array} subscribers - A list of callback fns
 */
function notifySubscribers(subscribers, state) {
    subscribers.map((subscriber) => subscriber(state));
}

/**
 * Creates a new store object
 * @param {Object} initialState - State used to hydrate the store
 * @param {Object} options - Addional data to be attached to the store
 */
function generateStore(initialState = {}, options = {}) {
    let state = initialState;
    let subscribers = [];
    return Object.assign({}, options, {
        getState: () => Object.assign({}, state),
        updateState: (update) => {
            state = determineStateChange(state, update);
            notifySubscribers(subscribers, state);
        },
        subscribe: (subscriber) => subscribers.push(subscriber),
    });
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cell */
/* unused harmony export columns */
/* unused harmony export template */
/* unused harmony export bindEvents */
/* harmony export (immutable) */ __webpack_exports__["a"] = onStateChange;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request__ = __webpack_require__(3);




/**
 * Creates a template string based on the current column
 * @param {Object} image - The image object in the current cell
 * @param {Number} cell - The current cell index
 */
function cell(image, cell) {
    return `<img class='result-image' data-cell='${cell}' src='${image.downsized_still.url}' alt='${image.slug}'/>`;
}

/**
 * Creates a template string based on the current column
 * @param {Object} images - The image objects in the current column
 * @param {Number} column - The current column index
 */
function columns(images, column) {
    return `<div class='column' data-column='${column}'>${images.reduce((prev, img, idx) => prev+cell(img, idx), '')}</div>`;
}

/**
 * Creates a template string based on grid values
 * @param {Object} state - The current app state
 */
function template(state) {
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
function bindEvents(store) {
    [...document.querySelectorAll('.result-image')].map((el) => el.addEventListener('click', (e) => {
        const column = e.target.parentElement.dataset["column"];
        const cell = e.target.dataset["cell"];
        store.updateState(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["i" /* selectImageAction */])(column, cell));
    }))
    if(document.querySelector('.load-more')) {
        document.querySelector('.load-more').addEventListener('click', (e) => {
            const searchTerm = __WEBPACK_IMPORTED_MODULE_1__config__["l" /* selectors */].searchTerm(store.getState());
            const offset = __WEBPACK_IMPORTED_MODULE_1__config__["l" /* selectors */].offset(store.getState()) + __WEBPACK_IMPORTED_MODULE_1__config__["l" /* selectors */].count(store.getState());
            const response = Object(__WEBPACK_IMPORTED_MODULE_2__request__["a" /* performImgurSearch */])(searchTerm, offset)
                                .then((response) => store.updateState(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["j" /* updateResponseAction */])(response)));
        })
    }
}

function onStateChange() {
    document.querySelector(__WEBPACK_IMPORTED_MODULE_1__config__["d" /* domSelectors */].grid).innerHTML = template(this.getState());
    bindEvents(this);
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getNextImage */
/* unused harmony export getPrevImage */
/* unused harmony export template */
/* unused harmony export bindEvents */
/* harmony export (immutable) */ __webpack_exports__["a"] = onStateChange;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);



/**
 * Determines what the next cell and column indeces are based on the current cell and column.
 * @param {Object} selected - The current selected column and cell
 * @param {Number} totalColumns - The total number of columns
 * @param {Number} count - The total number of image objects
 */
function getNextImage({selected, totalColumns, count}) {
    if(selected.column === totalColumns-1 && selected.cell === count - 1 - ((totalColumns-1)*__WEBPACK_IMPORTED_MODULE_1__config__["c" /* display */].imagesPerColumn)) {
        return {
            nextCell: 0,
            nextColumn: 0
        }
    } else if(selected.cell === __WEBPACK_IMPORTED_MODULE_1__config__["c" /* display */].imagesPerColumn-1) {
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
function getPrevImage({selected, totalColumns, count}) {
    if(selected.column === 0 && selected.cell === 0) {
        return {
            prevCell: count - 1 - ((totalColumns-1)*__WEBPACK_IMPORTED_MODULE_1__config__["c" /* display */].imagesPerColumn),
            prevColumn: totalColumns-1
        }
    } else if(selected.cell === 0) {
        return {
            prevCell: __WEBPACK_IMPORTED_MODULE_1__config__["c" /* display */].imagesPerColumn - 1,
            prevColumn:selected.column - 1
        }
    } else {
        return {
            prevCell: selected.cell - 1,
            prevColumn: selected.column
        }
    }
}

function template(state) {
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
function bindEvents(store) {
    const lightbox = document.querySelector(__WEBPACK_IMPORTED_MODULE_1__config__["d" /* domSelectors */].lightboxShown);
    if(lightbox) {
        lightbox.addEventListener('click', (e) => {
            if(e.target.classList.contains('previous-selected') || e.target.classList.contains('next-selected')) {
                const column = e.target.dataset['column'];
                const cell = e.target.dataset['cell'];
                store.updateState(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["i" /* selectImageAction */])(column, cell));
            }
            else if(e.target.classList.contains('contents') || e.target.classList.contains('close')) {
                store.updateState(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["g" /* removeSelectedImageAction */])());
            }
        })
        document.addEventListener('keyup', (e) => {
            if(e.which === 37) {
                const {column, cell} = document.querySelector('.previous-selected').dataset;
                store.updateState(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["i" /* selectImageAction */])(column, cell));
            } else if(e.which === 39) {
                const {column, cell} = document.querySelector('.next-selected').dataset;
                store.updateState(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["i" /* selectImageAction */])(column, cell));
            } else if(e.which === 27) {
                store.updateState(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["g" /* removeSelectedImageAction */])());
            }
        })
    }
}

function onStateChange() {
    document.querySelector(__WEBPACK_IMPORTED_MODULE_1__config__["d" /* domSelectors */].selectedImage).innerHTML = template(this.getState());
    bindEvents(this);
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export template */
/* harmony export (immutable) */ __webpack_exports__["a"] = onStateChange;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(1);


/**
 * Creates a template string based on error values
 * @param {Object} state - The current app state
 */
function template(state) {
    if(state.errors.length > 0) {
        return state.errors.reduce((prev, error) => `${prev}<h3>${error}</h3>`, ``);
    }
    return ``;
}

function onStateChange() {
    document.querySelector(__WEBPACK_IMPORTED_MODULE_0__config__["d" /* domSelectors */].errors).innerHTML = template(this.getState());
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bindEvents */
/* harmony export (immutable) */ __webpack_exports__["a"] = onStateChange;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(0);




/**
 * Bind events to the search form. Binds a submit handler to the form. When the form is submitted a request 
 * is made with the entered search term. The results are then added to the store. If the response does not contain any
 * results then an error action is dispatched.
 * @param {Object} store - The current app store
 */
function bindEvents(store) {
    document.querySelector(__WEBPACK_IMPORTED_MODULE_0__config__["d" /* domSelectors */].searchForm).addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = e.target.querySelector('input').value;
        const response = Object(__WEBPACK_IMPORTED_MODULE_1__request__["a" /* performImgurSearch */])(searchTerm)
                            .then((response) => {
                                if(response.data.length > 0) {
                                    store.updateState(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["h" /* saveResponseAction */])(response, searchTerm))
                                } else {
                                    store.updateState(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["f" /* noResponseAction */])())
                                }
                            });
    });
}

function onStateChange() {
    bindEvents(this);
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDYyNmJkY2I5OWZiMjZmOGE2MWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VsZWN0ZWRJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VhcmNoRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0RpQjs7QUFFakI7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NjI2YmRjYjk5ZmIyNmY4YTYxZCIsImltcG9ydCB7IGVycm9ycyB9IGZyb20gJy4vY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IFNBVkVfUkVTUE9OU0VfQUNUSU9OID0gJ1NBVkVfUkVTUE9OU0VfQUNUSU9OJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfSU1BR0VfQUNUSU9OID0gJ1NFTEVDVF9JTUFHRV9BQ1RJT04nO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9TRUxFQ1RFRF9JTUFHRV9BQ1RJT04gPSAnUkVNT1ZFX1NFTEVDVEVEX0lNQUdFX0FDVElPTic7XG5leHBvcnQgY29uc3QgVVBEQVRFX1JFU1BPTlNFX0FDVElPTiA9ICdVUERBVEVfUkVTUE9OU0VfQUNUSU9OJztcbmV4cG9ydCBjb25zdCBOT19SRVNQT05TRV9BQ1RJT04gPSAnTk9fUkVTUE9OU0VfQUNUSU9OJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSZXNwb25zZUFjdGlvbihyZXNwb25zZSwgc2VhcmNoVGVybSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNBVkVfUkVTUE9OU0VfQUNUSU9OLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICByZXNwb25zZSxcbiAgICAgICAgICAgIHNlYXJjaFRlcm1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEltYWdlQWN0aW9uKGNvbHVtbiwgY2VsbCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNFTEVDVF9JTUFHRV9BQ1RJT04sXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGNvbHVtbjogTnVtYmVyKGNvbHVtbiksXG4gICAgICAgICAgICBjZWxsOiBOdW1iZXIoY2VsbClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNlbGVjdGVkSW1hZ2VBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUkVNT1ZFX1NFTEVDVEVEX0lNQUdFX0FDVElPTlxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVJlc3BvbnNlQWN0aW9uKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVVBEQVRFX1JFU1BPTlNFX0FDVElPTixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vUmVzcG9uc2VBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogTk9fUkVTUE9OU0VfQUNUSU9OLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBlcnJvcjogZXJyb3JzLk5PX1JFU1BPTlNFX0VSUk9SXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9hY3Rpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vZ2lwaHkgYXBpIGFuZCBkZWZhdWx0IHZhbHVlc1xuZXhwb3J0IGNvbnN0IGFwaV9rZXkgPSAnMGM1OTM4ZDQwNGJhNDk3YzgxYTU5ODZlOGVlNjQ5MDMnO1xuZXhwb3J0IGNvbnN0IHByb3RvY29sID0gJ2h0dHA6Ly8nO1xuZXhwb3J0IGNvbnN0IGhvc3QgPSAnYXBpLmdpcGh5LmNvbSc7XG5leHBvcnQgY29uc3QgcGF0aCA9ICcvdjEvZ2lmcy9zZWFyY2gnO1xuZXhwb3J0IGNvbnN0IHJlc3VsdExpbWl0ID0gJzEwMCc7XG5leHBvcnQgY29uc3QgZGVmYXVsdE9mZnNldCA9ICcwJztcblxuZXhwb3J0IGNvbnN0IG15SW5pdCA9IHsgbWV0aG9kOiAnR0VUJyB9O1xuXG4vL1RoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBzdG9yZVxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBncmlkOiBbXSxcbiAgICBzZWxlY3RlZEltYWdlOiB7fSxcbiAgICBtZXRhOiB7fSxcbiAgICBlcnJvcnM6IFtdXG59XG5cbi8vVmFsdWVzIHVzZWQgdG8gcmVwcmVzZW50IGVsZW1lbnRzIGZvciBldmVudCBiaW5kaW5nXG5leHBvcnQgY29uc3QgZG9tU2VsZWN0b3JzID0ge1xuICAgIHNlYXJjaEZvcm06ICcjc2VhcmNoLWZvcm0nLFxuICAgIHNlbGVjdGVkSW1hZ2U6ICcjc2VsZWN0ZWQtaW1hZ2UnLFxuICAgIGdyaWQ6ICcjZ3JpZC1jb250YWluZXInLFxuICAgIHNlYXJjaEZvcm06ICcjc2VhcmNoLWZvcm0nLFxuICAgIGxpZ2h0Qm94OiAnLmxpZ2h0Ym94JyxcbiAgICBsaWdodGJveFNob3duOiAnLmxpZ2h0Ym94LnNob3cnLFxuICAgIGVycm9yczogJyNlcnJvcnMnXG59XG5cbi8vVmFsdWVzIHVzZWQgdG8gbW9kaWZ5IGhvdyBtdWNoIGNvbnRlbnQgaXMgZGlzcGxheWVkXG5leHBvcnQgY29uc3QgZGlzcGxheSA9IHtcbiAgICBpbWFnZXNQZXJDb2x1bW46IDRcbn1cblxuLy9TZWxlY3RvcnMgdXNlZCB0byBzdHJlYW1saW5lIHJldHJpZXZpbmcgZGF0YSBmcm9tIHRoZSBzdG9yZVxuZXhwb3J0IGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICBzZWFyY2hUZXJtOiAoc3RhdGUpID0+IHN0YXRlLm1ldGEuc2VhcmNoVGVybSxcbiAgICBvZmZzZXQ6IChzdGF0ZSkgPT4gc3RhdGUubWV0YS5vZmZzZXQsXG4gICAgY291bnQ6IChzdGF0ZSkgPT4gc3RhdGUubWV0YS5jb3VudFxufVxuXG4vL0VudW1zIHVzZWQgdG8gcmVwcmVzZW50IGVycm9yIHJlc3BvbnNlc1xuZXhwb3J0IGNvbnN0IGVycm9ycyA9IHtcbiAgICBOT19SRVNQT05TRV9FUlJPUjogJ1RoZSBzZXJ2aWNlIGRpZCBub3QgcmV0dXJuIGEgcmVzcG9uc2UgZm9yIHlvdXIgcXVlcnkuIFBsZWFzZSB0cnkgYSBkaWZmZXJlbnQgc2VhcmNoIHRlcm0uJ1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbmZpZy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBwZXJmb3JtSW1ndXJTZWFyY2ggfSBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IHsgZ2VuZXJhdGVTdG9yZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgb25TdGF0ZUNoYW5nZSBhcyBncmlkT25TdGF0ZUNoYW5nZSB9IGZyb20gJy4vY29tcG9uZW50cy9ncmlkJztcbmltcG9ydCB7IG9uU3RhdGVDaGFuZ2UgYXMgc2VsZWN0ZWRJbWFnZU9uU3RhdGVDaGFuZ2UgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0ZWRJbWFnZSc7XG5pbXBvcnQgeyBvblN0YXRlQ2hhbmdlIGFzIGVycm9yc09uU3RhdGVDaGFuZ2UgfSBmcm9tICcuL2NvbXBvbmVudHMvZXJyb3JzJztcbmltcG9ydCB7IG9uU3RhdGVDaGFuZ2UgYXMgc2VhcmNoRm9ybVN0YXRlQ2hhbmdlIH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaEZvcm0nO1xuXG4vL0luc3RhbnRpYXRlIHRoZSBzdG9yZVxuY29uc3Qgc3RvcmUgPSBnZW5lcmF0ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XG4vL1N1YnNjcmliZSBjb21wb25lbnRzIHRvIHN0b3JlIGNoYW5nZXNcbnN0b3JlLnN1YnNjcmliZShncmlkT25TdGF0ZUNoYW5nZS5iaW5kKHN0b3JlKSk7XG5zdG9yZS5zdWJzY3JpYmUoc2VsZWN0ZWRJbWFnZU9uU3RhdGVDaGFuZ2UuYmluZChzdG9yZSkpO1xuc3RvcmUuc3Vic2NyaWJlKGVycm9yc09uU3RhdGVDaGFuZ2UuYmluZChzdG9yZSkpO1xuLy9GaXJlIHRoZSBzZWFyY2ggZm9ybSBzdGF0ZSBjaGFuZ2Ugc28gaXRzIHN1Ym1pdCBldmVudCBjYW4gYmluZFxuc2VhcmNoRm9ybVN0YXRlQ2hhbmdlLmJpbmQoc3RvcmUpKCk7XG4vL0F0dGFjaCB0aGUgc3RvcmUgdG8gdGhlIHdpbmRvdyBmb3IgZGVidWdnaW5nIHB1cnBvc2VzXG53aW5kb3cuX19zdG9yZSA9IHN0b3JlO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBhcGlfa2V5LCBwcm90b2NvbCwgaG9zdCwgcGF0aCwgbXlJbml0LCByZXN1bHRMaW1pdCwgZGVmYXVsdE9mZnNldCB9IGZyb20gJy4vY29uZmlnJztcblxuLyoqXG4gKiBDcmVhdGUgYSByb3V0ZSB3aXRoIHBhcmFtcyBmb3IgdGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoVmFsdWUgLSBUaGUgZW50ZXJlZCB2YWx1ZSB0byBiZSByZXF1ZXN0ZWQgYWdhaW5zdCB0aGUgZ2lwaHkgYXBpXG4gKiBAcGFyYW0ge0FycmF5fSBvZmZzZXQgLSBUaGUgb2Zmc2V0IHRvIHVzZSB3aGVuIHJlcXVlc3RpbmcgcmVzdWx0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSZXF1ZXN0KHNlYXJjaFZhbHVlLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aH0/YXBpX2tleT0ke2FwaV9rZXl9JmxpbWl0PSR7cmVzdWx0TGltaXR9Jm9mZnNldD0ke29mZnNldH0mcT0ke3NlYXJjaFZhbHVlfWA7XG59XG5cbi8qKlxuICogQmFzZWQgb24gc2VhcmNoVmFsdWUgYW5kIHRoZSBjb25maWcgbWFrZSBhIHJlcXVlc3QgZm9yIHRoZSBzZWFyY2hWYWx1ZVxuKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoVmFsdWUgLSBUaGUgZW50ZXJlZCB2YWx1ZSB0byBiZSByZXF1ZXN0ZWQgYWdhaW5zdCB0aGUgZ2lwaHkgYXBpXG4gKiBAcGFyYW0ge0FycmF5fSBvZmZzZXQgLSBUaGUgb2Zmc2V0IHRvIHVzZSB3aGVuIHJlcXVlc3RpbmcgcmVzdWx0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGVyZm9ybUltZ3VyU2VhcmNoKHNlYXJjaFZhbHVlLCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGdlbmVyYXRlUmVxdWVzdChzZWFyY2hWYWx1ZSwgb2Zmc2V0KTtcbiAgICByZXR1cm4gZmV0Y2gocmVxdWVzdCwgbXlJbml0KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvcmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTQVZFX1JFU1BPTlNFX0FDVElPTiwgU0VMRUNUX0lNQUdFX0FDVElPTiwgUkVNT1ZFX1NFTEVDVEVEX0lNQUdFX0FDVElPTiwgVVBEQVRFX1JFU1BPTlNFX0FDVElPTiwgTk9fUkVTUE9OU0VfQUNUSU9OIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGRpc3BsYXkgfSBmcm9tICcuL2NvbmZpZyc7XG5cbi8qKlxuICogVXNlcyB0aGUgcmVzcG9uc2UgYXJyYXkgdG8gY3JlYXRlIGEgbmV3IG11bHRpLWRpbWVuc2lvbmFsIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY29sdW1ucyAtIFRoZSBudW1iZXIgb2YgY29sdW1uc1xuICogQHBhcmFtIHtBcnJheX0gcmVzcG9uc2UgLSBUaGUgYXJyYXkgb2YgaW1hZ2UgdmFsdWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNwb25zZVdpdGhDb2x1bW5zKGNvbHVtbnMsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgaXBjID0gZGlzcGxheS5pbWFnZXNQZXJDb2x1bW47XG4gICAgY29uc3QgY29sdW1uc0FyciA9IG5ldyBBcnJheShjb2x1bW5zKS5maWxsKDApO1xuICAgIHJldHVybiBjb2x1bW5zQXJyLm1hcCgodmFsLCBpZHgpID0+IHtcbiAgICAgICAgcmV0dXJuIFsuLi5yZXNwb25zZS5zbGljZShpZHgqaXBjLGlkeCppcGMraXBjKV1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBhcHBzIGdyaWQgc3RhdGUgYmFzZWQgb24gdGhlIHR5cGUgb2YgdXBkYXRlIHRoYXQganVzdCBvY2N1cmVkLlxuICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsSW1hZ2VzIC0gVGhlIHRvdGFsIG51bWJlciBvZiBpbWFnZSBvYmplY3RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbENvbHVtbnModG90YWxJbWFnZXMpIHtcbiAgICBjb25zdCBpcGMgPSBkaXNwbGF5LmltYWdlc1BlckNvbHVtbjtcbiAgICBjb25zdCBmaW5hbENvbHVtbiA9IHRvdGFsSW1hZ2VzJWlwYyA+IDAgPyAxIDogMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0b3RhbEltYWdlcy9pcGMpICsgZmluYWxDb2x1bW47XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBob3cgbWFueSBjb2x1bW5zIGEgcmVzcG9uc2UgbmVlZHMgdGhlbiBtb2RpZmllcyB0aGUgcmVzcG9uc2UgaW50byBhIG11bHRpLWRpbWVuc2lvbmFsIGFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSByZXNwb25zZSAtIFRoZSB1bmFsdGVyZWQgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmljZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRhcHRSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGNvbnN0IGFkYXB0ZWRSZXNwb25zZSA9IHJlc3BvbnNlLm1hcCgoaW1hZ2UpID0+IE9iamVjdC5hc3NpZ24oe30sIGltYWdlLmltYWdlcywge1xuICAgICAgICBzbHVnOiBpbWFnZS5zbHVnLFxuICAgICAgICB1cmw6IGltYWdlLmJpdGx5X2dpZl91cmxcbiAgICB9KSk7XG4gICAgY29uc3QgdG90YWxJbWFnZXMgPSBhZGFwdGVkUmVzcG9uc2UubGVuZ3RoO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRUb3RhbENvbHVtbnModG90YWxJbWFnZXMpXG4gICAgcmV0dXJuIHJlc3BvbnNlV2l0aENvbHVtbnMoY29sdW1ucywgYWRhcHRlZFJlc3BvbnNlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIGhvdyBtYW55IGNvbHVtbnMgYSByZXNwb25zZSBuZWVkcyB0aGVuIG1vZGlmaWVzIHRoZSByZXNwb25zZSBpbnRvIGEgbXVsdGktZGltZW5zaW9uYWwgYXJyYXlcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gLSBUaGUgc2VsZWN0ZWQgY29sdW1uXG4gKiBAcGFyYW0ge051bWJlcn0gY2VsbCAtIFRoZSBzZWxlY3RlZCBjZWxsXG4gKiBAcGFyYW0ge0FycmF5fSBncmlkVmFsdWVzIC0gVGhlIGN1cnJlbnQgbXVsdGktZGltZW5zaW9uYWwgYXJyYXkgb2YgaW1hZ2Ugb2JqZWN0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwSW1hZ2Uoe2NvbHVtbiwgY2VsbH0sIGdyaWRWYWx1ZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ3JpZFZhbHVlc1tjb2x1bW5dW2NlbGxdKTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBhcHBzIGdyaWQgc3RhdGUgYmFzZWQgb24gdGhlIHR5cGUgb2YgdXBkYXRlIHRoYXQganVzdCBvY2N1cmVkLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gZ3JpZHMgY3VycmVudCBzdGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZSAtIFRoZSB1cGRhdGUgZGVzY3JpYmluZyB0aGUgY2hhbmdlIHRvIHRoZSBzdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlR3JpZChzdGF0ZSwgdXBkYXRlLCBjYWNoZSkge1xuICAgIGlmKHVwZGF0ZS50eXBlID09PSBTQVZFX1JFU1BPTlNFX0FDVElPTikge1xuICAgICAgICByZXR1cm4gYWRhcHRSZXNwb25zZSh1cGRhdGUucGF5bG9hZC5yZXNwb25zZS5kYXRhKTtcbiAgICB9IGVsc2UgaWYodXBkYXRlLnR5cGUgPT09IFVQREFURV9SRVNQT05TRV9BQ1RJT04pe1xuICAgICAgICByZXR1cm4gYWRhcHRSZXNwb25zZShbLi4uY2FjaGUsIC4uLnVwZGF0ZS5wYXlsb2FkLnJlc3BvbnNlLmRhdGFdKTtcbiAgICB9IGVsc2UgaWYodXBkYXRlLnR5cGUgPT09IE5PX1JFU1BPTlNFX0FDVElPTikge1xuICAgICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgc2VsZWN0ZWRJbWFnZSBzdGF0ZSBiYXNlZCBvbiB0aGUgdHlwZSBvZiB1cGRhdGUgdGhhdCBqdXN0IG9jY3VyZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgLSBzZWxlY3RlZEltYWdlIGN1cnJlbnQgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGUgLSBUaGUgdXBkYXRlIGRlc2NyaWJpbmcgdGhlIGNoYW5nZSB0byB0aGUgc3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNlbGVjdGVkSW1hZ2Uoc3RhdGUsIHVwZGF0ZSwgZ3JpZFZhbHVlcykge1xuICAgIGlmKHVwZGF0ZS50eXBlID09PSBTRUxFQ1RfSU1BR0VfQUNUSU9OKSB7XG4gICAgICAgIHJldHVybiBsb29rdXBJbWFnZSh1cGRhdGUucGF5bG9hZCwgZ3JpZFZhbHVlcyk7XG4gICAgfSBlbHNlIGlmKHVwZGF0ZS50eXBlID09PSBSRU1PVkVfU0VMRUNURURfSU1BR0VfQUNUSU9OKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIG1ldGEgc3RhdGUgYmFzZWQgb24gdGhlIHR5cGUgb2YgdXBkYXRlIHRoYXQganVzdCBvY2N1cmVkLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gbWV0YSBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlIC0gVGhlIHVwZGF0ZSBkZXNjcmliaW5nIHRoZSBjaGFuZ2UgdG8gdGhlIHN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVNZXRhKHN0YXRlLCB1cGRhdGUpIHtcbiAgICBpZih1cGRhdGUudHlwZSA9PT0gU0FWRV9SRVNQT05TRV9BQ1RJT04pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHVwZGF0ZS5wYXlsb2FkLnJlc3BvbnNlLm1ldGEsIHVwZGF0ZS5wYXlsb2FkLnJlc3BvbnNlLnBhZ2luYXRpb24sIHtcbiAgICAgICAgICAgIHRvdGFsQ29sdW1uczogZ2V0VG90YWxDb2x1bW5zKHVwZGF0ZS5wYXlsb2FkLnJlc3BvbnNlLmRhdGEubGVuZ3RoKSxcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IHVwZGF0ZS5wYXlsb2FkLnNlYXJjaFRlcm1cbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmKHVwZGF0ZS50eXBlID09PSBTRUxFQ1RfSU1BR0VfQUNUSU9OKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IHVwZGF0ZS5wYXlsb2FkXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZih1cGRhdGUudHlwZSA9PT0gVVBEQVRFX1JFU1BPTlNFX0FDVElPTikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHVwZGF0ZS5wYXlsb2FkLnJlc3BvbnNlLnBhZ2luYXRpb24pXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIGNhY2hlcyBzdGF0ZSBiYXNlZCBvbiB0aGUgdHlwZSBvZiB1cGRhdGUgdGhhdCBqdXN0IG9jY3VyZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgLSBjYWNoZSBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlIC0gVGhlIHVwZGF0ZSBkZXNjcmliaW5nIHRoZSBjaGFuZ2UgdG8gdGhlIHN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYWNoZShzdGF0ZSwgdXBkYXRlKSB7XG4gICAgaWYodXBkYXRlLnR5cGUgPT09IFNBVkVfUkVTUE9OU0VfQUNUSU9OKSB7XG4gICAgICAgIHJldHVybiBbLi4udXBkYXRlLnBheWxvYWQucmVzcG9uc2UuZGF0YV07XG4gICAgfSBlbHNlIGlmKHVwZGF0ZS50eXBlID09PSBVUERBVEVfUkVTUE9OU0VfQUNUSU9OKSB7XG4gICAgICAgIHJldHVybiBbLi4uc3RhdGUsIC4uLnVwZGF0ZS5wYXlsb2FkLnJlc3BvbnNlLmRhdGFdO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBlcnJvcnMgc3RhdGUgYmFzZWQgb24gdGhlIHR5cGUgb2YgdXBkYXRlIHRoYXQganVzdCBvY2N1cmVkLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gZXJyb3JzIGN1cnJlbnQgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGUgLSBUaGUgdXBkYXRlIGRlc2NyaWJpbmcgdGhlIGNoYW5nZSB0byB0aGUgc3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVycm9ycyhzdGF0ZSwgdXBkYXRlKSB7XG4gICAgaWYodXBkYXRlLnR5cGUgPT09IE5PX1JFU1BPTlNFX0FDVElPTikge1xuICAgICAgICByZXR1cm4gW3VwZGF0ZS5wYXlsb2FkLmVycm9yXTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG59XG4vKipcbiAqIFVwZGF0ZSBhbGwgb2YgdGhlIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgLSBUaGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgYXBwXG4gKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlIC0gVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBzdGF0ZSBjaGFuZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluZVN0YXRlQ2hhbmdlKHN0YXRlLCB1cGRhdGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBncmlkOiB1cGRhdGVHcmlkKHN0YXRlLmdyaWQsIHVwZGF0ZSwgc3RhdGUuY2FjaGUpLFxuICAgICAgICBzZWxlY3RlZEltYWdlOiB1cGRhdGVTZWxlY3RlZEltYWdlKHN0YXRlLnNlbGVjdGVkSW1hZ2UsIHVwZGF0ZSwgc3RhdGUuZ3JpZCksXG4gICAgICAgIG1ldGE6IHVwZGF0ZU1ldGEoc3RhdGUubWV0YSwgdXBkYXRlKSxcbiAgICAgICAgY2FjaGU6IHVwZGF0ZUNhY2hlKHN0YXRlLmNhY2hlLCB1cGRhdGUpLFxuICAgICAgICBlcnJvcnM6IHVwZGF0ZUVycm9ycyhzdGF0ZS5lcnJvcnMsIHVwZGF0ZSlcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBNYXBzIG92ZXIgYWxsIHN1YnNjcmliZWQgY2FsbGJhY2tzIGFuZCBleGVjdXRlcyB0aGVtXG4gKiBAcGFyYW0ge0FycmF5fSBzdWJzY3JpYmVycyAtIEEgbGlzdCBvZiBjYWxsYmFjayBmbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVN1YnNjcmliZXJzKHN1YnNjcmliZXJzLCBzdGF0ZSkge1xuICAgIHN1YnNjcmliZXJzLm1hcCgoc3Vic2NyaWJlcikgPT4gc3Vic2NyaWJlcihzdGF0ZSkpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgc3RvcmUgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gaW5pdGlhbFN0YXRlIC0gU3RhdGUgdXNlZCB0byBoeWRyYXRlIHRoZSBzdG9yZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBBZGRpb25hbCBkYXRhIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBzdG9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTdG9yZShpbml0aWFsU3RhdGUgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IHN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgIGxldCBzdWJzY3JpYmVycyA9IFtdO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIGdldFN0YXRlOiAoKSA9PiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksXG4gICAgICAgIHVwZGF0ZVN0YXRlOiAodXBkYXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZSA9IGRldGVybWluZVN0YXRlQ2hhbmdlKHN0YXRlLCB1cGRhdGUpO1xuICAgICAgICAgICAgbm90aWZ5U3Vic2NyaWJlcnMoc3Vic2NyaWJlcnMsIHN0YXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3Vic2NyaWJlOiAoc3Vic2NyaWJlcikgPT4gc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKSxcbiAgICB9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3N0YXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHNlbGVjdEltYWdlQWN0aW9uLCB1cGRhdGVSZXNwb25zZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgZG9tU2VsZWN0b3JzLCBzZWxlY3RvcnN9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBwZXJmb3JtSW1ndXJTZWFyY2ggfSBmcm9tICcuLi9yZXF1ZXN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGVtcGxhdGUgc3RyaW5nIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNvbHVtblxuICogQHBhcmFtIHtPYmplY3R9IGltYWdlIC0gVGhlIGltYWdlIG9iamVjdCBpbiB0aGUgY3VycmVudCBjZWxsXG4gKiBAcGFyYW0ge051bWJlcn0gY2VsbCAtIFRoZSBjdXJyZW50IGNlbGwgaW5kZXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNlbGwoaW1hZ2UsIGNlbGwpIHtcbiAgICByZXR1cm4gYDxpbWcgY2xhc3M9J3Jlc3VsdC1pbWFnZScgZGF0YS1jZWxsPScke2NlbGx9JyBzcmM9JyR7aW1hZ2UuZG93bnNpemVkX3N0aWxsLnVybH0nIGFsdD0nJHtpbWFnZS5zbHVnfScvPmA7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRlbXBsYXRlIHN0cmluZyBiYXNlZCBvbiB0aGUgY3VycmVudCBjb2x1bW5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbWFnZXMgLSBUaGUgaW1hZ2Ugb2JqZWN0cyBpbiB0aGUgY3VycmVudCBjb2x1bW5cbiAqIEBwYXJhbSB7TnVtYmVyfSBjb2x1bW4gLSBUaGUgY3VycmVudCBjb2x1bW4gaW5kZXhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbnMoaW1hZ2VzLCBjb2x1bW4pIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9J2NvbHVtbicgZGF0YS1jb2x1bW49JyR7Y29sdW1ufSc+JHtpbWFnZXMucmVkdWNlKChwcmV2LCBpbWcsIGlkeCkgPT4gcHJlditjZWxsKGltZywgaWR4KSwgJycpfTwvZGl2PmA7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRlbXBsYXRlIHN0cmluZyBiYXNlZCBvbiBncmlkIHZhbHVlc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gVGhlIGN1cnJlbnQgYXBwIHN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZShzdGF0ZSkge1xuICAgIGlmKHN0YXRlLmdyaWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9J2dyaWQnPlxuICAgICAgICAgICAgICAgICAgICAke3N0YXRlLmdyaWQucmVkdWNlKChwcmV2LCBpbWFnZXMsIGlkeCkgPT4gYCR7cHJlditjb2x1bW5zKGltYWdlcywgaWR4KX1gLCBgYCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nbG9hZC1tb3JlJz5Mb2FkIE1vcmU8L2J1dHRvbj5gO1xuICAgIH1cbiAgICByZXR1cm4gYGA7XG59XG5cbi8qKlxuICogQmluZCBldmVudHMgcmVsYXRlZCB0byBpdGVtcyBpbiB0aGUgZ3JpZC4gQmluZHMgYSBjbGljayBldmVudExpc3RlbmVyIHRvIGFsbCBpbWFnZXMgd2hpY2ggd2hlbiBlbmdhZ2VkIFxuICogdXBkYXRlcyBzZWxlY3RlZEltYWdlIHZhbHVlcyBsZWFkaW5nIHRvIHRoZSBsaWdodGJveCBiZWluZyBzaG93bi4gXG4gKiBBbHNvIGJpbmRzIGEgY2xpY2sgZXZlbnQgdG8gdGhlIGxvYWQgbW9yZSBidXR0b24sIG9uIGNsaWNrIGEgbmV3IHJlcXVlc3QgaXMgbWFkZSwgXG4gKiBhbmQgdGhlbiB0aGUgcmVzcG9uc2UgaXMgYWRkZWQgdG8gdGhlIGV4aWlzdGluZyByZXNwb25zZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdG9yZSAtIFRoZSBjdXJyZW50IGFwcCBzdG9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEV2ZW50cyhzdG9yZSkge1xuICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdWx0LWltYWdlJyldLm1hcCgoZWwpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgY29sdW1uID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0W1wiY29sdW1uXCJdO1xuICAgICAgICBjb25zdCBjZWxsID0gZS50YXJnZXQuZGF0YXNldFtcImNlbGxcIl07XG4gICAgICAgIHN0b3JlLnVwZGF0ZVN0YXRlKHNlbGVjdEltYWdlQWN0aW9uKGNvbHVtbiwgY2VsbCkpO1xuICAgIH0pKVxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkLW1vcmUnKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZC1tb3JlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoVGVybSA9IHNlbGVjdG9ycy5zZWFyY2hUZXJtKHN0b3JlLmdldFN0YXRlKCkpO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc2VsZWN0b3JzLm9mZnNldChzdG9yZS5nZXRTdGF0ZSgpKSArIHNlbGVjdG9ycy5jb3VudChzdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcGVyZm9ybUltZ3VyU2VhcmNoKHNlYXJjaFRlcm0sIG9mZnNldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzdG9yZS51cGRhdGVTdGF0ZSh1cGRhdGVSZXNwb25zZUFjdGlvbihyZXNwb25zZSkpKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblN0YXRlQ2hhbmdlKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZG9tU2VsZWN0b3JzLmdyaWQpLmlubmVySFRNTCA9IHRlbXBsYXRlKHRoaXMuZ2V0U3RhdGUoKSk7XG4gICAgYmluZEV2ZW50cyh0aGlzKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvZ3JpZC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBzZWxlY3RJbWFnZUFjdGlvbiwgcmVtb3ZlU2VsZWN0ZWRJbWFnZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgZG9tU2VsZWN0b3JzLCBkaXNwbGF5IH0gZnJvbSAnLi4vY29uZmlnJztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoYXQgdGhlIG5leHQgY2VsbCBhbmQgY29sdW1uIGluZGVjZXMgYXJlIGJhc2VkIG9uIHRoZSBjdXJyZW50IGNlbGwgYW5kIGNvbHVtbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RlZCAtIFRoZSBjdXJyZW50IHNlbGVjdGVkIGNvbHVtbiBhbmQgY2VsbFxuICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsQ29sdW1ucyAtIFRoZSB0b3RhbCBudW1iZXIgb2YgY29sdW1uc1xuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IC0gVGhlIHRvdGFsIG51bWJlciBvZiBpbWFnZSBvYmplY3RzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0SW1hZ2Uoe3NlbGVjdGVkLCB0b3RhbENvbHVtbnMsIGNvdW50fSkge1xuICAgIGlmKHNlbGVjdGVkLmNvbHVtbiA9PT0gdG90YWxDb2x1bW5zLTEgJiYgc2VsZWN0ZWQuY2VsbCA9PT0gY291bnQgLSAxIC0gKCh0b3RhbENvbHVtbnMtMSkqZGlzcGxheS5pbWFnZXNQZXJDb2x1bW4pKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0Q2VsbDogMCxcbiAgICAgICAgICAgIG5leHRDb2x1bW46IDBcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZihzZWxlY3RlZC5jZWxsID09PSBkaXNwbGF5LmltYWdlc1BlckNvbHVtbi0xKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXh0Q2VsbDogMCxcbiAgICAgICAgICAgIG5leHRDb2x1bW46IHNlbGVjdGVkLmNvbHVtbisxXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV4dENlbGw6IHNlbGVjdGVkLmNlbGwrMSxcbiAgICAgICAgICAgIG5leHRDb2x1bW46IHNlbGVjdGVkLmNvbHVtblxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hhdCB0aGUgcHJldiBjZWxsIGFuZCBjb2x1bW4gaW5kZWNlcyBhcmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgY2VsbCBhbmQgY29sdW1uLlxuICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdGVkIC0gVGhlIGN1cnJlbnQgc2VsZWN0ZWQgY29sdW1uIGFuZCBjZWxsXG4gKiBAcGFyYW0ge051bWJlcn0gdG90YWxDb2x1bW5zIC0gVGhlIHRvdGFsIG51bWJlciBvZiBjb2x1bW5zXG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIGltYWdlIG9iamVjdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZJbWFnZSh7c2VsZWN0ZWQsIHRvdGFsQ29sdW1ucywgY291bnR9KSB7XG4gICAgaWYoc2VsZWN0ZWQuY29sdW1uID09PSAwICYmIHNlbGVjdGVkLmNlbGwgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZXZDZWxsOiBjb3VudCAtIDEgLSAoKHRvdGFsQ29sdW1ucy0xKSpkaXNwbGF5LmltYWdlc1BlckNvbHVtbiksXG4gICAgICAgICAgICBwcmV2Q29sdW1uOiB0b3RhbENvbHVtbnMtMVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKHNlbGVjdGVkLmNlbGwgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZXZDZWxsOiBkaXNwbGF5LmltYWdlc1BlckNvbHVtbiAtIDEsXG4gICAgICAgICAgICBwcmV2Q29sdW1uOnNlbGVjdGVkLmNvbHVtbiAtIDFcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmV2Q2VsbDogc2VsZWN0ZWQuY2VsbCAtIDEsXG4gICAgICAgICAgICBwcmV2Q29sdW1uOiBzZWxlY3RlZC5jb2x1bW5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlKHN0YXRlKSB7XG4gICAgaWYoT2JqZWN0LmtleXMoc3RhdGUuc2VsZWN0ZWRJbWFnZSkubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB7cHJldkNlbGwsIHByZXZDb2x1bW59ID0gZ2V0UHJldkltYWdlKHN0YXRlLm1ldGEpO1xuICAgICAgICBjb25zdCB7bmV4dENlbGwsIG5leHRDb2x1bW59ID0gZ2V0TmV4dEltYWdlKHN0YXRlLm1ldGEpO1xuXG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImxpZ2h0Ym94IHNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBjbGFzcz1cImNsb3NlXCI+WDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBpZD0nbGlnaHRib3gtaGVhZGVyJz48YSBocmVmPVwiJHtzdGF0ZS5zZWxlY3RlZEltYWdlLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3N0YXRlLnNlbGVjdGVkSW1hZ2Uuc2x1Z308L2E+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3N0YXRlLnNlbGVjdGVkSW1hZ2UudXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgc3JjPVwiJHtzdGF0ZS5zZWxlY3RlZEltYWdlLmRvd25zaXplZF9tZWRpdW0udXJsfVwiIGFsdD1cIiR7c3RhdGUuc2VsZWN0ZWRJbWFnZS5zbHVnfVwiLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1sYWJlbD1cInByZXZpb3VzXCIgY2xhc3M9XCJwcmV2aW91cy1zZWxlY3RlZCBwYWdpbmF0aW9uXCIgZGF0YS1jb2x1bW49XCIke3ByZXZDb2x1bW59XCIgZGF0YS1jZWxsPVwiJHtwcmV2Q2VsbH1cIj5QcmV2PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtbGFiZWw9XCJuZXh0XCIgY2xhc3M9XCJuZXh0LXNlbGVjdGVkIHBhZ2luYXRpb25cIiBkYXRhLWNvbHVtbj1cIiR7bmV4dENvbHVtbn1cIiBkYXRhLWNlbGw9XCIke25leHRDZWxsfVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICB9XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibGlnaHRib3hcIj48L2Rpdj5gO1xufVxuXG4vKipcbiAqIEJpbmQgZXZlbnRzIHJlbGF0ZWQgdG8gaXRlbXMgaW4gdGhlIHNlbGVjdGVkIGltYWdlIGRpdi4gSWYgdGhlIGxpZ2h0Ym94IGRpdiBpcyBzaG93aW5nIGEgXG4gKiBjbGljayBldmVudCBpcyBib3VuZCB0byB0aGUgbGlnaHRib3guIE9uIGEgY2xpY2sgZXZlbnQgaXQgaXMgZGV0ZXJtaW5lZCBpZiBpdHMgb24gcHJldiwgbmV4dCwgY2xvc2UsIG9yIHRoZSBpbWFnZVxuICogaXRzZWxmLiBQcmV2IGFuZCBuZXh0IGNsaWNrcyB1cGRhdGUgdGhlIHNlbGVjdGVkIGltYWdlIHN0YXRlLCBjbG9zZSBjbGVhcnMgdGhlIHNlbGVjdGVkIGltYWdlIHN0YXRlLiBBIGtleXVwIGV2ZW50IGlzIGFsc29cbiAqIGJvdW5kIHRvIG1ha2UgdGhlIGxpZ2h0Ym94IG1vcmUgYWNjZXNzaWJsZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdG9yZSAtIFRoZSBjdXJyZW50IGFwcCBzdG9yZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYmluZEV2ZW50cyhzdG9yZSkge1xuICAgIGNvbnN0IGxpZ2h0Ym94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkb21TZWxlY3RvcnMubGlnaHRib3hTaG93bik7XG4gICAgaWYobGlnaHRib3gpIHtcbiAgICAgICAgbGlnaHRib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmV2aW91cy1zZWxlY3RlZCcpIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmV4dC1zZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gZS50YXJnZXQuZGF0YXNldFsnY29sdW1uJ107XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0LmRhdGFzZXRbJ2NlbGwnXTtcbiAgICAgICAgICAgICAgICBzdG9yZS51cGRhdGVTdGF0ZShzZWxlY3RJbWFnZUFjdGlvbihjb2x1bW4sIGNlbGwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250ZW50cycpIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UnKSkge1xuICAgICAgICAgICAgICAgIHN0b3JlLnVwZGF0ZVN0YXRlKHJlbW92ZVNlbGVjdGVkSW1hZ2VBY3Rpb24oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKGUud2hpY2ggPT09IDM3KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge2NvbHVtbiwgY2VsbH0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlvdXMtc2VsZWN0ZWQnKS5kYXRhc2V0O1xuICAgICAgICAgICAgICAgIHN0b3JlLnVwZGF0ZVN0YXRlKHNlbGVjdEltYWdlQWN0aW9uKGNvbHVtbiwgY2VsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGUud2hpY2ggPT09IDM5KSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge2NvbHVtbiwgY2VsbH0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1zZWxlY3RlZCcpLmRhdGFzZXQ7XG4gICAgICAgICAgICAgICAgc3RvcmUudXBkYXRlU3RhdGUoc2VsZWN0SW1hZ2VBY3Rpb24oY29sdW1uLCBjZWxsKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYoZS53aGljaCA9PT0gMjcpIHtcbiAgICAgICAgICAgICAgICBzdG9yZS51cGRhdGVTdGF0ZShyZW1vdmVTZWxlY3RlZEltYWdlQWN0aW9uKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkb21TZWxlY3RvcnMuc2VsZWN0ZWRJbWFnZSkuaW5uZXJIVE1MID0gdGVtcGxhdGUodGhpcy5nZXRTdGF0ZSgpKTtcbiAgICBiaW5kRXZlbnRzKHRoaXMpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvc2VsZWN0ZWRJbWFnZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBkb21TZWxlY3RvcnMgfSBmcm9tICcuLi9jb25maWcnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0ZW1wbGF0ZSBzdHJpbmcgYmFzZWQgb24gZXJyb3IgdmFsdWVzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgLSBUaGUgY3VycmVudCBhcHAgc3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlKHN0YXRlKSB7XG4gICAgaWYoc3RhdGUuZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmVycm9ycy5yZWR1Y2UoKHByZXYsIGVycm9yKSA9PiBgJHtwcmV2fTxoMz4ke2Vycm9yfTwvaDM+YCwgYGApO1xuICAgIH1cbiAgICByZXR1cm4gYGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblN0YXRlQ2hhbmdlKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZG9tU2VsZWN0b3JzLmVycm9ycykuaW5uZXJIVE1MID0gdGVtcGxhdGUodGhpcy5nZXRTdGF0ZSgpKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvZXJyb3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGRvbVNlbGVjdG9ycyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBwZXJmb3JtSW1ndXJTZWFyY2ggfSBmcm9tICcuLi9yZXF1ZXN0JztcbmltcG9ydCB7IHNhdmVSZXNwb25zZUFjdGlvbiwgbm9SZXNwb25zZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG4vKipcbiAqIEJpbmQgZXZlbnRzIHRvIHRoZSBzZWFyY2ggZm9ybS4gQmluZHMgYSBzdWJtaXQgaGFuZGxlciB0byB0aGUgZm9ybS4gV2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgYSByZXF1ZXN0IFxuICogaXMgbWFkZSB3aXRoIHRoZSBlbnRlcmVkIHNlYXJjaCB0ZXJtLiBUaGUgcmVzdWx0cyBhcmUgdGhlbiBhZGRlZCB0byB0aGUgc3RvcmUuIElmIHRoZSByZXNwb25zZSBkb2VzIG5vdCBjb250YWluIGFueVxuICogcmVzdWx0cyB0aGVuIGFuIGVycm9yIGFjdGlvbiBpcyBkaXNwYXRjaGVkLlxuICogQHBhcmFtIHtPYmplY3R9IHN0b3JlIC0gVGhlIGN1cnJlbnQgYXBwIHN0b3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kRXZlbnRzKHN0b3JlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkb21TZWxlY3RvcnMuc2VhcmNoRm9ybSkuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBzZWFyY2hUZXJtID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBwZXJmb3JtSW1ndXJTZWFyY2goc2VhcmNoVGVybSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZS51cGRhdGVTdGF0ZShzYXZlUmVzcG9uc2VBY3Rpb24ocmVzcG9uc2UsIHNlYXJjaFRlcm0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUudXBkYXRlU3RhdGUobm9SZXNwb25zZUFjdGlvbigpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblN0YXRlQ2hhbmdlKCkge1xuICAgIGJpbmRFdmVudHModGhpcyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tcG9uZW50cy9zZWFyY2hGb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=