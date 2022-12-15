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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width/ninitial-scale=1.0\">\n    <title>Country</title>\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n\n</head>\n\n<body>\n    <header class=\"header\">\n        <h1 class=\"header__title\">Where in the world?</h1>\n        <div class=\"header__btn-mode-block\">\n            <img class=\"header__btn-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n            <button class=\"header__btn-mode\">Dark Mode</button>\n        </div>\n    </header>\n    <main class=\"countries__container\">\n\n        <form action=\"\" class=\"countries__search-form search\">\n            <input type=\"search\" class=\"search__input\" id=\"country-search\" placeholder=\"Search for a country...\">\n            <select class=\"search__select-region\" name=\"regions\" id=\"sel1\">\n                <option value=\"\">--Please choose a region--</option>\n                <option value=\"All\">All</option>\n                <option value=\"Africa\">Africa</option>\n                <option value=\"Americas\">Americas</option>\n                <option value=\"Asia\">Asia</option>\n                <option value=\"Europe\">Europe</option>\n                <option value=\"Oceania\">Oceania</option>\n            </select>\n        </form>\n        \n        <ul class=\"countries__list\">\n            \n        </ul>\n    </main>\n</body>\n\n</html>\n";
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

/***/ "./src/ts/component/listenerSelect.ts":
/*!********************************************!*\
  !*** ./src/ts/component/listenerSelect.ts ***!
  \********************************************/
