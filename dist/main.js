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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Shop</title>\n  </head>\n\n  <body>\n    <header class=\"header\">\n      <div class=\"header__container\">\n        <nav class=\"header_nav\">\n          <ul class=\"header__nav-links-list\">\n            <li class=\"header__nav-link-item\">\n              <a href=\"./index.html\" class=\"header__nav-link\">Home</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"./products.html\" class=\"header__nav-link\">Products</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"\" class=\"header__nav-link\">About</a>\n            </li>\n          </ul>\n          <span class=\"header__logo\">comfy</span>\n          <button class=\"header__btn-cart btn-cart\">\n            <svg class=\"btn-cart__img\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n              <path\n                fill=\"currentColor\"\n                d=\"M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z\"\n              />\n            </svg>\n            <div class=\"btn-cart__quantity\">2</div>\n          </button>\n        </nav>\n      </div>\n    </header>\n    <main class=\"hero\">\n      <div class=\"hero__container\">\n        <h1 class=\"hero__title\">Rest, Relax, Unwind</h1>\n        <p class=\"hero__text\">Embrace your choices - we do</p>\n        <a href=\"./products.html\" class=\"hero__btn-link\">show now</a>\n        <div class=\"hero__license\">\n          Photo by\n          <a\n            href=\"https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\n            >Annie Spratt</a\n          >\n          on\n          <a\n            href=\"https://unsplash.com/photos/52AAiXWoVi0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\n            >Unsplash</a\n          >\n        </div>\n      </div>\n    </main>\n    <footer class=\"footer\">\n      <div class=\"footer__container\">\n        <h2 class=\"footer__title\">Featured</h2>\n        <ul class=\"footer__featured-list\">\n          <li class=\"footer__featured-item shopping-item\">\n            <img\n              src=\"https://www.ikea.com/ca/en/images/products/lidas-chair-white-sefast-chrome-plated__1106347_pe868688_s5.jpg?f=xl\"\n              alt=\"\"\n              class=\"shopping-item__img\"\n            />\n            <h3 class=\"shopping-item__name\">Hugh-Back Bench</h3>\n            <data class=\"shopping-item__price-value\" value=\"9.99\">$9.99</data>\n          </li>\n          <li class=\"footer__featured-item shopping-item\">\n            <img\n              src=\"https://www.ikea.com/ca/en/images/products/lidas-chair-white-sefast-chrome-plated__1106347_pe868688_s5.jpg?f=xl\"\n              alt=\"\"\n              class=\"shopping-item__img\"\n            />\n            <h3 class=\"shopping-item__name\">Hugh-Back Bench</h3>\n            <data class=\"shopping-item__price-value\" value=\"9.99\">$9.99</data>\n          </li>\n          <li class=\"footer__featured-item shopping-item\">\n            <img\n              src=\"https://www.ikea.com/ca/en/images/products/lidas-chair-white-sefast-chrome-plated__1106347_pe868688_s5.jpg?f=xl\"\n              alt=\"\"\n              class=\"shopping-item__img\"\n            />\n            <h3 class=\"shopping-item__name\">Hugh-Back Bench</h3>\n            <data class=\"shopping-item__price-value\" value=\"9.99\">$9.99</data>\n          </li>\n        </ul>\n      </div>\n    </footer>\n    \n\n    <div class=\"shopping-cart__wrapper hidden\">\n      <section class=\"shopping-cart\">\n        <button class=\"shopping-cart__btn_exit\">\n          <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n            <path\n              fill=\"currentColor\"\n              d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\"\n            />\n          </svg>\n        </button>\n        <h3 class=\"shopping-cart__title\">Your Bag</h3>\n        <ul class=\"shopping-cart__list\">\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduse-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduse-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n        </ul>\n        <p class=\"shopping-cart__total\">\n          Total :\n          <data class=\"shopping-cart__total_amount\">$114.94</data>\n        </p>\n        <button class=\"shopping-cart__btn_checkout\">checkout</button>\n      </section>\n    </div>\n    <span class=\"mdi mdi-content-save-minus-outline\"></span>\n  </body>\n</html>\n";
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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Products</title>\n  </head>\n  <body>\n    <header class=\"header\">\n      <div class=\"header__container\">\n        <nav class=\"header_nav\">\n          <ul class=\"header__nav-links-list\">\n            <li class=\"header__nav-link-item\">\n              <a href=\"./index.html\" class=\"header__nav-link\">Home</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"./products.html\" class=\"header__nav-link\">Products</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"\" class=\"header__nav-link\">About</a>\n            </li>\n          </ul>\n          <span class=\"header__logo\">comfy</span>\n          <button class=\"header__btn-cart btn-cart\">\n            <svg class=\"btn-cart__img\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n              <path\n                fill=\"currentColor\"\n                d=\"M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z\"\n              />\n            </svg>\n            <div class=\"btn-cart__quantity\">2</div>\n          </button>\n        </nav>\n      </div>\n    </header>\n\n    <section class=\"site-location\">\n      <div class=\"site-location__container\">\n        <a class=\"site-location__link\" href=\"./index.html\">Home </a> /\n        <a class=\"site-location__link\" href=\"./products.html\">Products</a>\n      </div>\n    </section>\n    <main class=\"main\">\n      <div class=\"main__container\">\n        <aside class=\"sidebar\">\n          <!-- <input class=\"sidebar__price-range\" type=\"range\" name=\"price-range\" /> -->\n        </aside>\n        <ul class=\"products\"></ul>\n      </div>\n    </main>\n    <div class=\"shopping-cart__wrapper hidden\">\n      <section class=\"shopping-cart\">\n        <button class=\"shopping-cart__btn_exit\">\n          <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n            <path\n              fill=\"currentColor\"\n              d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\"\n            />\n          </svg>\n        </button>\n        <h3 class=\"shopping-cart__title\">Your Bag</h3>\n        <ul class=\"shopping-cart__list\">\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduce-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduce-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n\n        </ul>\n        <p class=\"shopping-cart__total\">\n          Total :\n          <data class=\"shopping-cart__total_amount\">$114.94</data>\n        </p>\n        <button class=\"shopping-cart__btn_checkout\">checkout</button>\n      </section>\n    </div>\n  </body>\n</html>\n";
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
const clickHandler_1 = __webpack_require__(/*! ./clickHandler */ "./src/ts/component/clickHandler.ts");
const getShopData_1 = __webpack_require__(/*! ./getShopData */ "./src/ts/component/getShopData.ts");
const render_1 = __webpack_require__(/*! ./render */ "./src/ts/component/render.ts");
const shopping_cart_1 = __importDefault(__webpack_require__(/*! ./shopping-cart */ "./src/ts/component/shopping-cart.ts"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const data = new getShopData_1.ShopData(yield (0, getShopData_1.getDataArr)());
    new render_1.Render().renderHtmlProductsList(data.list);
    new render_1.Render().renderSideBar(data);
    new clickHandler_1.ClickHandler(data);
    shopping_cart_1.default.reRenderCart();
}))();


/***/ }),

/***/ "./src/ts/component/clickHandler.ts":
/*!******************************************!*\
  !*** ./src/ts/component/clickHandler.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClickHandler = void 0;
const render_1 = __webpack_require__(/*! ./render */ "./src/ts/component/render.ts");
const shopping_cart_1 = __importDefault(__webpack_require__(/*! ./shopping-cart */ "./src/ts/component/shopping-cart.ts"));
// not refactored 
class FilterClickHandler {
    constructor(target, data) {
        this.target = target;
        this.data = data;
        this._activateFilter = (element) => {
            const filter = element.dataset.filter;
            if (!element.classList.contains('active')) {
                element.classList.add('active');
                this.data.addActiveFilter(filter);
                console.log(this.data.activeFilters);
            }
        };
        this._deactivateFilter = (element) => {
            var _a;
            const filter = element.dataset.filter;
            element.classList.remove('active');
            this.data.removeElementFromActiveFilter(filter);
            console.log(this.data.activeFilters);
            // remove active from "All" filter element
            const allBtnFilterList = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.firstElementChild;
            const btnFilter = allBtnFilterList.dataset.filter;
            if (allBtnFilterList === null || allBtnFilterList === void 0 ? void 0 : allBtnFilterList.classList.contains('active')) {
                allBtnFilterList === null || allBtnFilterList === void 0 ? void 0 : allBtnFilterList.classList.remove('active');
                this.data.removeElementFromActiveFilter(btnFilter);
            }
        };
        this._activateFilterList = (array) => {
            array.forEach((listItem) => {
                if (listItem instanceof HTMLElement) {
                    this._activateFilter(listItem);
                }
            });
        };
        this._deactivateFilterList = (array) => {
            array.forEach((listItem) => {
                if (listItem instanceof HTMLElement) {
                    this._deactivateFilter(listItem);
                }
            });
        };
        this._handleClickOnFilterElement = (element) => {
            if (element.classList.contains('active')) {
                this._deactivateFilter(element);
            }
            else {
                this._activateFilter(element);
            }
        };
        this._initialize = () => {
            const filter = this.target.dataset.filter;
            if (filter === 'category_all' || filter === 'brand_all') {
                const arrayFilters = Array.from(this.target.parentElement.children);
                if (this.target.classList.contains('active')) {
                    this._deactivateFilterList(arrayFilters);
                }
                else {
                    this._activateFilterList(arrayFilters);
                }
            }
            else {
                this._handleClickOnFilterElement(this.target);
            }
        };
        this._initialize();
    }
}
class ClickHandler {
    constructor(data) {
        this.data = data;
        this.updateDataAndRenderList = () => {
            this.data.filterList();
            new render_1.Render().renderHtmlProductsList(this.data.filteredList);
        };
        this.listenerForMaxPrice = () => {
            let delay;
            const input = document.querySelector('.sidebar__price-range');
            input.addEventListener('change', () => {
                if (delay) {
                    clearTimeout(delay);
                }
                delay = setTimeout(() => {
                    const maxPrice = parseInt(input.value);
                    this.data.activeFilters.maxPrice = maxPrice;
                    this.data.priceRange.max = maxPrice;
                    this.updateDataAndRenderList();
                    new render_1.Render().reRenderCountersQuantities(this.data.filteredBrands, this.data.filteredCategories);
                }, 500);
            });
        };
        this.initialize = () => {
            this.listenerForMaxPrice();
            document.addEventListener('click', (e) => {
                const target = e.target;
                if (!(target instanceof Element)) {
                    return;
                }
                if (target.closest('.header__btn-cart')) {
                    console.log('a');
                    shopping_cart_1.default.show();
                }
                if (target.closest('.sidebar__filter-item')) {
                    new FilterClickHandler(target, this.data);
                    this.updateDataAndRenderList();
                    new render_1.Render().reRenderCountersQuantities(this.data.filteredBrands, this.data.filteredCategories);
                }
            });
        };
        this.initialize();
    }
}
exports.ClickHandler = ClickHandler;


