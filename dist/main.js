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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Products</title>\n  </head>\n  <body>\n    <header class=\"header\">\n      <div class=\"header__container\">\n        <nav class=\"header_nav\">\n          <ul class=\"header__nav-links-list\">\n            <li class=\"header__nav-link-item\">\n              <a href=\"./index.html\" class=\"header__nav-link\">Home</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"./products.html\" class=\"header__nav-link\">Products</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"\" class=\"header__nav-link\">About</a>\n            </li>\n          </ul>\n          <span class=\"header__logo\">comfy</span>\n          <button class=\"header__btn-cart btn-cart\">\n            <svg class=\"btn-cart__img\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n              <path\n                fill=\"currentColor\"\n                d=\"M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z\"\n              />\n            </svg>\n            <div class=\"btn-cart__quantity\">2</div>\n          </button>\n        </nav>\n      </div>\n    </header>\n\n    <section class=\"site-location\">\n      <div class=\"site-location__container\">\n        <a class=\"site-location__link\" href=\"./index.html\">Home </a> /\n        <a class=\"site-location__link\" href=\"./products.html\">Products</a>\n      </div>\n    </section>\n    <main class=\"main\">\n      <div class=\"main__container\">\n        <aside class=\"sidebar\">\n          <!-- <input class=\"sidebar__price-range\" type=\"range\" name=\"price-range\" /> -->\n        </aside>\n        <ul class=\"products\"></ul>\n      </div>\n    </main>\n    <div class=\"shopping-cart__wrapper hidden\">\n      <section class=\"shopping-cart\">\n        <button class=\"shopping-cart__btn_exit\">\n          <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n            <path\n              fill=\"currentColor\"\n              d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\"\n            />\n          </svg>\n        </button>\n        <h3 class=\"shopping-cart__title\">Your Bag</h3>\n        <ul class=\"shopping-cart__list\">\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduse-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduse-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n        </ul>\n        <p class=\"shopping-cart__total\">\n          Total :\n          <data class=\"shopping-cart__total_amount\">$114.94</data>\n        </p>\n        <button class=\"shopping-cart__btn_checkout\">checkout</button>\n      </section>\n    </div>\n  </body>\n</html>\n";
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const getShopData_1 = __webpack_require__(/*! ./getShopData */ "./src/ts/component/getShopData.ts");
const render_1 = __webpack_require__(/*! ./render */ "./src/ts/component/render.ts");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const data = new getShopData_1.ShopData(yield (0, getShopData_1.getDataArr)());
    class FilterClickHandler {
        constructor(target) {
            this.target = target;
            this._activateFilter = (element) => {
                const filter = element.dataset.filter;
                if (!element.classList.contains('active')) {
                    element.classList.add('active');
                    data.addActiveFilter(filter);
                    console.log(data.activeFilters);
                }
            };
            this._deactivateFilter = (element) => {
                var _a;
                const filter = element.dataset.filter;
                element.classList.remove('active');
                data.removeElementFromActiveFilter(filter);
                console.log(data.activeFilters);
                // remove active from "All" filter element
                const allBtnFilterList = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.firstElementChild;
                const btnFilter = allBtnFilterList.dataset.filter;
                if (allBtnFilterList === null || allBtnFilterList === void 0 ? void 0 : allBtnFilterList.classList.contains('active')) {
                    allBtnFilterList === null || allBtnFilterList === void 0 ? void 0 : allBtnFilterList.classList.remove('active');
                    data.removeElementFromActiveFilter(btnFilter);
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
        constructor() {
            this.updateDataAndRenderList = () => {
                data.filterList();
                new render_1.Render().renderHtmlProductsList(data.filteredList);
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
                        data.activeFilters.maxPrice = maxPrice;
                        data.priceRange.max = maxPrice;
                        this.updateDataAndRenderList();
                        new render_1.Render().reRenderCountersQuantities(data.filteredBrands, data.filteredCategories);
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
                        const cart = document.querySelector('.shopping-cart__wrapper');
                        cart.classList.remove('hidden');
                        document.addEventListener('click', () => {
                            cart.classList.add('hidden');
                        });
                    }
                    if (target.closest('.sidebar__filter-item')) {
                        new FilterClickHandler(target);
                        this.updateDataAndRenderList();
                        new render_1.Render().reRenderCountersQuantities(data.filteredBrands, data.filteredCategories);
                    }
                });
            };
            this.initialize();
        }
    }
    new render_1.Render().renderHtmlProductsList(data.list);
    new render_1.Render().renderSideBar(data);
    new ClickHandler();
}))();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL2pzLy4vc3JjL3Byb2R1Y3RzLmh0bWwiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvc2Fzcy9zdHlsZS5zYXNzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9hcHAudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L2NvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9nZXRTaG9wRGF0YS50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvcmVuZGVyLnRzIiwid2VicGFjazovL2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8dGl0bGU+U2hvcDwvdGl0bGU+XFxuICA8L2hlYWQ+XFxuXFxuICA8Ym9keT5cXG4gICAgPGhlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8bmF2IGNsYXNzPVxcXCJoZWFkZXJfbmF2XFxcIj5cXG4gICAgICAgICAgPHVsIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rcy1saXN0XFxcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5Ib21lPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9wcm9kdWN0cy5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+UHJvZHVjdHM8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5BYm91dDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGVyX19sb2dvXFxcIj5jb21meTwvc3Bhbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaGVhZGVyX19idG4tY2FydCBidG4tY2FydFxcXCI+XFxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwiYnRuLWNhcnRfX2ltZ1xcXCIgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgIGQ9XFxcIk0xNywxOEMxNS44OSwxOCAxNSwxOC44OSAxNSwyMEEyLDIgMCAwLDAgMTcsMjJBMiwyIDAgMCwwIDE5LDIwQzE5LDE4Ljg5IDE4LjEsMTggMTcsMThNMSwyVjRIM0w2LjYsMTEuNTlMNS4yNCwxNC4wNEM1LjA5LDE0LjMyIDUsMTQuNjUgNSwxNUEyLDIgMCAwLDAgNywxN0gxOVYxNUg3LjQyQTAuMjUsMC4yNSAwIDAsMSA3LjE3LDE0Ljc1QzcuMTcsMTQuNyA3LjE4LDE0LjY2IDcuMiwxNC42M0w4LjEsMTNIMTUuNTVDMTYuMywxMyAxNi45NiwxMi41OCAxNy4zLDExLjk3TDIwLjg4LDUuNUMyMC45NSw1LjM0IDIxLDUuMTcgMjEsNUExLDEgMCAwLDAgMjAsNEg1LjIxTDQuMjcsMk03LDE4QzUuODksMTggNSwxOC44OSA1LDIwQTIsMiAwIDAsMCA3LDIyQTIsMiAwIDAsMCA5LDIwQzksMTguODkgOC4xLDE4IDcsMThaXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tY2FydF9fcXVhbnRpdHlcXFwiPjI8L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L25hdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuICAgIDxtYWluIGNsYXNzPVxcXCJoZXJvXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZXJvX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJoZXJvX190aXRsZVxcXCI+UmVzdCwgUmVsYXgsIFVud2luZDwvaDE+XFxuICAgICAgICA8cCBjbGFzcz1cXFwiaGVyb19fdGV4dFxcXCI+RW1icmFjZSB5b3VyIGNob2ljZXMgLSB3ZSBkbzwvcD5cXG4gICAgICAgIDxhIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCIgY2xhc3M9XFxcImhlcm9fX2J0bi1saW5rXFxcIj5zaG93IG5vdzwvYT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlcm9fX2xpY2Vuc2VcXFwiPlxcbiAgICAgICAgICBQaG90byBieVxcbiAgICAgICAgICA8YVxcbiAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vdW5zcGxhc2guY29tL0Bhbm5pZXNwcmF0dD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcXFwiXFxuICAgICAgICAgICAgPkFubmllIFNwcmF0dDwvYVxcbiAgICAgICAgICA+XFxuICAgICAgICAgIG9uXFxuICAgICAgICAgIDxhXFxuICAgICAgICAgICAgaHJlZj1cXFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzUyQUFpWFdvVmkwP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFxcXCJcXG4gICAgICAgICAgICA+VW5zcGxhc2g8L2FcXG4gICAgICAgICAgPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvbWFpbj5cXG4gICAgPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlcl9fdGl0bGVcXFwiPkZlYXR1cmVkPC9oMj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1saXN0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJmb290ZXJfX2ZlYXR1cmVkLWl0ZW0gc2hvcHBpbmctaXRlbVxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3d3dy5pa2VhLmNvbS9jYS9lbi9pbWFnZXMvcHJvZHVjdHMvbGlkYXMtY2hhaXItd2hpdGUtc2VmYXN0LWNocm9tZS1wbGF0ZWRfXzExMDYzNDdfcGU4Njg2ODhfczUuanBnP2Y9eGxcXFwiXFxuICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWdcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1pdGVtIHNob3BwaW5nLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly93d3cuaWtlYS5jb20vY2EvZW4vaW1hZ2VzL3Byb2R1Y3RzL2xpZGFzLWNoYWlyLXdoaXRlLXNlZmFzdC1jaHJvbWUtcGxhdGVkX18xMTA2MzQ3X3BlODY4Njg4X3M1LmpwZz9mPXhsXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lXFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZVxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImZvb3Rlcl9fZmVhdHVyZWQtaXRlbSBzaG9wcGluZy1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vd3d3LmlrZWEuY29tL2NhL2VuL2ltYWdlcy9wcm9kdWN0cy9saWRhcy1jaGFpci13aGl0ZS1zZWZhc3QtY2hyb21lLXBsYXRlZF9fMTEwNjM0N19wZTg2ODY4OF9zNS5qcGc/Zj14bFxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZ1xcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZVxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZm9vdGVyPlxcbiAgICBcXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fd3JhcHBlciBoaWRkZW5cXFwiPlxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0XFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2J0bl9leGl0XFxcIj5cXG4gICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgZD1cXFwiTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWlxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190aXRsZVxcXCI+WW91ciBCYWc8L2gzPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19saXN0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19pdGVtIHNob3BwaW5nLWl0ZW1fY2FydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2luZm8tY2FydFxcXCI+XFxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVfY2FydFxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZV9jYXJ0XFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVtb3ZlXFxcIj5yZW1vdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eVxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fYWRkLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSwxNS40MUwxMiwxMC44M0wxNi41OSwxNS40MUwxOCwxNEwxMiw4TDYsMTRMNy40MSwxNS40MVpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5LWRpc3BsYXlcXFwiPjU8L2Rpdj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZWR1c2UtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19pdGVtIHNob3BwaW5nLWl0ZW1fY2FydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2luZm8tY2FydFxcXCI+XFxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVfY2FydFxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZV9jYXJ0XFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVtb3ZlXFxcIj5yZW1vdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eVxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fYWRkLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSwxNS40MUwxMiwxMC44M0wxNi41OSwxNS40MUwxOCwxNEwxMiw4TDYsMTRMNy40MSwxNS40MVpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5LWRpc3BsYXlcXFwiPjU8L2Rpdj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZWR1c2UtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgICA8cCBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fdG90YWxcXFwiPlxcbiAgICAgICAgICBUb3RhbCA6XFxuICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190b3RhbF9hbW91bnRcXFwiPiQxMTQuOTQ8L2RhdGE+XFxuICAgICAgICA8L3A+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19idG5fY2hlY2tvdXRcXFwiPmNoZWNrb3V0PC9idXR0b24+XFxuICAgICAgPC9zZWN0aW9uPlxcbiAgICA8L2Rpdj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcIm1kaSBtZGktY29udGVudC1zYXZlLW1pbnVzLW91dGxpbmVcXFwiPjwvc3Bhbj5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXG4gICAgPHRpdGxlPlByb2R1Y3RzPC90aXRsZT5cXG4gIDwvaGVhZD5cXG4gIDxib2R5PlxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxuYXYgY2xhc3M9XFxcImhlYWRlcl9uYXZcXFwiPlxcbiAgICAgICAgICA8dWwgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtzLWxpc3RcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi4vaW5kZXguaHRtbFxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPkhvbWU8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIuL3Byb2R1Y3RzLmh0bWxcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5Qcm9kdWN0czwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPkFib3V0PC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkZXJfX2xvZ29cXFwiPmNvbWZ5PC9zcGFuPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJoZWFkZXJfX2J0bi1jYXJ0IGJ0bi1jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVxcXCJidG4tY2FydF9faW1nXFxcIiBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgZD1cXFwiTTE3LDE4QzE1Ljg5LDE4IDE1LDE4Ljg5IDE1LDIwQTIsMiAwIDAsMCAxNywyMkEyLDIgMCAwLDAgMTksMjBDMTksMTguODkgMTguMSwxOCAxNywxOE0xLDJWNEgzTDYuNiwxMS41OUw1LjI0LDE0LjA0QzUuMDksMTQuMzIgNSwxNC42NSA1LDE1QTIsMiAwIDAsMCA3LDE3SDE5VjE1SDcuNDJBMC4yNSwwLjI1IDAgMCwxIDcuMTcsMTQuNzVDNy4xNywxNC43IDcuMTgsMTQuNjYgNy4yLDE0LjYzTDguMSwxM0gxNS41NUMxNi4zLDEzIDE2Ljk2LDEyLjU4IDE3LjMsMTEuOTdMMjAuODgsNS41QzIwLjk1LDUuMzQgMjEsNS4xNyAyMSw1QTEsMSAwIDAsMCAyMCw0SDUuMjFMNC4yNywyTTcsMThDNS44OSwxOCA1LDE4Ljg5IDUsMjBBMiwyIDAgMCwwIDcsMjJBMiwyIDAgMCwwIDksMjBDOSwxOC44OSA4LjEsMTggNywxOFpcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1jYXJ0X19xdWFudGl0eVxcXCI+MjwvZGl2PlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvbmF2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNpdGUtbG9jYXRpb25cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtbG9jYXRpb25fX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvbl9fbGlua1xcXCIgaHJlZj1cXFwiLi9pbmRleC5odG1sXFxcIj5Ib21lIDwvYT4gL1xcbiAgICAgICAgPGEgY2xhc3M9XFxcInNpdGUtbG9jYXRpb25fX2xpbmtcXFwiIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCI+UHJvZHVjdHM8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPG1haW4gY2xhc3M9XFxcIm1haW5cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1haW5fX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8YXNpZGUgY2xhc3M9XFxcInNpZGViYXJcXFwiPlxcbiAgICAgICAgICA8IS0tIDxpbnB1dCBjbGFzcz1cXFwic2lkZWJhcl9fcHJpY2UtcmFuZ2VcXFwiIHR5cGU9XFxcInJhbmdlXFxcIiBuYW1lPVxcXCJwcmljZS1yYW5nZVxcXCIgLz4gLS0+XFxuICAgICAgICA8L2FzaWRlPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJwcm9kdWN0c1xcXCI+PC91bD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9tYWluPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X193cmFwcGVyIGhpZGRlblxcXCI+XFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fYnRuX2V4aXRcXFwiPlxcbiAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICBkPVxcXCJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3RpdGxlXFxcIj5Zb3VyIEJhZzwvaDM+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2xpc3RcXFwiPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2l0ZW0gc2hvcHBpbmctaXRlbV9jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWctYmFja2dyb3VuZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW5mby1jYXJ0XFxcIj5cXG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZV9jYXJ0XFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlX2NhcnRcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZW1vdmVcXFwiPnJlbW92ZTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5XFxcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9hZGQtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHktZGlzcGxheVxcXCI+NTwvZGl2PlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlZHVzZS1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2l0ZW0gc2hvcHBpbmctaXRlbV9jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWctYmFja2dyb3VuZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW5mby1jYXJ0XFxcIj5cXG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZV9jYXJ0XFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlX2NhcnRcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZW1vdmVcXFwiPnJlbW92ZTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5XFxcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9hZGQtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHktZGlzcGxheVxcXCI+NTwvZGl2PlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlZHVzZS1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190b3RhbFxcXCI+XFxuICAgICAgICAgIFRvdGFsIDpcXG4gICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3RvdGFsX2Ftb3VudFxcXCI+JDExNC45NDwvZGF0YT5cXG4gICAgICAgIDwvcD5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2J0bl9jaGVja291dFxcXCI+Y2hlY2tvdXQ8L2J1dHRvbj5cXG4gICAgICA8L3NlY3Rpb24+XFxuICAgIDwvZGl2PlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXG5pbXBvcnQgeyBnZXREYXRhQXJyLCBTaG9wRGF0YSB9IGZyb20gJy4vZ2V0U2hvcERhdGEnO1xuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSAnLi9yZW5kZXInO1xuXG5cblxuXG4oYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gbmV3IFNob3BEYXRhKGF3YWl0IGdldERhdGFBcnIoKSk7XG5cbiAgY2xhc3MgRmlsdGVyQ2xpY2tIYW5kbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgdGFyZ2V0OkhUTUxFbGVtZW50KSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hY3RpdmF0ZUZpbHRlciA9IChlbGVtZW50OkhUTUxFbGVtZW50KT0+e1xuICAgICAgY29uc3QgZmlsdGVyID0gZWxlbWVudC5kYXRhc2V0LmZpbHRlciFcbiAgICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgZGF0YS5hZGRBY3RpdmVGaWx0ZXIoZmlsdGVyKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmFjdGl2ZUZpbHRlcnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2RlYWN0aXZhdGVGaWx0ZXIgPSAoZWxlbWVudDpIVE1MRWxlbWVudCk9PntcbiAgICAgIGNvbnN0IGZpbHRlciA9IGVsZW1lbnQuZGF0YXNldC5maWx0ZXIhXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICBkYXRhLnJlbW92ZUVsZW1lbnRGcm9tQWN0aXZlRmlsdGVyKGZpbHRlcilcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuYWN0aXZlRmlsdGVycyk7XG5cbiAgICAgIC8vIHJlbW92ZSBhY3RpdmUgZnJvbSBcIkFsbFwiIGZpbHRlciBlbGVtZW50XG4gICAgICBjb25zdCBhbGxCdG5GaWx0ZXJMaXN0ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZCBhcyBIVE1MRWxlbWVudFxuICAgICAgY29uc3QgYnRuRmlsdGVyID0gYWxsQnRuRmlsdGVyTGlzdC5kYXRhc2V0LmZpbHRlciFcblxuICAgICAgaWYgKGFsbEJ0bkZpbHRlckxpc3Q/LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgYWxsQnRuRmlsdGVyTGlzdD8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgZGF0YS5yZW1vdmVFbGVtZW50RnJvbUFjdGl2ZUZpbHRlcihidG5GaWx0ZXIpXG4gICAgICB9IFxuICAgIH1cblxuICAgIHByaXZhdGUgX2FjdGl2YXRlRmlsdGVyTGlzdCA9IChhcnJheTpFbGVtZW50W10pPT57XG4gICAgICBhcnJheS5mb3JFYWNoKChsaXN0SXRlbSk9PntcbiAgICAgICAgaWYgKGxpc3RJdGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmF0ZUZpbHRlcihsaXN0SXRlbSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcHJpdmF0ZSBfZGVhY3RpdmF0ZUZpbHRlckxpc3QgPSAoYXJyYXk6RWxlbWVudFtdKT0+e1xuICAgICAgYXJyYXkuZm9yRWFjaCgobGlzdEl0ZW0pPT57XG4gICAgICAgIGlmIChsaXN0SXRlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5fZGVhY3RpdmF0ZUZpbHRlcihsaXN0SXRlbSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVDbGlja09uRmlsdGVyRWxlbWVudCA9IChlbGVtZW50OkhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblxuICAgICAgICB0aGlzLl9kZWFjdGl2YXRlRmlsdGVyKGVsZW1lbnQpXG4gICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVGaWx0ZXIoZWxlbWVudClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0aWFsaXplID0gKCk9PntcbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy50YXJnZXQuZGF0YXNldC5maWx0ZXIhXG5cbiAgICAgICAgaWYgKGZpbHRlcj09PSdjYXRlZ29yeV9hbGwnfHxmaWx0ZXI9PT0nYnJhbmRfYWxsJykge1xuXG4gICAgICAgICAgY29uc3QgYXJyYXlGaWx0ZXJzID0gQXJyYXkuZnJvbSh0aGlzLnRhcmdldC5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbilcblxuICAgICAgICAgIGlmICh0aGlzLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWFjdGl2YXRlRmlsdGVyTGlzdChhcnJheUZpbHRlcnMpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2YXRlRmlsdGVyTGlzdChhcnJheUZpbHRlcnMpXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlQ2xpY2tPbkZpbHRlckVsZW1lbnQodGhpcy50YXJnZXQpXG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gIH1cblxuICBjbGFzcyBDbGlja0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKVxuICAgIH1cbiAgICB1cGRhdGVEYXRhQW5kUmVuZGVyTGlzdCA9ICgpPT57XG4gICAgICBkYXRhLmZpbHRlckxpc3QoKVxuICAgICAgbmV3IFJlbmRlcigpLnJlbmRlckh0bWxQcm9kdWN0c0xpc3QoZGF0YS5maWx0ZXJlZExpc3QpXG4gICAgfVxuXG4gICAgbGlzdGVuZXJGb3JNYXhQcmljZT0oKT0+e1xuICAgICAgbGV0IGRlbGF5OmFueVxuICAgICAgY29uc3QgaW5wdXQ6SFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcmljZS1yYW5nZScpIVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PntcbiAgICAgICAgaWYgKGRlbGF5KSB7Y2xlYXJUaW1lb3V0KGRlbGF5KX1cbiAgICAgICAgZGVsYXkgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgY29uc3QgbWF4UHJpY2UgPSBwYXJzZUludChpbnB1dC52YWx1ZSlcbiAgICAgICAgICBkYXRhLmFjdGl2ZUZpbHRlcnMubWF4UHJpY2UgPSBtYXhQcmljZVxuICAgICAgICAgIGRhdGEucHJpY2VSYW5nZS5tYXggPSBtYXhQcmljZVxuICAgICAgICAgIHRoaXMudXBkYXRlRGF0YUFuZFJlbmRlckxpc3QoKVxuICAgICAgICAgIG5ldyBSZW5kZXIoKS5yZVJlbmRlckNvdW50ZXJzUXVhbnRpdGllcyhkYXRhLmZpbHRlcmVkQnJhbmRzLGRhdGEuZmlsdGVyZWRDYXRlZ29yaWVzKVxuICAgICAgfVxuICAgICAgICAgICw1MDApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGluaXRpYWxpemUgPSAoKT0+e1xuICAgICAgdGhpcy5saXN0ZW5lckZvck1heFByaWNlKClcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcblxuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSkge3JldHVybn1cblxuICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX2J0bi1jYXJ0JykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnYScpO1xuICAgICAgICAgIGNvbnN0IGNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmctY2FydF9fd3JhcHBlcicpIVxuICAgICAgICAgIGNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBjYXJ0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuc2lkZWJhcl9fZmlsdGVyLWl0ZW0nKSkge1xuXG4gICAgICAgICAgbmV3IEZpbHRlckNsaWNrSGFuZGxlcih0YXJnZXQgYXMgSFRNTEVsZW1lbnQpXG4gICAgICAgICAgdGhpcy51cGRhdGVEYXRhQW5kUmVuZGVyTGlzdCgpXG4gICAgICAgICAgbmV3IFJlbmRlcigpLnJlUmVuZGVyQ291bnRlcnNRdWFudGl0aWVzKGRhdGEuZmlsdGVyZWRCcmFuZHMsZGF0YS5maWx0ZXJlZENhdGVnb3JpZXMpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9KVxuICAgICAgXG5cbiAgICAgIFxuICAgIH1cbiAgXG4gIH1cblxuICBuZXcgUmVuZGVyKCkucmVuZGVySHRtbFByb2R1Y3RzTGlzdChkYXRhLmxpc3QhKTtcbiAgbmV3IFJlbmRlcigpLnJlbmRlclNpZGVCYXIoZGF0YSk7XG4gIG5ldyBDbGlja0hhbmRsZXIoKVxuXG5cbn0pKCk7XG4iLCJleHBvcnQgaW50ZXJmYWNlIElDb2xsZWN0aW9uV2l0aENvdW50IHtcbiAgW2luZGV4OiBzdHJpbmddOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNvbnN0IGNvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzID0gKGFycjpzdHJpbmdbXSk6SUNvbGxlY3Rpb25XaXRoQ291bnQ9PntcbiAgXG4gIGNvbnN0IGNvbGxlY3Rpb25XaXRoQ291bnQ6SUNvbGxlY3Rpb25XaXRoQ291bnQgPSB7XG4gIH07XG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFycikge1xuICAgIGlmIChjb2xsZWN0aW9uV2l0aENvdW50W2VsZW1lbnRdKSB7XG4gICAgICBjb2xsZWN0aW9uV2l0aENvdW50W2VsZW1lbnRdICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbGxlY3Rpb25XaXRoQ291bnRbZWxlbWVudF0gPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb2xsZWN0aW9uV2l0aENvdW50XG59IiwiaW1wb3J0IHsgSUNvbGxlY3Rpb25XaXRoQ291bnQsY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXMgfSBmcm9tIFwiLi9jb3VudFF1YW50aXRpZXNVbmlxRW50cmllc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9kdWN0IHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgZGlzY291bnRQZXJjZW50YWdlOiBudW1iZXI7XG4gIHJhdGluZzogbnVtYmVyO1xuICBzdG9jazogbnVtYmVyO1xuICBicmFuZDogc3RyaW5nO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICB0aHVtYm5haWw6IFVSTDtcbiAgaW1hZ2VzOiBVUkxbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTWluTWF4T2JqIHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSUFuc3dlclNlcnZlciB7XG4gIHByb2R1Y3RzOiBJUHJvZHVjdFtdO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RGF0YUFyciA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhbnN3ZXIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzP2xpbWl0PTEwMCcpO1xuICAgIGNvbnN0IGRhdGE6IElBbnN3ZXJTZXJ2ZXIgPSBhd2FpdCBhbnN3ZXIuanNvbigpO1xuICAgIHJldHVybiBkYXRhLnByb2R1Y3RzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGNsYXNzIFNob3BEYXRhIHtcblxuICBwdWJsaWMgZmlsdGVyczoge1xuICAgIGNhdGVnb3J5OiBJQ29sbGVjdGlvbldpdGhDb3VudDtcbiAgICBicmFuZDogSUNvbGxlY3Rpb25XaXRoQ291bnQ7XG4gIH09IHtcbiAgICBjYXRlZ29yeToge30sXG4gICAgYnJhbmQ6IHt9LFxuICB9XG4gIHByaWNlUmFuZ2UhOiBJTWluTWF4T2JqO1xuXG4gIGZpbHRlcmVkTGlzdDogSVByb2R1Y3RbXVxuICBmaWx0ZXJlZENhdGVnb3JpZXM6SUNvbGxlY3Rpb25XaXRoQ291bnQ9e31cbiAgZmlsdGVyZWRCcmFuZHM6SUNvbGxlY3Rpb25XaXRoQ291bnQ9e31cblxuICBwcml2YXRlIF9hY3RpdmVGaWx0ZXJzOiB7XG4gICAgY2F0ZWdvcnk6IHN0cmluZ1tdO1xuICAgIGJyYW5kOiBzdHJpbmdbXTtcbiAgICBtYXhQcmljZTogbnVtYmVyO1xuICB9ID0ge1xuICAgIGNhdGVnb3J5OiBbXSxcbiAgICBicmFuZDogW10sXG4gICAgbWF4UHJpY2U6IDAsXG4gIH07XG5cblxuICBcbiAgcHVibGljIGdldCBhY3RpdmVGaWx0ZXJzKCk6IHtcbiAgICBjYXRlZ29yeTogc3RyaW5nW107XG4gICAgYnJhbmQ6IHN0cmluZ1tdO1xuICAgIG1heFByaWNlOiBudW1iZXI7XG4gIH0ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVGaWx0ZXJzO1xuICB9XG4gIFxuICBwdWJsaWMgYWRkQWN0aXZlRmlsdGVyKHN0cmluZzpzdHJpbmcpIHtcbiAgICBjb25zdCBbZmlsdGVyVHlwZSx2YWx1ZV0gPSBzdHJpbmcuc3BsaXQoJ18nKVxuXG4gICAgaWYgKChmaWx0ZXJUeXBlPT09J2JyYW5kJ3x8IGZpbHRlclR5cGU9PT0nY2F0ZWdvcnknKSAmJiB0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJykge1xuICAgICAgdGhpcy5fYWN0aXZlRmlsdGVyc1tmaWx0ZXJUeXBlXS5wdXNoKHZhbHVlKVxuICAgIH0gXG5cbiAgICBpZiAoZmlsdGVyVHlwZT09PSdtYXhQcmljZScgJiYgdHlwZW9mIHZhbHVlPT09J251bWJlcicpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZUZpbHRlcnNbZmlsdGVyVHlwZV09dmFsdWVcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRWxlbWVudEZyb21BY3RpdmVGaWx0ZXIoc3RyaW5nOnN0cmluZykge1xuXG4gICAgY29uc3QgW2ZpbHRlclR5cGUsdmFsdWVdID0gc3RyaW5nLnNwbGl0KCdfJylcbiAgICBcbiAgICBpZiAoKGZpbHRlclR5cGU9PT0nYnJhbmQnfHwgZmlsdGVyVHlwZT09PSdjYXRlZ29yeScpICYmIHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBhcnIgPSB0aGlzLmFjdGl2ZUZpbHRlcnNbZmlsdGVyVHlwZV1cbiAgICAgIGFyci5zcGxpY2UoYXJyLmZpbmRJbmRleChmaWx0ZXI9PmZpbHRlcj09PXZhbHVlKSwxKVxuICAgICAgdGhpcy5hY3RpdmVGaWx0ZXJzW2ZpbHRlclR5cGVdID0gYXJyXG4gICAgfVxuXG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbGlzdDogSVByb2R1Y3RbXSB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLmxpc3QhKVxuXG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5icmFuZCA9IHRoaXMuX2dldFF1YW50aXR5QnJhbmRzKCk7XG4gICAgICB0aGlzLmZpbHRlcnMuY2F0ZWdvcnkgPSB0aGlzLl9nZXRRdWFudGl0eUNhdGVnb3JpZXMoKTtcbiAgICAgIHRoaXMucHJpY2VSYW5nZSA9IHRoaXMuX2dldFByaWNlUmFuZ2UoKSE7XG4gICAgICB0aGlzLmFjdGl2ZUZpbHRlcnMubWF4UHJpY2UgPSB0aGlzLnByaWNlUmFuZ2UubWF4XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UXVhbnRpdHlCcmFuZHMgPSAoKSA9PiBjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyh0aGlzLmxpc3Q/Lm1hcChwcm9kdWN0ID0+IHByb2R1Y3QuYnJhbmQpISk7XG5cbiAgcHJpdmF0ZSBfZ2V0UXVhbnRpdHlDYXRlZ29yaWVzID0gKCkgPT4gY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXModGhpcy5saXN0Py5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuY2F0ZWdvcnkpISk7XG5cbiAgcHJpdmF0ZSBfZ2V0UHJpY2VSYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBwcmljZXMgPSB0aGlzLmxpc3Q/Lm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5wcmljZSk7XG4gICAgaWYgKHByaWNlcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWluOiBNYXRoLm1pbiguLi5wcmljZXMpLFxuICAgICAgICBtYXg6IE1hdGgubWF4KC4uLnByaWNlcylcbiAgICAgIH07XG4gICAgfVxuICB9O1xuICBwcml2YXRlIF9kZWVwQ2xvbmVBcnJheTxUPiAoYXJyOlQpOlQge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFycikpXG4gIH1cbiAgcHJpdmF0ZSBfY2xvbmVBcnJheTxUPiAoYXJyOlRbXSk6VFtdIHtcbiAgICByZXR1cm4gWy4uLmFycl1cbiAgfVxuICBwcml2YXRlIF9maWx0ZXJCeU1heFByaWNlID0gKGFycjpJUHJvZHVjdFtdKT0+e1xuXG4gICAgY29uc3QgYnVmZmVyQXJyID0gdGhpcy5fY2xvbmVBcnJheShhcnIpXG4gICAgXG4gICAgYXJyLmxlbmd0aD0wXG4gICAgXG4gICAgY29uc3QgZmlsdGVyZWQgPSBbLi4uYnVmZmVyQXJyXSEuZmlsdGVyKGVsZW09PmVsZW0ucHJpY2U8PXRoaXMuYWN0aXZlRmlsdGVycy5tYXhQcmljZSlcbiAgICBcbiAgICBhcnIucHVzaCguLi5maWx0ZXJlZClcblxuICAgIHJldHVybiBhcnJcbiAgfVxuXG4gIHByaXZhdGUgX2ZpbHRlckJ5QnJhbmRzID0gKGFycjpJUHJvZHVjdFtdKT0+e1xuICAgIGlmICggdGhpcy5hY3RpdmVGaWx0ZXJzLmJyYW5kLmxlbmd0aCE9PTApIHtcbiAgICAgIGNvbnN0IGJ1ZmZlckFyciA9IHRoaXMuX2Nsb25lQXJyYXkoYXJyKVxuICAgIFxuICAgICAgYXJyLmxlbmd0aD0wXG4gICAgICBcbiAgICAgIHRoaXMuYWN0aXZlRmlsdGVycy5icmFuZC5mb3JFYWNoKGZpbHRlclZhbHVlPT57XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gWy4uLmJ1ZmZlckFycl0uZmlsdGVyKGVsZW09PmVsZW0uYnJhbmQ9PT1maWx0ZXJWYWx1ZSlcbiAgICAgICAgYXJyLnB1c2goLi4uZmlsdGVyZWQpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFyclxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJyXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyQnlDYXRlZ29yaWVzID0gKGFycjpJUHJvZHVjdFtdKT0+e1xuICAgIGlmICggdGhpcy5hY3RpdmVGaWx0ZXJzLmNhdGVnb3J5Lmxlbmd0aCE9PTApIHtcbiAgICAgIGNvbnN0IGJ1ZmZlckFyciA9IHRoaXMuX2Nsb25lQXJyYXkoYXJyKVxuICAgIFxuICAgICAgYXJyLmxlbmd0aD0wXG4gICAgICBcbiAgICAgIHRoaXMuYWN0aXZlRmlsdGVycy5jYXRlZ29yeS5mb3JFYWNoKGZpbHRlclZhbHVlPT57XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gWy4uLmJ1ZmZlckFycl0uZmlsdGVyKGVsZW09PmVsZW0uY2F0ZWdvcnk9PT1maWx0ZXJWYWx1ZSlcbiAgICAgICAgYXJyLnB1c2goLi4uZmlsdGVyZWQpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFyclxuICAgIH0gZWxzZSB7cmV0dXJuIHRoaXMuX2Nsb25lQXJyYXkoYXJyKX1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEZpbHRlcmVkQ2F0ZWdvcmllcyA9ICgpPT57XG4gICAgbGV0IGFyciA9IHRoaXMuX2Nsb25lQXJyYXkodGhpcy5saXN0ISlcbiAgICBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMuX2ZpbHRlckJ5QnJhbmRzKGFycikpXG4gICAgYXJyID0gdGhpcy5fY2xvbmVBcnJheSh0aGlzLl9maWx0ZXJCeU1heFByaWNlKGFycikpXG4gICAgdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMgPSBjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyhhcnIubWFwKHByb2R1Y3Q9PnByb2R1Y3QuY2F0ZWdvcnkpKVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RmlsdGVyZWRCcmFuZHMgPSAoKT0+e1xuICAgIGxldCBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMubGlzdCEpXG4gICAgYXJyID0gdGhpcy5fY2xvbmVBcnJheSh0aGlzLl9maWx0ZXJCeUNhdGVnb3JpZXMoYXJyKSlcbiAgICBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMuX2ZpbHRlckJ5TWF4UHJpY2UoYXJyKSlcbiAgICB0aGlzLmZpbHRlcmVkQnJhbmRzID0gY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXMoYXJyLm1hcChwcm9kdWN0PT5wcm9kdWN0LmJyYW5kKSlcbiAgfVxuXG4gIHB1YmxpYyBmaWx0ZXJMaXN0ID0gKCk9PiB7XG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbLi4udGhpcy5saXN0IV1cbiAgICB0aGlzLmZpbHRlcmVkTGlzdD0gWy4uLnRoaXMuX2ZpbHRlckJ5QnJhbmRzKHRoaXMuZmlsdGVyZWRMaXN0KV1cbiAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFsuLi50aGlzLl9maWx0ZXJCeUNhdGVnb3JpZXModGhpcy5maWx0ZXJlZExpc3QpXVxuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5fZmlsdGVyQnlNYXhQcmljZSh0aGlzLmZpbHRlcmVkTGlzdClcbiAgICB0aGlzLl9nZXRGaWx0ZXJlZENhdGVnb3JpZXMoKVxuICAgIHRoaXMuX2dldEZpbHRlcmVkQnJhbmRzKClcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBcbiAgfSBcbn1cblxuXG4iLCJpbXBvcnQgeyBJQ29sbGVjdGlvbldpdGhDb3VudCB9IGZyb20gXCIuL2NvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzXCI7XG5pbXBvcnQgeyBJUHJvZHVjdCwgSU1pbk1heE9iaiwgU2hvcERhdGEgfSBmcm9tIFwiLi9nZXRTaG9wRGF0YVwiO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyIHtcbiAgbGlzdDogSFRNTFVMaXN0RWxlbWVudDtcbiAgc2lkZWJhcjogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJykhO1xuICAgIHRoaXMuc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykhO1xuICB9XG5cblxuXG4gIHJlbmRlckh0bWxQcm9kdWN0c0xpc3QgPSAocHJvZHVjdEFycmF5OiBJUHJvZHVjdFtdKSA9PiB7XG4gICAgdGhpcy5saXN0LmlubmVySFRNTCA9ICcnO1xuICAgIHByb2R1Y3RBcnJheS5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBjb25zdCB7IHRpdGxlLCBwcmljZSwgaW1hZ2VzLCBpZCB9ID0gZWxlbTtcbiAgICAgIHRoaXMubGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICBgXG4gICAgICA8bGkgY2xhc3M9XCJwcm9kdWN0c19faXRlbSBzaG9wcGluZy1pdGVtXCIgZGF0YS1pZD1cIiR7aWR9XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbMF19XCIgYWx0PVwiXCIgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19pbWdcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwic2hvcHBpbmctaXRlbV9fbmFtZVwiPiR7dGl0bGV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX3ByaWNlLWFuZC1jYXJ0XCI+XG4gICAgICAgICAgPGRhdGEgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZVwiIHZhbHVlPVwiJHtwcmljZX1cIj4kJHtwcmljZX08L2RhdGE+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX2J0bi1jYXJ0X19pbWdcIiBzdHlsZT1cIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNywxOEEyLDIgMCAwLDEgMTksMjBBMiwyIDAgMCwxIDE3LDIyQzE1Ljg5LDIyIDE1LDIxLjEgMTUsMjBDMTUsMTguODkgMTUuODksMTggMTcsMThNMSwySDQuMjdMNS4yMSw0SDIwQTEsMSAwIDAsMSAyMSw1QzIxLDUuMTcgMjAuOTUsNS4zNCAyMC44OCw1LjVMMTcuMywxMS45N0MxNi45NiwxMi41OCAxNi4zLDEzIDE1LjU1LDEzSDguMUw3LjIsMTQuNjNMNy4xNywxNC43NUEwLjI1LDAuMjUgMCAwLDAgNy40MiwxNUgxOVYxN0g3QzUuODksMTcgNSwxNi4xIDUsMTVDNSwxNC42NSA1LjA5LDE0LjMyIDUuMjQsMTQuMDRMNi42LDExLjU5TDMsNEgxVjJNNywxOEEyLDIgMCAwLDEgOSwyMEEyLDIgMCAwLDEgNywyMkM1Ljg5LDIyIDUsMjEuMSA1LDIwQzUsMTguODkgNS44OSwxOCA3LDE4TTE2LDExTDE4Ljc4LDZINi4xNEw4LjUsMTFIMTZaXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgIGBcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVuZGVyU2VhcmNoID0gKCkgPT4ge1xuICAgIHRoaXMuc2lkZWJhci5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICBgXG4gICAgPGlucHV0IGNsYXNzPVwic2lkZWJhcl9fc2VhcmNoXCIgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgIGBcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlckZpbHRlckNhdGVnb3J5ID0gKGZpbHRlckNhdGVnb3J5TmFtZTogc3RyaW5nLCBmaWx0ZXJDYXRlZ29yeUVudHJpZXM6IElDb2xsZWN0aW9uV2l0aENvdW50KSA9PiB7XG4gICAgdGhpcy5zaWRlYmFyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgYFxuICAgICAgPGgzIGNsYXNzPVwic2lkZWJhcl9fdGl0bGVcIj4ke2ZpbHRlckNhdGVnb3J5TmFtZX08L2gzPlxuICAgICAgPHVsIGNsYXNzPVwic2lkZWJhcl9fZmlsdGVyLWxpc3RcIiBpZD1cImNhdGVnb3JpZXNMaXN0JHtmaWx0ZXJDYXRlZ29yeU5hbWV9XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cInNpZGViYXJfX2ZpbHRlci1pdGVtIHNpZGViYXJfX2ZpcnN0LWxpc3QtaXRlbVwiIGRhdGEtZmlsdGVyPVwiJHtmaWx0ZXJDYXRlZ29yeU5hbWV9X2FsbFwiPkFsbDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgYFxuICAgICk7XG5cbiAgICBjb25zdCBsaXN0RmlsdGVyID0gdGhpcy5zaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoYCNjYXRlZ29yaWVzTGlzdCR7ZmlsdGVyQ2F0ZWdvcnlOYW1lfWApO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoZmlsdGVyQ2F0ZWdvcnlFbnRyaWVzKS5mb3JFYWNoKChbdmFsdWUscXVhbnRpdHldKSA9PiB7XG4gICAgICBsaXN0RmlsdGVyPy5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICBgXG4gICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItaXRlbVwiIGRhdGEtZmlsdGVyPVwiJHtmaWx0ZXJDYXRlZ29yeU5hbWV9XyR7dmFsdWV9XCI+JHt2YWx1ZX0gXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX19lbGVtLWNvdW50ZXJcIj4ke3F1YW50aXR5fTwvZGl2PlxuICAgICAgPC9saT5gXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlclByaWNlUmFuZ2UgPSAoYXJyOiBJTWluTWF4T2JqKSA9PiB7XG4gICAgdGhpcy5zaWRlYmFyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgYFxuICAgICAgPGgzIGNsYXNzPVwic2lkZWJhcl9fdGl0bGVcIj5QcmljZTwvaDM+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzaWRlYmFyX19wcmljZS1yYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJwcmljZS1yYW5nZVwiIG1heD1cIiR7YXJyLm1heH1cIiBtaW49XCIke2Fyci5taW59XCIgdmFsdWU9XCIke2Fyci5tYXh9XCIvPlxuICAgICAgPGRhdGEgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItbWF4LXByaWNlXCI+TWF4IHByaWNlOiAkJHthcnIubWF4fTwvZGF0YT5cbiAgICAgIGBcbiAgICApO1xuICAgIGNvbnN0IHByaWNlUmFuZ2VJTnB1dDpIVE1MSW5wdXRFbGVtZW50fG51bGwgPSB0aGlzLnNpZGViYXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3ByaWNlLXJhbmdlJylcbiAgICBjb25zdCBwcmljZVJhbmdlRGF0YSA9IHRoaXMuc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fZmlsdGVyLW1heC1wcmljZScpIVxuICAgIFxuICAgIHByaWNlUmFuZ2VJTnB1dD8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKCk9PntcbiAgICAgIHByaWNlUmFuZ2VEYXRhLnRleHRDb250ZW50ID0gYE1heCBwcmljZTogJCR7cHJpY2VSYW5nZUlOcHV0LnZhbHVlfSBgXG4gICAgfSlcblxuICAgIFxuICB9O1xuXG4gIHJlbmRlclNpZGVCYXIgPSAoZGF0YTogU2hvcERhdGEpID0+IHtcbiAgICB0aGlzLl9yZW5kZXJTZWFyY2goKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuZmlsdGVycykuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICBjb25zdCBbZmlsdGVyVHlwZSwgZmlsdGVyVmFsdWVdID0gZmlsdGVyO1xuICAgICAgdGhpcy5fcmVuZGVyRmlsdGVyQ2F0ZWdvcnkoZmlsdGVyVHlwZSwgZmlsdGVyVmFsdWUpO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuX3JlbmRlclByaWNlUmFuZ2UoZGF0YS5wcmljZVJhbmdlKTtcbiAgfTtcblxuICByZVJlbmRlckNvdW50ZXJzUXVhbnRpdGllcyA9IChicmFuZHM6SUNvbGxlY3Rpb25XaXRoQ291bnQsIGNhdGVnb3JpZXM6SUNvbGxlY3Rpb25XaXRoQ291bnQpPT57XG4gICAgY29uc3Qgbm9kZUxpc3RPZkNvdW50ZXJzID0gdGhpcy5zaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyX19lbGVtLWNvdW50ZXInKVxuICAgIG5vZGVMaXN0T2ZDb3VudGVycy5mb3JFYWNoKGNvdW50ZXI9PntcbiAgICAgIGNvbnN0IFtmaWx0ZXJUeXBlLCBmaWx0ZXJWYWx1ZV0gPSBjb3VudGVyLnBhcmVudEVsZW1lbnQ/LmRhdGFzZXQuZmlsdGVyPy5zcGxpdCgnXycpIVxuICAgICAgaWYgKGZpbHRlclR5cGU9PT0nY2F0ZWdvcnknKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclR5cGVBbmRDb3VudCA9IE9iamVjdC5lbnRyaWVzKGNhdGVnb3JpZXMpLmZpbmQoY2F0ZWdvcnk9PmNhdGVnb3J5WzBdPT09ZmlsdGVyVmFsdWUpXG4gICAgICAgIGlmIChmaWx0ZXJUeXBlQW5kQ291bnQpIHtcbiAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50PWZpbHRlclR5cGVBbmRDb3VudFsxXS50b1N0cmluZygpXG4gICAgICAgICAgY291bnRlci5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlci50ZXh0Q29udGVudD0nMCdcbiAgICAgICAgICBjb3VudGVyLnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJylcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgIGlmIChmaWx0ZXJUeXBlPT09J2JyYW5kJykge1xuICAgICAgICBjb25zdCBmaWx0ZXJUeXBlQW5kQ291bnQgPSBPYmplY3QuZW50cmllcyhicmFuZHMpLmZpbmQoYnJhbmQ9PmJyYW5kWzBdPT09ZmlsdGVyVmFsdWUpXG4gICAgICAgIGlmIChmaWx0ZXJUeXBlQW5kQ291bnQpIHtcbiAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50PWZpbHRlclR5cGVBbmRDb3VudFsxXS50b1N0cmluZygpXG4gICAgICAgICAgY291bnRlci5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlci50ZXh0Q29udGVudD0nMCdcbiAgICAgICAgICBjb3VudGVyLnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJylcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgIFxuICAgIH0pXG4gICAgY29uc29sZS5sb2coKTtcbiAgICBcbiAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL2luZGV4Lmh0bWwnO1xuaW1wb3J0ICcuLi9wcm9kdWN0cy5odG1sJztcbmltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zYXNzJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudC9hcHAnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCBkb2N1bWVudC50aXRsZSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==