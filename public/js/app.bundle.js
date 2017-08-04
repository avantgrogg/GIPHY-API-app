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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_grid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_selectedImage__ = __webpack_require__(6);






const store = Object(__WEBPACK_IMPORTED_MODULE_1__state__["a" /* generateStore */])(__WEBPACK_IMPORTED_MODULE_2__config__["f" /* initialState */]);
store.subscribe(__WEBPACK_IMPORTED_MODULE_3__components_grid__["a" /* onStateChange */].bind(store));
store.subscribe(__WEBPACK_IMPORTED_MODULE_4__components_selectedImage__["a" /* onStateChange */].bind(store));

window.__store = store;

document.querySelector('#search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = e.target.querySelector('input').value;
    Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* performImgurSearch */])(searchTerm, store.updateState)
})



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export generateRequest */
/* harmony export (immutable) */ __webpack_exports__["a"] = performImgurSearch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(3);



function generateRequest(searchValue, offset) {
    return `${__WEBPACK_IMPORTED_MODULE_0__config__["i" /* protocol */]}${__WEBPACK_IMPORTED_MODULE_0__config__["e" /* host */]}${__WEBPACK_IMPORTED_MODULE_0__config__["h" /* path */]}?api_key=${__WEBPACK_IMPORTED_MODULE_0__config__["a" /* api_key */]}&limit=${__WEBPACK_IMPORTED_MODULE_0__config__["j" /* resultLimit */]}&offset=${offset}&q=${searchValue}`;
}

function performImgurSearch(searchValue, dispatch, offset = __WEBPACK_IMPORTED_MODULE_0__config__["b" /* defaultOffset */]) {
    const request = generateRequest(searchValue, offset);
    fetch(request, __WEBPACK_IMPORTED_MODULE_0__config__["g" /* myInit */])
      .then((response) => response.json())
      .then((response) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions__["e" /* saveResponseAction */])(response)));
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//giphy api
const api_key = '0c5938d404ba497c81a5986e8ee64903';
/* harmony export (immutable) */ __webpack_exports__["a"] = api_key;

const protocol = 'http://';
/* harmony export (immutable) */ __webpack_exports__["i"] = protocol;

const host = 'api.giphy.com';
/* harmony export (immutable) */ __webpack_exports__["e"] = host;

const path = '/v1/gifs/search';
/* harmony export (immutable) */ __webpack_exports__["h"] = path;

const resultLimit = '25';
/* harmony export (immutable) */ __webpack_exports__["j"] = resultLimit;

const defaultOffset = '0';
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultOffset;


const myInit = { method: 'GET' };
/* harmony export (immutable) */ __webpack_exports__["g"] = myInit;


const initialState = {
    grid: [],
    selectedImage: {},
    meta: {}
}
/* harmony export (immutable) */ __webpack_exports__["f"] = initialState;


const domSelectors = {
    selectedImage: '#selected-image',
    grid: '#grid',
    searchForm: '#search-form',
    lightBox: '.lightbox',
    lightboxShown: '.lightbox.show'
}
/* harmony export (immutable) */ __webpack_exports__["d"] = domSelectors;


const display = {
    imagesPerColumn: 4
}
/* harmony export (immutable) */ __webpack_exports__["c"] = display;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = saveResponseAction;
/* harmony export (immutable) */ __webpack_exports__["f"] = selectImageAction;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeSelectedImageAction;
const SAVE_RESPONSE_ACTION = 'SAVE_RESPONSE_ACTION';
/* harmony export (immutable) */ __webpack_exports__["b"] = SAVE_RESPONSE_ACTION;

const SELECT_IMAGE_ACTION = 'SELECT_IMAGE_ACTION';
/* harmony export (immutable) */ __webpack_exports__["c"] = SELECT_IMAGE_ACTION;

const REMOVE_SELECTED_IMAGE_ACTION = 'REMOVE_SELECTED_IMAGE_ACTION';
/* harmony export (immutable) */ __webpack_exports__["a"] = REMOVE_SELECTED_IMAGE_ACTION;