/***/ }),

/***/ "./src/ts/component/countQuantitiesUniqEntries.ts":
/*!********************************************************!*\
  !*** ./src/ts/component/countQuantitiesUniqEntries.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.countQuantitiesUniqEntries = void 0;
const countQuantitiesUniqEntries = (arr) => {
    const collectionWithCount = {};
    for (const element of arr) {
        if (collectionWithCount[element]) {
            collectionWithCount[element] += 1;
        }
        else {
            collectionWithCount[element] = 1;
        }
    }
    return collectionWithCount;
};
exports.countQuantitiesUniqEntries = countQuantitiesUniqEntries;


/***/ }),

/***/ "./src/ts/component/getShopData.ts":
/*!*****************************************!*\
  !*** ./src/ts/component/getShopData.ts ***!
  \*****************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShopData = exports.getDataArr = void 0;
const countQuantitiesUniqEntries_1 = __webpack_require__(/*! ./countQuantitiesUniqEntries */ "./src/ts/component/countQuantitiesUniqEntries.ts");
const getDataArr = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const answer = yield fetch('https://dummyjson.com/products?limit=100');
        const data = yield answer.json();
        return data.products;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDataArr = getDataArr;
class ShopData {
    get activeFilters() {
        return this._activeFilters;
    }
    addActiveFilter(string) {
        const [filterType, value] = string.split('_');
        if ((filterType === 'brand' || filterType === 'category') && typeof value === 'string') {
            this._activeFilters[filterType].push(value);
        }
        if (filterType === 'maxPrice' && typeof value === 'number') {
            this._activeFilters[filterType] = value;
        }
    }
    removeElementFromActiveFilter(string) {
        const [filterType, value] = string.split('_');
        if ((filterType === 'brand' || filterType === 'category') && typeof value === 'string') {
            const arr = this.activeFilters[filterType];
            arr.splice(arr.findIndex(filter => filter === value), 1);
            this.activeFilters[filterType] = arr;
        }
    }
    constructor(list) {
        this.list = list;
        this.filters = {
            category: {},
            brand: {},
        };
        this.filteredCategories = {};
        this.filteredBrands = {};
        this._activeFilters = {
            category: [],
            brand: [],
            maxPrice: 0,
        };
        this._getQuantityBrands = () => { var _a; return (0, countQuantitiesUniqEntries_1.countQuantitiesUniqEntries)((_a = this.list) === null || _a === void 0 ? void 0 : _a.map(product => product.brand)); };
        this._getQuantityCategories = () => { var _a; return (0, countQuantitiesUniqEntries_1.countQuantitiesUniqEntries)((_a = this.list) === null || _a === void 0 ? void 0 : _a.map((product) => product.category)); };
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
        this._filterByMaxPrice = (arr) => {
            const bufferArr = this._cloneArray(arr);
            arr.length = 0;
            const filtered = [...bufferArr].filter(elem => elem.price <= this.activeFilters.maxPrice);
            arr.push(...filtered);
            return arr;
        };
        this._filterByBrands = (arr) => {
            if (this.activeFilters.brand.length !== 0) {
                const bufferArr = this._cloneArray(arr);
                arr.length = 0;
                this.activeFilters.brand.forEach(filterValue => {
                    const filtered = [...bufferArr].filter(elem => elem.brand === filterValue);
                    arr.push(...filtered);
                });
                return arr;
            }
            else {
                return arr;
            }
        };
        this._filterByCategories = (arr) => {
            if (this.activeFilters.category.length !== 0) {
                const bufferArr = this._cloneArray(arr);
                arr.length = 0;
                this.activeFilters.category.forEach(filterValue => {
                    const filtered = [...bufferArr].filter(elem => elem.category === filterValue);
                    arr.push(...filtered);
                });
                return arr;
            }
            else {
                return this._cloneArray(arr);
            }
        };
        this._getFilteredCategories = () => {
            let arr = this._cloneArray(this.list);
            arr = this._cloneArray(this._filterByBrands(arr));
            arr = this._cloneArray(this._filterByMaxPrice(arr));
            this.filteredCategories = (0, countQuantitiesUniqEntries_1.countQuantitiesUniqEntries)(arr.map(product => product.category));
        };
        this._getFilteredBrands = () => {
            let arr = this._cloneArray(this.list);
            arr = this._cloneArray(this._filterByCategories(arr));
            arr = this._cloneArray(this._filterByMaxPrice(arr));
            this.filteredBrands = (0, countQuantitiesUniqEntries_1.countQuantitiesUniqEntries)(arr.map(product => product.brand));
        };
        this.filterList = () => {
            this.filteredList = [...this.list];
            this.filteredList = [...this._filterByBrands(this.filteredList)];
            this.filteredList = [...this._filterByCategories(this.filteredList)];
            this.filteredList = this._filterByMaxPrice(this.filteredList);
            this._getFilteredCategories();
            this._getFilteredBrands();
            console.log(this);
        };
        this.filteredList = Array.from(this.list);
        if (list) {
            this.filters.brand = this._getQuantityBrands();
            this.filters.category = this._getQuantityCategories();
            this.priceRange = this._getPriceRange();
            this.activeFilters.maxPrice = this.priceRange.max;
        }
    }
    _deepCloneArray(arr) {
        return JSON.parse(JSON.stringify(arr));
    }
    _cloneArray(arr) {
        return [...arr];
    }
}
exports.ShopData = ShopData;


/***/ }),

