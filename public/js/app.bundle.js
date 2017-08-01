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


document.querySelector('#search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = e.target.querySelector('input').value;
    Object(__WEBPACK_IMPORTED_MODULE_0__request__["a" /* performImgurSearch */])(searchTerm, (value) => console.log(value))
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
    return `${__WEBPACK_IMPORTED_MODULE_0__config__["f" /* protocol */]}${__WEBPACK_IMPORTED_MODULE_0__config__["c" /* host */]}${__WEBPACK_IMPORTED_MODULE_0__config__["e" /* path */]}?api_key=${__WEBPACK_IMPORTED_MODULE_0__config__["a" /* api_key */]}&limit=${__WEBPACK_IMPORTED_MODULE_0__config__["g" /* resultLimit */]}&offset=${offset}&q=${searchValue}`;
}

function performImgurSearch(searchValue, dispatch, offset = __WEBPACK_IMPORTED_MODULE_0__config__["b" /* defaultOffset */]) {
    const request = generateRequest(searchValue, offset);
    fetch(request, __WEBPACK_IMPORTED_MODULE_0__config__["d" /* myInit */])
      .then((response) => response.json())
      .then((response) => dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions__["a" /* saveResponseAction */])(response)));
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//giphy api
const api_key = '0c5938d404ba497c81a5986e8ee64903';
/* harmony export (immutable) */ __webpack_exports__["a"] = api_key;

const protocol = 'http://';
/* harmony export (immutable) */ __webpack_exports__["f"] = protocol;

const host = 'api.giphy.com';
/* harmony export (immutable) */ __webpack_exports__["c"] = host;

const path = '/v1/gifs/search';
/* harmony export (immutable) */ __webpack_exports__["e"] = path;

const resultLimit = '25';
/* harmony export (immutable) */ __webpack_exports__["g"] = resultLimit;

const defaultOffset = '0';
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultOffset;


const myInit = { method: 'GET' };
/* harmony export (immutable) */ __webpack_exports__["d"] = myInit;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = saveResponseAction;
const SAVE_RESPONSE_ACTION = 'SAVE_RESPONSE_ACTION';
/* unused harmony export SAVE_RESPONSE_ACTION */

function saveResponseAction(response) {
    return {
        type: SAVE_RESPONSE_ACTION,
        payload: {
            response
        }
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTM0YmE2N2YyYTdkNDJkNjBmOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FjdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0Q2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEM7Ozs7Ozs7Ozs7O0FDTjJFO0FBQy9DOztBQUU3QjtBQUNBLGNBQWMsMERBQVMsRUFBRSxzREFBSyxFQUFFLHNEQUFLLFdBQVcseURBQVEsU0FBUyw2REFBWSxVQUFVLE9BQU8sS0FBSyxZQUFZO0FBQy9HOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDWkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRUEsZ0JBQXVCLGlCOzs7Ozs7Ozs7O0FDUnZCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTM0YmE2N2YyYTdkNDJkNjBmOGQiLCJpbXBvcnQgeyBwZXJmb3JtSW1ndXJTZWFyY2ggfSBmcm9tICcuL3JlcXVlc3QnO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcbiAgICBwZXJmb3JtSW1ndXJTZWFyY2goc2VhcmNoVGVybSwgKHZhbHVlKSA9PiBjb25zb2xlLmxvZyh2YWx1ZSkpXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGFwaV9rZXksIHByb3RvY29sLCBob3N0LCBwYXRoLCBteUluaXQsIHJlc3VsdExpbWl0LCBkZWZhdWx0T2Zmc2V0IH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgc2F2ZVJlc3BvbnNlQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmVxdWVzdChzZWFyY2hWYWx1ZSwgb2Zmc2V0KSB7XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGh9P2FwaV9rZXk9JHthcGlfa2V5fSZsaW1pdD0ke3Jlc3VsdExpbWl0fSZvZmZzZXQ9JHtvZmZzZXR9JnE9JHtzZWFyY2hWYWx1ZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyZm9ybUltZ3VyU2VhcmNoKHNlYXJjaFZhbHVlLCBkaXNwYXRjaCwgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBnZW5lcmF0ZVJlcXVlc3Qoc2VhcmNoVmFsdWUsIG9mZnNldCk7XG4gICAgZmV0Y2gocmVxdWVzdCwgbXlJbml0KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IGRpc3BhdGNoKHNhdmVSZXNwb25zZUFjdGlvbihyZXNwb25zZSkpKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9yZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vZ2lwaHkgYXBpXG5leHBvcnQgY29uc3QgYXBpX2tleSA9ICcwYzU5MzhkNDA0YmE0OTdjODFhNTk4NmU4ZWU2NDkwMyc7XG5leHBvcnQgY29uc3QgcHJvdG9jb2wgPSAnaHR0cDovLyc7XG5leHBvcnQgY29uc3QgaG9zdCA9ICdhcGkuZ2lwaHkuY29tJztcbmV4cG9ydCBjb25zdCBwYXRoID0gJy92MS9naWZzL3NlYXJjaCc7XG5leHBvcnQgY29uc3QgcmVzdWx0TGltaXQgPSAnMjUnO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRPZmZzZXQgPSAnMCc7XG5cbmV4cG9ydCBjb25zdCBteUluaXQgPSB7IG1ldGhvZDogJ0dFVCcgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9jb25maWcuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFNBVkVfUkVTUE9OU0VfQUNUSU9OID0gJ1NBVkVfUkVTUE9OU0VfQUNUSU9OJztcbmV4cG9ydCBmdW5jdGlvbiBzYXZlUmVzcG9uc2VBY3Rpb24ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTQVZFX1JFU1BPTlNFX0FDVElPTixcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9hY3Rpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=