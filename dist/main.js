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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width/ninitial-scale=1.0\">\n    <title>Country</title>\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n\n</head>\n\n<body>\n    <header class=\"header\">\n        <h1 class=\"header__title\">Where in the world?</h1>\n        <div class=\"header__btn-mode-block\">\n            <img class=\"header__btn-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n            <button class=\"header__btn-mode\">Dark Mode</button>\n        </div>\n    </header>\n    <main class=\"countries__container\">\n\n        <form action=\"\" class=\"countries__search-form\">\n            <section class=\"country__search search\">\n                <input class=\"search__input\" type=\"search\" placeholder=\"Search city\" name=\"city\" id=\"searchLocation\">\n                <ul class=\"search__options\">\n                   \n                </ul>\n            </section>\n    \n\n            <select class=\"search__select-region\" name=\"regions\" id=\"sel1\">\n                <option value=\"Initial\">--Please choose a region--</option>\n                <option value=\"All\">All</option>\n                <option value=\"Africa\">Africa</option>\n                <option value=\"Americas\">Americas</option>\n                <option value=\"Asia\">Asia</option>\n                <option value=\"Europe\">Europe</option>\n                <option value=\"Oceania\">Oceania</option>\n            </select>\n        </form>\n        \n        <ul class=\"countries__list\">\n            \n        </ul>\n    </main>\n</body>\n\n</html>\n";
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
        this._requestAll = () => __awaiter(this, void 0, void 0, function* () {
            const answer = yield fetch(`https://restcountries.com/v3.1/all`);
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
        this.getAllCountries = () => __awaiter(this, void 0, void 0, function* () {
            const data = yield this._requestAll();
            return this._getCountriesFromRequest(data);
        });
    }
}
const request = new GetData();
exports["default"] = request;


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
            this.clearList();
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
// import "./component/listenerSelect";
const renderFn = new renderList_1.default();
class App {
    constructor() {
        this._selectListener = () => {
            this.select.addEventListener('change', () => __awaiter(this, void 0, void 0, function* () {
                this._selectChoice = this.select.value;
                if (this._selectChoice === "All") {
                    this._selectRegion = yield getData_1.default.getAllCountries();
                }
                else {
                    this._selectRegion = yield getData_1.default.getCountiesFromRegionsRequest(this._selectChoice);
                }
                renderFn.addArrayCountries(this._selectRegion);
            }));
        };
        this._getValue = () => {
            if (this.select.value === 'All' || this.select.value === 'Initial') {
                return getData_1.default.getSearchResults(this.element.value);
            }
            else {
                const searchLetters = this.element.value.split('');
                const countries = this._selectRegion.filter(country => {
                    let check = true;
                    const name = country.name.split('');
                    searchLetters.forEach(letter => {
                        const index = name.findIndex(el => el === letter);
                        if (index !== -1) {
                            name.splice(index, 1);
                        }
                        else {
                            check = false;
                        }
                    });
                    return check;
                });
                return countries.map(country => country.name);
            }
        };
        this._addOption = (value) => {
            this.options.insertAdjacentHTML("beforeend", `
    <div class="search__option">${value}</div>
  `);
        };
        this.clearOptions = () => this.options.innerHTML = '';
        this._updateDom = () => __awaiter(this, void 0, void 0, function* () {
            let delay;
            this.element.addEventListener('keyup', () => {
                if (delay) {
                    clearTimeout(delay);
                }
                delay = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                    this.clearOptions();
                    try {
                        const searchValues = yield this._getValue();
                        searchValues.forEach(el => this._addOption(el));
                    }
                    catch (error) {
                        this.clearOptions();
                        this._addOption('Country not found');
                    }
                    if (this.element.value === '') {
                        this.clearOptions();
                    }
                }), 500);
            });
        });
        this.element = document.querySelector('.search__input');
        this.options = document.querySelector('.search__options');
        this.select = document.querySelector('.search__select-region');
        this._selectChoice = null;
        this._selectRegion = [];
        this._updateDom();
        this._selectListener();
    }
}
const search = new App();
class ClickHandler {
    constructor() {
        this.handler = () => {
            document.addEventListener('click', (event) => __awaiter(this, void 0, void 0, function* () {
                const target = event.target;
                if (!(target instanceof HTMLElement)) {
                    return;
                }
                if (target.classList.contains('search__option')) {
                    if (!target.textContent || target.textContent === 'Country not found') {
                        return;
                    }
                    const country = yield getData_1.default.getCountry(target.textContent);
                    renderFn.addArrayCountries([country]);
                    search.clearOptions();
                    search.element.value = country.name;
                }
            }));
        };
    }
}
new ClickHandler().handler();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1VFckJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9qcy8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9jb3VudHJ5LnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9nZXREYXRhLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9yZW5kZXJMaXN0LnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovL2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2pzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9zYXNzL3N0eWxlLnNhc3NcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWcvbW9vbi13YW5pbmctY3Jlc2NlbnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG5cXG48aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoL25pbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICAgIDx0aXRsZT5Db3VudHJ5PC90aXRsZT5cXG4gICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+XFxuXFxuPC9oZWFkPlxcblxcbjxib2R5PlxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJoZWFkZXJfX3RpdGxlXFxcIj5XaGVyZSBpbiB0aGUgd29ybGQ/PC9oMT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcl9fYnRuLW1vZGUtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImhlYWRlcl9fYnRuLWltZ1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcl9fYnRuLW1vZGVcXFwiPkRhcmsgTW9kZTwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcbiAgICA8bWFpbiBjbGFzcz1cXFwiY291bnRyaWVzX19jb250YWluZXJcXFwiPlxcblxcbiAgICAgICAgPGZvcm0gYWN0aW9uPVxcXCJcXFwiIGNsYXNzPVxcXCJjb3VudHJpZXNfX3NlYXJjaC1mb3JtXFxcIj5cXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY291bnRyeV9fc2VhcmNoIHNlYXJjaFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwic2VhcmNoX19pbnB1dFxcXCIgdHlwZT1cXFwic2VhcmNoXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoIGNpdHlcXFwiIG5hbWU9XFxcImNpdHlcXFwiIGlkPVxcXCJzZWFyY2hMb2NhdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwic2VhcmNoX19vcHRpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxcbiAgICBcXG5cXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJzZWFyY2hfX3NlbGVjdC1yZWdpb25cXFwiIG5hbWU9XFxcInJlZ2lvbnNcXFwiIGlkPVxcXCJzZWwxXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiSW5pdGlhbFxcXCI+LS1QbGVhc2UgY2hvb3NlIGEgcmVnaW9uLS08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQWxsXFxcIj5BbGw8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQWZyaWNhXFxcIj5BZnJpY2E8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQW1lcmljYXNcXFwiPkFtZXJpY2FzPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIkFzaWFcXFwiPkFzaWE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiRXVyb3BlXFxcIj5FdXJvcGU8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiT2NlYW5pYVxcXCI+T2NlYW5pYTwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgXFxuICAgICAgICA8dWwgY2xhc3M9XFxcImNvdW50cmllc19fbGlzdFxcXCI+XFxuICAgICAgICAgICAgXFxuICAgICAgICA8L3VsPlxcbiAgICA8L21haW4+XFxuPC9ib2R5PlxcblxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGludGVyZmFjZSBJQ291bnRyeUFuc3dlciB7XG4gIGNhcGl0YWw6c3RyaW5nXG4gIGZsYWdzIDoge1xuICAgIHN2ZzpzdHJpbmdcbiAgfVxuICBuYW1lOnsgb2ZmaWNpYWw6IHN0cmluZ31cbiAgcG9wdWxhdGlvbjpudW1iZXJcbiAgcmVnaW9uOnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudHJ5IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6c3RyaW5nLCBwdWJsaWMgcG9wdWxhdGlvbjpudW1iZXIscHVibGljIHJlZ2lvbjpzdHJpbmcscHVibGljIGNhcGl0YWw6c3RyaW5nLHB1YmxpYyBpbWc6c3RyaW5nKXtcbiAgfVxuICBnZXRDb3VudHJ5ID0gKCk9PntcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG4iLCJcbmltcG9ydCBDb3VudHJ5IGZyb20gXCIuL2NvdW50cnlcIlxuaW1wb3J0IHsgSUNvdW50cnlBbnN3ZXIgfSBmcm9tIFwiLi9jb3VudHJ5XCI7XG5cbmNsYXNzIEdldERhdGEge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdEJ5TmFtZSA9IGFzeW5jIChuYW1lQ291bnRyeTpzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGFuc3dlciA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvbmFtZS8ke25hbWVDb3VudHJ5fWApXG4gICAgICBjb25zdCBkYXRhOklDb3VudHJ5QW5zd2VyW10gPSBhd2FpdCBhbnN3ZXIuanNvbigpXG4gICAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdEJ5UmVnaW9uID1hc3luYyAocmVnaW9uOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFuc3dlciA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvcmVnaW9uLyR7cmVnaW9ufWApXG4gICAgY29uc3QgZGF0YTpJQ291bnRyeUFuc3dlcltdID0gYXdhaXQgYW5zd2VyLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBwcml2YXRlIF9yZXF1ZXN0QWxsID1hc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYW5zd2VyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMS9hbGxgKVxuICAgIGNvbnN0IGRhdGE6SUNvdW50cnlBbnN3ZXJbXSA9IGF3YWl0IGFuc3dlci5qc29uKClcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q291bnRyeU9iakZyb21BbnN3ZXIgPSAoYW5zd2VyOklDb3VudHJ5QW5zd2VyKT0+e1xuICAgIGNvbnN0IHtjYXBpdGFsLCBuYW1lOntvZmZpY2lhbDpuYW1lfSwgcG9wdWxhdGlvbixyZWdpb24sZmxhZ3M6e3N2ZzppbWd9fSA9IGFuc3dlclxuICAgIHJldHVybiBuZXcgQ291bnRyeShuYW1lLHBvcHVsYXRpb24scmVnaW9uLGNhcGl0YWwsaW1nKVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q291bnRyaWVzRnJvbVJlcXVlc3QgPSAoZGF0YTpJQ291bnRyeUFuc3dlcltdKSA9PiB7XG4gICAgcmV0dXJuIGRhdGEubWFwKChjb3VudHJ5T2JqKT0+dGhpcy5fZ2V0Q291bnRyeU9iakZyb21BbnN3ZXIoY291bnRyeU9iaikpXG4gIH1cbiAgXG4gIGdldENvdW50cnkgPSBhc3luYyAobmFtZUNvdW50cnk6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX3JlcXVlc3RCeU5hbWUobmFtZUNvdW50cnkpXG4gICAgcmV0dXJuIHRoaXMuX2dldENvdW50cmllc0Zyb21SZXF1ZXN0KGRhdGEpWzBdXG4gIH1cblxuICBnZXRDb3VudGllc0Zyb21SZWdpb25zUmVxdWVzdCA9IGFzeW5jIChyZWdpb246c3RyaW5nKT0+e1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9yZXF1ZXN0QnlSZWdpb24ocmVnaW9uKVxuICAgIHJldHVybiB0aGlzLl9nZXRDb3VudHJpZXNGcm9tUmVxdWVzdChkYXRhKVxuICB9XG5cbiAgZ2V0U2VhcmNoUmVzdWx0cyA9IGFzeW5jIChuYW1lQ291bnRyeTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fcmVxdWVzdEJ5TmFtZShuYW1lQ291bnRyeSlcbiAgICBjb25zdCBzZWFyY2hMaXN0ID0gZGF0YS5tYXAoZWxlbT0+ZWxlbS5uYW1lLm9mZmljaWFsKVxuICAgIHJldHVybiBzZWFyY2hMaXN0XG4gIH1cbiAgZ2V0QWxsQ291bnRyaWVzID1hc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX3JlcXVlc3RBbGwoKVxuICAgIHJldHVybiB0aGlzLl9nZXRDb3VudHJpZXNGcm9tUmVxdWVzdChkYXRhKVxuICB9XG5cbn1cbmNvbnN0IHJlcXVlc3QgPSBuZXcgR2V0RGF0YSgpXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0XG5cblxuXG4gIFxuICBcbiAgIiwiaW1wb3J0IENvdW50cnkgZnJvbSBcIi4vY291bnRyeVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlckxpc3Qge1xuICBsaXN0OkhUTUxFbGVtZW50XG4gIGNvbnN0cnVjdG9yICgpe1xuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJpZXNfX2xpc3QnKSFcbiAgfVxuICBjbGVhckxpc3QgPSAoKT0+e1xuICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSAnJ1xuICB9XG4gIGFkZENvdW50cnkgPSAoe25hbWUsIHBvcHVsYXRpb24scmVnaW9uLGNhcGl0YWwsaW1nfTpDb3VudHJ5KT0+e1xuICAgIHRoaXMubGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICA8bGkgY2xhc3M9XCJjb3VudHJpZXNfX2NvdW50cnktaXRlbSBjb3VudHJ5XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtpbWd9XCIgYWx0PVwiXCIgY2xhc3M9XCJjb3VudHJ5X19mbGFnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5X19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY291bnRyeV9fdGl0bGVcIj4ke25hbWV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY291bnRyeV9faW5mb1wiPjxiPlBvcHVsYXRpb246PC9iPiR7cG9wdWxhdGlvbn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX2luZm9cIj48Yj5SZWdpb246PC9iPiAke3JlZ2lvbn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX2luZm9cIj48Yj5DYXBpdGFsOjwvYj4gJHtjYXBpdGFsfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9saT5gKVxuICB9XG4gIGFkZEFycmF5Q291bnRyaWVzID0gKGFycjpDb3VudHJ5W10pPT57XG4gICAgdGhpcy5jbGVhckxpc3QoKVxuICAgIGFyci5mb3JFYWNoKGVsPT50aGlzLmFkZENvdW50cnkoZWwpKVxuICB9XG59IiwiaW1wb3J0IHsgQXJyYXlCaW5kaW5nT3JBc3NpZ25tZW50RWxlbWVudCB9IGZyb20gXCJ0eXBlc2NyaXB0XCJcbmltcG9ydCBcIi4uL2luZGV4Lmh0bWxcIlxuaW1wb3J0IENvdW50cnkgZnJvbSBcIi4vY29tcG9uZW50L2NvdW50cnlcIlxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vY29tcG9uZW50L2dldERhdGFcIlxuaW1wb3J0IFJlbmRlckxpc3QgZnJvbSBcIi4vY29tcG9uZW50L3JlbmRlckxpc3RcIlxuLy8gaW1wb3J0IFwiLi9jb21wb25lbnQvbGlzdGVuZXJTZWxlY3RcIjtcblxuXG5jb25zdCByZW5kZXJGbiA9IG5ldyBSZW5kZXJMaXN0KClcblxuY2xhc3MgQXBwIHtcbiAgZWxlbWVudDpIVE1MSW5wdXRFbGVtZW50XG4gIG9wdGlvbnM6SFRNTFVMaXN0RWxlbWVudFxuICBzZWxlY3Q6SFRNTFNlbGVjdEVsZW1lbnRcbiAgcHJpdmF0ZSBfc2VsZWN0Q2hvaWNlOiBzdHJpbmd8bnVsbFxuICBwcml2YXRlIF9zZWxlY3RSZWdpb246IENvdW50cnlbXVxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JykhXG4gICAgdGhpcy5vcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fb3B0aW9ucycpIVxuICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fc2VsZWN0LXJlZ2lvbicpIVxuICAgIHRoaXMuX3NlbGVjdENob2ljZSA9IG51bGxcbiAgICB0aGlzLl9zZWxlY3RSZWdpb249W11cbiAgICB0aGlzLl91cGRhdGVEb20oKVxuICAgIHRoaXMuX3NlbGVjdExpc3RlbmVyKClcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdExpc3RlbmVyID0gKCk9PntcbiAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyAoKT0+e1xuICAgICAgdGhpcy5fc2VsZWN0Q2hvaWNlID0gdGhpcy5zZWxlY3QudmFsdWVcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RDaG9pY2U9PT1cIkFsbFwiKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdFJlZ2lvbiA9IGF3YWl0IHJlcXVlc3QuZ2V0QWxsQ291bnRyaWVzKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdFJlZ2lvbiA9IGF3YWl0IHJlcXVlc3QuZ2V0Q291bnRpZXNGcm9tUmVnaW9uc1JlcXVlc3QodGhpcy5fc2VsZWN0Q2hvaWNlKVxuICAgICAgfVxuICAgICAgcmVuZGVyRm4uYWRkQXJyYXlDb3VudHJpZXModGhpcy5fc2VsZWN0UmVnaW9uKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIF9nZXRWYWx1ZSA9ICgpPT57XG4gICAgaWYgKHRoaXMuc2VsZWN0LnZhbHVlPT09J0FsbCd8fHRoaXMuc2VsZWN0LnZhbHVlPT09J0luaXRpYWwnKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdC5nZXRTZWFyY2hSZXN1bHRzKHRoaXMuZWxlbWVudC52YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VhcmNoTGV0dGVycyA9IHRoaXMuZWxlbWVudC52YWx1ZS5zcGxpdCgnJylcbiAgICAgIGNvbnN0IGNvdW50cmllcyA9IHRoaXMuX3NlbGVjdFJlZ2lvbi5maWx0ZXIoY291bnRyeT0+e1xuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlXG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb3VudHJ5Lm5hbWUuc3BsaXQoJycpXG4gICAgICAgIHNlYXJjaExldHRlcnMuZm9yRWFjaChsZXR0ZXI9PntcbiAgICAgICAgICBjb25zdCBpbmRleCA9IG5hbWUuZmluZEluZGV4KGVsPT5lbD09PWxldHRlcilcbiAgICAgICAgICBpZiAoaW5kZXghPT0tMSkge25hbWUuc3BsaWNlKGluZGV4LDEpfSBlbHNlIHtjaGVjaz1mYWxzZX1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNoZWNrXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGNvdW50cmllcy5tYXAoY291bnRyeT0+Y291bnRyeS5uYW1lKVxuICAgIH1cbiAgfSBcblxuICBwcml2YXRlIF9hZGRPcHRpb24gPSAodmFsdWU6c3RyaW5nKT0+e1xuICAgIHRoaXMub3B0aW9ucy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYFxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hfX29wdGlvblwiPiR7dmFsdWV9PC9kaXY+XG4gIGApXG4gIH1cblxuICBjbGVhck9wdGlvbnMgPSAoKT0+dGhpcy5vcHRpb25zLmlubmVySFRNTD0nJ1xuXG4gIHByaXZhdGUgX3VwZGF0ZURvbSA9IGFzeW5jICgpPT57XG4gICAgbGV0IGRlbGF5OiBOb2RlSlMuVGltZW91dFxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpPT57XG5cbiAgICAgIGlmIChkZWxheSkge2NsZWFyVGltZW91dChkZWxheSl9XG4gICAgICBkZWxheSA9IHNldFRpbWVvdXQoYXN5bmMgKCk9PntcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2xlYXJPcHRpb25zKClcbiAgICAgICAgXG4gICAgICAgIHRyeSB7ICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHNlYXJjaFZhbHVlcyA9IGF3YWl0IHRoaXMuX2dldFZhbHVlKClcbiAgICAgICAgICBzZWFyY2hWYWx1ZXMuZm9yRWFjaChlbD0+dGhpcy5fYWRkT3B0aW9uKGVsKSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgIHRoaXMuY2xlYXJPcHRpb25zKClcbiAgICAgICAgICB0aGlzLl9hZGRPcHRpb24oJ0NvdW50cnkgbm90IGZvdW5kJylcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC52YWx1ZT09PScnKSB7IHRoaXMuY2xlYXJPcHRpb25zKCl9XG4gICAgICAgIH1cbiAgICAgICAgICAsNTAwKVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCBzZWFyY2ggPSBuZXcgQXBwKClcblxuY2xhc3MgQ2xpY2tIYW5kbGVyIHtcbiAgaGFuZGxlcjogKCkgPT4gdm9pZFxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuaGFuZGxlciA9ICgpPT57XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCk9PntcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gIGV2ZW50LnRhcmdldFxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtyZXR1cm59XG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2hfX29wdGlvbicpKSB7IFxuICAgICAgICAgIGlmICghdGFyZ2V0LnRleHRDb250ZW50IHx8IHRhcmdldC50ZXh0Q29udGVudD09PSdDb3VudHJ5IG5vdCBmb3VuZCcpIHtyZXR1cm59XG4gICAgICAgICAgY29uc3QgY291bnRyeSA9IGF3YWl0IHJlcXVlc3QuZ2V0Q291bnRyeSh0YXJnZXQudGV4dENvbnRlbnQpXG4gICAgICAgICAgcmVuZGVyRm4uYWRkQXJyYXlDb3VudHJpZXMoW2NvdW50cnldKVxuICAgICAgICAgIHNlYXJjaC5jbGVhck9wdGlvbnMoKVxuICAgICAgICAgIHNlYXJjaC5lbGVtZW50LnZhbHVlPWNvdW50cnkubmFtZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5uZXcgQ2xpY2tIYW5kbGVyKCkuaGFuZGxlcigpXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=