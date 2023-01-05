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
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Shop</title>\n  </head>\n\n  <body>\n    <header class=\"header\">\n      <div class=\"header__container\">\n        <nav class=\"header_nav\">\n          <ul class=\"header__nav-links-list\">\n            <li class=\"header__nav-link-item\">\n              <a href=\"./index.html\" class=\"header__nav-link\">Home</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"./products.html\" class=\"header__nav-link\">Products</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"\" class=\"header__nav-link\">About</a>\n            </li>\n          </ul>\n          <span class=\"header__logo\">comfy</span>\n          <button class=\"header__btn-cart btn-cart\">\n            <svg class=\"btn-cart__img\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n              <path\n                fill=\"currentColor\"\n                d=\"M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z\"\n              />\n            </svg>\n            <div class=\"btn-cart__quantity\">2</div>\n          </button>\n        </nav>\n      </div>\n    </header>\n    <main class=\"hero\">\n      <div class=\"hero__container\">\n        <h1 class=\"hero__title\">Rest, Relax, Unwind</h1>\n        <p class=\"hero__text\">Embrace your choices - we do</p>\n        <a href=\"./products.html\" class=\"hero__btn-link\">show now</a>\n        <div class=\"hero__license\">\n          Photo by\n          <a\n            href=\"https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\n            >Annie Spratt</a\n          >\n          on\n          <a\n            href=\"https://unsplash.com/photos/52AAiXWoVi0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\n            >Unsplash</a\n          >\n        </div>\n      </div>\n    </main>\n    <footer class=\"footer\">\n      <div class=\"footer__container\">\n        <h2 class=\"footer__title\">Featured</h2>\n        <ul class=\"footer__featured-list\">\n          <li class=\"footer__featured-item shopping-item\">\n            <img\n              src=\"https://www.ikea.com/ca/en/images/products/lidas-chair-white-sefast-chrome-plated__1106347_pe868688_s5.jpg?f=xl\"\n              alt=\"\"\n              class=\"shopping-item__img\"\n            />\n            <h3 class=\"shopping-item__name\">Hugh-Back Bench</h3>\n            <data class=\"shopping-item__price-value\" value=\"9.99\">$9.99</data>\n          </li>\n          <li class=\"footer__featured-item shopping-item\">\n            <img\n              src=\"https://www.ikea.com/ca/en/images/products/lidas-chair-white-sefast-chrome-plated__1106347_pe868688_s5.jpg?f=xl\"\n              alt=\"\"\n              class=\"shopping-item__img\"\n            />\n            <h3 class=\"shopping-item__name\">Hugh-Back Bench</h3>\n            <data class=\"shopping-item__price-value\" value=\"9.99\">$9.99</data>\n          </li>\n          <li class=\"footer__featured-item shopping-item\">\n            <img\n              src=\"https://www.ikea.com/ca/en/images/products/lidas-chair-white-sefast-chrome-plated__1106347_pe868688_s5.jpg?f=xl\"\n              alt=\"\"\n              class=\"shopping-item__img\"\n            />\n            <h3 class=\"shopping-item__name\">Hugh-Back Bench</h3>\n            <data class=\"shopping-item__price-value\" value=\"9.99\">$9.99</data>\n          </li>\n        </ul>\n      </div>\n    </footer>\n    <div class=\"shopping-cart__wrapper hidden\">\n      <section class=\"shopping-cart\">\n        <button class=\"shopping-cart__btn_exit\">\n          <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n            <path\n              fill=\"currentColor\"\n              d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\"\n            />\n          </svg>\n        </button>\n        <h3 class=\"shopping-cart__title\">Your Bag</h3>\n        <ul class=\"shopping-cart__list\">\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduse-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduse-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n        </ul>\n        <p class=\"shopping-cart__total\">\n          Total :\n          <data class=\"shopping-cart__total_amount\">$114.94</data>\n        </p>\n        <button class=\"shopping-cart__btn_checkout\">checkout</button>\n      </section>\n    </div>\n    <span class=\"mdi mdi-content-save-minus-outline\"></span>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/products.html":
/*!***************************!*\
  !*** ./src/products.html ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Products</title>\n  </head>\n  <body>\n    <header class=\"header\">\n      <div class=\"header__container\">\n        <nav class=\"header_nav\">\n          <ul class=\"header__nav-links-list\">\n            <li class=\"header__nav-link-item\">\n              <a href=\"./index.html\" class=\"header__nav-link\">Home</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"./products.html\" class=\"header__nav-link\">Products</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"\" class=\"header__nav-link\">About</a>\n            </li>\n          </ul>\n          <span class=\"header__logo\">comfy</span>\n          <button class=\"header__btn-cart btn-cart\">\n            <svg class=\"btn-cart__img\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n              <path\n                fill=\"currentColor\"\n                d=\"M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z\"\n              />\n            </svg>\n            <div class=\"btn-cart__quantity\">2</div>\n          </button>\n        </nav>\n      </div>\n    </header>\n\n    <section class=\"site-location\">\n      <div class=\"site-location__container\">\n        <a class=\"site-location__link\" href=\"./index.html\">Home </a> /\n        <a class=\"site-location__link\" href=\"./products.html\">Products</a>\n      </div>\n    </section>\n    <main class=\"main\">\n      <div class=\"main__container\">\n        <aside class=\"sidebar\">\n          \n          <!-- <input class=\"sidebar__price-range\" type=\"range\" name=\"price-range\" /> -->\n        </aside>\n\n        <ul class=\"products\"></ul>\n      </div>\n    </main>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/sass/style.sass":
/*!*****************************!*\
  !*** ./src/sass/style.sass ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ts/component/app.ts":
/*!*********************************!*\
  !*** ./src/ts/component/app.ts ***!
  \*********************************/
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
const getShopData_1 = __importDefault(__webpack_require__(/*! ./getShopData */ "./src/ts/component/getShopData.ts"));
console.log(getShopData_1.default);
class Render {
    constructor() {
        this.renderHtmlProductsList = (productArray) => {
            this.list.innerHTML = '';
            productArray.forEach((elem) => {
                const { title, price, images } = elem;
                this.list.insertAdjacentHTML('beforeend', `
      <li class="products__item shopping-item">
        <img src="${images[0]}" alt="" class="shopping-item__img">
        <h3 class="shopping-item__name">${title}</h3>
        <data class="shopping-item__price-value" value="${price}">$${price}</data>
      </li>
    `);
            });
        };
        this._renderSearch = () => {
            this.sidebar.insertAdjacentHTML('afterbegin', `
    <input class="sidebar__search" type="text" name="search" placeholder="Search..." />
    `);
        };
        this._renderFilterCategory = (name, values) => {
            this.sidebar.insertAdjacentHTML('beforeend', `
      <h3 class="sidebar__title">${name}</h3>
      <ul class="sidebar__filter-list" id="categoriesList${name}">
        <li class="sidebar__filter-item">All</li>
      </ul>
      `);
            const listFilter = this.sidebar.querySelector(`#categoriesList${name}`);
            values.forEach((value) => {
                listFilter === null || listFilter === void 0 ? void 0 : listFilter.insertAdjacentHTML('beforeend', `
      <li class="sidebar__filter-item">${value}</li>`);
            });
        };
        this._renderPriceRange = (arr) => {
            this.sidebar.insertAdjacentHTML('beforeend', `
      <h3 class="sidebar__title">Price</h3>
      <input class="sidebar__price-range" type="range" name="price-range" max="${arr.max}" min="${arr.min}" />
      <data class="sidebar__filter-max-price">Value : $80</data>
      `);
        };
        this.renderSideBar = (data) => {
            this._renderSearch();
            Object.entries(data.filters).forEach((prop) => {
                const [name, value] = prop;
                this._renderFilterCategory(name, value);
            });
            this._renderPriceRange(data.priceRange);
        };
        this.list = document.querySelector('.products');
        this.sidebar = document.querySelector('.sidebar');
    }
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield getShopData_1.default.initialize();
    new Render().renderHtmlProductsList(getShopData_1.default.list);
    new Render().renderSideBar(getShopData_1.default);
}))();


