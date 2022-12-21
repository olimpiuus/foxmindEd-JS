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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width/ninitial-scale=1.0\">\n    <title>Country</title>\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n\n</head>\n\n<body>\n    <header class=\"header\">\n        <h1 class=\"header__title\">Where in the world?</h1>\n        <div class=\"header__btn-mode-block\">\n            <img class=\"header__btn-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n            <button class=\"header__btn-mode\">Dark Mode</button>\n        </div>\n    </header>\n    <main class=\"countries__container\">\n\n        <form action=\"\" class=\"countries__search-form\">\n            <section class=\"country__search search\">\n                <input class=\"search__input\" type=\"search\" placeholder=\"Search city\" name=\"city\" id=\"searchLocation\">\n                <ul class=\"search__options\">\n                   \n                </ul>\n            </section>\n    \n\n            <select class=\"search__select-region\" name=\"regions\" id=\"sel1\">\n                <option value=\"Initial\">--Please choose a region--</option>\n                <option value=\"All\">All</option>\n                <option value=\"Africa\">Africa</option>\n                <option value=\"Americas\">Americas</option>\n                <option value=\"Asia\">Asia</option>\n                <option value=\"Europe\">Europe</option>\n                <option value=\"Oceania\">Oceania</option>\n            </select>\n        </form>\n        \n        <div class=\"countries__list-wrapper\">\n            <ul class=\"countries__list\">\n            </ul>\n            <div class=\"spinner-wrapper spinner-deactivated\">\n                <div class=\"spinner \"></div> \n            </div>\n        </div>\n        \n    </main>\n</body>\n\n</html>\n";
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const spinner_1 = __importDefault(__webpack_require__(/*! ./spinner */ "./src/ts/component/spinner.ts"));
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
            spinner_1.default.activate();
            this.clearList();
            arr.forEach(el => this.addCountry(el));
            setTimeout(() => {
                spinner_1.default.deactivate();
            }, 500);
        };
        this.list = document.querySelector('.countries__list');
    }
}
exports["default"] = RenderList;


/***/ }),

/***/ "./src/ts/component/spinner.ts":
/*!*************************************!*\
  !*** ./src/ts/component/spinner.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Spinner {
    constructor() {
        this.activate = () => {
            this.element.classList.remove('spinner-deactivated');
            this.element.classList.add('spinner-active');
        };
        this.deactivate = () => {
            this.element.classList.remove('spinner-active');
            this.element.classList.add('spinner-deactivated');
        };
        this.element = document.querySelector('.spinner-wrapper');
    }
}
const spinner = new Spinner();
exports["default"] = spinner;


/***/ }),

/***/ "./src/ts/component/theme.ts":
/*!***********************************!*\
  !*** ./src/ts/component/theme.ts ***!
  \***********************************/
