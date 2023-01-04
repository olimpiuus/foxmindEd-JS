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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Products</title>\n  </head>\n  <body>\n    <header class=\"header\">\n      <div class=\"header__container\">\n        <nav class=\"header_nav\">\n          <ul class=\"header__nav-links-list\">\n            <li class=\"header__nav-link-item\">\n              <a href=\"./index.html\" class=\"header__nav-link\">Home</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"./products.html\" class=\"header__nav-link\">Products</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"\" class=\"header__nav-link\">About</a>\n            </li>\n          </ul>\n          <span class=\"header__logo\">comfy</span>\n          <button class=\"header__btn-cart btn-cart\">\n            <svg class=\"btn-cart__img\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n              <path\n                fill=\"currentColor\"\n                d=\"M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z\"\n              />\n            </svg>\n            <div class=\"btn-cart__quantity\">2</div>\n          </button>\n        </nav>\n      </div>\n    </header>\n\n    <section class=\"site-location\">\n      <div class=\"site-location__container\">\n        <a class=\"site-location__link\" href=\"./index.html\">Home </a> /\n        <a class=\"site-location__link\" href=\"./products.html\">Products</a>\n      </div>\n    </section>\n    <main class=\"main\">\n      <div class=\"main__container\">\n        <aside class=\"sidebar\">\n          <input class=\"sidebar__search\" type=\"text\" name=\"search\" placeholder=\"Search...\" />\n          <h3 class=\"sidebar__title\">Company</h3>\n          <ul class=\"sidebar__filter-list\">\n            <li class=\"sidebar__filter-item\">All</li>\n            <li class=\"sidebar__filter-item\">Ikea</li>\n          </ul>\n          <h3 class=\"sidebar__title\">Categories</h3>\n          <ul class=\"sidebar__filter-list\" id=\"categoriesList\">\n            <li class=\"sidebar__filter-item\">All</li>\n            <li class=\"sidebar__filter-item\">Ikea</li>\n          </ul>\n          <h3 class=\"sidebar__title\">Price</h3>\n          <input class=\"sidebar__price-range\" type=\"range\" name=\"price-range\" />\n          <data class=\"sidebar__filter-max-price\">Value : $80</data>\n        </aside>\n\n        <ul class=\"products\">\n        </ul>\n      </div>\n    </main>\n  </body>\n</html>\n";
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
        this.renderFilterCategories = (obj) => {
            this.sidebar.innerHTML = "";
            Object.entries(obj).forEach(prop => {
                // 
            });
        };
        this.list = document.querySelector('.products');
        this.sidebar = document.querySelector('.sidebar');
    }
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield getShopData_1.default.initialize();
    new Render().renderHtmlProductsList(getShopData_1.default.list);
    new Render().renderFilterCategories(getShopData_1.default.filters);
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
        this.initialize = () => __awaiter(this, void 0, void 0, function* () {
            this.list = yield this._requestFromServ();
            this.filters = {
                brands: [],
                categories: []
            };
            this.filters.brands = this._getBrands();
            this.filters.categories = this._getCategories();
        });
    }
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUc7Z0JBQ2IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsVUFBVSxFQUFFLEVBQUU7YUFDZjtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEQsQ0FBQztJQUNILENBQUM7Q0FBQTtBQUNELE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7QUFFaEMscUJBQWUsUUFBUTs7Ozs7OztVQ25EdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSw2REFBdUI7QUFDdkIsbUVBQTBCO0FBQzFCLHVFQUE0QjtBQUU1Qix3RUFBeUI7QUFFekIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDbEQsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvcHJvZHVjdHMuaHRtbCIsIndlYnBhY2s6Ly9qcy8uL3NyYy9zYXNzL3N0eWxlLnNhc3MiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L2FwcC50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvZ2V0U2hvcERhdGEudHMiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuICA8aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxuICAgIDx0aXRsZT5TaG9wPC90aXRsZT5cXG4gIDwvaGVhZD5cXG5cXG4gIDxib2R5PlxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxuYXYgY2xhc3M9XFxcImhlYWRlcl9uYXZcXFwiPlxcbiAgICAgICAgICA8dWwgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtzLWxpc3RcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi4vaW5kZXguaHRtbFxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPkhvbWU8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIuL3Byb2R1Y3RzLmh0bWxcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5Qcm9kdWN0czwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPkFib3V0PC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkZXJfX2xvZ29cXFwiPmNvbWZ5PC9zcGFuPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJoZWFkZXJfX2J0bi1jYXJ0IGJ0bi1jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVxcXCJidG4tY2FydF9faW1nXFxcIiBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgZD1cXFwiTTE3LDE4QzE1Ljg5LDE4IDE1LDE4Ljg5IDE1LDIwQTIsMiAwIDAsMCAxNywyMkEyLDIgMCAwLDAgMTksMjBDMTksMTguODkgMTguMSwxOCAxNywxOE0xLDJWNEgzTDYuNiwxMS41OUw1LjI0LDE0LjA0QzUuMDksMTQuMzIgNSwxNC42NSA1LDE1QTIsMiAwIDAsMCA3LDE3SDE5VjE1SDcuNDJBMC4yNSwwLjI1IDAgMCwxIDcuMTcsMTQuNzVDNy4xNywxNC43IDcuMTgsMTQuNjYgNy4yLDE0LjYzTDguMSwxM0gxNS41NUMxNi4zLDEzIDE2Ljk2LDEyLjU4IDE3LjMsMTEuOTdMMjAuODgsNS41QzIwLjk1LDUuMzQgMjEsNS4xNyAyMSw1QTEsMSAwIDAsMCAyMCw0SDUuMjFMNC4yNywyTTcsMThDNS44OSwxOCA1LDE4Ljg5IDUsMjBBMiwyIDAgMCwwIDcsMjJBMiwyIDAgMCwwIDksMjBDOSwxOC44OSA4LjEsMTggNywxOFpcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1jYXJ0X19xdWFudGl0eVxcXCI+MjwvZGl2PlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvbmF2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG4gICAgPG1haW4gY2xhc3M9XFxcImhlcm9cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlcm9fX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8aDEgY2xhc3M9XFxcImhlcm9fX3RpdGxlXFxcIj5SZXN0LCBSZWxheCwgVW53aW5kPC9oMT5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJoZXJvX190ZXh0XFxcIj5FbWJyYWNlIHlvdXIgY2hvaWNlcyAtIHdlIGRvPC9wPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiLi9wcm9kdWN0cy5odG1sXFxcIiBjbGFzcz1cXFwiaGVyb19fYnRuLWxpbmtcXFwiPnNob3cgbm93PC9hPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVyb19fbGljZW5zZVxcXCI+XFxuICAgICAgICAgIFBob3RvIGJ5XFxuICAgICAgICAgIDxhXFxuICAgICAgICAgICAgaHJlZj1cXFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGFubmllc3ByYXR0P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFxcXCJcXG4gICAgICAgICAgICA+QW5uaWUgU3ByYXR0PC9hXFxuICAgICAgICAgID5cXG4gICAgICAgICAgb25cXG4gICAgICAgICAgPGFcXG4gICAgICAgICAgICBocmVmPVxcXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvNTJBQWlYV29WaTA/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XFxcIlxcbiAgICAgICAgICAgID5VbnNwbGFzaDwvYVxcbiAgICAgICAgICA+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9tYWluPlxcbiAgICA8Zm9vdGVyIGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxoMiBjbGFzcz1cXFwiZm9vdGVyX190aXRsZVxcXCI+RmVhdHVyZWQ8L2gyPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJmb290ZXJfX2ZlYXR1cmVkLWxpc3RcXFwiPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImZvb3Rlcl9fZmVhdHVyZWQtaXRlbSBzaG9wcGluZy1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vd3d3LmlrZWEuY29tL2NhL2VuL2ltYWdlcy9wcm9kdWN0cy9saWRhcy1jaGFpci13aGl0ZS1zZWZhc3QtY2hyb21lLXBsYXRlZF9fMTEwNjM0N19wZTg2ODY4OF9zNS5qcGc/Zj14bFxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZ1xcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZVxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJmb290ZXJfX2ZlYXR1cmVkLWl0ZW0gc2hvcHBpbmctaXRlbVxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3d3dy5pa2VhLmNvbS9jYS9lbi9pbWFnZXMvcHJvZHVjdHMvbGlkYXMtY2hhaXItd2hpdGUtc2VmYXN0LWNocm9tZS1wbGF0ZWRfXzExMDYzNDdfcGU4Njg2ODhfczUuanBnP2Y9eGxcXFwiXFxuICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWdcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1pdGVtIHNob3BwaW5nLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly93d3cuaWtlYS5jb20vY2EvZW4vaW1hZ2VzL3Byb2R1Y3RzL2xpZGFzLWNoYWlyLXdoaXRlLXNlZmFzdC1jaHJvbWUtcGxhdGVkX18xMTA2MzQ3X3BlODY4Njg4X3M1LmpwZz9mPXhsXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lXFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZVxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9mb290ZXI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3dyYXBwZXIgaGlkZGVuXFxcIj5cXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2hvcHBpbmctY2FydFxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19idG5fZXhpdFxcXCI+XFxuICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgIGQ9XFxcIk0xOSw2LjQxTDE3LjU5LDVMMTIsMTAuNTlMNi40MSw1TDUsNi40MUwxMC41OSwxMkw1LDE3LjU5TDYuNDEsMTlMMTIsMTMuNDFMMTcuNTksMTlMMTksMTcuNTlMMTMuNDEsMTJMMTksNi40MVpcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgPC9zdmc+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fdGl0bGVcXFwiPllvdXIgQmFnPC9oMz5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fbGlzdFxcXCI+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9faXRlbSBzaG9wcGluZy1pdGVtX2NhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZy1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbmZvLWNhcnRcXFwiPlxcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lX2NhcnRcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVfY2FydFxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlbW92ZVxcXCI+cmVtb3ZlPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHlcXFwiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX2FkZC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsMTUuNDFMMTIsMTAuODNMMTYuNTksMTUuNDFMMTgsMTRMMTIsOEw2LDE0TDcuNDEsMTUuNDFaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eS1kaXNwbGF5XFxcIj41PC9kaXY+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVkdXNlLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSw4LjU4TDEyLDEzLjE3TDE2LjU5LDguNThMMTgsMTBMMTIsMTZMNiwxMEw3LjQxLDguNThaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9faXRlbSBzaG9wcGluZy1pdGVtX2NhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZy1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbmZvLWNhcnRcXFwiPlxcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lX2NhcnRcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVfY2FydFxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlbW92ZVxcXCI+cmVtb3ZlPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHlcXFwiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX2FkZC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsMTUuNDFMMTIsMTAuODNMMTYuNTksMTUuNDFMMTgsMTRMMTIsOEw2LDE0TDcuNDEsMTUuNDFaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eS1kaXNwbGF5XFxcIj41PC9kaXY+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVkdXNlLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSw4LjU4TDEyLDEzLjE3TDE2LjU5LDguNThMMTgsMTBMMTIsMTZMNiwxMEw3LjQxLDguNThaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3RvdGFsXFxcIj5cXG4gICAgICAgICAgVG90YWwgOlxcbiAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fdG90YWxfYW1vdW50XFxcIj4kMTE0Ljk0PC9kYXRhPlxcbiAgICAgICAgPC9wPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fYnRuX2NoZWNrb3V0XFxcIj5jaGVja291dDwvYnV0dG9uPlxcbiAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJtZGkgbWRpLWNvbnRlbnQtc2F2ZS1taW51cy1vdXRsaW5lXFxcIj48L3NwYW4+XFxuICA8L2JvZHk+XFxuPC9odG1sPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuICA8aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxuICAgIDx0aXRsZT5Qcm9kdWN0czwvdGl0bGU+XFxuICA8L2hlYWQ+XFxuICA8Ym9keT5cXG4gICAgPGhlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8bmF2IGNsYXNzPVxcXCJoZWFkZXJfbmF2XFxcIj5cXG4gICAgICAgICAgPHVsIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rcy1saXN0XFxcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5Ib21lPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9wcm9kdWN0cy5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+UHJvZHVjdHM8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5BYm91dDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGVyX19sb2dvXFxcIj5jb21meTwvc3Bhbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaGVhZGVyX19idG4tY2FydCBidG4tY2FydFxcXCI+XFxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwiYnRuLWNhcnRfX2ltZ1xcXCIgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgIGQ9XFxcIk0xNywxOEMxNS44OSwxOCAxNSwxOC44OSAxNSwyMEEyLDIgMCAwLDAgMTcsMjJBMiwyIDAgMCwwIDE5LDIwQzE5LDE4Ljg5IDE4LjEsMTggMTcsMThNMSwyVjRIM0w2LjYsMTEuNTlMNS4yNCwxNC4wNEM1LjA5LDE0LjMyIDUsMTQuNjUgNSwxNUEyLDIgMCAwLDAgNywxN0gxOVYxNUg3LjQyQTAuMjUsMC4yNSAwIDAsMSA3LjE3LDE0Ljc1QzcuMTcsMTQuNyA3LjE4LDE0LjY2IDcuMiwxNC42M0w4LjEsMTNIMTUuNTVDMTYuMywxMyAxNi45NiwxMi41OCAxNy4zLDExLjk3TDIwLjg4LDUuNUMyMC45NSw1LjM0IDIxLDUuMTcgMjEsNUExLDEgMCAwLDAgMjAsNEg1LjIxTDQuMjcsMk03LDE4QzUuODksMTggNSwxOC44OSA1LDIwQTIsMiAwIDAsMCA3LDIyQTIsMiAwIDAsMCA5LDIwQzksMTguODkgOC4xLDE4IDcsMThaXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tY2FydF9fcXVhbnRpdHlcXFwiPjI8L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L25hdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaXRlLWxvY2F0aW9uXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLWxvY2F0aW9uX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcInNpdGUtbG9jYXRpb25fX2xpbmtcXFwiIGhyZWY9XFxcIi4vaW5kZXguaHRtbFxcXCI+SG9tZSA8L2E+IC9cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJzaXRlLWxvY2F0aW9uX19saW5rXFxcIiBocmVmPVxcXCIuL3Byb2R1Y3RzLmh0bWxcXFwiPlByb2R1Y3RzPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuICAgIDxtYWluIGNsYXNzPVxcXCJtYWluXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYWluX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGFzaWRlIGNsYXNzPVxcXCJzaWRlYmFyXFxcIj5cXG4gICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJzaWRlYmFyX19zZWFyY2hcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaC4uLlxcXCIgLz5cXG4gICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaWRlYmFyX190aXRsZVxcXCI+Q29tcGFueTwvaDM+XFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwic2lkZWJhcl9fZmlsdGVyLWxpc3RcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2lkZWJhcl9fZmlsdGVyLWl0ZW1cXFwiPkFsbDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJzaWRlYmFyX19maWx0ZXItaXRlbVxcXCI+SWtlYTwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2lkZWJhcl9fdGl0bGVcXFwiPkNhdGVnb3JpZXM8L2gzPlxcbiAgICAgICAgICA8dWwgY2xhc3M9XFxcInNpZGViYXJfX2ZpbHRlci1saXN0XFxcIiBpZD1cXFwiY2F0ZWdvcmllc0xpc3RcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2lkZWJhcl9fZmlsdGVyLWl0ZW1cXFwiPkFsbDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJzaWRlYmFyX19maWx0ZXItaXRlbVxcXCI+SWtlYTwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2lkZWJhcl9fdGl0bGVcXFwiPlByaWNlPC9oMz5cXG4gICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJzaWRlYmFyX19wcmljZS1yYW5nZVxcXCIgdHlwZT1cXFwicmFuZ2VcXFwiIG5hbWU9XFxcInByaWNlLXJhbmdlXFxcIiAvPlxcbiAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2lkZWJhcl9fZmlsdGVyLW1heC1wcmljZVxcXCI+VmFsdWUgOiAkODA8L2RhdGE+XFxuICAgICAgICA8L2FzaWRlPlxcblxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJwcm9kdWN0c1xcXCI+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L21haW4+XFxuICA8L2JvZHk+XFxuPC9odG1sPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgZGF0YVNob3AsIHsgSVByb2R1Y3QgfSBmcm9tIFwiLi9nZXRTaG9wRGF0YVwiO1xuXG5jb25zb2xlLmxvZyhkYXRhU2hvcCk7XG5cbmNsYXNzIFJlbmRlciB7XG4gIGxpc3Q6IEhUTUxVTGlzdEVsZW1lbnQ7XG4gIHNpZGViYXI6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cycpITtcbiAgICB0aGlzLnNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpITtcbiAgfVxuXG4gIHJlbmRlckh0bWxQcm9kdWN0c0xpc3QgPSAocHJvZHVjdEFycmF5OiBJUHJvZHVjdFtdKSA9PiB7XG4gICAgdGhpcy5saXN0LmlubmVySFRNTCA9ICcnO1xuICAgIHByb2R1Y3RBcnJheS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBjb25zdCB7IHRpdGxlLCBwcmljZSwgaW1hZ2VzIH0gPSBlbGVtO1xuICAgICAgdGhpcy5saXN0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgIGBcbiAgICAgIDxsaSBjbGFzcz1cInByb2R1Y3RzX19pdGVtIHNob3BwaW5nLWl0ZW1cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1swXX1cIiBhbHQ9XCJcIiBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX2ltZ1wiPlxuICAgICAgICA8aDMgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19uYW1lXCI+JHt0aXRsZX08L2gzPlxuICAgICAgICA8ZGF0YSBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXCIgdmFsdWU9XCIke3ByaWNlfVwiPiQke3ByaWNlfTwvZGF0YT5cbiAgICAgIDwvbGk+XG4gICAgYFxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmVuZGVyRmlsdGVyQ2F0ZWdvcmllcyA9IChvYmo6T2JqZWN0KT0+e1xuICAgIHRoaXMuc2lkZWJhci5pbm5lckhUTUw9XCJcIlxuICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaChwcm9wPT57XG4gICAgICAvLyBcbiAgICB9KVxuICAgIFxuICB9XG59XG5cbihhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGRhdGFTaG9wLmluaXRpYWxpemUoKVxuICBuZXcgUmVuZGVyKCkucmVuZGVySHRtbFByb2R1Y3RzTGlzdChkYXRhU2hvcC5saXN0ISlcbiAgbmV3IFJlbmRlcigpLnJlbmRlckZpbHRlckNhdGVnb3JpZXMoZGF0YVNob3AuZmlsdGVycylcbn0pKClcblxuXG5cbiIsImV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBkaXNjb3VudFBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmF0aW5nOiBudW1iZXI7XG4gIHN0b2NrOiBudW1iZXI7XG4gIGJyYW5kOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHRodW1ibmFpbDogVVJMO1xuICBpbWFnZXM6IFVSTFtdO1xufVxuaW50ZXJmYWNlIElBbnN3ZXJTZXJ2ZXIge1xuICBwcm9kdWN0czogSVByb2R1Y3RbXTtcbn1cblxuY2xhc3MgU2hvcERhdGEge1xuICBsaXN0OiBJUHJvZHVjdFtdIHwgdW5kZWZpbmVkO1xuICBmaWx0ZXJzIToge1xuICAgIGJyYW5kczogc3RyaW5nW107XG4gICAgY2F0ZWdvcmllczogc3RyaW5nW107XG4gIH07XG4gIFxuXG4gIHByaXZhdGUgX3JlcXVlc3RGcm9tU2VydiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYW5zd2VyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cz9saW1pdD0xMDAnKTtcbiAgICAgIGNvbnN0IGRhdGE6IElBbnN3ZXJTZXJ2ZXIgPSBhd2FpdCBhbnN3ZXIuanNvbigpO1xuICAgICAgcmV0dXJuIGRhdGEucHJvZHVjdHM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBfZ2V0QnJhbmRzID0gKCkgPT4gWy4uLm5ldyBTZXQodGhpcy5saXN0Py5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuYnJhbmQpKV07XG5cbiAgcHJpdmF0ZSBfZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IFsuLi5uZXcgU2V0KHRoaXMubGlzdD8ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNhdGVnb3J5KSldO1xuXG4gIHB1YmxpYyBpbml0aWFsaXplID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMubGlzdCA9IGF3YWl0IHRoaXMuX3JlcXVlc3RGcm9tU2VydigpO1xuICAgIHRoaXMuZmlsdGVycyA9IHtcbiAgICAgIGJyYW5kczogW10sXG4gICAgICBjYXRlZ29yaWVzOiBbXVxuICAgIH1cbiAgICB0aGlzLmZpbHRlcnMuYnJhbmRzID0gdGhpcy5fZ2V0QnJhbmRzKCk7XG4gICAgdGhpcy5maWx0ZXJzLmNhdGVnb3JpZXMgPSB0aGlzLl9nZXRDYXRlZ29yaWVzKCk7XG4gIH1cbn1cbmNvbnN0IGRhdGFTaG9wID0gbmV3IFNob3BEYXRhKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFTaG9wXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9pbmRleC5odG1sJztcbmltcG9ydCAnLi4vcHJvZHVjdHMuaHRtbCc7XG5pbXBvcnQgJy4uL3Nhc3Mvc3R5bGUuc2Fzcyc7XG5cbmltcG9ydCAnLi9jb21wb25lbnQvYXBwJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgZG9jdW1lbnQudGl0bGUpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=