/***/ }),

/***/ "./src/ts/component/getShopData.ts":
/*!*****************************************!*\
  !*** ./src/ts/component/getShopData.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopData = void 0;
class ShopData {
    constructor() {
        this._requestFromServ = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const answer = yield fetch('https://dummyjson.com/products?limit=100');
                const data = yield answer.json();
                return data.products;
            }
            catch (error) {
                console.log(error);
            }
        });
        this._getBrands = () => { var _a; return [...new Set((_a = this.list) === null || _a === void 0 ? void 0 : _a.map((product) => product.brand))]; };
        this._getCategories = () => { var _a; return [...new Set((_a = this.list) === null || _a === void 0 ? void 0 : _a.map((product) => product.category))]; };
        this._getPriceRange = () => {
            var _a;
            const prices = (_a = this.list) === null || _a === void 0 ? void 0 : _a.map((product) => product.price);
            if (prices) {
                return {
                    min: Math.min(...prices),
                    max: Math.max(...prices)
                };
            }
        };
        this.initialize = () => __awaiter(this, void 0, void 0, function* () {
            this.list = yield this._requestFromServ();
            this.filters = {
                brands: [],
                categories: []
            };
            this.filters.brands = this._getBrands();
            this.filters.categories = this._getCategories();
            this.priceRange = this._getPriceRange();
        });
    }
}
exports.ShopData = ShopData;
const dataShop = new ShopData();
exports["default"] = dataShop;


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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../index.html */ "./src/index.html");
__webpack_require__(/*! ../products.html */ "./src/products.html");
__webpack_require__(/*! ../sass/style.sass */ "./src/sass/style.sass");
__webpack_require__(/*! ./component/app */ "./src/ts/component/app.ts");
document.addEventListener('DOMContentLoaded', (e) => {
    document.documentElement.setAttribute('title', document.title);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdFQUF5QjtBQUV6QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNsRCxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9qcy8uL3NyYy9wcm9kdWN0cy5odG1sIiwid2VicGFjazovL2pzLy4vc3JjL3Nhc3Mvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvYXBwLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9nZXRTaG9wRGF0YS50cyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLy4vc3JjL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXG4gICAgPHRpdGxlPlNob3A8L3RpdGxlPlxcbiAgPC9oZWFkPlxcblxcbiAgPGJvZHk+XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPG5hdiBjbGFzcz1cXFwiaGVhZGVyX25hdlxcXCI+XFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua3MtbGlzdFxcXCI+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9pbmRleC5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+SG9tZTwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPlByb2R1Y3RzPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+QWJvdXQ8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRlcl9fbG9nb1xcXCI+Y29tZnk8L3NwYW4+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcl9fYnRuLWNhcnQgYnRuLWNhcnRcXFwiPlxcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcImJ0bi1jYXJ0X19pbWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICBkPVxcXCJNMTcsMThDMTUuODksMTggMTUsMTguODkgMTUsMjBBMiwyIDAgMCwwIDE3LDIyQTIsMiAwIDAsMCAxOSwyMEMxOSwxOC44OSAxOC4xLDE4IDE3LDE4TTEsMlY0SDNMNi42LDExLjU5TDUuMjQsMTQuMDRDNS4wOSwxNC4zMiA1LDE0LjY1IDUsMTVBMiwyIDAgMCwwIDcsMTdIMTlWMTVINy40MkEwLjI1LDAuMjUgMCAwLDEgNy4xNywxNC43NUM3LjE3LDE0LjcgNy4xOCwxNC42NiA3LjIsMTQuNjNMOC4xLDEzSDE1LjU1QzE2LjMsMTMgMTYuOTYsMTIuNTggMTcuMywxMS45N0wyMC44OCw1LjVDMjAuOTUsNS4zNCAyMSw1LjE3IDIxLDVBMSwxIDAgMCwwIDIwLDRINS4yMUw0LjI3LDJNNywxOEM1Ljg5LDE4IDUsMTguODkgNSwyMEEyLDIgMCAwLDAgNywyMkEyLDIgMCAwLDAgOSwyMEM5LDE4Ljg5IDguMSwxOCA3LDE4WlxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWNhcnRfX3F1YW50aXR5XFxcIj4yPC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9uYXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcbiAgICA8bWFpbiBjbGFzcz1cXFwiaGVyb1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVyb19fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxoMSBjbGFzcz1cXFwiaGVyb19fdGl0bGVcXFwiPlJlc3QsIFJlbGF4LCBVbndpbmQ8L2gxPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcImhlcm9fX3RleHRcXFwiPkVtYnJhY2UgeW91ciBjaG9pY2VzIC0gd2UgZG88L3A+XFxuICAgICAgICA8YSBocmVmPVxcXCIuL3Byb2R1Y3RzLmh0bWxcXFwiIGNsYXNzPVxcXCJoZXJvX19idG4tbGlua1xcXCI+c2hvdyBub3c8L2E+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZXJvX19saWNlbnNlXFxcIj5cXG4gICAgICAgICAgUGhvdG8gYnlcXG4gICAgICAgICAgPGFcXG4gICAgICAgICAgICBocmVmPVxcXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYW5uaWVzcHJhdHQ/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XFxcIlxcbiAgICAgICAgICAgID5Bbm5pZSBTcHJhdHQ8L2FcXG4gICAgICAgICAgPlxcbiAgICAgICAgICBvblxcbiAgICAgICAgICA8YVxcbiAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy81MkFBaVhXb1ZpMD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcXFwiXFxuICAgICAgICAgICAgPlVuc3BsYXNoPC9hXFxuICAgICAgICAgID5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L21haW4+XFxuICAgIDxmb290ZXIgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXJfX3RpdGxlXFxcIj5GZWF0dXJlZDwvaDI+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcImZvb3Rlcl9fZmVhdHVyZWQtbGlzdFxcXCI+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1pdGVtIHNob3BwaW5nLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly93d3cuaWtlYS5jb20vY2EvZW4vaW1hZ2VzL3Byb2R1Y3RzL2xpZGFzLWNoYWlyLXdoaXRlLXNlZmFzdC1jaHJvbWUtcGxhdGVkX18xMTA2MzQ3X3BlODY4Njg4X3M1LmpwZz9mPXhsXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lXFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZVxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImZvb3Rlcl9fZmVhdHVyZWQtaXRlbSBzaG9wcGluZy1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vd3d3LmlrZWEuY29tL2NhL2VuL2ltYWdlcy9wcm9kdWN0cy9saWRhcy1jaGFpci13aGl0ZS1zZWZhc3QtY2hyb21lLXBsYXRlZF9fMTEwNjM0N19wZTg2ODY4OF9zNS5qcGc/Zj14bFxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZ1xcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZVxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJmb290ZXJfX2ZlYXR1cmVkLWl0ZW0gc2hvcHBpbmctaXRlbVxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3d3dy5pa2VhLmNvbS9jYS9lbi9pbWFnZXMvcHJvZHVjdHMvbGlkYXMtY2hhaXItd2hpdGUtc2VmYXN0LWNocm9tZS1wbGF0ZWRfXzExMDYzNDdfcGU4Njg2ODhfczUuanBnP2Y9eGxcXFwiXFxuICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWdcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Zvb3Rlcj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fd3JhcHBlciBoaWRkZW5cXFwiPlxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0XFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2J0bl9leGl0XFxcIj5cXG4gICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgZD1cXFwiTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWlxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190aXRsZVxcXCI+WW91ciBCYWc8L2gzPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19saXN0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19pdGVtIHNob3BwaW5nLWl0ZW1fY2FydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2luZm8tY2FydFxcXCI+XFxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVfY2FydFxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZV9jYXJ0XFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVtb3ZlXFxcIj5yZW1vdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eVxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fYWRkLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSwxNS40MUwxMiwxMC44M0wxNi41OSwxNS40MUwxOCwxNEwxMiw4TDYsMTRMNy40MSwxNS40MVpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5LWRpc3BsYXlcXFwiPjU8L2Rpdj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZWR1c2UtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19pdGVtIHNob3BwaW5nLWl0ZW1fY2FydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2luZm8tY2FydFxcXCI+XFxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVfY2FydFxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZV9jYXJ0XFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVtb3ZlXFxcIj5yZW1vdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eVxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fYWRkLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSwxNS40MUwxMiwxMC44M0wxNi41OSwxNS40MUwxOCwxNEwxMiw4TDYsMTRMNy40MSwxNS40MVpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5LWRpc3BsYXlcXFwiPjU8L2Rpdj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZWR1c2UtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgICA8cCBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fdG90YWxcXFwiPlxcbiAgICAgICAgICBUb3RhbCA6XFxuICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190b3RhbF9hbW91bnRcXFwiPiQxMTQuOTQ8L2RhdGE+XFxuICAgICAgICA8L3A+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19idG5fY2hlY2tvdXRcXFwiPmNoZWNrb3V0PC9idXR0b24+XFxuICAgICAgPC9zZWN0aW9uPlxcbiAgICA8L2Rpdj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcIm1kaSBtZGktY29udGVudC1zYXZlLW1pbnVzLW91dGxpbmVcXFwiPjwvc3Bhbj5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXG4gICAgPHRpdGxlPlByb2R1Y3RzPC90aXRsZT5cXG4gIDwvaGVhZD5cXG4gIDxib2R5PlxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxuYXYgY2xhc3M9XFxcImhlYWRlcl9uYXZcXFwiPlxcbiAgICAgICAgICA8dWwgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtzLWxpc3RcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi4vaW5kZXguaHRtbFxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPkhvbWU8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIuL3Byb2R1Y3RzLmh0bWxcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5Qcm9kdWN0czwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPkFib3V0PC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkZXJfX2xvZ29cXFwiPmNvbWZ5PC9zcGFuPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJoZWFkZXJfX2J0bi1jYXJ0IGJ0bi1jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVxcXCJidG4tY2FydF9faW1nXFxcIiBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgZD1cXFwiTTE3LDE4QzE1Ljg5LDE4IDE1LDE4Ljg5IDE1LDIwQTIsMiAwIDAsMCAxNywyMkEyLDIgMCAwLDAgMTksMjBDMTksMTguODkgMTguMSwxOCAxNywxOE0xLDJWNEgzTDYuNiwxMS41OUw1LjI0LDE0LjA0QzUuMDksMTQuMzIgNSwxNC42NSA1LDE1QTIsMiAwIDAsMCA3LDE3SDE5VjE1SDcuNDJBMC4yNSwwLjI1IDAgMCwxIDcuMTcsMTQuNzVDNy4xNywxNC43IDcuMTgsMTQuNjYgNy4yLDE0LjYzTDguMSwxM0gxNS41NUMxNi4zLDEzIDE2Ljk2LDEyLjU4IDE3LjMsMTEuOTdMMjAuODgsNS41QzIwLjk1LDUuMzQgMjEsNS4xNyAyMSw1QTEsMSAwIDAsMCAyMCw0SDUuMjFMNC4yNywyTTcsMThDNS44OSwxOCA1LDE4Ljg5IDUsMjBBMiwyIDAgMCwwIDcsMjJBMiwyIDAgMCwwIDksMjBDOSwxOC44OSA4LjEsMTggNywxOFpcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1jYXJ0X19xdWFudGl0eVxcXCI+MjwvZGl2PlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvbmF2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNpdGUtbG9jYXRpb25cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtbG9jYXRpb25fX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvbl9fbGlua1xcXCIgaHJlZj1cXFwiLi9pbmRleC5odG1sXFxcIj5Ib21lIDwvYT4gL1xcbiAgICAgICAgPGEgY2xhc3M9XFxcInNpdGUtbG9jYXRpb25fX2xpbmtcXFwiIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCI+UHJvZHVjdHM8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPG1haW4gY2xhc3M9XFxcIm1haW5cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1haW5fX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8YXNpZGUgY2xhc3M9XFxcInNpZGViYXJcXFwiPlxcbiAgICAgICAgICBcXG4gICAgICAgICAgPCEtLSA8aW5wdXQgY2xhc3M9XFxcInNpZGViYXJfX3ByaWNlLXJhbmdlXFxcIiB0eXBlPVxcXCJyYW5nZVxcXCIgbmFtZT1cXFwicHJpY2UtcmFuZ2VcXFwiIC8+IC0tPlxcbiAgICAgICAgPC9hc2lkZT5cXG5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwicHJvZHVjdHNcXFwiPjwvdWw+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvbWFpbj5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBkYXRhU2hvcCwgeyBJTWluTWF4T2JqLCBJUHJvZHVjdCwgU2hvcERhdGEgfSBmcm9tICcuL2dldFNob3BEYXRhJztcblxuY29uc29sZS5sb2coZGF0YVNob3ApO1xuXG5jbGFzcyBSZW5kZXIge1xuICBsaXN0OiBIVE1MVUxpc3RFbGVtZW50O1xuICBzaWRlYmFyOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKSE7XG4gICAgdGhpcy5zaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKSE7XG4gIH1cblxuICByZW5kZXJIdG1sUHJvZHVjdHNMaXN0ID0gKHByb2R1Y3RBcnJheTogSVByb2R1Y3RbXSkgPT4ge1xuICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBwcm9kdWN0QXJyYXkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgeyB0aXRsZSwgcHJpY2UsIGltYWdlcyB9ID0gZWxlbTtcbiAgICAgIHRoaXMubGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICBgXG4gICAgICA8bGkgY2xhc3M9XCJwcm9kdWN0c19faXRlbSBzaG9wcGluZy1pdGVtXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbMF19XCIgYWx0PVwiXCIgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19pbWdcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwic2hvcHBpbmctaXRlbV9fbmFtZVwiPiR7dGl0bGV9PC9oMz5cbiAgICAgICAgPGRhdGEgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZVwiIHZhbHVlPVwiJHtwcmljZX1cIj4kJHtwcmljZX08L2RhdGE+XG4gICAgICA8L2xpPlxuICAgIGBcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVuZGVyU2VhcmNoID0gKCk9PntcbiAgICB0aGlzLnNpZGViYXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgIDxpbnB1dCBjbGFzcz1cInNpZGViYXJfX3NlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cbiAgICBgKVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyRmlsdGVyQ2F0ZWdvcnkgPSAobmFtZTpzdHJpbmcsIHZhbHVlczpzdHJpbmdbXSk9PntcbiAgICB0aGlzLnNpZGViYXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICBgXG4gICAgICA8aDMgY2xhc3M9XCJzaWRlYmFyX190aXRsZVwiPiR7bmFtZX08L2gzPlxuICAgICAgPHVsIGNsYXNzPVwic2lkZWJhcl9fZmlsdGVyLWxpc3RcIiBpZD1cImNhdGVnb3JpZXNMaXN0JHtuYW1lfVwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItaXRlbVwiPkFsbDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgYFxuICAgICk7XG4gICAgY29uc3QgbGlzdEZpbHRlciA9IHRoaXMuc2lkZWJhci5xdWVyeVNlbGVjdG9yKGAjY2F0ZWdvcmllc0xpc3Qke25hbWV9YCk7XG4gICAgdmFsdWVzLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICBsaXN0RmlsdGVyPy5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICBgXG4gICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItaXRlbVwiPiR7dmFsdWV9PC9saT5gXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyUHJpY2VSYW5nZSA9IChhcnI6SU1pbk1heE9iaik9PntcbiAgICB0aGlzLnNpZGViYXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICBgXG4gICAgICA8aDMgY2xhc3M9XCJzaWRlYmFyX190aXRsZVwiPlByaWNlPC9oMz5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInNpZGViYXJfX3ByaWNlLXJhbmdlXCIgdHlwZT1cInJhbmdlXCIgbmFtZT1cInByaWNlLXJhbmdlXCIgbWF4PVwiJHthcnIubWF4fVwiIG1pbj1cIiR7YXJyLm1pbn1cIiAvPlxuICAgICAgPGRhdGEgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItbWF4LXByaWNlXCI+VmFsdWUgOiAkODA8L2RhdGE+XG4gICAgICBgXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNpZGVCYXIgPSAoZGF0YTogU2hvcERhdGEpID0+IHtcbiAgICB0aGlzLl9yZW5kZXJTZWFyY2goKVxuXG4gICAgT2JqZWN0LmVudHJpZXMoZGF0YS5maWx0ZXJzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICBjb25zdCBbbmFtZSwgdmFsdWVdID0gcHJvcDtcbiAgICAgIHRoaXMuX3JlbmRlckZpbHRlckNhdGVnb3J5KG5hbWUsdmFsdWUpXG4gICAgfSk7XG4gICAgdGhpcy5fcmVuZGVyUHJpY2VSYW5nZShkYXRhLnByaWNlUmFuZ2UpXG4gIH07XG59XG5cbihhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGRhdGFTaG9wLmluaXRpYWxpemUoKTtcbiAgbmV3IFJlbmRlcigpLnJlbmRlckh0bWxQcm9kdWN0c0xpc3QoZGF0YVNob3AubGlzdCEpO1xuICBuZXcgUmVuZGVyKCkucmVuZGVyU2lkZUJhcihkYXRhU2hvcCk7XG59KSgpO1xuIiwiZXhwb3J0IGludGVyZmFjZSBJUHJvZHVjdCB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIGRpc2NvdW50UGVyY2VudGFnZTogbnVtYmVyO1xuICByYXRpbmc6IG51bWJlcjtcbiAgc3RvY2s6IG51bWJlcjtcbiAgYnJhbmQ6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdGh1bWJuYWlsOiBVUkw7XG4gIGltYWdlczogVVJMW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1pbk1heE9iaiB7XG4gIG1pbjpudW1iZXIsXG4gIG1heDpudW1iZXJcbn1cblxuaW50ZXJmYWNlIElBbnN3ZXJTZXJ2ZXIge1xuICBwcm9kdWN0czogSVByb2R1Y3RbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFNob3BEYXRhIHtcbiAgbGlzdDogSVByb2R1Y3RbXSB8IHVuZGVmaW5lZDtcbiAgZmlsdGVycyE6IHtcbiAgICBicmFuZHM6IHN0cmluZ1tdO1xuICAgIGNhdGVnb3JpZXM6IHN0cmluZ1tdO1xuICB9O1xuICBwcmljZVJhbmdlITogSU1pbk1heE9ialxuXG4gIHByaXZhdGUgX3JlcXVlc3RGcm9tU2VydiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYW5zd2VyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cz9saW1pdD0xMDAnKTtcbiAgICAgIGNvbnN0IGRhdGE6IElBbnN3ZXJTZXJ2ZXIgPSBhd2FpdCBhbnN3ZXIuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGEucHJvZHVjdHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBfZ2V0QnJhbmRzID0gKCkgPT4gWy4uLm5ldyBTZXQodGhpcy5saXN0Py5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuYnJhbmQpKV07XG5cbiAgcHJpdmF0ZSBfZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IFsuLi5uZXcgU2V0KHRoaXMubGlzdD8ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNhdGVnb3J5KSldO1xuXG4gIHByaXZhdGUgX2dldFByaWNlUmFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJpY2VzID0gdGhpcy5saXN0Py5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QucHJpY2UpO1xuICAgIGlmIChwcmljZXMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1pbjpNYXRoLm1pbiguLi5wcmljZXMpLFxuICAgICAgICBtYXg6IE1hdGgubWF4KC4uLnByaWNlcylcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyBpbml0aWFsaXplID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMubGlzdCA9IGF3YWl0IHRoaXMuX3JlcXVlc3RGcm9tU2VydigpO1xuICAgIHRoaXMuZmlsdGVycyA9IHtcbiAgICAgIGJyYW5kczogW10sXG4gICAgICBjYXRlZ29yaWVzOiBbXVxuICAgIH07XG4gICAgdGhpcy5maWx0ZXJzLmJyYW5kcyA9IHRoaXMuX2dldEJyYW5kcygpO1xuICAgIHRoaXMuZmlsdGVycy5jYXRlZ29yaWVzID0gdGhpcy5fZ2V0Q2F0ZWdvcmllcygpO1xuICAgIHRoaXMucHJpY2VSYW5nZSA9IHRoaXMuX2dldFByaWNlUmFuZ2UoKSE7XG4gIH07XG59XG5jb25zdCBkYXRhU2hvcCA9IG5ldyBTaG9wRGF0YSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhU2hvcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9pbmRleC5odG1sJztcbmltcG9ydCAnLi4vcHJvZHVjdHMuaHRtbCc7XG5pbXBvcnQgJy4uL3Nhc3Mvc3R5bGUuc2Fzcyc7XG5cbmltcG9ydCAnLi9jb21wb25lbnQvYXBwJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgZG9jdW1lbnQudGl0bGUpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=