/***/ (() => {




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
__webpack_require__(/*! ./component/listenerSelect */ "./src/ts/component/listenerSelect.ts");
const request = new getData_1.default();
const renderFn = new renderList_1.default();
const select = document.querySelector('.search__select-region');
select.addEventListener('change', () => __awaiter(void 0, void 0, void 0, function* () {
    const value = select.value;
    renderFn.addArrayCountries(yield request.getCountiesFromRegionsRequest(value));
}));
// async () => {
//   console.log(GetData);
//   const country = await request.getCountry('ukr')
//   // console.log(country);
//   renderFn.addCountry(country)
//   renderFn.clearList()
//   await renderFn.addArrayCountries(await request.getCountiesFromRegionsRequest('europe'))
// }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anMvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvY291bnRyeS50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvZ2V0RGF0YS50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvcmVuZGVyTGlzdC50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc2Fzcy9zdHlsZS5zYXNzXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL21vb24td2FuaW5nLWNyZXNjZW50LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuXFxuPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIj5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aC9uaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcbiAgICA8dGl0bGU+Q291bnRyeTwvdGl0bGU+XFxuICAgIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPlxcblxcbjwvaGVhZD5cXG5cXG48Ym9keT5cXG4gICAgPGhlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICAgIDxoMSBjbGFzcz1cXFwiaGVhZGVyX190aXRsZVxcXCI+V2hlcmUgaW4gdGhlIHdvcmxkPzwvaDE+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2J0bi1tb2RlLWJsb2NrXFxcIj5cXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJoZWFkZXJfX2J0bi1pbWdcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJoZWFkZXJfX2J0bi1tb2RlXFxcIj5EYXJrIE1vZGU8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG4gICAgPG1haW4gY2xhc3M9XFxcImNvdW50cmllc19fY29udGFpbmVyXFxcIj5cXG5cXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cXFwiXFxcIiBjbGFzcz1cXFwiY291bnRyaWVzX19zZWFyY2gtZm9ybSBzZWFyY2hcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzZWFyY2hcXFwiIGNsYXNzPVxcXCJzZWFyY2hfX2lucHV0XFxcIiBpZD1cXFwiY291bnRyeS1zZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggZm9yIGEgY291bnRyeS4uLlxcXCI+XFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwic2VhcmNoX19zZWxlY3QtcmVnaW9uXFxcIiBuYW1lPVxcXCJyZWdpb25zXFxcIiBpZD1cXFwic2VsMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIlxcXCI+LS1QbGVhc2UgY2hvb3NlIGEgcmVnaW9uLS08L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQWxsXFxcIj5BbGw8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQWZyaWNhXFxcIj5BZnJpY2E8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiQW1lcmljYXNcXFwiPkFtZXJpY2FzPC9vcHRpb24+XFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIkFzaWFcXFwiPkFzaWE8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiRXVyb3BlXFxcIj5FdXJvcGU8L29wdGlvbj5cXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiT2NlYW5pYVxcXCI+T2NlYW5pYTwvb3B0aW9uPlxcbiAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICAgICAgXFxuICAgICAgICA8dWwgY2xhc3M9XFxcImNvdW50cmllc19fbGlzdFxcXCI+XFxuICAgICAgICAgICAgXFxuICAgICAgICA8L3VsPlxcbiAgICA8L21haW4+XFxuPC9ib2R5PlxcblxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGludGVyZmFjZSBJQ291bnRyeUFuc3dlciB7XG4gIGNhcGl0YWw6c3RyaW5nXG4gIGZsYWdzIDoge1xuICAgIHN2ZzpzdHJpbmdcbiAgfVxuICBuYW1lOnsgb2ZmaWNpYWw6IHN0cmluZ31cbiAgcG9wdWxhdGlvbjpudW1iZXJcbiAgcmVnaW9uOnN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudHJ5IHtcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6c3RyaW5nLCBwdWJsaWMgcG9wdWxhdGlvbjpudW1iZXIscHVibGljIHJlZ2lvbjpzdHJpbmcscHVibGljIGNhcGl0YWw6c3RyaW5nLHB1YmxpYyBpbWc6c3RyaW5nKXtcbiAgfVxuICBnZXRDb3VudHJ5ID0gKCk9PntcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG4iLCJcbmltcG9ydCBDb3VudHJ5IGZyb20gXCIuL2NvdW50cnlcIlxuaW1wb3J0IHsgSUNvdW50cnlBbnN3ZXIgfSBmcm9tIFwiLi9jb3VudHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdldERhdGEge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdEJ5TmFtZSA9IGFzeW5jIChuYW1lQ291bnRyeTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL25hbWUvJHtuYW1lQ291bnRyeX1gKVxuICAgIGNvbnN0IGRhdGE6SUNvdW50cnlBbnN3ZXJbXSA9IGF3YWl0IGFuc3dlci5qc29uKClcbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdEJ5UmVnaW9uID1hc3luYyAocmVnaW9uOnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFuc3dlciA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jlc3Rjb3VudHJpZXMuY29tL3YzLjEvcmVnaW9uLyR7cmVnaW9ufWApXG4gICAgY29uc3QgZGF0YTpJQ291bnRyeUFuc3dlcltdID0gYXdhaXQgYW5zd2VyLmpzb24oKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBwcml2YXRlIF9nZXRDb3VudHJ5T2JqRnJvbUFuc3dlciA9IChhbnN3ZXI6SUNvdW50cnlBbnN3ZXIpPT57XG4gICAgY29uc3Qge2NhcGl0YWwsIG5hbWU6e29mZmljaWFsOm5hbWV9LCBwb3B1bGF0aW9uLHJlZ2lvbixmbGFnczp7c3ZnOmltZ319ID0gYW5zd2VyXG4gICAgcmV0dXJuIG5ldyBDb3VudHJ5KG5hbWUscG9wdWxhdGlvbixyZWdpb24sY2FwaXRhbCxpbWcpXG4gIH1cblxuICBwcml2YXRlIF9nZXRDb3VudHJpZXNGcm9tUmVxdWVzdCA9IChkYXRhOklDb3VudHJ5QW5zd2VyW10pID0+IHtcbiAgICByZXR1cm4gZGF0YS5tYXAoKGNvdW50cnlPYmopPT50aGlzLl9nZXRDb3VudHJ5T2JqRnJvbUFuc3dlcihjb3VudHJ5T2JqKSlcbiAgfVxuICBcbiAgZ2V0Q291bnRyeSA9IGFzeW5jIChuYW1lQ291bnRyeTpzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fcmVxdWVzdEJ5TmFtZShuYW1lQ291bnRyeSlcbiAgICByZXR1cm4gdGhpcy5fZ2V0Q291bnRyaWVzRnJvbVJlcXVlc3QoZGF0YSlbMF1cbiAgfVxuXG4gIGdldENvdW50aWVzRnJvbVJlZ2lvbnNSZXF1ZXN0ID0gYXN5bmMgKHJlZ2lvbjpzdHJpbmcpPT57XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX3JlcXVlc3RCeVJlZ2lvbihyZWdpb24pXG4gICAgcmV0dXJuIHRoaXMuX2dldENvdW50cmllc0Zyb21SZXF1ZXN0KGRhdGEpXG4gIH1cblxuICBnZXRTZWFyY2hSZXN1bHRzID0gYXN5bmMgKG5hbWVDb3VudHJ5OnN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9yZXF1ZXN0QnlOYW1lKG5hbWVDb3VudHJ5KVxuICAgIGNvbnN0IHNlYXJjaExpc3QgPSBkYXRhLm1hcChlbGVtPT5lbGVtLm5hbWUub2ZmaWNpYWwpXG4gICAgcmV0dXJuIHNlYXJjaExpc3RcbiAgfVxufVxuXG5cblxuXG4gIFxuICBcbiAgIiwiaW1wb3J0IENvdW50cnkgZnJvbSBcIi4vY291bnRyeVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlckxpc3Qge1xuICBsaXN0OkhUTUxFbGVtZW50XG4gIGNvbnN0cnVjdG9yICgpe1xuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJpZXNfX2xpc3QnKSFcbiAgfVxuICBjbGVhckxpc3QgPSAoKT0+e1xuICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSAnJ1xuICB9XG4gIGFkZENvdW50cnkgPSAoe25hbWUsIHBvcHVsYXRpb24scmVnaW9uLGNhcGl0YWwsaW1nfTpDb3VudHJ5KT0+e1xuICAgIHRoaXMubGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICA8bGkgY2xhc3M9XCJjb3VudHJpZXNfX2NvdW50cnktaXRlbSBjb3VudHJ5XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtpbWd9XCIgYWx0PVwiXCIgY2xhc3M9XCJjb3VudHJ5X19mbGFnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5X19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiY291bnRyeV9fdGl0bGVcIj4ke25hbWV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY291bnRyeV9faW5mb1wiPjxiPlBvcHVsYXRpb246PC9iPiR7cG9wdWxhdGlvbn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX2luZm9cIj48Yj5SZWdpb246PC9iPiAke3JlZ2lvbn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX2luZm9cIj48Yj5DYXBpdGFsOjwvYj4gJHtjYXBpdGFsfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9saT5gKVxuICB9XG4gIGFkZEFycmF5Q291bnRyaWVzID0gKGFycjpDb3VudHJ5W10pPT57XG4gICAgdGhpcy5jbGVhckxpc3QoKVxuICAgIGFyci5mb3JFYWNoKGVsPT50aGlzLmFkZENvdW50cnkoZWwpKVxuICB9XG59IiwiaW1wb3J0IFwiLi4vaW5kZXguaHRtbFwiXG5pbXBvcnQgR2V0RGF0YSBmcm9tIFwiLi9jb21wb25lbnQvZ2V0RGF0YVwiXG5pbXBvcnQgUmVuZGVyTGlzdCBmcm9tIFwiLi9jb21wb25lbnQvcmVuZGVyTGlzdFwiXG5pbXBvcnQgXCIuL2NvbXBvbmVudC9saXN0ZW5lclNlbGVjdFwiO1xuXG5jb25zdCByZXF1ZXN0ID0gbmV3IEdldERhdGEoKVxuY29uc3QgcmVuZGVyRm4gPSBuZXcgUmVuZGVyTGlzdCgpXG5cbmNvbnN0IHNlbGVjdDpIVE1MU2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX3NlbGVjdC1yZWdpb24nKSFcblxuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jICgpPT57XG4gIGNvbnN0IHZhbHVlID0gc2VsZWN0LnZhbHVlXG4gIHJlbmRlckZuLmFkZEFycmF5Q291bnRyaWVzKGF3YWl0IHJlcXVlc3QuZ2V0Q291bnRpZXNGcm9tUmVnaW9uc1JlcXVlc3QodmFsdWUpKVxufSlcblxuLy8gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhHZXREYXRhKTtcbiAgXG4vLyAgIGNvbnN0IGNvdW50cnkgPSBhd2FpdCByZXF1ZXN0LmdldENvdW50cnkoJ3VrcicpXG4vLyAgIC8vIGNvbnNvbGUubG9nKGNvdW50cnkpO1xuICBcbi8vICAgcmVuZGVyRm4uYWRkQ291bnRyeShjb3VudHJ5KVxuLy8gICByZW5kZXJGbi5jbGVhckxpc3QoKVxuLy8gICBhd2FpdCByZW5kZXJGbi5hZGRBcnJheUNvdW50cmllcyhhd2FpdCByZXF1ZXN0LmdldENvdW50aWVzRnJvbVJlZ2lvbnNSZXF1ZXN0KCdldXJvcGUnKSlcblxuLy8gfVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdHMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=