function saveResponseAction(response) {
    return {
        type: SAVE_RESPONSE_ACTION,
        payload: {
            response
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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export responseWithColumns */
/* unused harmony export getTotalColumns */
/* unused harmony export adaptResponse */
/* unused harmony export lookupImage */
/* unused harmony export incrementSelected */
/* harmony export (immutable) */ __webpack_exports__["a"] = generateStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(3);


function responseWithColumns(columns, response) {
    const columnsArr = new Array(columns).fill(0);
    return columnsArr.map((val, idx) => {
        return [...response.slice(idx*4,idx*4+4)]
    });
}

function getTotalColumns(totalImages) {
    return Math.floor(totalImages/4) + totalImages%4;
}

function adaptResponse(response) {
    const adaptedResponse = response.map((image) => Object.assign({}, image.images, {slug: image.slug}));
    const totalImages = adaptedResponse.length;
    const columns = getTotalColumns(totalImages)
    return responseWithColumns(columns, adaptedResponse);
}

function lookupImage({column, cell}, gridValues) {
    return Object.assign({}, gridValues[column][cell]);
}

function incrementSelected({column, cell}) {

}
/**
 * Updates the apps state based on the type of update that just occured.
 * @param {Object} state - The apps current state
 * @param {Object} update - The update describing the change to the state
 */
function updateGrid(state, update) {
    if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* SAVE_RESPONSE_ACTION */]) {
        return adaptResponse(update.payload.response.data);
    }
    return state;
}

function updateSelectedImage(state, update, gridValues) {
    if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SELECT_IMAGE_ACTION */]) {
        return lookupImage(update.payload, gridValues);
    } else if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* REMOVE_SELECTED_IMAGE_ACTION */]) {
        return {};
    }
    return state;
}

function updateMeta(state, update) {
    if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* SAVE_RESPONSE_ACTION */]) {
        return Object.assign({}, update.payload.response.meta, update.payload.response.pagination, {
            totalColumns: getTotalColumns(update.payload.response.data.length)
        });
    } else if(update.type === __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SELECT_IMAGE_ACTION */]) {
        return Object.assign({}, state, {
            selected: update.payload
        });
    }

    return state;
}
/**
 * Update all of the state
 * @param {Object} state - The current state of the app
 * @param {Object} update - The description of the state change
 */