/***/ (() => {


const theme = (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
const btnMode = document.querySelector('.header__btn-mode-block');
if (theme)
    document.documentElement.setAttribute('data-theme', theme);
btnMode.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme;
    currentTheme === "light" ? targetTheme = "dark" : targetTheme = "light";
    document.documentElement.setAttribute('data-theme', targetTheme);
});


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
__webpack_require__(/*! ./component/theme */ "./src/ts/component/theme.ts");
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
                if (target.closest('.header__btn-mode-block')) {
                    // Change dark/light mode
                    console.log('cc');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7VUVyQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL2pzLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L2NvdW50cnkudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L2dldERhdGEudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L3JlbmRlckxpc3QudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L3NwaW5uZXIudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L3RoZW1lLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovL2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2pzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9zYXNzL3N0eWxlLnNhc3NcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWcvbW9vbi13YW5pbmctY3Jlc2NlbnQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG5cXG48aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoL25pbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxuICAgIDx0aXRsZT5Db3VudHJ5PC90aXRsZT5cXG4gICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+XFxuXFxuPC9oZWFkPlxcblxcbjxib2R5PlxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJoZWFkZXJfX3RpdGxlXFxcIj5XaGVyZSBpbiB0aGUgd29ybGQ/PC9oMT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcl9fYnRuLW1vZGUtYmxvY2tcXFwiPlxcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImhlYWRlcl9fYnRuLWltZ1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcl9fYnRuLW1vZGVcXFwiPkRhcmsgTW9kZTwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcbiAgICA8bWFpbiBjbGFzcz1cXFwiY291bnRyaWVzX19jb250YWluZXJcXFwiPlxcblxcbiAgICAgICAgPGZvcm0gYWN0aW9uPVxcXCJcXFwiIGNsYXNzPVxcXCJjb3VudHJpZXNfX3NlYXJjaC1mb3JtXFxcIj5cXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY291bnRyeV9fc2VhcmNoIHNlYXJjaFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwic2VhcmNoX19pbnB1dFxcXCIgdHlwZT1cXFwic2VhcmNoXFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoIGNpdHlcXFwiIG5hbWU9XFxcImNpdHlcXFwiIGlkPVxcXCJzZWFyY2hMb2NhdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwic2VhcmNoX19vcHRpb25zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC9zZWN0aW9uPlxcbiAgICBcXG5cXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJzZWFyY2hfX3NlbGVjdC1yZWdpb25cXFwiIG5hbWU9XFxcInJlZ2lvbnNcXFwiIGlkPVxcXCJzZWwxXFxcIj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiSW5pdGlhbFxcXCI+LS1QbGVhc2UgY2hvb3NlIGEgcmVnaW9uLS08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQWxsXFxcIj5BbGw8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQWZyaWNhXFxcIj5BZnJpY2E8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQW1lcmljYXNcXFwiPkFtZXJpY2FzPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIkFzaWFcXFwiPkFzaWE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiRXVyb3BlXFxcIj5FdXJvcGU8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiT2NlYW5pYVxcXCI+T2NlYW5pYTwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb3VudHJpZXNfX2xpc3Qtd3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJjb3VudHJpZXNfX2xpc3RcXFwiPlxcbiAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3Bpbm5lci13cmFwcGVyIHNwaW5uZXItZGVhY3RpdmF0ZWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGlubmVyIFxcXCI+PC9kaXY+IFxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICBcXG4gICAgPC9tYWluPlxcbjwvYm9keT5cXG5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImV4cG9ydCBpbnRlcmZhY2UgSUNvdW50cnlBbnN3ZXIge1xuICBjYXBpdGFsOnN0cmluZ1xuICBmbGFncyA6IHtcbiAgICBzdmc6c3RyaW5nXG4gIH1cbiAgbmFtZTp7IG9mZmljaWFsOiBzdHJpbmd9XG4gIHBvcHVsYXRpb246bnVtYmVyXG4gIHJlZ2lvbjpzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRyeSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOnN0cmluZywgcHVibGljIHBvcHVsYXRpb246bnVtYmVyLHB1YmxpYyByZWdpb246c3RyaW5nLHB1YmxpYyBjYXBpdGFsOnN0cmluZyxwdWJsaWMgaW1nOnN0cmluZyl7XG4gIH1cbiAgZ2V0Q291bnRyeSA9ICgpPT57XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuIiwiXG5pbXBvcnQgQ291bnRyeSBmcm9tIFwiLi9jb3VudHJ5XCJcbmltcG9ydCB7IElDb3VudHJ5QW5zd2VyIH0gZnJvbSBcIi4vY291bnRyeVwiO1xuXG5jbGFzcyBHZXREYXRhIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgX3JlcXVlc3RCeU5hbWUgPSBhc3luYyAobmFtZUNvdW50cnk6c3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL25hbWUvJHtuYW1lQ291bnRyeX1gKVxuICAgICAgY29uc3QgZGF0YTpJQ291bnRyeUFuc3dlcltdID0gYXdhaXQgYW5zd2VyLmpzb24oKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIHByaXZhdGUgX3JlcXVlc3RCeVJlZ2lvbiA9YXN5bmMgKHJlZ2lvbjpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL3JlZ2lvbi8ke3JlZ2lvbn1gKVxuICAgIGNvbnN0IGRhdGE6SUNvdW50cnlBbnN3ZXJbXSA9IGF3YWl0IGFuc3dlci5qc29uKClcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdEFsbCA9YXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFuc3dlciA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvYWxsYClcbiAgICBjb25zdCBkYXRhOklDb3VudHJ5QW5zd2VyW10gPSBhd2FpdCBhbnN3ZXIuanNvbigpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIHByaXZhdGUgX2dldENvdW50cnlPYmpGcm9tQW5zd2VyID0gKGFuc3dlcjpJQ291bnRyeUFuc3dlcik9PntcbiAgICBjb25zdCB7Y2FwaXRhbCwgbmFtZTp7b2ZmaWNpYWw6bmFtZX0sIHBvcHVsYXRpb24scmVnaW9uLGZsYWdzOntzdmc6aW1nfX0gPSBhbnN3ZXJcbiAgICByZXR1cm4gbmV3IENvdW50cnkobmFtZSxwb3B1bGF0aW9uLHJlZ2lvbixjYXBpdGFsLGltZylcbiAgfVxuXG4gIHByaXZhdGUgX2dldENvdW50cmllc0Zyb21SZXF1ZXN0ID0gKGRhdGE6SUNvdW50cnlBbnN3ZXJbXSkgPT4ge1xuICAgIHJldHVybiBkYXRhLm1hcCgoY291bnRyeU9iaik9PnRoaXMuX2dldENvdW50cnlPYmpGcm9tQW5zd2VyKGNvdW50cnlPYmopKVxuICB9XG4gIFxuICBnZXRDb3VudHJ5ID0gYXN5bmMgKG5hbWVDb3VudHJ5OnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9yZXF1ZXN0QnlOYW1lKG5hbWVDb3VudHJ5KVxuICAgIHJldHVybiB0aGlzLl9nZXRDb3VudHJpZXNGcm9tUmVxdWVzdChkYXRhKVswXVxuICB9XG5cbiAgZ2V0Q291bnRpZXNGcm9tUmVnaW9uc1JlcXVlc3QgPSBhc3luYyAocmVnaW9uOnN0cmluZyk9PntcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fcmVxdWVzdEJ5UmVnaW9uKHJlZ2lvbilcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q291bnRyaWVzRnJvbVJlcXVlc3QoZGF0YSlcbiAgfVxuXG4gIGdldFNlYXJjaFJlc3VsdHMgPSBhc3luYyAobmFtZUNvdW50cnk6c3RyaW5nKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX3JlcXVlc3RCeU5hbWUobmFtZUNvdW50cnkpXG4gICAgY29uc3Qgc2VhcmNoTGlzdCA9IGRhdGEubWFwKGVsZW09PmVsZW0ubmFtZS5vZmZpY2lhbClcbiAgICByZXR1cm4gc2VhcmNoTGlzdFxuICB9XG4gIGdldEFsbENvdW50cmllcyA9YXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9yZXF1ZXN0QWxsKClcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q291bnRyaWVzRnJvbVJlcXVlc3QoZGF0YSlcbiAgfVxuXG59XG5jb25zdCByZXF1ZXN0ID0gbmV3IEdldERhdGEoKVxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdFxuXG5cblxuICBcbiAgXG4gICIsImltcG9ydCBDb3VudHJ5IGZyb20gXCIuL2NvdW50cnlcIlxuaW1wb3J0IHNwaW5uZXIgZnJvbSBcIi4vc3Bpbm5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJMaXN0IHtcbiAgbGlzdDpIVE1MRWxlbWVudFxuICBjb25zdHJ1Y3RvciAoKXtcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyaWVzX19saXN0JykhXG4gIH1cbiAgY2xlYXJMaXN0ID0gKCk9PntcbiAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gJydcbiAgfVxuICBhZGRDb3VudHJ5ID0gKHtuYW1lLCBwb3B1bGF0aW9uLHJlZ2lvbixjYXBpdGFsLGltZ306Q291bnRyeSk9PntcbiAgICB0aGlzLmxpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgPGxpIGNsYXNzPVwiY291bnRyaWVzX19jb3VudHJ5LWl0ZW0gY291bnRyeVwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7aW1nfVwiIGFsdD1cIlwiIGNsYXNzPVwiY291bnRyeV9fZmxhZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY291bnRyeV9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImNvdW50cnlfX3RpdGxlXCI+JHtuYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX2luZm9cIj48Yj5Qb3B1bGF0aW9uOjwvYj4ke3BvcHVsYXRpb259PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb3VudHJ5X19pbmZvXCI+PGI+UmVnaW9uOjwvYj4gJHtyZWdpb259PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb3VudHJ5X19pbmZvXCI+PGI+Q2FwaXRhbDo8L2I+ICR7Y2FwaXRhbH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbGk+YClcbiAgfVxuICBhZGRBcnJheUNvdW50cmllcyA9IChhcnI6Q291bnRyeVtdKT0+e1xuICAgIHNwaW5uZXIuYWN0aXZhdGUoKVxuICAgIHRoaXMuY2xlYXJMaXN0KClcbiAgICBhcnIuZm9yRWFjaChlbD0+dGhpcy5hZGRDb3VudHJ5KGVsKSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNwaW5uZXIuZGVhY3RpdmF0ZSgpXG4gICAgfSwgNTAwKTtcbiAgICBcbiAgfVxufSIsImNsYXNzIFNwaW5uZXIge1xuICBlbGVtZW50OkhUTUxEaXZFbGVtZW50XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwaW5uZXItd3JhcHBlcicpIVxuICB9XG4gIGFjdGl2YXRlID0gKCk9PntcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3Bpbm5lci1kZWFjdGl2YXRlZCcpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NwaW5uZXItYWN0aXZlJylcbiAgfVxuICBkZWFjdGl2YXRlID0gKCk9PntcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc3Bpbm5lci1hY3RpdmUnKVxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzcGlubmVyLWRlYWN0aXZhdGVkJylcbiAgfVxufVxuY29uc3Qgc3Bpbm5lciA9IG5ldyBTcGlubmVyKClcbmV4cG9ydCBkZWZhdWx0IHNwaW5uZXIgIiwiY29uc3QgdGhlbWUgPSAod2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMgPyBcImRhcmtcIiA6IFwibGlnaHRcIilcbmNvbnN0IGJ0bk1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idG4tbW9kZS1ibG9jaycpIVxuaWYgKHRoZW1lKVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZSlcblxuYnRuTW9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIpO1xuICBsZXQgdGFyZ2V0VGhlbWVcbiAgY3VycmVudFRoZW1lID09PSBcImxpZ2h0XCIgPyB0YXJnZXRUaGVtZSA9IFwiZGFya1wiIDogdGFyZ2V0VGhlbWUgPSBcImxpZ2h0XCJcbiBcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIHRhcmdldFRoZW1lKVxufSlcbiAiLCJpbXBvcnQgeyBBcnJheUJpbmRpbmdPckFzc2lnbm1lbnRFbGVtZW50IH0gZnJvbSBcInR5cGVzY3JpcHRcIlxuaW1wb3J0IFwiLi4vaW5kZXguaHRtbFwiXG5pbXBvcnQgQ291bnRyeSBmcm9tIFwiLi9jb21wb25lbnQvY291bnRyeVwiXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9jb21wb25lbnQvZ2V0RGF0YVwiXG5pbXBvcnQgUmVuZGVyTGlzdCBmcm9tIFwiLi9jb21wb25lbnQvcmVuZGVyTGlzdFwiXG5pbXBvcnQgXCIuL2NvbXBvbmVudC90aGVtZVwiO1xuXG5jb25zdCByZW5kZXJGbiA9IG5ldyBSZW5kZXJMaXN0KClcblxuY2xhc3MgQXBwIHtcbiAgZWxlbWVudDpIVE1MSW5wdXRFbGVtZW50XG4gIG9wdGlvbnM6SFRNTFVMaXN0RWxlbWVudFxuICBzZWxlY3Q6SFRNTFNlbGVjdEVsZW1lbnRcbiAgcHJpdmF0ZSBfc2VsZWN0Q2hvaWNlOiBzdHJpbmd8bnVsbFxuICBwcml2YXRlIF9zZWxlY3RSZWdpb246IENvdW50cnlbXVxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JykhXG4gICAgdGhpcy5vcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fb3B0aW9ucycpIVxuICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fc2VsZWN0LXJlZ2lvbicpIVxuICAgIHRoaXMuX3NlbGVjdENob2ljZSA9IG51bGxcbiAgICB0aGlzLl9zZWxlY3RSZWdpb249W11cbiAgICB0aGlzLl91cGRhdGVEb20oKVxuICAgIHRoaXMuX3NlbGVjdExpc3RlbmVyKClcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdExpc3RlbmVyID0gKCk9PntcbiAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBhc3luYyAoKT0+e1xuICAgICAgdGhpcy5fc2VsZWN0Q2hvaWNlID0gdGhpcy5zZWxlY3QudmFsdWVcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RDaG9pY2U9PT1cIkFsbFwiKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdFJlZ2lvbiA9IGF3YWl0IHJlcXVlc3QuZ2V0QWxsQ291bnRyaWVzKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdFJlZ2lvbiA9IGF3YWl0IHJlcXVlc3QuZ2V0Q291bnRpZXNGcm9tUmVnaW9uc1JlcXVlc3QodGhpcy5fc2VsZWN0Q2hvaWNlKVxuICAgICAgfVxuICAgICAgcmVuZGVyRm4uYWRkQXJyYXlDb3VudHJpZXModGhpcy5fc2VsZWN0UmVnaW9uKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIF9nZXRWYWx1ZSA9ICgpPT57XG4gICAgaWYgKHRoaXMuc2VsZWN0LnZhbHVlPT09J0FsbCd8fHRoaXMuc2VsZWN0LnZhbHVlPT09J0luaXRpYWwnKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdC5nZXRTZWFyY2hSZXN1bHRzKHRoaXMuZWxlbWVudC52YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2VhcmNoTGV0dGVycyA9IHRoaXMuZWxlbWVudC52YWx1ZS5zcGxpdCgnJylcbiAgICAgIGNvbnN0IGNvdW50cmllcyA9IHRoaXMuX3NlbGVjdFJlZ2lvbi5maWx0ZXIoY291bnRyeT0+e1xuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlXG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb3VudHJ5Lm5hbWUuc3BsaXQoJycpXG4gICAgICAgIHNlYXJjaExldHRlcnMuZm9yRWFjaChsZXR0ZXI9PntcbiAgICAgICAgICBjb25zdCBpbmRleCA9IG5hbWUuZmluZEluZGV4KGVsPT5lbD09PWxldHRlcilcbiAgICAgICAgICBpZiAoaW5kZXghPT0tMSkge25hbWUuc3BsaWNlKGluZGV4LDEpfSBlbHNlIHtjaGVjaz1mYWxzZX1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNoZWNrXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGNvdW50cmllcy5tYXAoY291bnRyeT0+Y291bnRyeS5uYW1lKVxuICAgIH1cbiAgfSBcblxuICBwcml2YXRlIF9hZGRPcHRpb24gPSAodmFsdWU6c3RyaW5nKT0+e1xuICAgIHRoaXMub3B0aW9ucy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYFxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hfX29wdGlvblwiPiR7dmFsdWV9PC9kaXY+XG4gIGApXG4gIH1cblxuICBjbGVhck9wdGlvbnMgPSAoKT0+dGhpcy5vcHRpb25zLmlubmVySFRNTD0nJ1xuXG4gIHByaXZhdGUgX3VwZGF0ZURvbSA9IGFzeW5jICgpPT57XG4gICAgbGV0IGRlbGF5OiBOb2RlSlMuVGltZW91dFxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpPT57XG5cbiAgICAgIGlmIChkZWxheSkge2NsZWFyVGltZW91dChkZWxheSl9XG4gICAgICBkZWxheSA9IHNldFRpbWVvdXQoYXN5bmMgKCk9PntcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2xlYXJPcHRpb25zKClcbiAgICAgICAgXG4gICAgICAgIHRyeSB7ICAgICAgICAgIFxuICAgICAgICAgIGNvbnN0IHNlYXJjaFZhbHVlcyA9IGF3YWl0IHRoaXMuX2dldFZhbHVlKClcbiAgICAgICAgICBzZWFyY2hWYWx1ZXMuZm9yRWFjaChlbD0+dGhpcy5fYWRkT3B0aW9uKGVsKSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgIHRoaXMuY2xlYXJPcHRpb25zKClcbiAgICAgICAgICB0aGlzLl9hZGRPcHRpb24oJ0NvdW50cnkgbm90IGZvdW5kJylcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC52YWx1ZT09PScnKSB7IHRoaXMuY2xlYXJPcHRpb25zKCl9XG4gICAgICAgIH1cbiAgICAgICAgICAsNTAwKVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCBzZWFyY2ggPSBuZXcgQXBwKClcblxuY2xhc3MgQ2xpY2tIYW5kbGVyIHtcbiAgaGFuZGxlcjogKCkgPT4gdm9pZFxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuaGFuZGxlciA9ICgpPT57XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCk9PntcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gIGV2ZW50LnRhcmdldFxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtyZXR1cm59XG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2hfX29wdGlvbicpKSB7IFxuICAgICAgICAgIGlmICghdGFyZ2V0LnRleHRDb250ZW50IHx8IHRhcmdldC50ZXh0Q29udGVudD09PSdDb3VudHJ5IG5vdCBmb3VuZCcpIHtyZXR1cm59XG4gICAgICAgICAgY29uc3QgY291bnRyeSA9IGF3YWl0IHJlcXVlc3QuZ2V0Q291bnRyeSh0YXJnZXQudGV4dENvbnRlbnQpXG4gICAgICAgICAgcmVuZGVyRm4uYWRkQXJyYXlDb3VudHJpZXMoW2NvdW50cnldKVxuICAgICAgICAgIHNlYXJjaC5jbGVhck9wdGlvbnMoKVxuICAgICAgICAgIHNlYXJjaC5lbGVtZW50LnZhbHVlPWNvdW50cnkubmFtZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fYnRuLW1vZGUtYmxvY2snKSkge1xuICAgICAgICAgIC8vIENoYW5nZSBkYXJrL2xpZ2h0IG1vZGVcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2MnKTtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgIH1cbiAgfVxufVxuXG5uZXcgQ2xpY2tIYW5kbGVyKCkuaGFuZGxlcigpXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=