/***/ "./src/ts/component/render.ts":
/*!************************************!*\
  !*** ./src/ts/component/render.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Render = void 0;
class Render {
    constructor() {
        this.renderHtmlProductsList = (productArray) => {
            this.list.innerHTML = '';
            productArray.forEach((elem) => {
                const { title, price, images, id } = elem;
                this.list.insertAdjacentHTML('beforeend', `
      <li class="products__item shopping-item" data-id="${id}">
        <img src="${images[0]}" alt="" class="shopping-item__img">
        <h3 class="shopping-item__name">${title}</h3>
        <div class="shopping-item__price-and-cart">
          <data class="shopping-item__price-value" value="${price}">$${price}</data>
          <svg class="shopping-item__btn-cart__img" style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
          </svg>
        </div>
      </li>
    `);
            });
        };
        this._renderSearch = () => {
            this.sidebar.insertAdjacentHTML('afterbegin', `
    <input class="sidebar__search" type="text" name="search" placeholder="Search..." />
    `);
        };
        this._renderFilterCategory = (filterCategoryName, filterCategoryEntries) => {
            this.sidebar.insertAdjacentHTML('beforeend', `
      <h3 class="sidebar__title">${filterCategoryName}</h3>
      <ul class="sidebar__filter-list" id="categoriesList${filterCategoryName}">
        <li class="sidebar__filter-item sidebar__first-list-item" data-filter="${filterCategoryName}_all">All</li>
      </ul>
      `);
            const listFilter = this.sidebar.querySelector(`#categoriesList${filterCategoryName}`);
            Object.entries(filterCategoryEntries).forEach(([value, quantity]) => {
                listFilter === null || listFilter === void 0 ? void 0 : listFilter.insertAdjacentHTML('beforeend', `
      <li class="sidebar__filter-item" data-filter="${filterCategoryName}_${value}">${value} 
        <div class="sidebar__elem-counter">${quantity}</div>
      </li>`);
            });
        };
        this._renderPriceRange = (arr) => {
            this.sidebar.insertAdjacentHTML('beforeend', `
      <h3 class="sidebar__title">Price</h3>
      <input class="sidebar__price-range" type="range" name="price-range" max="${arr.max}" min="${arr.min}" value="${arr.max}"/>
      <data class="sidebar__filter-max-price">Max price: $${arr.max}</data>
      `);
            const priceRangeINput = this.sidebar.querySelector('.sidebar__price-range');
            const priceRangeData = this.sidebar.querySelector('.sidebar__filter-max-price');
            priceRangeINput === null || priceRangeINput === void 0 ? void 0 : priceRangeINput.addEventListener('mousemove', () => {
                priceRangeData.textContent = `Max price: $${priceRangeINput.value} `;
            });
        };
        this.renderSideBar = (data) => {
            this._renderSearch();
            Object.entries(data.filters).forEach((filter) => {
                const [filterType, filterValue] = filter;
                this._renderFilterCategory(filterType, filterValue);
            });
            this._renderPriceRange(data.priceRange);
        };
        this.reRenderCountersQuantities = (brands, categories) => {
            const nodeListOfCounters = this.sidebar.querySelectorAll('.sidebar__elem-counter');
            nodeListOfCounters.forEach(counter => {
                var _a, _b;
                const [filterType, filterValue] = (_b = (_a = counter.parentElement) === null || _a === void 0 ? void 0 : _a.dataset.filter) === null || _b === void 0 ? void 0 : _b.split('_');
                if (filterType === 'category') {
                    const filterTypeAndCount = Object.entries(categories).find(category => category[0] === filterValue);
                    if (filterTypeAndCount) {
                        counter.textContent = filterTypeAndCount[1].toString();
                        counter.parentElement.classList.remove('deactivated');
                    }
                    else {
                        counter.textContent = '0';
                        counter.parentElement.classList.add('deactivated');
                    }
                }
                if (filterType === 'brand') {
                    const filterTypeAndCount = Object.entries(brands).find(brand => brand[0] === filterValue);
                    if (filterTypeAndCount) {
                        counter.textContent = filterTypeAndCount[1].toString();
                        counter.parentElement.classList.remove('deactivated');
                    }
                    else {
                        counter.textContent = '0';
                        counter.parentElement.classList.add('deactivated');
                    }
                }
            });
            console.log();
        };
        this.list = document.querySelector('.products');
        this.sidebar = document.querySelector('.sidebar');
    }
}
exports.Render = Render;


/***/ }),