function determineStateChange(state, update) {
    return Object.assign({}, {
        grid: updateGrid(state.grid, update),
        selectedImage: updateSelectedImage(state.selectedImage, update, state.grid),
        meta: updateMeta(state.meta, update)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(3);


function cell(image, cell) {
    return `<img class='result-image' data-cell='${cell}' src='${image.downsized_large.url}'/>`;
}

function columns(images, column) {
    return `<div class='column' data-column='${column}'>${images.reduce((prev, img, idx) => prev+cell(img, idx), '')}</div>`;
}

function template(state) {
    if(state.grid.length > 0) {
        return state.grid.reduce((prev, images, idx) => `${prev+columns(images, idx)}`, ``);
    }
    return ``;
}

function bindEvents(store) {
    [...document.querySelectorAll('.result-image')].map((el) => el.addEventListener('click', (e) => {
        const column = e.target.parentElement.dataset["column"];
        const cell = e.target.dataset["cell"];
        store.updateState(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["f" /* selectImageAction */])(column, cell));
    }))
}

function onStateChange() {
    document.querySelector('#grid').innerHTML = template(this.getState());
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(2);



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
                    <div class="contents"
                        <h1 class="previous-selected" data-column="${prevColumn}" data-cell="${prevCell}">Prev</h1>
                        <img src="${state.selectedImage.downsized_large.url}"/>
                        <h1 class="next-selected" data-column="${nextColumn}" data-cell="${nextCell}">Next</h1>
                    </div>
                </div>`
    }
    return `<div class="lightbox"></div>`;
}

function bindEvents(store) {
    const lightbox = document.querySelector(__WEBPACK_IMPORTED_MODULE_1__config__["d" /* domSelectors */].lightboxShown);
    if(lightbox) {
        lightbox.addEventListener('click', (e) => {
            if(e.target.classList.contains('previous-selected') || e.target.classList.contains('next-selected')) {
                const column = e.target.dataset['column'];
                const cell = e.target.dataset['cell'];
                store.updateState(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["f" /* selectImageAction */])(column, cell));
            }
            else if(e.target === e.currentTarget) {
                store.updateState(Object(__WEBPACK_IMPORTED_MODULE_0__actions__["d" /* removeSelectedImageAction */])());
            }
        })
    }
}

function onStateChange() {
    document.querySelector(__WEBPACK_IMPORTED_MODULE_1__config__["d" /* domSelectors */].selectedImage).innerHTML = template(this.getState());
    bindEvents(this);
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTYwMzBiOWI4NGE4YTdhNTlmODYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VsZWN0ZWRJbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0Q2QjtBQUNMO0FBQ0Q7QUFDc0I7QUFDUzs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2hCMkU7QUFDL0M7O0FBRTdCO0FBQ0EsY0FBYywwREFBUyxFQUFFLHNEQUFLLEVBQUUsc0RBQUssV0FBVyx5REFBUSxTQUFTLDZEQUFZLFVBQVUsT0FBTyxLQUFLLFlBQVk7QUFDL0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNjAzMGI5Yjg0YThhN2E1OWY4NiIsImltcG9ydCB7IHBlcmZvcm1JbWd1clNlYXJjaCB9IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQgeyBnZW5lcmF0ZVN0b3JlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBpbml0aWFsU3RhdGUgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBvblN0YXRlQ2hhbmdlIGFzIGdyaWRPblN0YXRlQ2hhbmdlIH0gZnJvbSAnLi9jb21wb25lbnRzL2dyaWQnO1xuaW1wb3J0IHsgb25TdGF0ZUNoYW5nZSBhcyBzZWxlY3RlZEltYWdlT25TdGF0ZUNoYW5nZSB9IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3RlZEltYWdlJztcblxuY29uc3Qgc3RvcmUgPSBnZW5lcmF0ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XG5zdG9yZS5zdWJzY3JpYmUoZ3JpZE9uU3RhdGVDaGFuZ2UuYmluZChzdG9yZSkpO1xuc3RvcmUuc3Vic2NyaWJlKHNlbGVjdGVkSW1hZ2VPblN0YXRlQ2hhbmdlLmJpbmQoc3RvcmUpKTtcblxud2luZG93Ll9fc3RvcmUgPSBzdG9yZTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc2VhcmNoVGVybSA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XG4gICAgcGVyZm9ybUltZ3VyU2VhcmNoKHNlYXJjaFRlcm0sIHN0b3JlLnVwZGF0ZVN0YXRlKVxufSlcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgYXBpX2tleSwgcHJvdG9jb2wsIGhvc3QsIHBhdGgsIG15SW5pdCwgcmVzdWx0TGltaXQsIGRlZmF1bHRPZmZzZXQgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBzYXZlUmVzcG9uc2VBY3Rpb24gfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSZXF1ZXN0KHNlYXJjaFZhbHVlLCBvZmZzZXQpIHtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aH0/YXBpX2tleT0ke2FwaV9rZXl9JmxpbWl0PSR7cmVzdWx0TGltaXR9Jm9mZnNldD0ke29mZnNldH0mcT0ke3NlYXJjaFZhbHVlfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJmb3JtSW1ndXJTZWFyY2goc2VhcmNoVmFsdWUsIGRpc3BhdGNoLCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGdlbmVyYXRlUmVxdWVzdChzZWFyY2hWYWx1ZSwgb2Zmc2V0KTtcbiAgICBmZXRjaChyZXF1ZXN0LCBteUluaXQpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gZGlzcGF0Y2goc2F2ZVJlc3BvbnNlQWN0aW9uKHJlc3BvbnNlKSkpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3JlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy9naXBoeSBhcGlcbmV4cG9ydCBjb25zdCBhcGlfa2V5ID0gJzBjNTkzOGQ0MDRiYTQ5N2M4MWE1OTg2ZThlZTY0OTAzJztcbmV4cG9ydCBjb25zdCBwcm90b2NvbCA9ICdodHRwOi8vJztcbmV4cG9ydCBjb25zdCBob3N0ID0gJ2FwaS5naXBoeS5jb20nO1xuZXhwb3J0IGNvbnN0IHBhdGggPSAnL3YxL2dpZnMvc2VhcmNoJztcbmV4cG9ydCBjb25zdCByZXN1bHRMaW1pdCA9ICcyNSc7XG5leHBvcnQgY29uc3QgZGVmYXVsdE9mZnNldCA9ICcwJztcblxuZXhwb3J0IGNvbnN0IG15SW5pdCA9IHsgbWV0aG9kOiAnR0VUJyB9O1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGdyaWQ6IFtdLFxuICAgIHNlbGVjdGVkSW1hZ2U6IHt9LFxuICAgIG1ldGE6IHt9XG59XG5cbmV4cG9ydCBjb25zdCBkb21TZWxlY3RvcnMgPSB7XG4gICAgc2VsZWN0ZWRJbWFnZTogJyNzZWxlY3RlZC1pbWFnZScsXG4gICAgZ3JpZDogJyNncmlkJyxcbiAgICBzZWFyY2hGb3JtOiAnI3NlYXJjaC1mb3JtJyxcbiAgICBsaWdodEJveDogJy5saWdodGJveCcsXG4gICAgbGlnaHRib3hTaG93bjogJy5saWdodGJveC5zaG93J1xufVxuXG5leHBvcnQgY29uc3QgZGlzcGxheSA9IHtcbiAgICBpbWFnZXNQZXJDb2x1bW46IDRcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFNBVkVfUkVTUE9OU0VfQUNUSU9OID0gJ1NBVkVfUkVTUE9OU0VfQUNUSU9OJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RfSU1BR0VfQUNUSU9OID0gJ1NFTEVDVF9JTUFHRV9BQ1RJT04nO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9TRUxFQ1RFRF9JTUFHRV9BQ1RJT04gPSAnUkVNT1ZFX1NFTEVDVEVEX0lNQUdFX0FDVElPTic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUmVzcG9uc2VBY3Rpb24ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTQVZFX1JFU1BPTlNFX0FDVElPTixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEltYWdlQWN0aW9uKGNvbHVtbiwgY2VsbCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFNFTEVDVF9JTUFHRV9BQ1RJT04sXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGNvbHVtbjogTnVtYmVyKGNvbHVtbiksXG4gICAgICAgICAgICBjZWxsOiBOdW1iZXIoY2VsbClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNlbGVjdGVkSW1hZ2VBY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUkVNT1ZFX1NFTEVDVEVEX0lNQUdFX0FDVElPTlxuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2FjdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU0FWRV9SRVNQT05TRV9BQ1RJT04sIFNFTEVDVF9JTUFHRV9BQ1RJT04sIFJFTU9WRV9TRUxFQ1RFRF9JTUFHRV9BQ1RJT04gfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2VXaXRoQ29sdW1ucyhjb2x1bW5zLCByZXNwb25zZSkge1xuICAgIGNvbnN0IGNvbHVtbnNBcnIgPSBuZXcgQXJyYXkoY29sdW1ucykuZmlsbCgwKTtcbiAgICByZXR1cm4gY29sdW1uc0Fyci5tYXAoKHZhbCwgaWR4KSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4ucmVzcG9uc2Uuc2xpY2UoaWR4KjQsaWR4KjQrNCldXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbENvbHVtbnModG90YWxJbWFnZXMpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0b3RhbEltYWdlcy80KSArIHRvdGFsSW1hZ2VzJTQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGFwdFJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgYWRhcHRlZFJlc3BvbnNlID0gcmVzcG9uc2UubWFwKChpbWFnZSkgPT4gT2JqZWN0LmFzc2lnbih7fSwgaW1hZ2UuaW1hZ2VzLCB7c2x1ZzogaW1hZ2Uuc2x1Z30pKTtcbiAgICBjb25zdCB0b3RhbEltYWdlcyA9IGFkYXB0ZWRSZXNwb25zZS5sZW5ndGg7XG4gICAgY29uc3QgY29sdW1ucyA9IGdldFRvdGFsQ29sdW1ucyh0b3RhbEltYWdlcylcbiAgICByZXR1cm4gcmVzcG9uc2VXaXRoQ29sdW1ucyhjb2x1bW5zLCBhZGFwdGVkUmVzcG9uc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwSW1hZ2Uoe2NvbHVtbiwgY2VsbH0sIGdyaWRWYWx1ZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZ3JpZFZhbHVlc1tjb2x1bW5dW2NlbGxdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY3JlbWVudFNlbGVjdGVkKHtjb2x1bW4sIGNlbGx9KSB7XG5cbn1cbi8qKlxuICogVXBkYXRlcyB0aGUgYXBwcyBzdGF0ZSBiYXNlZCBvbiB0aGUgdHlwZSBvZiB1cGRhdGUgdGhhdCBqdXN0IG9jY3VyZWQuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgLSBUaGUgYXBwcyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlIC0gVGhlIHVwZGF0ZSBkZXNjcmliaW5nIHRoZSBjaGFuZ2UgdG8gdGhlIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUdyaWQoc3RhdGUsIHVwZGF0ZSkge1xuICAgIGlmKHVwZGF0ZS50eXBlID09PSBTQVZFX1JFU1BPTlNFX0FDVElPTikge1xuICAgICAgICByZXR1cm4gYWRhcHRSZXNwb25zZSh1cGRhdGUucGF5bG9hZC5yZXNwb25zZS5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTZWxlY3RlZEltYWdlKHN0YXRlLCB1cGRhdGUsIGdyaWRWYWx1ZXMpIHtcbiAgICBpZih1cGRhdGUudHlwZSA9PT0gU0VMRUNUX0lNQUdFX0FDVElPTikge1xuICAgICAgICByZXR1cm4gbG9va3VwSW1hZ2UodXBkYXRlLnBheWxvYWQsIGdyaWRWYWx1ZXMpO1xuICAgIH0gZWxzZSBpZih1cGRhdGUudHlwZSA9PT0gUkVNT1ZFX1NFTEVDVEVEX0lNQUdFX0FDVElPTikge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTWV0YShzdGF0ZSwgdXBkYXRlKSB7XG4gICAgaWYodXBkYXRlLnR5cGUgPT09IFNBVkVfUkVTUE9OU0VfQUNUSU9OKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB1cGRhdGUucGF5bG9hZC5yZXNwb25zZS5tZXRhLCB1cGRhdGUucGF5bG9hZC5yZXNwb25zZS5wYWdpbmF0aW9uLCB7XG4gICAgICAgICAgICB0b3RhbENvbHVtbnM6IGdldFRvdGFsQ29sdW1ucyh1cGRhdGUucGF5bG9hZC5yZXNwb25zZS5kYXRhLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmKHVwZGF0ZS50eXBlID09PSBTRUxFQ1RfSU1BR0VfQUNUSU9OKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IHVwZGF0ZS5wYXlsb2FkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZTtcbn1cbi8qKlxuICogVXBkYXRlIGFsbCBvZiB0aGUgc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSAtIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBhcHBcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGUgLSBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIHN0YXRlIGNoYW5nZVxuICovXG5mdW5jdGlvbiBkZXRlcm1pbmVTdGF0ZUNoYW5nZShzdGF0ZSwgdXBkYXRlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgZ3JpZDogdXBkYXRlR3JpZChzdGF0ZS5ncmlkLCB1cGRhdGUpLFxuICAgICAgICBzZWxlY3RlZEltYWdlOiB1cGRhdGVTZWxlY3RlZEltYWdlKHN0YXRlLnNlbGVjdGVkSW1hZ2UsIHVwZGF0ZSwgc3RhdGUuZ3JpZCksXG4gICAgICAgIG1ldGE6IHVwZGF0ZU1ldGEoc3RhdGUubWV0YSwgdXBkYXRlKVxuICAgIH0pO1xufVxuXG4vKipcbiAqIE1hcHMgb3ZlciBhbGwgc3Vic2NyaWJlZCBjYWxsYmFja3MgYW5kIGV4ZWN1dGVzIHRoZW1cbiAqIEBwYXJhbSB7QXJyYXl9IHN1YnNjcmliZXJzIC0gQSBsaXN0IG9mIGNhbGxiYWNrIGZuc1xuICovXG5mdW5jdGlvbiBub3RpZnlTdWJzY3JpYmVycyhzdWJzY3JpYmVycywgc3RhdGUpIHtcbiAgICBzdWJzY3JpYmVycy5tYXAoKHN1YnNjcmliZXIpID0+IHN1YnNjcmliZXIoc3RhdGUpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHN0b3JlIG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IGluaXRpYWxTdGF0ZSAtIFN0YXRlIHVzZWQgdG8gaHlkcmF0ZSB0aGUgc3RvcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gQWRkaW9uYWwgZGF0YSB0byBiZSBhdHRhY2hlZCB0byB0aGUgc3RvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU3RvcmUoaW5pdGlhbFN0YXRlID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICBsZXQgc3Vic2NyaWJlcnMgPSBbXTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBnZXRTdGF0ZTogKCkgPT4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLFxuICAgICAgICB1cGRhdGVTdGF0ZTogKHVwZGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUgPSBkZXRlcm1pbmVTdGF0ZUNoYW5nZShzdGF0ZSwgdXBkYXRlKTtcbiAgICAgICAgICAgIG5vdGlmeVN1YnNjcmliZXJzKHN1YnNjcmliZXJzLCBzdGF0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1YnNjcmliZTogKHN1YnNjcmliZXIpID0+IHN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlciksXG4gICAgfSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9zdGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBzZWxlY3RJbWFnZUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2VsbChpbWFnZSwgY2VsbCkge1xuICAgIHJldHVybiBgPGltZyBjbGFzcz0ncmVzdWx0LWltYWdlJyBkYXRhLWNlbGw9JyR7Y2VsbH0nIHNyYz0nJHtpbWFnZS5kb3duc2l6ZWRfbGFyZ2UudXJsfScvPmA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb2x1bW5zKGltYWdlcywgY29sdW1uKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPSdjb2x1bW4nIGRhdGEtY29sdW1uPScke2NvbHVtbn0nPiR7aW1hZ2VzLnJlZHVjZSgocHJldiwgaW1nLCBpZHgpID0+IHByZXYrY2VsbChpbWcsIGlkeCksICcnKX08L2Rpdj5gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUoc3RhdGUpIHtcbiAgICBpZihzdGF0ZS5ncmlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmdyaWQucmVkdWNlKChwcmV2LCBpbWFnZXMsIGlkeCkgPT4gYCR7cHJlditjb2x1bW5zKGltYWdlcywgaWR4KX1gLCBgYCk7XG4gICAgfVxuICAgIHJldHVybiBgYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRFdmVudHMoc3RvcmUpIHtcbiAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3VsdC1pbWFnZScpXS5tYXAoKGVsKSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldFtcImNvbHVtblwiXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0LmRhdGFzZXRbXCJjZWxsXCJdO1xuICAgICAgICBzdG9yZS51cGRhdGVTdGF0ZShzZWxlY3RJbWFnZUFjdGlvbihjb2x1bW4sIGNlbGwpKTtcbiAgICB9KSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uU3RhdGVDaGFuZ2UoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dyaWQnKS5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh0aGlzLmdldFN0YXRlKCkpO1xuICAgIGJpbmRFdmVudHModGhpcyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL2dyaWQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgc2VsZWN0SW1hZ2VBY3Rpb24sIHJlbW92ZVNlbGVjdGVkSW1hZ2VBY3Rpb24sIHNlbGVjdEltYWdlQWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBkb21TZWxlY3RvcnMsIGRpc3BsYXkgfSBmcm9tICcuLi9jb25maWcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dEltYWdlKHtzZWxlY3RlZCwgdG90YWxDb2x1bW5zLCBjb3VudH0pIHtcbiAgICBpZihzZWxlY3RlZC5jb2x1bW4gPT09IHRvdGFsQ29sdW1ucy0xICYmIHNlbGVjdGVkLmNlbGwgPT09IGNvdW50IC0gMSAtICgodG90YWxDb2x1bW5zLTEpKmRpc3BsYXkuaW1hZ2VzUGVyQ29sdW1uKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV4dENlbGw6IDAsXG4gICAgICAgICAgICBuZXh0Q29sdW1uOiAwXG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYoc2VsZWN0ZWQuY2VsbCA9PT0gZGlzcGxheS5pbWFnZXNQZXJDb2x1bW4tMSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV4dENlbGw6IDAsXG4gICAgICAgICAgICBuZXh0Q29sdW1uOiBzZWxlY3RlZC5jb2x1bW4rMVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5leHRDZWxsOiBzZWxlY3RlZC5jZWxsKzEsXG4gICAgICAgICAgICBuZXh0Q29sdW1uOiBzZWxlY3RlZC5jb2x1bW5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZJbWFnZSh7c2VsZWN0ZWQsIHRvdGFsQ29sdW1ucywgY291bnR9KSB7XG4gICAgaWYoc2VsZWN0ZWQuY29sdW1uID09PSAwICYmIHNlbGVjdGVkLmNlbGwgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZXZDZWxsOiBjb3VudCAtIDEgLSAoKHRvdGFsQ29sdW1ucy0xKSpkaXNwbGF5LmltYWdlc1BlckNvbHVtbiksXG4gICAgICAgICAgICBwcmV2Q29sdW1uOiB0b3RhbENvbHVtbnMtMVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmKHNlbGVjdGVkLmNlbGwgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZXZDZWxsOiBkaXNwbGF5LmltYWdlc1BlckNvbHVtbiAtIDEsXG4gICAgICAgICAgICBwcmV2Q29sdW1uOnNlbGVjdGVkLmNvbHVtbiAtIDFcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcmV2Q2VsbDogc2VsZWN0ZWQuY2VsbCAtIDEsXG4gICAgICAgICAgICBwcmV2Q29sdW1uOiBzZWxlY3RlZC5jb2x1bW5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlKHN0YXRlKSB7XG4gICAgaWYoT2JqZWN0LmtleXMoc3RhdGUuc2VsZWN0ZWRJbWFnZSkubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB7cHJldkNlbGwsIHByZXZDb2x1bW59ID0gZ2V0UHJldkltYWdlKHN0YXRlLm1ldGEpO1xuICAgICAgICBjb25zdCB7bmV4dENlbGwsIG5leHRDb2x1bW59ID0gZ2V0TmV4dEltYWdlKHN0YXRlLm1ldGEpO1xuXG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImxpZ2h0Ym94IHNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInByZXZpb3VzLXNlbGVjdGVkXCIgZGF0YS1jb2x1bW49XCIke3ByZXZDb2x1bW59XCIgZGF0YS1jZWxsPVwiJHtwcmV2Q2VsbH1cIj5QcmV2PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzdGF0ZS5zZWxlY3RlZEltYWdlLmRvd25zaXplZF9sYXJnZS51cmx9XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibmV4dC1zZWxlY3RlZFwiIGRhdGEtY29sdW1uPVwiJHtuZXh0Q29sdW1ufVwiIGRhdGEtY2VsbD1cIiR7bmV4dENlbGx9XCI+TmV4dDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmBcbiAgICB9XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibGlnaHRib3hcIj48L2Rpdj5gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZEV2ZW50cyhzdG9yZSkge1xuICAgIGNvbnN0IGxpZ2h0Ym94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihkb21TZWxlY3RvcnMubGlnaHRib3hTaG93bik7XG4gICAgaWYobGlnaHRib3gpIHtcbiAgICAgICAgbGlnaHRib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmV2aW91cy1zZWxlY3RlZCcpIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmV4dC1zZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0gZS50YXJnZXQuZGF0YXNldFsnY29sdW1uJ107XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0LmRhdGFzZXRbJ2NlbGwnXTtcbiAgICAgICAgICAgICAgICBzdG9yZS51cGRhdGVTdGF0ZShzZWxlY3RJbWFnZUFjdGlvbihjb2x1bW4sIGNlbGwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgIHN0b3JlLnVwZGF0ZVN0YXRlKHJlbW92ZVNlbGVjdGVkSW1hZ2VBY3Rpb24oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25TdGF0ZUNoYW5nZSgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRvbVNlbGVjdG9ycy5zZWxlY3RlZEltYWdlKS5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh0aGlzLmdldFN0YXRlKCkpO1xuICAgIGJpbmRFdmVudHModGhpcyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvY29tcG9uZW50cy9zZWxlY3RlZEltYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=