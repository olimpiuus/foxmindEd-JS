/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./sass/style.sass */ "./src/sass/style.sass"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/moon-waning-crescent.svg */ "./src/assets/img/moon-waning-crescent.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width/ninitial-scale=1.0\">\n    <title>Country</title>\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n\n</head>\n\n<body>\n    <header class=\"header\">\n        <h1 class=\"header__title\">Where in the world?</h1>\n        <div class=\"header__btn-mode-block\">\n            <img class=\"header__btn-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n            <button class=\"header__btn-mode\">Dark Mode</button>\n        </div>\n    </header>\n    <main class=\"countries__container\">\n\n        <form action=\"\" class=\"countries__search-form search\">\n            <input type=\"search\" class=\"search__input\" id=\"country-search\" placeholder=\"Search for a country...\">\n            <select class=\"search__select-region\" name=\"regions\" id=\"sel1\">\n                <option value=\"All\">All</option>\n                <option value=\"Africa\">Africa</option>\n                <option value=\"Americas\">Americas</option>\n                <option value=\"Asia\">Asia</option>\n                <option value=\"Europe\">Europe</option>\n                <option value=\"Oceania\">Oceania</option>\n            </select>\n        </form>\n        \n        <ul class=\"countries__list\">\n            <li class=\"countries__country-item country\">\n                <!-- <img src=\"\" alt=\"\" class=\"country__flag\"> -->\n                <div class=\"country__description\">\n                    <h3 class=\"country__title\">Ukraine</h3>\n                    <p class=\"country__info\"><b>Population:</b> 27,657,155</p>\n                    <p class=\"country__info\"><b>Region:</b> Europe</p>\n                    <p class=\"country__info\"><b>Capital:</b> Kiev</p>\n                </div>\n            </li>\n            <li class=\"countries__country-item country\">\n                <!-- <img src=\"\" alt=\"\" class=\"country__flag\"> -->\n                <div class=\"country__description\">\n                    <h3 class=\"country__title\">Ukraine</h3>\n                    <p class=\"country__info\"><b>Population:</b> 27,657,155</p>\n                    <p class=\"country__info\"><b>Region:</b> Europe</p>\n                    <p class=\"country__info\"><b>Capital:</b> Kiev</p>\n                </div>\n            </li>\n            <li class=\"countries__country-item country\">\n                <!-- <img src=\"\" alt=\"\" class=\"country__flag\"> -->\n                <div class=\"country__description\">\n                    <h3 class=\"country__title\">Ukraine</h3>\n                    <p class=\"country__info\"><b>Population:</b> 27,657,155</p>\n                    <p class=\"country__info\"><b>Region:</b> Europe</p>\n                    <p class=\"country__info\"><b>Capital:</b> Kiev</p>\n                </div>\n            </li>\n            <li class=\"countries__country-item country\">\n                <!-- <img src=\"\" alt=\"\" class=\"country__flag\"> -->\n                <div class=\"country__description\">\n                    <h3 class=\"country__title\">Ukraine</h3>\n                    <p class=\"country__info\"><b>Population:</b> 27,657,155</p>\n                    <p class=\"country__info\"><b>Region:</b> Europe</p>\n                    <p class=\"country__info\"><b>Capital:</b> Kiev</p>\n                </div>\n            </li>\n        </ul>\n    </main>\n</body>\n\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/ts/component/country.ts":
/*!*************************************!*\
  !*** ./src/ts/component/country.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Country {
    constructor(name, population, region, capital, img) {
        this.name = name;
        this.population = population;
        this.region = region;
        this.capital = capital;
        this.img = img;
        this.getCountry = () => {
            return this;
        };
    }
}
exports["default"] = Country;


/***/ }),

/***/ "./src/ts/component/getData.ts":
/*!*************************************!*\
  !*** ./src/ts/component/getData.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const country_1 = __importDefault(__webpack_require__(/*! ./country */ "./src/ts/component/country.ts"));