/***/ "./src/ts/component/shopping-cart.ts":
/*!*******************************************!*\
  !*** ./src/ts/component/shopping-cart.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShoppingCart = void 0;
class ShoppingCart {
    constructor() {
        this.items = [];
        this.reRenderCart = () => {
            this.items.forEach(item => {
                this._list.insertAdjacentHTML('beforeend', `
      <li class="shopping-cart__item shopping-item_cart">
        <div class="shopping-item__img-background" style="background-image: url('${item.image}');"></div>
        <div class="shopping-item__info-cart">
          <h3 class="shopping-item__name_cart">${item.title}</h3>
          <data class="shopping-item__price-value_cart" value="${item.price}">$${item.price}</data>
          <button class="shopping-item__btn_remove">remove</button>
        </div>
        <div class="shopping-item__quantity">
          <button class="shopping-item__btn_add-item">
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
              />
            </svg>
          </button>
          <div class="shopping-item__quantity-display">5</div>
          <button class="shopping-item__btn_reduce-item">
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </button>
        </div>
      </li>
      `);
            });
        };
        this.getTotalSum = () => {
            this._sum = this.items.reduce((sum, elem) => (sum + elem.price));
        };
        this._hide = () => {
            this.cartWrapper.classList.add('hidden');
            document.body.removeEventListener('click', this._hide);
            this._btnExit.removeEventListener('click', this._hide);
        };
        this.show = () => {
            this.cartWrapper.classList.remove('hidden');
            document.body.addEventListener('click', this._hide);
            this._btnExit.addEventListener('click', this._hide);
            this._cartBody.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        };
        this.cartWrapper = document.querySelector('.shopping-cart__wrapper');
        this._cartBody = this.cartWrapper.querySelector('.shopping-cart');
        this._btnExit = this._cartBody.querySelector('.shopping-cart__btn_exit');
        this._list = this.cartWrapper.querySelector('.shopping-cart__list');
        this._sumHTML = this.cartWrapper.querySelector('.shopping-cart__total_amount');
        this.items.push({ id: 1,
            title: 'asd',
            price: 23,
            image: 'https://i.dummyjson.com/data/products/1/1.jpg',
            quantity: 12 });
        this.show();
    }
}
exports.ShoppingCart = ShoppingCart;
const shoppingCart = new ShoppingCart();
exports["default"] = shoppingCart;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvcHJvZHVjdHMuaHRtbCIsIndlYnBhY2s6Ly9qcy8uL3NyYy9zYXNzL3N0eWxlLnNhc3MiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L2FwcC50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvY2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9jb3VudFF1YW50aXRpZXNVbmlxRW50cmllcy50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvZ2V0U2hvcERhdGEudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L3JlbmRlci50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvc2hvcHBpbmctY2FydC50cyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLy4vc3JjL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXG4gICAgPHRpdGxlPlNob3A8L3RpdGxlPlxcbiAgPC9oZWFkPlxcblxcbiAgPGJvZHk+XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPG5hdiBjbGFzcz1cXFwiaGVhZGVyX25hdlxcXCI+XFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua3MtbGlzdFxcXCI+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9pbmRleC5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+SG9tZTwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPlByb2R1Y3RzPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+QWJvdXQ8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRlcl9fbG9nb1xcXCI+Y29tZnk8L3NwYW4+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcl9fYnRuLWNhcnQgYnRuLWNhcnRcXFwiPlxcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcImJ0bi1jYXJ0X19pbWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICBkPVxcXCJNMTcsMThDMTUuODksMTggMTUsMTguODkgMTUsMjBBMiwyIDAgMCwwIDE3LDIyQTIsMiAwIDAsMCAxOSwyMEMxOSwxOC44OSAxOC4xLDE4IDE3LDE4TTEsMlY0SDNMNi42LDExLjU5TDUuMjQsMTQuMDRDNS4wOSwxNC4zMiA1LDE0LjY1IDUsMTVBMiwyIDAgMCwwIDcsMTdIMTlWMTVINy40MkEwLjI1LDAuMjUgMCAwLDEgNy4xNywxNC43NUM3LjE3LDE0LjcgNy4xOCwxNC42NiA3LjIsMTQuNjNMOC4xLDEzSDE1LjU1QzE2LjMsMTMgMTYuOTYsMTIuNTggMTcuMywxMS45N0wyMC44OCw1LjVDMjAuOTUsNS4zNCAyMSw1LjE3IDIxLDVBMSwxIDAgMCwwIDIwLDRINS4yMUw0LjI3LDJNNywxOEM1Ljg5LDE4IDUsMTguODkgNSwyMEEyLDIgMCAwLDAgNywyMkEyLDIgMCAwLDAgOSwyMEM5LDE4Ljg5IDguMSwxOCA3LDE4WlxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWNhcnRfX3F1YW50aXR5XFxcIj4yPC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9uYXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcbiAgICA8bWFpbiBjbGFzcz1cXFwiaGVyb1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVyb19fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxoMSBjbGFzcz1cXFwiaGVyb19fdGl0bGVcXFwiPlJlc3QsIFJlbGF4LCBVbndpbmQ8L2gxPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcImhlcm9fX3RleHRcXFwiPkVtYnJhY2UgeW91ciBjaG9pY2VzIC0gd2UgZG88L3A+XFxuICAgICAgICA8YSBocmVmPVxcXCIuL3Byb2R1Y3RzLmh0bWxcXFwiIGNsYXNzPVxcXCJoZXJvX19idG4tbGlua1xcXCI+c2hvdyBub3c8L2E+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZXJvX19saWNlbnNlXFxcIj5cXG4gICAgICAgICAgUGhvdG8gYnlcXG4gICAgICAgICAgPGFcXG4gICAgICAgICAgICBocmVmPVxcXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYW5uaWVzcHJhdHQ/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XFxcIlxcbiAgICAgICAgICAgID5Bbm5pZSBTcHJhdHQ8L2FcXG4gICAgICAgICAgPlxcbiAgICAgICAgICBvblxcbiAgICAgICAgICA8YVxcbiAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy81MkFBaVhXb1ZpMD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcXFwiXFxuICAgICAgICAgICAgPlVuc3BsYXNoPC9hXFxuICAgICAgICAgID5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L21haW4+XFxuICAgIDxmb290ZXIgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXJfX3RpdGxlXFxcIj5GZWF0dXJlZDwvaDI+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcImZvb3Rlcl9fZmVhdHVyZWQtbGlzdFxcXCI+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1pdGVtIHNob3BwaW5nLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly93d3cuaWtlYS5jb20vY2EvZW4vaW1hZ2VzL3Byb2R1Y3RzL2xpZGFzLWNoYWlyLXdoaXRlLXNlZmFzdC1jaHJvbWUtcGxhdGVkX18xMTA2MzQ3X3BlODY4Njg4X3M1LmpwZz9mPXhsXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lXFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZVxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImZvb3Rlcl9fZmVhdHVyZWQtaXRlbSBzaG9wcGluZy1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vd3d3LmlrZWEuY29tL2NhL2VuL2ltYWdlcy9wcm9kdWN0cy9saWRhcy1jaGFpci13aGl0ZS1zZWZhc3QtY2hyb21lLXBsYXRlZF9fMTEwNjM0N19wZTg2ODY4OF9zNS5qcGc/Zj14bFxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZ1xcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZVxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJmb290ZXJfX2ZlYXR1cmVkLWl0ZW0gc2hvcHBpbmctaXRlbVxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3d3dy5pa2VhLmNvbS9jYS9lbi9pbWFnZXMvcHJvZHVjdHMvbGlkYXMtY2hhaXItd2hpdGUtc2VmYXN0LWNocm9tZS1wbGF0ZWRfXzExMDYzNDdfcGU4Njg2ODhfczUuanBnP2Y9eGxcXFwiXFxuICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWdcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Zvb3Rlcj5cXG4gICAgXFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3dyYXBwZXIgaGlkZGVuXFxcIj5cXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2hvcHBpbmctY2FydFxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19idG5fZXhpdFxcXCI+XFxuICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgIGQ9XFxcIk0xOSw2LjQxTDE3LjU5LDVMMTIsMTAuNTlMNi40MSw1TDUsNi40MUwxMC41OSwxMkw1LDE3LjU5TDYuNDEsMTlMMTIsMTMuNDFMMTcuNTksMTlMMTksMTcuNTlMMTMuNDEsMTJMMTksNi40MVpcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgPC9zdmc+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fdGl0bGVcXFwiPllvdXIgQmFnPC9oMz5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fbGlzdFxcXCI+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9faXRlbSBzaG9wcGluZy1pdGVtX2NhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZy1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbmZvLWNhcnRcXFwiPlxcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lX2NhcnRcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVfY2FydFxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlbW92ZVxcXCI+cmVtb3ZlPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHlcXFwiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX2FkZC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsMTUuNDFMMTIsMTAuODNMMTYuNTksMTUuNDFMMTgsMTRMMTIsOEw2LDE0TDcuNDEsMTUuNDFaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eS1kaXNwbGF5XFxcIj41PC9kaXY+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVkdXNlLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSw4LjU4TDEyLDEzLjE3TDE2LjU5LDguNThMMTgsMTBMMTIsMTZMNiwxMEw3LjQxLDguNThaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9faXRlbSBzaG9wcGluZy1pdGVtX2NhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZy1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbmZvLWNhcnRcXFwiPlxcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lX2NhcnRcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVfY2FydFxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlbW92ZVxcXCI+cmVtb3ZlPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHlcXFwiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX2FkZC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsMTUuNDFMMTIsMTAuODNMMTYuNTksMTUuNDFMMTgsMTRMMTIsOEw2LDE0TDcuNDEsMTUuNDFaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eS1kaXNwbGF5XFxcIj41PC9kaXY+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVkdXNlLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSw4LjU4TDEyLDEzLjE3TDE2LjU5LDguNThMMTgsMTBMMTIsMTZMNiwxMEw3LjQxLDguNThaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3RvdGFsXFxcIj5cXG4gICAgICAgICAgVG90YWwgOlxcbiAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fdG90YWxfYW1vdW50XFxcIj4kMTE0Ljk0PC9kYXRhPlxcbiAgICAgICAgPC9wPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fYnRuX2NoZWNrb3V0XFxcIj5jaGVja291dDwvYnV0dG9uPlxcbiAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJtZGkgbWRpLWNvbnRlbnQtc2F2ZS1taW51cy1vdXRsaW5lXFxcIj48L3NwYW4+XFxuICA8L2JvZHk+XFxuPC9odG1sPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxuICA8aGVhZD5cXG4gICAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiIC8+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCIgLz5cXG4gICAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiIC8+XFxuICAgIDx0aXRsZT5Qcm9kdWN0czwvdGl0bGU+XFxuICA8L2hlYWQ+XFxuICA8Ym9keT5cXG4gICAgPGhlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8bmF2IGNsYXNzPVxcXCJoZWFkZXJfbmF2XFxcIj5cXG4gICAgICAgICAgPHVsIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rcy1saXN0XFxcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5Ib21lPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9wcm9kdWN0cy5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+UHJvZHVjdHM8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5BYm91dDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGVyX19sb2dvXFxcIj5jb21meTwvc3Bhbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaGVhZGVyX19idG4tY2FydCBidG4tY2FydFxcXCI+XFxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwiYnRuLWNhcnRfX2ltZ1xcXCIgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgIGQ9XFxcIk0xNywxOEMxNS44OSwxOCAxNSwxOC44OSAxNSwyMEEyLDIgMCAwLDAgMTcsMjJBMiwyIDAgMCwwIDE5LDIwQzE5LDE4Ljg5IDE4LjEsMTggMTcsMThNMSwyVjRIM0w2LjYsMTEuNTlMNS4yNCwxNC4wNEM1LjA5LDE0LjMyIDUsMTQuNjUgNSwxNUEyLDIgMCAwLDAgNywxN0gxOVYxNUg3LjQyQTAuMjUsMC4yNSAwIDAsMSA3LjE3LDE0Ljc1QzcuMTcsMTQuNyA3LjE4LDE0LjY2IDcuMiwxNC42M0w4LjEsMTNIMTUuNTVDMTYuMywxMyAxNi45NiwxMi41OCAxNy4zLDExLjk3TDIwLjg4LDUuNUMyMC45NSw1LjM0IDIxLDUuMTcgMjEsNUExLDEgMCAwLDAgMjAsNEg1LjIxTDQuMjcsMk03LDE4QzUuODksMTggNSwxOC44OSA1LDIwQTIsMiAwIDAsMCA3LDIyQTIsMiAwIDAsMCA5LDIwQzksMTguODkgOC4xLDE4IDcsMThaXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tY2FydF9fcXVhbnRpdHlcXFwiPjI8L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L25hdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaXRlLWxvY2F0aW9uXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJzaXRlLWxvY2F0aW9uX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcInNpdGUtbG9jYXRpb25fX2xpbmtcXFwiIGhyZWY9XFxcIi4vaW5kZXguaHRtbFxcXCI+SG9tZSA8L2E+IC9cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJzaXRlLWxvY2F0aW9uX19saW5rXFxcIiBocmVmPVxcXCIuL3Byb2R1Y3RzLmh0bWxcXFwiPlByb2R1Y3RzPC9hPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuICAgIDxtYWluIGNsYXNzPVxcXCJtYWluXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJtYWluX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGFzaWRlIGNsYXNzPVxcXCJzaWRlYmFyXFxcIj5cXG4gICAgICAgICAgPCEtLSA8aW5wdXQgY2xhc3M9XFxcInNpZGViYXJfX3ByaWNlLXJhbmdlXFxcIiB0eXBlPVxcXCJyYW5nZVxcXCIgbmFtZT1cXFwicHJpY2UtcmFuZ2VcXFwiIC8+IC0tPlxcbiAgICAgICAgPC9hc2lkZT5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwicHJvZHVjdHNcXFwiPjwvdWw+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvbWFpbj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fd3JhcHBlciBoaWRkZW5cXFwiPlxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0XFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2J0bl9leGl0XFxcIj5cXG4gICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgZD1cXFwiTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWlxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190aXRsZVxcXCI+WW91ciBCYWc8L2gzPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19saXN0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19pdGVtIHNob3BwaW5nLWl0ZW1fY2FydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2luZm8tY2FydFxcXCI+XFxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVfY2FydFxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZV9jYXJ0XFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVtb3ZlXFxcIj5yZW1vdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eVxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fYWRkLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSwxNS40MUwxMiwxMC44M0wxNi41OSwxNS40MUwxOCwxNEwxMiw4TDYsMTRMNy40MSwxNS40MVpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5LWRpc3BsYXlcXFwiPjU8L2Rpdj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZWR1Y2UtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19pdGVtIHNob3BwaW5nLWl0ZW1fY2FydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2luZm8tY2FydFxcXCI+XFxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVfY2FydFxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZV9jYXJ0XFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVtb3ZlXFxcIj5yZW1vdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eVxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fYWRkLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSwxNS40MUwxMiwxMC44M0wxNi41OSwxNS40MUwxOCwxNEwxMiw4TDYsMTRMNy40MSwxNS40MVpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5LWRpc3BsYXlcXFwiPjU8L2Rpdj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZWR1Y2UtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgICA8cCBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fdG90YWxcXFwiPlxcbiAgICAgICAgICBUb3RhbCA6XFxuICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190b3RhbF9hbW91bnRcXFwiPiQxMTQuOTQ8L2RhdGE+XFxuICAgICAgICA8L3A+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19idG5fY2hlY2tvdXRcXFwiPmNoZWNrb3V0PC9idXR0b24+XFxuICAgICAgPC9zZWN0aW9uPlxcbiAgICA8L2Rpdj5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlxuaW1wb3J0IHsgQ2xpY2tIYW5kbGVyIH0gZnJvbSAnLi9jbGlja0hhbmRsZXInO1xuaW1wb3J0IHsgZ2V0RGF0YUFyciwgU2hvcERhdGEgfSBmcm9tICcuL2dldFNob3BEYXRhJztcbmltcG9ydCB7IFJlbmRlciB9IGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCBzaG9wcGluZ0NhcnQgZnJvbSAnLi9zaG9wcGluZy1jYXJ0JztcblxuXG5cblxuKGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IG5ldyBTaG9wRGF0YShhd2FpdCBnZXREYXRhQXJyKCkpO1xuXG4gIG5ldyBSZW5kZXIoKS5yZW5kZXJIdG1sUHJvZHVjdHNMaXN0KGRhdGEubGlzdCEpO1xuICBuZXcgUmVuZGVyKCkucmVuZGVyU2lkZUJhcihkYXRhKTtcbiAgbmV3IENsaWNrSGFuZGxlcihkYXRhKVxuICBzaG9wcGluZ0NhcnQucmVSZW5kZXJDYXJ0KClcblxufSkoKTtcbiIsImltcG9ydCB7IFNob3BEYXRhIH0gZnJvbSBcIi4vZ2V0U2hvcERhdGFcIlxuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyXCJcbmltcG9ydCBzaG9wcGluZ0NhcnQgZnJvbSBcIi4vc2hvcHBpbmctY2FydFwiXG5cbi8vIG5vdCByZWZhY3RvcmVkIFxuXG5jbGFzcyBGaWx0ZXJDbGlja0hhbmRsZXIge1xuXG4gIGNvbnN0cnVjdG9yIChwdWJsaWMgdGFyZ2V0OkhUTUxFbGVtZW50LCBwdWJsaWMgZGF0YTpTaG9wRGF0YSkge1xuICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZhdGVGaWx0ZXIgPSAoZWxlbWVudDpIVE1MRWxlbWVudCk9PntcbiAgICBjb25zdCBmaWx0ZXIgPSBlbGVtZW50LmRhdGFzZXQuZmlsdGVyIVxuICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICB0aGlzLmRhdGEuYWRkQWN0aXZlRmlsdGVyKGZpbHRlcilcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5hY3RpdmVGaWx0ZXJzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWFjdGl2YXRlRmlsdGVyID0gKGVsZW1lbnQ6SFRNTEVsZW1lbnQpPT57XG4gICAgY29uc3QgZmlsdGVyID0gZWxlbWVudC5kYXRhc2V0LmZpbHRlciFcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgdGhpcy5kYXRhLnJlbW92ZUVsZW1lbnRGcm9tQWN0aXZlRmlsdGVyKGZpbHRlcilcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEuYWN0aXZlRmlsdGVycyk7XG5cbiAgICAvLyByZW1vdmUgYWN0aXZlIGZyb20gXCJBbGxcIiBmaWx0ZXIgZWxlbWVudFxuICAgIGNvbnN0IGFsbEJ0bkZpbHRlckxpc3QgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50XG4gICAgY29uc3QgYnRuRmlsdGVyID0gYWxsQnRuRmlsdGVyTGlzdC5kYXRhc2V0LmZpbHRlciFcblxuICAgIGlmIChhbGxCdG5GaWx0ZXJMaXN0Py5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBhbGxCdG5GaWx0ZXJMaXN0Py5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgdGhpcy5kYXRhLnJlbW92ZUVsZW1lbnRGcm9tQWN0aXZlRmlsdGVyKGJ0bkZpbHRlcilcbiAgICB9IFxuICB9XG5cbiAgcHJpdmF0ZSBfYWN0aXZhdGVGaWx0ZXJMaXN0ID0gKGFycmF5OkVsZW1lbnRbXSk9PntcbiAgICBhcnJheS5mb3JFYWNoKChsaXN0SXRlbSk9PntcbiAgICAgIGlmIChsaXN0SXRlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2FjdGl2YXRlRmlsdGVyKGxpc3RJdGVtKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJpdmF0ZSBfZGVhY3RpdmF0ZUZpbHRlckxpc3QgPSAoYXJyYXk6RWxlbWVudFtdKT0+e1xuICAgIGFycmF5LmZvckVhY2goKGxpc3RJdGVtKT0+e1xuICAgICAgaWYgKGxpc3RJdGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZGVhY3RpdmF0ZUZpbHRlcihsaXN0SXRlbSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ2xpY2tPbkZpbHRlckVsZW1lbnQgPSAoZWxlbWVudDpIVE1MRWxlbWVudCkgPT4ge1xuICAgIFxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblxuICAgICAgdGhpcy5fZGVhY3RpdmF0ZUZpbHRlcihlbGVtZW50KVxuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2FjdGl2YXRlRmlsdGVyKGVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdGlhbGl6ZSA9ICgpPT57XG4gICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLnRhcmdldC5kYXRhc2V0LmZpbHRlciFcblxuICAgICAgaWYgKGZpbHRlcj09PSdjYXRlZ29yeV9hbGwnfHxmaWx0ZXI9PT0nYnJhbmRfYWxsJykge1xuXG4gICAgICAgIGNvbnN0IGFycmF5RmlsdGVycyA9IEFycmF5LmZyb20odGhpcy50YXJnZXQucGFyZW50RWxlbWVudCEuY2hpbGRyZW4pXG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICB0aGlzLl9kZWFjdGl2YXRlRmlsdGVyTGlzdChhcnJheUZpbHRlcnMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fYWN0aXZhdGVGaWx0ZXJMaXN0KGFycmF5RmlsdGVycylcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVDbGlja09uRmlsdGVyRWxlbWVudCh0aGlzLnRhcmdldClcbiAgICAgIH0gXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gIH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBDbGlja0hhbmRsZXIge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YTpTaG9wRGF0YSl7XG4gICAgdGhpcy5pbml0aWFsaXplKClcbiAgfVxuICB1cGRhdGVEYXRhQW5kUmVuZGVyTGlzdCA9ICgpPT57XG4gICAgdGhpcy5kYXRhLmZpbHRlckxpc3QoKVxuICAgIG5ldyBSZW5kZXIoKS5yZW5kZXJIdG1sUHJvZHVjdHNMaXN0KHRoaXMuZGF0YS5maWx0ZXJlZExpc3QpXG4gIH1cblxuICBsaXN0ZW5lckZvck1heFByaWNlPSgpPT57XG4gICAgbGV0IGRlbGF5OmFueVxuICAgIGNvbnN0IGlucHV0OkhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fcHJpY2UtcmFuZ2UnKSFcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKT0+e1xuICAgICAgaWYgKGRlbGF5KSB7Y2xlYXJUaW1lb3V0KGRlbGF5KX1cbiAgICAgIGRlbGF5ID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBjb25zdCBtYXhQcmljZSA9IHBhcnNlSW50KGlucHV0LnZhbHVlKVxuICAgICAgICB0aGlzLmRhdGEuYWN0aXZlRmlsdGVycy5tYXhQcmljZSA9IG1heFByaWNlXG4gICAgICAgIHRoaXMuZGF0YS5wcmljZVJhbmdlLm1heCA9IG1heFByaWNlXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YUFuZFJlbmRlckxpc3QoKVxuICAgICAgICBuZXcgUmVuZGVyKCkucmVSZW5kZXJDb3VudGVyc1F1YW50aXRpZXModGhpcy5kYXRhLmZpbHRlcmVkQnJhbmRzLHRoaXMuZGF0YS5maWx0ZXJlZENhdGVnb3JpZXMpXG4gICAgfVxuICAgICAgICAsNTAwKVxuICAgIH0pXG4gIH1cblxuICBpbml0aWFsaXplID0gKCk9PntcbiAgICB0aGlzLmxpc3RlbmVyRm9yTWF4UHJpY2UoKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XG5cbiAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7cmV0dXJufVxuXG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX2J0bi1jYXJ0JykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2EnKTtcbiAgICAgICAgc2hvcHBpbmdDYXJ0LnNob3coKVxuXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLnNpZGViYXJfX2ZpbHRlci1pdGVtJykpIHtcblxuICAgICAgICBuZXcgRmlsdGVyQ2xpY2tIYW5kbGVyKHRhcmdldCBhcyBIVE1MRWxlbWVudCwgdGhpcy5kYXRhKVxuICAgICAgICB0aGlzLnVwZGF0ZURhdGFBbmRSZW5kZXJMaXN0KClcbiAgICAgICAgbmV3IFJlbmRlcigpLnJlUmVuZGVyQ291bnRlcnNRdWFudGl0aWVzKHRoaXMuZGF0YS5maWx0ZXJlZEJyYW5kcyx0aGlzLmRhdGEuZmlsdGVyZWRDYXRlZ29yaWVzKVxuICAgICAgfVxuICAgICAgXG4gICAgfSlcbiAgICBcblxuICAgIFxuICB9XG5cbn0iLCJleHBvcnQgaW50ZXJmYWNlIElDb2xsZWN0aW9uV2l0aENvdW50IHtcbiAgW2luZGV4OiBzdHJpbmddOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNvbnN0IGNvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzID0gKGFycjpzdHJpbmdbXSk6SUNvbGxlY3Rpb25XaXRoQ291bnQ9PntcbiAgXG4gIGNvbnN0IGNvbGxlY3Rpb25XaXRoQ291bnQ6SUNvbGxlY3Rpb25XaXRoQ291bnQgPSB7XG4gIH07XG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFycikge1xuICAgIGlmIChjb2xsZWN0aW9uV2l0aENvdW50W2VsZW1lbnRdKSB7XG4gICAgICBjb2xsZWN0aW9uV2l0aENvdW50W2VsZW1lbnRdICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbGxlY3Rpb25XaXRoQ291bnRbZWxlbWVudF0gPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb2xsZWN0aW9uV2l0aENvdW50XG59IiwiaW1wb3J0IHsgSUNvbGxlY3Rpb25XaXRoQ291bnQsY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXMgfSBmcm9tIFwiLi9jb3VudFF1YW50aXRpZXNVbmlxRW50cmllc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9kdWN0IHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgZGlzY291bnRQZXJjZW50YWdlOiBudW1iZXI7XG4gIHJhdGluZzogbnVtYmVyO1xuICBzdG9jazogbnVtYmVyO1xuICBicmFuZDogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICB0aHVtYm5haWw6IFVSTDtcbiAgaW1hZ2VzOiBVUkxbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluTWF4T2JqIHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSUFuc3dlclNlcnZlciB7XG4gIHByb2R1Y3RzOiBJUHJvZHVjdFtdO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RGF0YUFyciA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzP2xpbWl0PTEwMCcpO1xuICAgIGNvbnN0IGRhdGE6IElBbnN3ZXJTZXJ2ZXIgPSBhd2FpdCBhbnN3ZXIuanNvbigpO1xuICAgIHJldHVybiBkYXRhLnByb2R1Y3RzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIFNob3BEYXRhIHtcblxuICBwdWJsaWMgZmlsdGVyczoge1xuICAgIGNhdGVnb3J5OiBJQ29sbGVjdGlvbldpdGhDb3VudDtcbiAgICBicmFuZDogSUNvbGxlY3Rpb25XaXRoQ291bnQ7XG4gIH09IHtcbiAgICBjYXRlZ29yeToge30sXG4gICAgYnJhbmQ6IHt9LFxuICB9XG4gIHByaWNlUmFuZ2UhOiBJTWluTWF4T2JqO1xuXG4gIGZpbHRlcmVkTGlzdDogSVByb2R1Y3RbXVxuICBmaWx0ZXJlZENhdGVnb3JpZXM6SUNvbGxlY3Rpb25XaXRoQ291bnQ9e31cbiAgZmlsdGVyZWRCcmFuZHM6SUNvbGxlY3Rpb25XaXRoQ291bnQ9e31cblxuICBwcml2YXRlIF9hY3RpdmVGaWx0ZXJzOiB7XG4gICAgY2F0ZWdvcnk6IHN0cmluZ1tdO1xuICAgIGJyYW5kOiBzdHJpbmdbXTtcbiAgICBtYXhQcmljZTogbnVtYmVyO1xuICB9ID0ge1xuICAgIGNhdGVnb3J5OiBbXSxcbiAgICBicmFuZDogW10sXG4gICAgbWF4UHJpY2U6IDAsXG4gIH07XG5cblxuICBcbiAgcHVibGljIGdldCBhY3RpdmVGaWx0ZXJzKCk6IHtcbiAgICBjYXRlZ29yeTogc3RyaW5nW107XG4gICAgYnJhbmQ6IHN0cmluZ1tdO1xuICAgIG1heFByaWNlOiBudW1iZXI7XG4gIH0ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVGaWx0ZXJzO1xuICB9XG4gIFxuICBwdWJsaWMgYWRkQWN0aXZlRmlsdGVyKHN0cmluZzpzdHJpbmcpIHtcbiAgICBjb25zdCBbZmlsdGVyVHlwZSx2YWx1ZV0gPSBzdHJpbmcuc3BsaXQoJ18nKVxuXG4gICAgaWYgKChmaWx0ZXJUeXBlPT09J2JyYW5kJ3x8IGZpbHRlclR5cGU9PT0nY2F0ZWdvcnknKSAmJiB0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJykge1xuICAgICAgdGhpcy5fYWN0aXZlRmlsdGVyc1tmaWx0ZXJUeXBlXS5wdXNoKHZhbHVlKVxuICAgIH0gXG5cbiAgICBpZiAoZmlsdGVyVHlwZT09PSdtYXhQcmljZScgJiYgdHlwZW9mIHZhbHVlPT09J251bWJlcicpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZUZpbHRlcnNbZmlsdGVyVHlwZV09dmFsdWVcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRWxlbWVudEZyb21BY3RpdmVGaWx0ZXIoc3RyaW5nOnN0cmluZykge1xuXG4gICAgY29uc3QgW2ZpbHRlclR5cGUsdmFsdWVdID0gc3RyaW5nLnNwbGl0KCdfJylcbiAgICBcbiAgICBpZiAoKGZpbHRlclR5cGU9PT0nYnJhbmQnfHwgZmlsdGVyVHlwZT09PSdjYXRlZ29yeScpICYmIHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBhcnIgPSB0aGlzLmFjdGl2ZUZpbHRlcnNbZmlsdGVyVHlwZV1cbiAgICAgIGFyci5zcGxpY2UoYXJyLmZpbmRJbmRleChmaWx0ZXI9PmZpbHRlcj09PXZhbHVlKSwxKVxuICAgICAgdGhpcy5hY3RpdmVGaWx0ZXJzW2ZpbHRlclR5cGVdID0gYXJyXG4gICAgfVxuXG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGlzdDogSVByb2R1Y3RbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLmxpc3QhKVxuXG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5icmFuZCA9IHRoaXMuX2dldFF1YW50aXR5QnJhbmRzKCk7XG4gICAgICB0aGlzLmZpbHRlcnMuY2F0ZWdvcnkgPSB0aGlzLl9nZXRRdWFudGl0eUNhdGVnb3JpZXMoKTtcbiAgICAgIHRoaXMucHJpY2VSYW5nZSA9IHRoaXMuX2dldFByaWNlUmFuZ2UoKSE7XG4gICAgICB0aGlzLmFjdGl2ZUZpbHRlcnMubWF4UHJpY2UgPSB0aGlzLnByaWNlUmFuZ2UubWF4XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UXVhbnRpdHlCcmFuZHMgPSAoKSA9PiBjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyh0aGlzLmxpc3Q/Lm1hcChwcm9kdWN0ID0+IHByb2R1Y3QuYnJhbmQpISk7XG5cbiAgcHJpdmF0ZSBfZ2V0UXVhbnRpdHlDYXRlZ29yaWVzID0gKCkgPT4gY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXModGhpcy5saXN0Py5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuY2F0ZWdvcnkpISk7XG5cbiAgcHJpdmF0ZSBfZ2V0UHJpY2VSYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBwcmljZXMgPSB0aGlzLmxpc3Q/Lm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5wcmljZSk7XG4gICAgaWYgKHByaWNlcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWluOiBNYXRoLm1pbiguLi5wcmljZXMpLFxuICAgICAgICBtYXg6IE1hdGgubWF4KC4uLnByaWNlcylcbiAgICAgIH07XG4gICAgfVxuICB9O1xuICBwcml2YXRlIF9kZWVwQ2xvbmVBcnJheTxUPiAoYXJyOlQpOlQge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFycikpXG4gIH1cbiAgcHJpdmF0ZSBfY2xvbmVBcnJheTxUPiAoYXJyOlRbXSk6VFtdIHtcbiAgICByZXR1cm4gWy4uLmFycl1cbiAgfVxuICBwcml2YXRlIF9maWx0ZXJCeU1heFByaWNlID0gKGFycjpJUHJvZHVjdFtdKT0+e1xuXG4gICAgY29uc3QgYnVmZmVyQXJyID0gdGhpcy5fY2xvbmVBcnJheShhcnIpXG4gICAgXG4gICAgYXJyLmxlbmd0aD0wXG4gICAgXG4gICAgY29uc3QgZmlsdGVyZWQgPSBbLi4uYnVmZmVyQXJyXSEuZmlsdGVyKGVsZW09PmVsZW0ucHJpY2U8PXRoaXMuYWN0aXZlRmlsdGVycy5tYXhQcmljZSlcbiAgICBcbiAgICBhcnIucHVzaCguLi5maWx0ZXJlZClcblxuICAgIHJldHVybiBhcnJcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckJ5QnJhbmRzID0gKGFycjpJUHJvZHVjdFtdKT0+e1xuICAgIGlmICggdGhpcy5hY3RpdmVGaWx0ZXJzLmJyYW5kLmxlbmd0aCE9PTApIHtcbiAgICAgIGNvbnN0IGJ1ZmZlckFyciA9IHRoaXMuX2Nsb25lQXJyYXkoYXJyKVxuICAgIFxuICAgICAgYXJyLmxlbmd0aD0wXG4gICAgICBcbiAgICAgIHRoaXMuYWN0aXZlRmlsdGVycy5icmFuZC5mb3JFYWNoKGZpbHRlclZhbHVlPT57XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gWy4uLmJ1ZmZlckFycl0uZmlsdGVyKGVsZW09PmVsZW0uYnJhbmQ9PT1maWx0ZXJWYWx1ZSlcbiAgICAgICAgYXJyLnB1c2goLi4uZmlsdGVyZWQpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFyclxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJyXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyQnlDYXRlZ29yaWVzID0gKGFycjpJUHJvZHVjdFtdKT0+e1xuICAgIGlmICggdGhpcy5hY3RpdmVGaWx0ZXJzLmNhdGVnb3J5Lmxlbmd0aCE9PTApIHtcbiAgICAgIGNvbnN0IGJ1ZmZlckFyciA9IHRoaXMuX2Nsb25lQXJyYXkoYXJyKVxuICAgIFxuICAgICAgYXJyLmxlbmd0aD0wXG4gICAgICBcbiAgICAgIHRoaXMuYWN0aXZlRmlsdGVycy5jYXRlZ29yeS5mb3JFYWNoKGZpbHRlclZhbHVlPT57XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gWy4uLmJ1ZmZlckFycl0uZmlsdGVyKGVsZW09PmVsZW0uY2F0ZWdvcnk9PT1maWx0ZXJWYWx1ZSlcbiAgICAgICAgYXJyLnB1c2goLi4uZmlsdGVyZWQpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFyclxuICAgIH0gZWxzZSB7cmV0dXJuIHRoaXMuX2Nsb25lQXJyYXkoYXJyKX1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEZpbHRlcmVkQ2F0ZWdvcmllcyA9ICgpPT57XG4gICAgbGV0IGFyciA9IHRoaXMuX2Nsb25lQXJyYXkodGhpcy5saXN0ISlcbiAgICBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMuX2ZpbHRlckJ5QnJhbmRzKGFycikpXG4gICAgYXJyID0gdGhpcy5fY2xvbmVBcnJheSh0aGlzLl9maWx0ZXJCeU1heFByaWNlKGFycikpXG4gICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMgPSBjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyhhcnIubWFwKHByb2R1Y3Q9PnByb2R1Y3QuY2F0ZWdvcnkpKVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RmlsdGVyZWRCcmFuZHMgPSAoKT0+e1xuICAgIGxldCBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMubGlzdCEpXG4gICAgYXJyID0gdGhpcy5fY2xvbmVBcnJheSh0aGlzLl9maWx0ZXJCeUNhdGVnb3JpZXMoYXJyKSlcbiAgICBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMuX2ZpbHRlckJ5TWF4UHJpY2UoYXJyKSlcbiAgICB0aGlzLmZpbHRlcmVkQnJhbmRzID0gY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXMoYXJyLm1hcChwcm9kdWN0PT5wcm9kdWN0LmJyYW5kKSlcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJMaXN0ID0gKCk9PiB7XG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbLi4udGhpcy5saXN0IV1cbiAgICB0aGlzLmZpbHRlcmVkTGlzdD0gWy4uLnRoaXMuX2ZpbHRlckJ5QnJhbmRzKHRoaXMuZmlsdGVyZWRMaXN0KV1cbiAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFsuLi50aGlzLl9maWx0ZXJCeUNhdGVnb3JpZXModGhpcy5maWx0ZXJlZExpc3QpXVxuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5fZmlsdGVyQnlNYXhQcmljZSh0aGlzLmZpbHRlcmVkTGlzdClcbiAgICB0aGlzLl9nZXRGaWx0ZXJlZENhdGVnb3JpZXMoKVxuICAgIHRoaXMuX2dldEZpbHRlcmVkQnJhbmRzKClcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBcbiAgfSBcbn1cblxuXG4iLCJpbXBvcnQgeyBJQ29sbGVjdGlvbldpdGhDb3VudCB9IGZyb20gXCIuL2NvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzXCI7XG5pbXBvcnQgeyBJUHJvZHVjdCwgSU1pbk1heE9iaiwgU2hvcERhdGEgfSBmcm9tIFwiLi9nZXRTaG9wRGF0YVwiO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyIHtcbiAgbGlzdDogSFRNTFVMaXN0RWxlbWVudDtcbiAgc2lkZWJhcjogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJykhO1xuICAgIHRoaXMuc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykhO1xuICB9XG5cblxuXG4gIHJlbmRlckh0bWxQcm9kdWN0c0xpc3QgPSAocHJvZHVjdEFycmF5OiBJUHJvZHVjdFtdKSA9PiB7XG4gICAgdGhpcy5saXN0LmlubmVySFRNTCA9ICcnO1xuICAgIHByb2R1Y3RBcnJheS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBjb25zdCB7IHRpdGxlLCBwcmljZSwgaW1hZ2VzLCBpZCB9ID0gZWxlbTtcbiAgICAgIHRoaXMubGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICBgXG4gICAgICA8bGkgY2xhc3M9XCJwcm9kdWN0c19faXRlbSBzaG9wcGluZy1pdGVtXCIgZGF0YS1pZD1cIiR7aWR9XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbMF19XCIgYWx0PVwiXCIgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19pbWdcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwic2hvcHBpbmctaXRlbV9fbmFtZVwiPiR7dGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX3ByaWNlLWFuZC1jYXJ0XCI+XG4gICAgICAgICAgPGRhdGEgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZVwiIHZhbHVlPVwiJHtwcmljZX1cIj4kJHtwcmljZX08L2RhdGE+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX2J0bi1jYXJ0X19pbWdcIiBzdHlsZT1cIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNywxOEEyLDIgMCAwLDEgMTksMjBBMiwyIDAgMCwxIDE3LDIyQzE1Ljg5LDIyIDE1LDIxLjEgMTUsMjBDMTUsMTguODkgMTUuODksMTggMTcsMThNMSwySDQuMjdMNS4yMSw0SDIwQTEsMSAwIDAsMSAyMSw1QzIxLDUuMTcgMjAuOTUsNS4zNCAyMC44OCw1LjVMMTcuMywxMS45N0MxNi45NiwxMi41OCAxNi4zLDEzIDE1LjU1LDEzSDguMUw3LjIsMTQuNjNMNy4xNywxNC43NUEwLjI1LDAuMjUgMCAwLDAgNy40MiwxNUgxOVYxN0g3QzUuODksMTcgNSwxNi4xIDUsMTVDNSwxNC42NSA1LjA5LDE0LjMyIDUuMjQsMTQuMDRMNi42LDExLjU5TDMsNEgxVjJNNywxOEEyLDIgMCAwLDEgOSwyMEEyLDIgMCAwLDEgNywyMkM1Ljg5LDIyIDUsMjEuMSA1LDIwQzUsMTguODkgNS44OSwxOCA3LDE4TTE2LDExTDE4Ljc4LDZINi4xNEw4LjUsMTFIMTZaXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgIGBcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVuZGVyU2VhcmNoID0gKCkgPT4ge1xuICAgIHRoaXMuc2lkZWJhci5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICBgXG4gICAgPGlucHV0IGNsYXNzPVwic2lkZWJhcl9fc2VhcmNoXCIgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgIGBcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlckZpbHRlckNhdGVnb3J5ID0gKGZpbHRlckNhdGVnb3J5TmFtZTogc3RyaW5nLCBmaWx0ZXJDYXRlZ29yeUVudHJpZXM6IElDb2xsZWN0aW9uV2l0aENvdW50KSA9PiB7XG4gICAgdGhpcy5zaWRlYmFyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgYFxuICAgICAgPGgzIGNsYXNzPVwic2lkZWJhcl9fdGl0bGVcIj4ke2ZpbHRlckNhdGVnb3J5TmFtZX08L2gzPlxuICAgICAgPHVsIGNsYXNzPVwic2lkZWJhcl9fZmlsdGVyLWxpc3RcIiBpZD1cImNhdGVnb3JpZXNMaXN0JHtmaWx0ZXJDYXRlZ29yeU5hbWV9XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cInNpZGViYXJfX2ZpbHRlci1pdGVtIHNpZGViYXJfX2ZpcnN0LWxpc3QtaXRlbVwiIGRhdGEtZmlsdGVyPVwiJHtmaWx0ZXJDYXRlZ29yeU5hbWV9X2FsbFwiPkFsbDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgYFxuICAgICk7XG5cbiAgICBjb25zdCBsaXN0RmlsdGVyID0gdGhpcy5zaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoYCNjYXRlZ29yaWVzTGlzdCR7ZmlsdGVyQ2F0ZWdvcnlOYW1lfWApO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoZmlsdGVyQ2F0ZWdvcnlFbnRyaWVzKS5mb3JFYWNoKChbdmFsdWUscXVhbnRpdHldKSA9PiB7XG4gICAgICBsaXN0RmlsdGVyPy5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICBgXG4gICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItaXRlbVwiIGRhdGEtZmlsdGVyPVwiJHtmaWx0ZXJDYXRlZ29yeU5hbWV9XyR7dmFsdWV9XCI+JHt2YWx1ZX0gXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX19lbGVtLWNvdW50ZXJcIj4ke3F1YW50aXR5fTwvZGl2PlxuICAgICAgPC9saT5gXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlclByaWNlUmFuZ2UgPSAoYXJyOiBJTWluTWF4T2JqKSA9PiB7XG4gICAgdGhpcy5zaWRlYmFyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgYFxuICAgICAgPGgzIGNsYXNzPVwic2lkZWJhcl9fdGl0bGVcIj5QcmljZTwvaDM+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzaWRlYmFyX19wcmljZS1yYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJwcmljZS1yYW5nZVwiIG1heD1cIiR7YXJyLm1heH1cIiBtaW49XCIke2Fyci5taW59XCIgdmFsdWU9XCIke2Fyci5tYXh9XCIvPlxuICAgICAgPGRhdGEgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItbWF4LXByaWNlXCI+TWF4IHByaWNlOiAkJHthcnIubWF4fTwvZGF0YT5cbiAgICAgIGBcbiAgICApO1xuICAgIGNvbnN0IHByaWNlUmFuZ2VJTnB1dDpIVE1MSW5wdXRFbGVtZW50fG51bGwgPSB0aGlzLnNpZGViYXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3ByaWNlLXJhbmdlJylcbiAgICBjb25zdCBwcmljZVJhbmdlRGF0YSA9IHRoaXMuc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fZmlsdGVyLW1heC1wcmljZScpIVxuICAgIFxuICAgIHByaWNlUmFuZ2VJTnB1dD8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKCk9PntcbiAgICAgIHByaWNlUmFuZ2VEYXRhLnRleHRDb250ZW50ID0gYE1heCBwcmljZTogJCR7cHJpY2VSYW5nZUlOcHV0LnZhbHVlfSBgXG4gICAgfSlcblxuICAgIFxuICB9O1xuXG4gIHJlbmRlclNpZGVCYXIgPSAoZGF0YTogU2hvcERhdGEpID0+IHtcbiAgICB0aGlzLl9yZW5kZXJTZWFyY2goKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuZmlsdGVycykuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICBjb25zdCBbZmlsdGVyVHlwZSwgZmlsdGVyVmFsdWVdID0gZmlsdGVyO1xuICAgICAgdGhpcy5fcmVuZGVyRmlsdGVyQ2F0ZWdvcnkoZmlsdGVyVHlwZSwgZmlsdGVyVmFsdWUpO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuX3JlbmRlclByaWNlUmFuZ2UoZGF0YS5wcmljZVJhbmdlKTtcbiAgfTtcblxuICByZVJlbmRlckNvdW50ZXJzUXVhbnRpdGllcyA9IChicmFuZHM6SUNvbGxlY3Rpb25XaXRoQ291bnQsIGNhdGVnb3JpZXM6SUNvbGxlY3Rpb25XaXRoQ291bnQpPT57XG4gICAgY29uc3Qgbm9kZUxpc3RPZkNvdW50ZXJzID0gdGhpcy5zaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyX19lbGVtLWNvdW50ZXInKVxuICAgIG5vZGVMaXN0T2ZDb3VudGVycy5mb3JFYWNoKGNvdW50ZXI9PntcbiAgICAgIGNvbnN0IFtmaWx0ZXJUeXBlLCBmaWx0ZXJWYWx1ZV0gPSBjb3VudGVyLnBhcmVudEVsZW1lbnQ/LmRhdGFzZXQuZmlsdGVyPy5zcGxpdCgnXycpIVxuICAgICAgaWYgKGZpbHRlclR5cGU9PT0nY2F0ZWdvcnknKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclR5cGVBbmRDb3VudCA9IE9iamVjdC5lbnRyaWVzKGNhdGVnb3JpZXMpLmZpbmQoY2F0ZWdvcnk9PmNhdGVnb3J5WzBdPT09ZmlsdGVyVmFsdWUpXG4gICAgICAgIGlmIChmaWx0ZXJUeXBlQW5kQ291bnQpIHtcbiAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50PWZpbHRlclR5cGVBbmRDb3VudFsxXS50b1N0cmluZygpXG4gICAgICAgICAgY291bnRlci5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlci50ZXh0Q29udGVudD0nMCdcbiAgICAgICAgICBjb3VudGVyLnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJylcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgIGlmIChmaWx0ZXJUeXBlPT09J2JyYW5kJykge1xuICAgICAgICBjb25zdCBmaWx0ZXJUeXBlQW5kQ291bnQgPSBPYmplY3QuZW50cmllcyhicmFuZHMpLmZpbmQoYnJhbmQ9PmJyYW5kWzBdPT09ZmlsdGVyVmFsdWUpXG4gICAgICAgIGlmIChmaWx0ZXJUeXBlQW5kQ291bnQpIHtcbiAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50PWZpbHRlclR5cGVBbmRDb3VudFsxXS50b1N0cmluZygpXG4gICAgICAgICAgY291bnRlci5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlci50ZXh0Q29udGVudD0nMCdcbiAgICAgICAgICBjb3VudGVyLnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJylcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgIFxuICAgIH0pXG4gICAgY29uc29sZS5sb2coKTtcbiAgICBcbiAgfVxuXG59IiwiaW50ZXJmYWNlIElDYXJ0SXRlbVN0b3JlZCB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIGltYWdlOiBzdHJpbmc7XG4gIHF1YW50aXR5Om51bWJlclxufVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdDYXJ0IHtcbiAgcHVibGljIGl0ZW1zOklDYXJ0SXRlbVN0b3JlZFtdPVtdXG4gIGNhcnRXcmFwcGVyOkhUTUxFbGVtZW50XG4gIHByaXZhdGUgX3N1bTogYW55O1xuICBwcml2YXRlIF9saXN0OkhUTUxVTGlzdEVsZW1lbnRcbiAgcHJpdmF0ZSBfc3VtSFRNTDogSFRNTEVsZW1lbnQ7XG4gIHByaXZhdGUgX2NhcnRCb2R5OiBIVE1MRWxlbWVudFxuICBwcml2YXRlIF9idG5FeGl0OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5jYXJ0V3JhcHBlcj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3BwaW5nLWNhcnRfX3dyYXBwZXInKSFcbiAgICB0aGlzLl9jYXJ0Qm9keSA9IHRoaXMuY2FydFdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNob3BwaW5nLWNhcnQnKSFcbiAgICB0aGlzLl9idG5FeGl0ID0gdGhpcy5fY2FydEJvZHkucXVlcnlTZWxlY3RvcignLnNob3BwaW5nLWNhcnRfX2J0bl9leGl0JykhXG4gICAgdGhpcy5fbGlzdCA9IHRoaXMuY2FydFdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNob3BwaW5nLWNhcnRfX2xpc3QnKSFcbiAgICB0aGlzLl9zdW1IVE1MID0gdGhpcy5jYXJ0V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmctY2FydF9fdG90YWxfYW1vdW50JykhXG4gICAgdGhpcy5pdGVtcy5wdXNoKHtpZDogMSxcbiAgICAgIHRpdGxlOiAnYXNkJyxcbiAgICAgIHByaWNlOiAyMyxcbiAgICAgIGltYWdlOiAnaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzEuanBnJyxcbiAgICAgIHF1YW50aXR5OjEyfSlcbiAgICAgIHRoaXMuc2hvdygpXG4gIH1cbiAgcmVSZW5kZXJDYXJ0ID0gKCk9PntcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbT0+e1xuICAgICAgdGhpcy5fbGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICAgIDxsaSBjbGFzcz1cInNob3BwaW5nLWNhcnRfX2l0ZW0gc2hvcHBpbmctaXRlbV9jYXJ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19pbWctYmFja2dyb3VuZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke2l0ZW0uaW1hZ2V9Jyk7XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19pbmZvLWNhcnRcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19uYW1lX2NhcnRcIj4ke2l0ZW0udGl0bGV9PC9oMz5cbiAgICAgICAgICA8ZGF0YSBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlX2NhcnRcIiB2YWx1ZT1cIiR7aXRlbS5wcmljZX1cIj4kJHtpdGVtLnByaWNlfTwvZGF0YT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2hvcHBpbmctaXRlbV9fYnRuX3JlbW92ZVwiPnJlbW92ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX2J0bl9hZGQtaXRlbVwiPlxuICAgICAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgZD1cIk03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHktZGlzcGxheVwiPjU8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2hvcHBpbmctaXRlbV9fYnRuX3JlZHVjZS1pdGVtXCI+XG4gICAgICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBkPVwiTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgICAgYClcbiAgICB9KVxuICB9XG5cbiAgZ2V0VG90YWxTdW0gPSAoKT0+e1xuICAgIHRoaXMuX3N1bSA9IHRoaXMuaXRlbXMucmVkdWNlKChzdW06YW55LGVsZW0pPT4oc3VtK2VsZW0ucHJpY2UpKVxuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZT0oKT0+e1xuICAgIHRoaXMuY2FydFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGlkZSlcbiAgICB0aGlzLl9idG5FeGl0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGlkZSlcbiAgfVxuXG4gIHNob3cgPSAoKT0+e1xuICAgIHRoaXMuY2FydFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGlkZSlcbiAgICB0aGlzLl9idG5FeGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGlkZSlcbiAgICB0aGlzLl9jYXJ0Qm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgfSlcbiAgfVxuXG59XG5cbmNvbnN0IHNob3BwaW5nQ2FydCA9IG5ldyBTaG9wcGluZ0NhcnQoKVxuZXhwb3J0IGRlZmF1bHQgc2hvcHBpbmdDYXJ0IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL2luZGV4Lmh0bWwnO1xuaW1wb3J0ICcuLi9wcm9kdWN0cy5odG1sJztcbmltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zYXNzJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudC9hcHAnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCBkb2N1bWVudC50aXRsZSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==