class GetData {
    constructor() {
        this._requestByName = (nameCountry) => __awaiter(this, void 0, void 0, function* () {
            const answer = yield fetch(`https://restcountries.com/v3.1/name/${nameCountry}`);
            const data = yield answer.json();
            return data;
        });
        this._requestByRegion = (region) => __awaiter(this, void 0, void 0, function* () {
            const answer = yield fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = yield answer.json();
            return data;
        });
        this._getCountryObjFromAnswer = (answer) => {
            const { capital, name: { official: name }, population, region, flags: { svg: img } } = answer;
            return new country_1.default(name, population, region, capital, img);
        };
        this._getCountriesFromRequest = (data) => {
            return data.map((countryObj) => this._getCountryObjFromAnswer(countryObj));
        };
        this.getCountry = (nameCountry) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this._requestByName(nameCountry);
            return this._getCountriesFromRequest(data)[0];
        });
        this.getCountiesFromRegionsRequest = (region) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this._requestByRegion(region);
            return this._getCountriesFromRequest(data);
        });
        this.getSearchResults = (nameCountry) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this._requestByName(nameCountry);
            const searchList = data.map(elem => elem.name.official);
            return searchList;
        });
    }
}
exports["default"] = GetData;


/***/ }),

/***/ "./src/ts/component/renderList.ts":
/*!****************************************!*\
  !*** ./src/ts/component/renderList.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class RenderList {
    constructor() {
        this.clearList = () => {
            this.list.innerHTML = '';
        };
        this.addCountry = ({ name, population, region, capital, img }) => {
            this.list.insertAdjacentHTML('beforeend', `
    <li class="countries__country-item country">
        <img src="${img}" alt="" class="country__flag">
        <div class="country__description">
            <h3 class="country__title">${name}</h3>
            <p class="country__info"><b>Population:</b>${population}</p>
            <p class="country__info"><b>Region:</b> ${region}</p>
            <p class="country__info"><b>Capital:</b> ${capital}</p>
        </div>
    </li>`);
        };
        this.addArrayCountries = (arr) => {
            arr.forEach(el => this.addCountry(el));
        };
        this.list = document.querySelector('.countries__list');
    }
}
exports["default"] = RenderList;


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../index.html */ "./src/index.html");
const getData_1 = __importDefault(__webpack_require__(/*! ./component/getData */ "./src/ts/component/getData.ts"));
const renderList_1 = __importDefault(__webpack_require__(/*! ./component/renderList */ "./src/ts/component/renderList.ts"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(getData_1.default);
    const request = new getData_1.default();
    const renderFn = new renderList_1.default();
    const country = yield request.getCountry('ukr');
    // console.log(country);
    renderFn.addCountry(country);
    renderFn.clearList();
    yield renderFn.addArrayCountries(yield request.getCountiesFromRegionsRequest('europe'));
}))();


/***/ }),

/***/ "./src/sass/style.sass":
/*!*****************************!*\
  !*** ./src/sass/style.sass ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "css/style.css";

/***/ }),

/***/ "./src/assets/img/moon-waning-crescent.svg":
/*!*************************************************!*\
  !*** ./src/assets/img/moon-waning-crescent.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f45ad1e91e7512c261b8.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDMUcseUNBQXlDLCtHQUFvQztBQUM3RSx5Q0FBeUMsdUpBQXdEO0FBQ2pHO0FBQ0Esc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7O0FDVE47O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBLE1BQXFCLE9BQU87SUFDMUIsWUFBbUIsSUFBVyxFQUFTLFVBQWlCLEVBQVEsTUFBYSxFQUFRLE9BQWMsRUFBUSxHQUFVO1FBQWxHLFNBQUksR0FBSixJQUFJLENBQU87UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFPO1FBQVEsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUFRLFlBQU8sR0FBUCxPQUFPLENBQU87UUFBUSxRQUFHLEdBQUgsR0FBRyxDQUFPO1FBRXJILGVBQVUsR0FBRyxHQUFFLEVBQUU7WUFDZixPQUFPLElBQUk7UUFDYixDQUFDO0lBSEQsQ0FBQztDQUlGO0FBTkQsNkJBTUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmRCx5R0FBK0I7QUFHL0IsTUFBcUIsT0FBTztJQUMxQjtRQUVRLG1CQUFjLEdBQUcsQ0FBTyxXQUFrQixFQUFFLEVBQUU7WUFDcEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsdUNBQXVDLFdBQVcsRUFBRSxDQUFDO1lBQ2hGLE1BQU0sSUFBSSxHQUFvQixNQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDakQsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUVPLHFCQUFnQixHQUFFLENBQU8sTUFBYSxFQUFFLEVBQUU7WUFDaEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMseUNBQXlDLE1BQU0sRUFBRSxDQUFDO1lBQzdFLE1BQU0sSUFBSSxHQUFvQixNQUFNLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDakQsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUVPLDZCQUF3QixHQUFHLENBQUMsTUFBcUIsRUFBQyxFQUFFO1lBQzFELE1BQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxFQUFFLFVBQVUsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFDLEdBQUcsTUFBTTtZQUNqRixPQUFPLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsR0FBRyxDQUFDO1FBQ3hELENBQUM7UUFFTyw2QkFBd0IsR0FBRyxDQUFDLElBQXFCLEVBQUUsRUFBRTtZQUMzRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUMsRUFBRSxLQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUVELGVBQVUsR0FBRyxDQUFPLFdBQWtCLEVBQUUsRUFBRTtZQUN4QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1lBQ25ELE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBRUQsa0NBQTZCLEdBQUcsQ0FBTyxNQUFhLEVBQUMsRUFBRTtZQUNyRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7WUFDaEQsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDO1FBQzVDLENBQUM7UUFFRCxxQkFBZ0IsR0FBRyxDQUFPLFdBQWtCLEVBQUUsRUFBRTtZQUM5QyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1lBQ25ELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELE9BQU8sVUFBVTtRQUNuQixDQUFDO0lBckNjLENBQUM7Q0FzQ2pCO0FBdkNELDZCQXVDQzs7Ozs7Ozs7Ozs7OztBQ3pDRCxNQUFxQixVQUFVO0lBRTdCO1FBR0EsY0FBUyxHQUFHLEdBQUUsRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7UUFDMUIsQ0FBQztRQUNELGVBQVUsR0FBRyxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEdBQUcsRUFBUyxFQUFDLEVBQUU7WUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUU7O29CQUUxQixHQUFHOzt5Q0FFa0IsSUFBSTt5REFDWSxVQUFVO3NEQUNiLE1BQU07dURBQ0wsT0FBTzs7VUFFcEQsQ0FBQztRQUNULENBQUM7UUFDRCxzQkFBaUIsR0FBRyxDQUFDLEdBQWEsRUFBQyxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQW5CQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUU7SUFDekQsQ0FBQztDQW1CRjtBQXZCRCxnQ0F1QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkQsNkRBQXNCO0FBQ3RCLG1IQUF5QztBQUN6Qyw0SEFBK0M7QUFLL0MsQ0FBQyxHQUFTLEVBQUU7SUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsQ0FBQztJQUNyQixNQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUU7SUFDN0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxvQkFBVSxFQUFFO0lBQ2pDLE1BQU0sT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDL0Msd0JBQXdCO0lBRXhCLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0lBQzVCLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFDcEIsTUFBTSxRQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxPQUFPLENBQUMsNkJBQTZCLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFekYsQ0FBQyxFQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCSjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL2pzLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L2NvdW50cnkudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L2dldERhdGEudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L3JlbmRlckxpc3QudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2pzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2pzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3Nhc3Mvc3R5bGUuc2Fzc1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9tb29uLXdhbmluZy1jcmVzY2VudC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcblxcbjxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCI+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgvbmluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXG4gICAgPHRpdGxlPkNvdW50cnk8L3RpdGxlPlxcbiAgICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj5cXG5cXG48L2hlYWQ+XFxuXFxuPGJvZHk+XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICA8aDEgY2xhc3M9XFxcImhlYWRlcl9fdGl0bGVcXFwiPldoZXJlIGluIHRoZSB3b3JsZD88L2gxPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19idG4tbW9kZS1ibG9ja1xcXCI+XFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaGVhZGVyX19idG4taW1nXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaGVhZGVyX19idG4tbW9kZVxcXCI+RGFyayBNb2RlPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuICAgIDxtYWluIGNsYXNzPVxcXCJjb3VudHJpZXNfX2NvbnRhaW5lclxcXCI+XFxuXFxuICAgICAgICA8Zm9ybSBhY3Rpb249XFxcIlxcXCIgY2xhc3M9XFxcImNvdW50cmllc19fc2VhcmNoLWZvcm0gc2VhcmNoXFxcIj5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic2VhcmNoXFxcIiBjbGFzcz1cXFwic2VhcmNoX19pbnB1dFxcXCIgaWQ9XFxcImNvdW50cnktc2VhcmNoXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoIGZvciBhIGNvdW50cnkuLi5cXFwiPlxcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcInNlYXJjaF9fc2VsZWN0LXJlZ2lvblxcXCIgbmFtZT1cXFwicmVnaW9uc1xcXCIgaWQ9XFxcInNlbDFcXFwiPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJBbGxcXFwiPkFsbDwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJBZnJpY2FcXFwiPkFmcmljYTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJBbWVyaWNhc1xcXCI+QW1lcmljYXM8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQXNpYVxcXCI+QXNpYTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJFdXJvcGVcXFwiPkV1cm9wZTwvb3B0aW9uPlxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJPY2VhbmlhXFxcIj5PY2VhbmlhPC9vcHRpb24+XFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgICAgICBcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiY291bnRyaWVzX19saXN0XFxcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImNvdW50cmllc19fY291bnRyeS1pdGVtIGNvdW50cnlcXFwiPlxcbiAgICAgICAgICAgICAgICA8IS0tIDxpbWcgc3JjPVxcXCJcXFwiIGFsdD1cXFwiXFxcIiBjbGFzcz1cXFwiY291bnRyeV9fZmxhZ1xcXCI+IC0tPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb3VudHJ5X19kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvdW50cnlfX3RpdGxlXFxcIj5Va3JhaW5lPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb3VudHJ5X19pbmZvXFxcIj48Yj5Qb3B1bGF0aW9uOjwvYj4gMjcsNjU3LDE1NTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb3VudHJ5X19pbmZvXFxcIj48Yj5SZWdpb246PC9iPiBFdXJvcGU8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY291bnRyeV9faW5mb1xcXCI+PGI+Q2FwaXRhbDo8L2I+IEtpZXY8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJjb3VudHJpZXNfX2NvdW50cnktaXRlbSBjb3VudHJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSA8aW1nIHNyYz1cXFwiXFxcIiBhbHQ9XFxcIlxcXCIgY2xhc3M9XFxcImNvdW50cnlfX2ZsYWdcXFwiPiAtLT5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY291bnRyeV9fZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJjb3VudHJ5X190aXRsZVxcXCI+VWtyYWluZTwvaDM+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY291bnRyeV9faW5mb1xcXCI+PGI+UG9wdWxhdGlvbjo8L2I+IDI3LDY1NywxNTU8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY291bnRyeV9faW5mb1xcXCI+PGI+UmVnaW9uOjwvYj4gRXVyb3BlPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNvdW50cnlfX2luZm9cXFwiPjxiPkNhcGl0YWw6PC9iPiBLaWV2PC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiY291bnRyaWVzX19jb3VudHJ5LWl0ZW0gY291bnRyeVxcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS0gPGltZyBzcmM9XFxcIlxcXCIgYWx0PVxcXCJcXFwiIGNsYXNzPVxcXCJjb3VudHJ5X19mbGFnXFxcIj4gLS0+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvdW50cnlfX2Rlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwiY291bnRyeV9fdGl0bGVcXFwiPlVrcmFpbmU8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNvdW50cnlfX2luZm9cXFwiPjxiPlBvcHVsYXRpb246PC9iPiAyNyw2NTcsMTU1PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNvdW50cnlfX2luZm9cXFwiPjxiPlJlZ2lvbjo8L2I+IEV1cm9wZTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb3VudHJ5X19pbmZvXFxcIj48Yj5DYXBpdGFsOjwvYj4gS2lldjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImNvdW50cmllc19fY291bnRyeS1pdGVtIGNvdW50cnlcXFwiPlxcbiAgICAgICAgICAgICAgICA8IS0tIDxpbWcgc3JjPVxcXCJcXFwiIGFsdD1cXFwiXFxcIiBjbGFzcz1cXFwiY291bnRyeV9fZmxhZ1xcXCI+IC0tPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb3VudHJ5X19kZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcImNvdW50cnlfX3RpdGxlXFxcIj5Va3JhaW5lPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb3VudHJ5X19pbmZvXFxcIj48Yj5Qb3B1bGF0aW9uOjwvYj4gMjcsNjU3LDE1NTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb3VudHJ5X19pbmZvXFxcIj48Yj5SZWdpb246PC9iPiBFdXJvcGU8L3A+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY291bnRyeV9faW5mb1xcXCI+PGI+Q2FwaXRhbDo8L2I+IEtpZXY8L3A+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICA8L21haW4+XFxuPC9ib2R5PlxcblxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGludGVyZmFjZSBJQ291bnRyeUFuc3dlciB7XG4gIGNhcGl0YWw6c3RyaW5nXG4gIGZsYWdzIDoge1xuICAgIHN2ZzpzdHJpbmdcbiAgfVxuICBuYW1lOnsgb2ZmaWNpYWw6IHN0cmluZ31cbiAgcG9wdWxhdGlvbjpudW1iZXJcbiAgcmVnaW9uOnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudHJ5IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6c3RyaW5nLCBwdWJsaWMgcG9wdWxhdGlvbjpudW1iZXIscHVibGljIHJlZ2lvbjpzdHJpbmcscHVibGljIGNhcGl0YWw6c3RyaW5nLHB1YmxpYyBpbWc6c3RyaW5nKXtcbiAgfVxuICBnZXRDb3VudHJ5ID0gKCk9PntcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG4iLCJcbmltcG9ydCBDb3VudHJ5IGZyb20gXCIuL2NvdW50cnlcIlxuaW1wb3J0IHsgSUNvdW50cnlBbnN3ZXIgfSBmcm9tIFwiLi9jb3VudHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldERhdGEge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdEJ5TmFtZSA9IGFzeW5jIChuYW1lQ291bnRyeTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL25hbWUvJHtuYW1lQ291bnRyeX1gKVxuICAgIGNvbnN0IGRhdGE6SUNvdW50cnlBbnN3ZXJbXSA9IGF3YWl0IGFuc3dlci5qc29uKClcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdEJ5UmVnaW9uID1hc3luYyAocmVnaW9uOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFuc3dlciA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvcmVnaW9uLyR7cmVnaW9ufWApXG4gICAgY29uc3QgZGF0YTpJQ291bnRyeUFuc3dlcltdID0gYXdhaXQgYW5zd2VyLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBwcml2YXRlIF9nZXRDb3VudHJ5T2JqRnJvbUFuc3dlciA9IChhbnN3ZXI6SUNvdW50cnlBbnN3ZXIpPT57XG4gICAgY29uc3Qge2NhcGl0YWwsIG5hbWU6e29mZmljaWFsOm5hbWV9LCBwb3B1bGF0aW9uLHJlZ2lvbixmbGFnczp7c3ZnOmltZ319ID0gYW5zd2VyXG4gICAgcmV0dXJuIG5ldyBDb3VudHJ5KG5hbWUscG9wdWxhdGlvbixyZWdpb24sY2FwaXRhbCxpbWcpXG4gIH1cblxuICBwcml2YXRlIF9nZXRDb3VudHJpZXNGcm9tUmVxdWVzdCA9IChkYXRhOklDb3VudHJ5QW5zd2VyW10pID0+IHtcbiAgICByZXR1cm4gZGF0YS5tYXAoKGNvdW50cnlPYmopPT50aGlzLl9nZXRDb3VudHJ5T2JqRnJvbUFuc3dlcihjb3VudHJ5T2JqKSlcbiAgfVxuICBcbiAgZ2V0Q291bnRyeSA9IGFzeW5jIChuYW1lQ291bnRyeTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fcmVxdWVzdEJ5TmFtZShuYW1lQ291bnRyeSlcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q291bnRyaWVzRnJvbVJlcXVlc3QoZGF0YSlbMF1cbiAgfVxuXG4gIGdldENvdW50aWVzRnJvbVJlZ2lvbnNSZXF1ZXN0ID0gYXN5bmMgKHJlZ2lvbjpzdHJpbmcpPT57XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX3JlcXVlc3RCeVJlZ2lvbihyZWdpb24pXG4gICAgcmV0dXJuIHRoaXMuX2dldENvdW50cmllc0Zyb21SZXF1ZXN0KGRhdGEpXG4gIH1cblxuICBnZXRTZWFyY2hSZXN1bHRzID0gYXN5bmMgKG5hbWVDb3VudHJ5OnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9yZXF1ZXN0QnlOYW1lKG5hbWVDb3VudHJ5KVxuICAgIGNvbnN0IHNlYXJjaExpc3QgPSBkYXRhLm1hcChlbGVtPT5lbGVtLm5hbWUub2ZmaWNpYWwpXG4gICAgcmV0dXJuIHNlYXJjaExpc3RcbiAgfVxufVxuXG5cblxuXG4gIFxuICBcbiAgIiwiaW1wb3J0IENvdW50cnkgZnJvbSBcIi4vY291bnRyeVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlckxpc3Qge1xuICBsaXN0OkhUTUxFbGVtZW50XG4gIGNvbnN0cnVjdG9yICgpe1xuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJpZXNfX2xpc3QnKSFcbiAgfVxuICBjbGVhckxpc3QgPSAoKT0+e1xuICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSAnJ1xuICB9XG4gIGFkZENvdW50cnkgPSAoe25hbWUsIHBvcHVsYXRpb24scmVnaW9uLGNhcGl0YWwsaW1nfTpDb3VudHJ5KT0+e1xuICAgIHRoaXMubGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICA8bGkgY2xhc3M9XCJjb3VudHJpZXNfX2NvdW50cnktaXRlbSBjb3VudHJ5XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtpbWd9XCIgYWx0PVwiXCIgY2xhc3M9XCJjb3VudHJ5X19mbGFnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5X19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY291bnRyeV9fdGl0bGVcIj4ke25hbWV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY291bnRyeV9faW5mb1wiPjxiPlBvcHVsYXRpb246PC9iPiR7cG9wdWxhdGlvbn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX2luZm9cIj48Yj5SZWdpb246PC9iPiAke3JlZ2lvbn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX2luZm9cIj48Yj5DYXBpdGFsOjwvYj4gJHtjYXBpdGFsfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9saT5gKVxuICB9XG4gIGFkZEFycmF5Q291bnRyaWVzID0gKGFycjpDb3VudHJ5W10pPT57XG4gICAgYXJyLmZvckVhY2goZWw9PnRoaXMuYWRkQ291bnRyeShlbCkpXG4gIH1cbn0iLCJpbXBvcnQgXCIuLi9pbmRleC5odG1sXCJcbmltcG9ydCBHZXREYXRhIGZyb20gXCIuL2NvbXBvbmVudC9nZXREYXRhXCJcbmltcG9ydCBSZW5kZXJMaXN0IGZyb20gXCIuL2NvbXBvbmVudC9yZW5kZXJMaXN0XCJcblxuXG5cblxuKGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coR2V0RGF0YSk7XG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgR2V0RGF0YSgpXG4gIGNvbnN0IHJlbmRlckZuID0gbmV3IFJlbmRlckxpc3QoKVxuICBjb25zdCBjb3VudHJ5ID0gYXdhaXQgcmVxdWVzdC5nZXRDb3VudHJ5KCd1a3InKVxuICAvLyBjb25zb2xlLmxvZyhjb3VudHJ5KTtcbiAgXG4gIHJlbmRlckZuLmFkZENvdW50cnkoY291bnRyeSlcbiAgcmVuZGVyRm4uY2xlYXJMaXN0KClcbiAgYXdhaXQgcmVuZGVyRm4uYWRkQXJyYXlDb3VudHJpZXMoYXdhaXQgcmVxdWVzdC5nZXRDb3VudGllc0Zyb21SZWdpb25zUmVxdWVzdCgnZXVyb3BlJykpXG5cbn0pKClcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RzL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9