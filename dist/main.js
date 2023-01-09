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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Products</title>\n  </head>\n  <body>\n    <header class=\"header\">\n      <div class=\"header__container\">\n        <nav class=\"header_nav\">\n          <ul class=\"header__nav-links-list\">\n            <li class=\"header__nav-link-item\">\n              <a href=\"./index.html\" class=\"header__nav-link\">Home</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"./products.html\" class=\"header__nav-link\">Products</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"\" class=\"header__nav-link\">About</a>\n            </li>\n          </ul>\n          <span class=\"header__logo\">comfy</span>\n          <button class=\"header__btn-cart btn-cart\">\n            <svg class=\"btn-cart__img\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n              <path\n                fill=\"currentColor\"\n                d=\"M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z\"\n              />\n            </svg>\n            <div class=\"btn-cart__quantity\">2</div>\n          </button>\n        </nav>\n      </div>\n    </header>\n\n    <section class=\"site-location\">\n      <div class=\"site-location__container\">\n        <a class=\"site-location__link\" href=\"./index.html\">Home </a> /\n        <a class=\"site-location__link\" href=\"./products.html\">Products</a>\n      </div>\n    </section>\n    <main class=\"main\">\n      <div class=\"main__container\">\n        <aside class=\"sidebar\">\n          <!-- <input class=\"sidebar__price-range\" type=\"range\" name=\"price-range\" /> -->\n        </aside>\n        <ul class=\"products\"></ul>\n      </div>\n    </main>\n  </body>\n</html>\n";
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
                    if (!(target instanceof HTMLElement)) {
                        return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBRSxDQUFDO0lBQ3JELENBQUM7Q0FxSEY7QUE1SEQsd0JBNEhDOzs7Ozs7O1VDL0hEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsNkRBQXVCO0FBQ3ZCLG1FQUEwQjtBQUMxQix1RUFBNEI7QUFFNUIsd0VBQXlCO0FBRXpCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2xELFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL2pzLy4vc3JjL3Byb2R1Y3RzLmh0bWwiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvc2Fzcy9zdHlsZS5zYXNzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9hcHAudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L2NvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9nZXRTaG9wRGF0YS50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvcmVuZGVyLnRzIiwid2VicGFjazovL2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8dGl0bGU+U2hvcDwvdGl0bGU+XFxuICA8L2hlYWQ+XFxuXFxuICA8Ym9keT5cXG4gICAgPGhlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8bmF2IGNsYXNzPVxcXCJoZWFkZXJfbmF2XFxcIj5cXG4gICAgICAgICAgPHVsIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rcy1saXN0XFxcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5Ib21lPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9wcm9kdWN0cy5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+UHJvZHVjdHM8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5BYm91dDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGVyX19sb2dvXFxcIj5jb21meTwvc3Bhbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaGVhZGVyX19idG4tY2FydCBidG4tY2FydFxcXCI+XFxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwiYnRuLWNhcnRfX2ltZ1xcXCIgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgIGQ9XFxcIk0xNywxOEMxNS44OSwxOCAxNSwxOC44OSAxNSwyMEEyLDIgMCAwLDAgMTcsMjJBMiwyIDAgMCwwIDE5LDIwQzE5LDE4Ljg5IDE4LjEsMTggMTcsMThNMSwyVjRIM0w2LjYsMTEuNTlMNS4yNCwxNC4wNEM1LjA5LDE0LjMyIDUsMTQuNjUgNSwxNUEyLDIgMCAwLDAgNywxN0gxOVYxNUg3LjQyQTAuMjUsMC4yNSAwIDAsMSA3LjE3LDE0Ljc1QzcuMTcsMTQuNyA3LjE4LDE0LjY2IDcuMiwxNC42M0w4LjEsMTNIMTUuNTVDMTYuMywxMyAxNi45NiwxMi41OCAxNy4zLDExLjk3TDIwLjg4LDUuNUMyMC45NSw1LjM0IDIxLDUuMTcgMjEsNUExLDEgMCAwLDAgMjAsNEg1LjIxTDQuMjcsMk03LDE4QzUuODksMTggNSwxOC44OSA1LDIwQTIsMiAwIDAsMCA3LDIyQTIsMiAwIDAsMCA5LDIwQzksMTguODkgOC4xLDE4IDcsMThaXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tY2FydF9fcXVhbnRpdHlcXFwiPjI8L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L25hdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuICAgIDxtYWluIGNsYXNzPVxcXCJoZXJvXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZXJvX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJoZXJvX190aXRsZVxcXCI+UmVzdCwgUmVsYXgsIFVud2luZDwvaDE+XFxuICAgICAgICA8cCBjbGFzcz1cXFwiaGVyb19fdGV4dFxcXCI+RW1icmFjZSB5b3VyIGNob2ljZXMgLSB3ZSBkbzwvcD5cXG4gICAgICAgIDxhIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCIgY2xhc3M9XFxcImhlcm9fX2J0bi1saW5rXFxcIj5zaG93IG5vdzwvYT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlcm9fX2xpY2Vuc2VcXFwiPlxcbiAgICAgICAgICBQaG90byBieVxcbiAgICAgICAgICA8YVxcbiAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vdW5zcGxhc2guY29tL0Bhbm5pZXNwcmF0dD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcXFwiXFxuICAgICAgICAgICAgPkFubmllIFNwcmF0dDwvYVxcbiAgICAgICAgICA+XFxuICAgICAgICAgIG9uXFxuICAgICAgICAgIDxhXFxuICAgICAgICAgICAgaHJlZj1cXFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzUyQUFpWFdvVmkwP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFxcXCJcXG4gICAgICAgICAgICA+VW5zcGxhc2g8L2FcXG4gICAgICAgICAgPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvbWFpbj5cXG4gICAgPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlcl9fdGl0bGVcXFwiPkZlYXR1cmVkPC9oMj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1saXN0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJmb290ZXJfX2ZlYXR1cmVkLWl0ZW0gc2hvcHBpbmctaXRlbVxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3d3dy5pa2VhLmNvbS9jYS9lbi9pbWFnZXMvcHJvZHVjdHMvbGlkYXMtY2hhaXItd2hpdGUtc2VmYXN0LWNocm9tZS1wbGF0ZWRfXzExMDYzNDdfcGU4Njg2ODhfczUuanBnP2Y9eGxcXFwiXFxuICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWdcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1pdGVtIHNob3BwaW5nLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly93d3cuaWtlYS5jb20vY2EvZW4vaW1hZ2VzL3Byb2R1Y3RzL2xpZGFzLWNoYWlyLXdoaXRlLXNlZmFzdC1jaHJvbWUtcGxhdGVkX18xMTA2MzQ3X3BlODY4Njg4X3M1LmpwZz9mPXhsXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lXFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZVxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImZvb3Rlcl9fZmVhdHVyZWQtaXRlbSBzaG9wcGluZy1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vd3d3LmlrZWEuY29tL2NhL2VuL2ltYWdlcy9wcm9kdWN0cy9saWRhcy1jaGFpci13aGl0ZS1zZWZhc3QtY2hyb21lLXBsYXRlZF9fMTEwNjM0N19wZTg2ODY4OF9zNS5qcGc/Zj14bFxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZ1xcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZVxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZm9vdGVyPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X193cmFwcGVyIGhpZGRlblxcXCI+XFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fYnRuX2V4aXRcXFwiPlxcbiAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICBkPVxcXCJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3RpdGxlXFxcIj5Zb3VyIEJhZzwvaDM+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2xpc3RcXFwiPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2l0ZW0gc2hvcHBpbmctaXRlbV9jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWctYmFja2dyb3VuZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW5mby1jYXJ0XFxcIj5cXG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZV9jYXJ0XFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlX2NhcnRcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZW1vdmVcXFwiPnJlbW92ZTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5XFxcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9hZGQtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHktZGlzcGxheVxcXCI+NTwvZGl2PlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlZHVzZS1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2l0ZW0gc2hvcHBpbmctaXRlbV9jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWctYmFja2dyb3VuZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW5mby1jYXJ0XFxcIj5cXG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZV9jYXJ0XFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlX2NhcnRcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZW1vdmVcXFwiPnJlbW92ZTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5XFxcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9hZGQtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHktZGlzcGxheVxcXCI+NTwvZGl2PlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlZHVzZS1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190b3RhbFxcXCI+XFxuICAgICAgICAgIFRvdGFsIDpcXG4gICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3RvdGFsX2Ftb3VudFxcXCI+JDExNC45NDwvZGF0YT5cXG4gICAgICAgIDwvcD5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2J0bl9jaGVja291dFxcXCI+Y2hlY2tvdXQ8L2J1dHRvbj5cXG4gICAgICA8L3NlY3Rpb24+XFxuICAgIDwvZGl2PlxcbiAgICA8c3BhbiBjbGFzcz1cXFwibWRpIG1kaS1jb250ZW50LXNhdmUtbWludXMtb3V0bGluZVxcXCI+PC9zcGFuPlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8dGl0bGU+UHJvZHVjdHM8L3RpdGxlPlxcbiAgPC9oZWFkPlxcbiAgPGJvZHk+XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPG5hdiBjbGFzcz1cXFwiaGVhZGVyX25hdlxcXCI+XFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua3MtbGlzdFxcXCI+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9pbmRleC5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+SG9tZTwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPlByb2R1Y3RzPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+QWJvdXQ8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRlcl9fbG9nb1xcXCI+Y29tZnk8L3NwYW4+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcl9fYnRuLWNhcnQgYnRuLWNhcnRcXFwiPlxcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcImJ0bi1jYXJ0X19pbWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICBkPVxcXCJNMTcsMThDMTUuODksMTggMTUsMTguODkgMTUsMjBBMiwyIDAgMCwwIDE3LDIyQTIsMiAwIDAsMCAxOSwyMEMxOSwxOC44OSAxOC4xLDE4IDE3LDE4TTEsMlY0SDNMNi42LDExLjU5TDUuMjQsMTQuMDRDNS4wOSwxNC4zMiA1LDE0LjY1IDUsMTVBMiwyIDAgMCwwIDcsMTdIMTlWMTVINy40MkEwLjI1LDAuMjUgMCAwLDEgNy4xNywxNC43NUM3LjE3LDE0LjcgNy4xOCwxNC42NiA3LjIsMTQuNjNMOC4xLDEzSDE1LjU1QzE2LjMsMTMgMTYuOTYsMTIuNTggMTcuMywxMS45N0wyMC44OCw1LjVDMjAuOTUsNS4zNCAyMSw1LjE3IDIxLDVBMSwxIDAgMCwwIDIwLDRINS4yMUw0LjI3LDJNNywxOEM1Ljg5LDE4IDUsMTguODkgNSwyMEEyLDIgMCAwLDAgNywyMkEyLDIgMCAwLDAgOSwyMEM5LDE4Ljg5IDguMSwxOCA3LDE4WlxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWNhcnRfX3F1YW50aXR5XFxcIj4yPC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9uYXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvbl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJzaXRlLWxvY2F0aW9uX19saW5rXFxcIiBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiPkhvbWUgPC9hPiAvXFxuICAgICAgICA8YSBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvbl9fbGlua1xcXCIgaHJlZj1cXFwiLi9wcm9kdWN0cy5odG1sXFxcIj5Qcm9kdWN0czwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgICA8bWFpbiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxhc2lkZSBjbGFzcz1cXFwic2lkZWJhclxcXCI+XFxuICAgICAgICAgIDwhLS0gPGlucHV0IGNsYXNzPVxcXCJzaWRlYmFyX19wcmljZS1yYW5nZVxcXCIgdHlwZT1cXFwicmFuZ2VcXFwiIG5hbWU9XFxcInByaWNlLXJhbmdlXFxcIiAvPiAtLT5cXG4gICAgICAgIDwvYXNpZGU+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInByb2R1Y3RzXFxcIj48L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L21haW4+XFxuICA8L2JvZHk+XFxuPC9odG1sPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcbmltcG9ydCB7IGdldERhdGFBcnIsIFNob3BEYXRhIH0gZnJvbSAnLi9nZXRTaG9wRGF0YSc7XG5pbXBvcnQgeyBSZW5kZXIgfSBmcm9tICcuL3JlbmRlcic7XG5cblxuXG5cbihhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBuZXcgU2hvcERhdGEoYXdhaXQgZ2V0RGF0YUFycigpKTtcblxuICBjbGFzcyBGaWx0ZXJDbGlja0hhbmRsZXIge1xuXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyB0YXJnZXQ6SFRNTEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2FjdGl2YXRlRmlsdGVyID0gKGVsZW1lbnQ6SFRNTEVsZW1lbnQpPT57XG4gICAgICBjb25zdCBmaWx0ZXIgPSBlbGVtZW50LmRhdGFzZXQuZmlsdGVyIVxuICAgICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICBkYXRhLmFkZEFjdGl2ZUZpbHRlcihmaWx0ZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuYWN0aXZlRmlsdGVycyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVhY3RpdmF0ZUZpbHRlciA9IChlbGVtZW50OkhUTUxFbGVtZW50KT0+e1xuICAgICAgY29uc3QgZmlsdGVyID0gZWxlbWVudC5kYXRhc2V0LmZpbHRlciFcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIGRhdGEucmVtb3ZlRWxlbWVudEZyb21BY3RpdmVGaWx0ZXIoZmlsdGVyKVxuICAgICAgY29uc29sZS5sb2coZGF0YS5hY3RpdmVGaWx0ZXJzKTtcblxuICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBmcm9tIFwiQWxsXCIgZmlsdGVyIGVsZW1lbnRcbiAgICAgIGNvbnN0IGFsbEJ0bkZpbHRlckxpc3QgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50XG4gICAgICBjb25zdCBidG5GaWx0ZXIgPSBhbGxCdG5GaWx0ZXJMaXN0LmRhdGFzZXQuZmlsdGVyIVxuXG4gICAgICBpZiAoYWxsQnRuRmlsdGVyTGlzdD8uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBhbGxCdG5GaWx0ZXJMaXN0Py5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICBkYXRhLnJlbW92ZUVsZW1lbnRGcm9tQWN0aXZlRmlsdGVyKGJ0bkZpbHRlcilcbiAgICAgIH0gXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWN0aXZhdGVGaWx0ZXJMaXN0ID0gKGFycmF5OkVsZW1lbnRbXSk9PntcbiAgICAgIGFycmF5LmZvckVhY2goKGxpc3RJdGVtKT0+e1xuICAgICAgICBpZiAobGlzdEl0ZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2FjdGl2YXRlRmlsdGVyKGxpc3RJdGVtKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwcml2YXRlIF9kZWFjdGl2YXRlRmlsdGVyTGlzdCA9IChhcnJheTpFbGVtZW50W10pPT57XG4gICAgICBhcnJheS5mb3JFYWNoKChsaXN0SXRlbSk9PntcbiAgICAgICAgaWYgKGxpc3RJdGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9kZWFjdGl2YXRlRmlsdGVyKGxpc3RJdGVtKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUNsaWNrT25GaWx0ZXJFbGVtZW50ID0gKGVsZW1lbnQ6SFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIFxuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuXG4gICAgICAgIHRoaXMuX2RlYWN0aXZhdGVGaWx0ZXIoZWxlbWVudClcbiAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZUZpbHRlcihlbGVtZW50KVxuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRpYWxpemUgPSAoKT0+e1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLnRhcmdldC5kYXRhc2V0LmZpbHRlciFcblxuICAgICAgICBpZiAoZmlsdGVyPT09J2NhdGVnb3J5X2FsbCd8fGZpbHRlcj09PSdicmFuZF9hbGwnKSB7XG5cbiAgICAgICAgICBjb25zdCBhcnJheUZpbHRlcnMgPSBBcnJheS5mcm9tKHRoaXMudGFyZ2V0LnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuKVxuXG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlYWN0aXZhdGVGaWx0ZXJMaXN0KGFycmF5RmlsdGVycylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZhdGVGaWx0ZXJMaXN0KGFycmF5RmlsdGVycylcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVDbGlja09uRmlsdGVyRWxlbWVudCh0aGlzLnRhcmdldClcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgfVxuXG4gIGNsYXNzIENsaWNrSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpXG4gICAgfVxuICAgIHVwZGF0ZURhdGFBbmRSZW5kZXJMaXN0ID0gKCk9PntcbiAgICAgIGRhdGEuZmlsdGVyTGlzdCgpXG4gICAgICBuZXcgUmVuZGVyKCkucmVuZGVySHRtbFByb2R1Y3RzTGlzdChkYXRhLmZpbHRlcmVkTGlzdClcbiAgICB9XG5cbiAgICBsaXN0ZW5lckZvck1heFByaWNlPSgpPT57XG4gICAgICBsZXQgZGVsYXk6YW55XG4gICAgICBjb25zdCBpbnB1dDpIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3ByaWNlLXJhbmdlJykhXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKT0+e1xuICAgICAgICBpZiAoZGVsYXkpIHtjbGVhclRpbWVvdXQoZGVsYXkpfVxuICAgICAgICBkZWxheSA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBjb25zdCBtYXhQcmljZSA9IHBhcnNlSW50KGlucHV0LnZhbHVlKVxuICAgICAgICAgIGRhdGEuYWN0aXZlRmlsdGVycy5tYXhQcmljZSA9IG1heFByaWNlXG4gICAgICAgICAgZGF0YS5wcmljZVJhbmdlLm1heCA9IG1heFByaWNlXG4gICAgICAgICAgdGhpcy51cGRhdGVEYXRhQW5kUmVuZGVyTGlzdCgpXG4gICAgICAgICAgbmV3IFJlbmRlcigpLnJlUmVuZGVyQ291bnRlcnNRdWFudGl0aWVzKGRhdGEuZmlsdGVyZWRCcmFuZHMsZGF0YS5maWx0ZXJlZENhdGVnb3JpZXMpXG4gICAgICB9XG4gICAgICAgICAgLDUwMClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSA9ICgpPT57XG4gICAgICB0aGlzLmxpc3RlbmVyRm9yTWF4UHJpY2UoKVxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7cmV0dXJufVxuICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5zaWRlYmFyX19maWx0ZXItaXRlbScpKSB7XG4gICAgICAgICAgbmV3IEZpbHRlckNsaWNrSGFuZGxlcih0YXJnZXQpXG4gICAgICAgICAgdGhpcy51cGRhdGVEYXRhQW5kUmVuZGVyTGlzdCgpXG4gICAgICAgICAgbmV3IFJlbmRlcigpLnJlUmVuZGVyQ291bnRlcnNRdWFudGl0aWVzKGRhdGEuZmlsdGVyZWRCcmFuZHMsZGF0YS5maWx0ZXJlZENhdGVnb3JpZXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBcblxuICAgICAgXG4gICAgfVxuICBcbiAgfVxuXG4gIG5ldyBSZW5kZXIoKS5yZW5kZXJIdG1sUHJvZHVjdHNMaXN0KGRhdGEubGlzdCEpO1xuICBuZXcgUmVuZGVyKCkucmVuZGVyU2lkZUJhcihkYXRhKTtcbiAgbmV3IENsaWNrSGFuZGxlcigpXG5cblxufSkoKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUNvbGxlY3Rpb25XaXRoQ291bnQge1xuICBbaW5kZXg6IHN0cmluZ106IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY29uc3QgY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXMgPSAoYXJyOnN0cmluZ1tdKTpJQ29sbGVjdGlvbldpdGhDb3VudD0+e1xuICBcbiAgY29uc3QgY29sbGVjdGlvbldpdGhDb3VudDpJQ29sbGVjdGlvbldpdGhDb3VudCA9IHtcbiAgfTtcblxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyKSB7XG4gICAgaWYgKGNvbGxlY3Rpb25XaXRoQ291bnRbZWxlbWVudF0pIHtcbiAgICAgIGNvbGxlY3Rpb25XaXRoQ291bnRbZWxlbWVudF0gKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sbGVjdGlvbldpdGhDb3VudFtlbGVtZW50XSA9IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb25XaXRoQ291bnRcbn0iLCJpbXBvcnQgeyBJQ29sbGVjdGlvbldpdGhDb3VudCxjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyB9IGZyb20gXCIuL2NvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBkaXNjb3VudFBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmF0aW5nOiBudW1iZXI7XG4gIHN0b2NrOiBudW1iZXI7XG4gIGJyYW5kOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHRodW1ibmFpbDogVVJMO1xuICBpbWFnZXM6IFVSTFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNaW5NYXhPYmoge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJQW5zd2VyU2VydmVyIHtcbiAgcHJvZHVjdHM6IElQcm9kdWN0W107XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhQXJyID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFuc3dlciA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHM/bGltaXQ9MTAwJyk7XG4gICAgY29uc3QgZGF0YTogSUFuc3dlclNlcnZlciA9IGF3YWl0IGFuc3dlci5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGEucHJvZHVjdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgU2hvcERhdGEge1xuXG4gIHB1YmxpYyBmaWx0ZXJzOiB7XG4gICAgY2F0ZWdvcnk6IElDb2xsZWN0aW9uV2l0aENvdW50O1xuICAgIGJyYW5kOiBJQ29sbGVjdGlvbldpdGhDb3VudDtcbiAgfT0ge1xuICAgIGNhdGVnb3J5OiB7fSxcbiAgICBicmFuZDoge30sXG4gIH1cbiAgcHJpY2VSYW5nZSE6IElNaW5NYXhPYmo7XG5cbiAgZmlsdGVyZWRMaXN0OiBJUHJvZHVjdFtdXG4gIGZpbHRlcmVkQ2F0ZWdvcmllczpJQ29sbGVjdGlvbldpdGhDb3VudD17fVxuICBmaWx0ZXJlZEJyYW5kczpJQ29sbGVjdGlvbldpdGhDb3VudD17fVxuXG4gIHByaXZhdGUgX2FjdGl2ZUZpbHRlcnM6IHtcbiAgICBjYXRlZ29yeTogc3RyaW5nW107XG4gICAgYnJhbmQ6IHN0cmluZ1tdO1xuICAgIG1heFByaWNlOiBudW1iZXI7XG4gIH0gPSB7XG4gICAgY2F0ZWdvcnk6IFtdLFxuICAgIGJyYW5kOiBbXSxcbiAgICBtYXhQcmljZTogMCxcbiAgfTtcblxuXG4gIFxuICBwdWJsaWMgZ2V0IGFjdGl2ZUZpbHRlcnMoKToge1xuICAgIGNhdGVnb3J5OiBzdHJpbmdbXTtcbiAgICBicmFuZDogc3RyaW5nW107XG4gICAgbWF4UHJpY2U6IG51bWJlcjtcbiAgfSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUZpbHRlcnM7XG4gIH1cbiAgXG4gIHB1YmxpYyBhZGRBY3RpdmVGaWx0ZXIoc3RyaW5nOnN0cmluZykge1xuICAgIGNvbnN0IFtmaWx0ZXJUeXBlLHZhbHVlXSA9IHN0cmluZy5zcGxpdCgnXycpXG5cbiAgICBpZiAoKGZpbHRlclR5cGU9PT0nYnJhbmQnfHwgZmlsdGVyVHlwZT09PSdjYXRlZ29yeScpICYmIHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9hY3RpdmVGaWx0ZXJzW2ZpbHRlclR5cGVdLnB1c2godmFsdWUpXG4gICAgfSBcblxuICAgIGlmIChmaWx0ZXJUeXBlPT09J21heFByaWNlJyAmJiB0eXBlb2YgdmFsdWU9PT0nbnVtYmVyJykge1xuICAgICAgdGhpcy5fYWN0aXZlRmlsdGVyc1tmaWx0ZXJUeXBlXT12YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFbGVtZW50RnJvbUFjdGl2ZUZpbHRlcihzdHJpbmc6c3RyaW5nKSB7XG5cbiAgICBjb25zdCBbZmlsdGVyVHlwZSx2YWx1ZV0gPSBzdHJpbmcuc3BsaXQoJ18nKVxuICAgIFxuICAgIGlmICgoZmlsdGVyVHlwZT09PSdicmFuZCd8fCBmaWx0ZXJUeXBlPT09J2NhdGVnb3J5JykgJiYgdHlwZW9mIHZhbHVlPT09J3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGFyciA9IHRoaXMuYWN0aXZlRmlsdGVyc1tmaWx0ZXJUeXBlXVxuICAgICAgYXJyLnNwbGljZShhcnIuZmluZEluZGV4KGZpbHRlcj0+ZmlsdGVyPT09dmFsdWUpLDEpXG4gICAgICB0aGlzLmFjdGl2ZUZpbHRlcnNbZmlsdGVyVHlwZV0gPSBhcnJcbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsaXN0OiBJUHJvZHVjdFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSBBcnJheS5mcm9tKHRoaXMubGlzdCEpXG5cbiAgICBpZiAobGlzdCkge1xuICAgICAgdGhpcy5maWx0ZXJzLmJyYW5kID0gdGhpcy5fZ2V0UXVhbnRpdHlCcmFuZHMoKTtcbiAgICAgIHRoaXMuZmlsdGVycy5jYXRlZ29yeSA9IHRoaXMuX2dldFF1YW50aXR5Q2F0ZWdvcmllcygpO1xuICAgICAgdGhpcy5wcmljZVJhbmdlID0gdGhpcy5fZ2V0UHJpY2VSYW5nZSgpITtcbiAgICAgIHRoaXMuYWN0aXZlRmlsdGVycy5tYXhQcmljZSA9IHRoaXMucHJpY2VSYW5nZS5tYXhcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRRdWFudGl0eUJyYW5kcyA9ICgpID0+IGNvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzKHRoaXMubGlzdD8ubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5icmFuZCkhKTtcblxuICBwcml2YXRlIF9nZXRRdWFudGl0eUNhdGVnb3JpZXMgPSAoKSA9PiBjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyh0aGlzLmxpc3Q/Lm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5jYXRlZ29yeSkhKTtcblxuICBwcml2YXRlIF9nZXRQcmljZVJhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHByaWNlcyA9IHRoaXMubGlzdD8ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LnByaWNlKTtcbiAgICBpZiAocHJpY2VzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaW46IE1hdGgubWluKC4uLnByaWNlcyksXG4gICAgICAgIG1heDogTWF0aC5tYXgoLi4ucHJpY2VzKVxuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIHByaXZhdGUgX2RlZXBDbG9uZUFycmF5PFQ+IChhcnI6VCk6VCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJyKSlcbiAgfVxuICBwcml2YXRlIF9jbG9uZUFycmF5PFQ+IChhcnI6VFtdKTpUW10ge1xuICAgIHJldHVybiBbLi4uYXJyXVxuICB9XG4gIHByaXZhdGUgX2ZpbHRlckJ5TWF4UHJpY2UgPSAoYXJyOklQcm9kdWN0W10pPT57XG5cbiAgICBjb25zdCBidWZmZXJBcnIgPSB0aGlzLl9jbG9uZUFycmF5KGFycilcbiAgICBcbiAgICBhcnIubGVuZ3RoPTBcbiAgICBcbiAgICBjb25zdCBmaWx0ZXJlZCA9IFsuLi5idWZmZXJBcnJdIS5maWx0ZXIoZWxlbT0+ZWxlbS5wcmljZTw9dGhpcy5hY3RpdmVGaWx0ZXJzLm1heFByaWNlKVxuICAgIFxuICAgIGFyci5wdXNoKC4uLmZpbHRlcmVkKVxuXG4gICAgcmV0dXJuIGFyclxuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyQnlCcmFuZHMgPSAoYXJyOklQcm9kdWN0W10pPT57XG4gICAgaWYgKCB0aGlzLmFjdGl2ZUZpbHRlcnMuYnJhbmQubGVuZ3RoIT09MCkge1xuICAgICAgY29uc3QgYnVmZmVyQXJyID0gdGhpcy5fY2xvbmVBcnJheShhcnIpXG4gICAgXG4gICAgICBhcnIubGVuZ3RoPTBcbiAgICAgIFxuICAgICAgdGhpcy5hY3RpdmVGaWx0ZXJzLmJyYW5kLmZvckVhY2goZmlsdGVyVmFsdWU9PntcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBbLi4uYnVmZmVyQXJyXS5maWx0ZXIoZWxlbT0+ZWxlbS5icmFuZD09PWZpbHRlclZhbHVlKVxuICAgICAgICBhcnIucHVzaCguLi5maWx0ZXJlZClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gYXJyXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcnJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJCeUNhdGVnb3JpZXMgPSAoYXJyOklQcm9kdWN0W10pPT57XG4gICAgaWYgKCB0aGlzLmFjdGl2ZUZpbHRlcnMuY2F0ZWdvcnkubGVuZ3RoIT09MCkge1xuICAgICAgY29uc3QgYnVmZmVyQXJyID0gdGhpcy5fY2xvbmVBcnJheShhcnIpXG4gICAgXG4gICAgICBhcnIubGVuZ3RoPTBcbiAgICAgIFxuICAgICAgdGhpcy5hY3RpdmVGaWx0ZXJzLmNhdGVnb3J5LmZvckVhY2goZmlsdGVyVmFsdWU9PntcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBbLi4uYnVmZmVyQXJyXS5maWx0ZXIoZWxlbT0+ZWxlbS5jYXRlZ29yeT09PWZpbHRlclZhbHVlKVxuICAgICAgICBhcnIucHVzaCguLi5maWx0ZXJlZClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gYXJyXG4gICAgfSBlbHNlIHtyZXR1cm4gdGhpcy5fY2xvbmVBcnJheShhcnIpfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RmlsdGVyZWRDYXRlZ29yaWVzID0gKCk9PntcbiAgICBsZXQgYXJyID0gdGhpcy5fY2xvbmVBcnJheSh0aGlzLmxpc3QhKVxuICAgIGFyciA9IHRoaXMuX2Nsb25lQXJyYXkodGhpcy5fZmlsdGVyQnlCcmFuZHMoYXJyKSlcbiAgICBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMuX2ZpbHRlckJ5TWF4UHJpY2UoYXJyKSlcbiAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcyA9IGNvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzKGFyci5tYXAocHJvZHVjdD0+cHJvZHVjdC5jYXRlZ29yeSkpXG4gIH1cblxuICBwcml2YXRlIF9nZXRGaWx0ZXJlZEJyYW5kcyA9ICgpPT57XG4gICAgbGV0IGFyciA9IHRoaXMuX2Nsb25lQXJyYXkodGhpcy5saXN0ISlcbiAgICBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMuX2ZpbHRlckJ5Q2F0ZWdvcmllcyhhcnIpKVxuICAgIGFyciA9IHRoaXMuX2Nsb25lQXJyYXkodGhpcy5fZmlsdGVyQnlNYXhQcmljZShhcnIpKVxuICAgIHRoaXMuZmlsdGVyZWRCcmFuZHMgPSBjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyhhcnIubWFwKHByb2R1Y3Q9PnByb2R1Y3QuYnJhbmQpKVxuICB9XG5cbiAgcHVibGljIGZpbHRlckxpc3QgPSAoKT0+IHtcbiAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFsuLi50aGlzLmxpc3QhXVxuICAgIHRoaXMuZmlsdGVyZWRMaXN0PSBbLi4udGhpcy5fZmlsdGVyQnlCcmFuZHModGhpcy5maWx0ZXJlZExpc3QpXVxuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gWy4uLnRoaXMuX2ZpbHRlckJ5Q2F0ZWdvcmllcyh0aGlzLmZpbHRlcmVkTGlzdCldXG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLl9maWx0ZXJCeU1heFByaWNlKHRoaXMuZmlsdGVyZWRMaXN0KVxuICAgIHRoaXMuX2dldEZpbHRlcmVkQ2F0ZWdvcmllcygpXG4gICAgdGhpcy5fZ2V0RmlsdGVyZWRCcmFuZHMoKVxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIFxuICB9IFxufVxuXG5cbiIsImltcG9ydCB7IElDb2xsZWN0aW9uV2l0aENvdW50IH0gZnJvbSBcIi4vY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXNcIjtcbmltcG9ydCB7IElQcm9kdWN0LCBJTWluTWF4T2JqLCBTaG9wRGF0YSB9IGZyb20gXCIuL2dldFNob3BEYXRhXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXIge1xuICBsaXN0OiBIVE1MVUxpc3RFbGVtZW50O1xuICBzaWRlYmFyOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKSE7XG4gICAgdGhpcy5zaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKSE7XG4gIH1cblxuXG5cbiAgcmVuZGVySHRtbFByb2R1Y3RzTGlzdCA9IChwcm9kdWN0QXJyYXk6IElQcm9kdWN0W10pID0+IHtcbiAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgcHJvZHVjdEFycmF5LmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgdGl0bGUsIHByaWNlLCBpbWFnZXMsIGlkIH0gPSBlbGVtO1xuICAgICAgdGhpcy5saXN0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgIGBcbiAgICAgIDxsaSBjbGFzcz1cInByb2R1Y3RzX19pdGVtIHNob3BwaW5nLWl0ZW1cIiBkYXRhLWlkPVwiJHtpZH1cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1swXX1cIiBhbHQ9XCJcIiBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX2ltZ1wiPlxuICAgICAgICA8aDMgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19uYW1lXCI+JHt0aXRsZX08L2gzPlxuICAgICAgICA8ZGF0YSBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXCIgdmFsdWU9XCIke3ByaWNlfVwiPiQke3ByaWNlfTwvZGF0YT5cbiAgICAgIDwvbGk+XG4gICAgYFxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuXG5cbiAgcHJpdmF0ZSBfcmVuZGVyU2VhcmNoID0gKCkgPT4ge1xuICAgIHRoaXMuc2lkZWJhci5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICBgXG4gICAgPGlucHV0IGNsYXNzPVwic2lkZWJhcl9fc2VhcmNoXCIgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgIGBcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlckZpbHRlckNhdGVnb3J5ID0gKGZpbHRlckNhdGVnb3J5TmFtZTogc3RyaW5nLCBmaWx0ZXJDYXRlZ29yeUVudHJpZXM6IElDb2xsZWN0aW9uV2l0aENvdW50KSA9PiB7XG4gICAgdGhpcy5zaWRlYmFyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgYFxuICAgICAgPGgzIGNsYXNzPVwic2lkZWJhcl9fdGl0bGVcIj4ke2ZpbHRlckNhdGVnb3J5TmFtZX08L2gzPlxuICAgICAgPHVsIGNsYXNzPVwic2lkZWJhcl9fZmlsdGVyLWxpc3RcIiBpZD1cImNhdGVnb3JpZXNMaXN0JHtmaWx0ZXJDYXRlZ29yeU5hbWV9XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cInNpZGViYXJfX2ZpbHRlci1pdGVtIHNpZGViYXJfX2ZpcnN0LWxpc3QtaXRlbVwiIGRhdGEtZmlsdGVyPVwiJHtmaWx0ZXJDYXRlZ29yeU5hbWV9X2FsbFwiPkFsbDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgYFxuICAgICk7XG5cbiAgICBjb25zdCBsaXN0RmlsdGVyID0gdGhpcy5zaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoYCNjYXRlZ29yaWVzTGlzdCR7ZmlsdGVyQ2F0ZWdvcnlOYW1lfWApO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoZmlsdGVyQ2F0ZWdvcnlFbnRyaWVzKS5mb3JFYWNoKChbdmFsdWUscXVhbnRpdHldKSA9PiB7XG4gICAgICBsaXN0RmlsdGVyPy5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICBgXG4gICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItaXRlbVwiIGRhdGEtZmlsdGVyPVwiJHtmaWx0ZXJDYXRlZ29yeU5hbWV9XyR7dmFsdWV9XCI+JHt2YWx1ZX0gXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX19lbGVtLWNvdW50ZXJcIj4ke3F1YW50aXR5fTwvZGl2PlxuICAgICAgPC9saT5gXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlclByaWNlUmFuZ2UgPSAoYXJyOiBJTWluTWF4T2JqKSA9PiB7XG4gICAgdGhpcy5zaWRlYmFyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgYFxuICAgICAgPGgzIGNsYXNzPVwic2lkZWJhcl9fdGl0bGVcIj5QcmljZTwvaDM+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzaWRlYmFyX19wcmljZS1yYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJwcmljZS1yYW5nZVwiIG1heD1cIiR7YXJyLm1heH1cIiBtaW49XCIke2Fyci5taW59XCIgdmFsdWU9XCIke2Fyci5tYXh9XCIvPlxuICAgICAgPGRhdGEgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItbWF4LXByaWNlXCI+TWF4IHByaWNlOiAkJHthcnIubWF4fTwvZGF0YT5cbiAgICAgIGBcbiAgICApO1xuICAgIGNvbnN0IHByaWNlUmFuZ2VJTnB1dDpIVE1MSW5wdXRFbGVtZW50fG51bGwgPSB0aGlzLnNpZGViYXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3ByaWNlLXJhbmdlJylcbiAgICBjb25zdCBwcmljZVJhbmdlRGF0YSA9IHRoaXMuc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fZmlsdGVyLW1heC1wcmljZScpIVxuICAgIFxuICAgIHByaWNlUmFuZ2VJTnB1dD8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKCk9PntcbiAgICAgIHByaWNlUmFuZ2VEYXRhLnRleHRDb250ZW50ID0gYE1heCBwcmljZTogJCR7cHJpY2VSYW5nZUlOcHV0LnZhbHVlfSBgXG4gICAgfSlcblxuICAgIFxuICB9O1xuXG4gIHJlbmRlclNpZGVCYXIgPSAoZGF0YTogU2hvcERhdGEpID0+IHtcbiAgICB0aGlzLl9yZW5kZXJTZWFyY2goKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuZmlsdGVycykuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICBjb25zdCBbZmlsdGVyVHlwZSwgZmlsdGVyVmFsdWVdID0gZmlsdGVyO1xuICAgICAgdGhpcy5fcmVuZGVyRmlsdGVyQ2F0ZWdvcnkoZmlsdGVyVHlwZSwgZmlsdGVyVmFsdWUpO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuX3JlbmRlclByaWNlUmFuZ2UoZGF0YS5wcmljZVJhbmdlKTtcbiAgfTtcblxuICByZVJlbmRlckNvdW50ZXJzUXVhbnRpdGllcyA9IChicmFuZHM6SUNvbGxlY3Rpb25XaXRoQ291bnQsIGNhdGVnb3JpZXM6SUNvbGxlY3Rpb25XaXRoQ291bnQpPT57XG4gICAgY29uc3Qgbm9kZUxpc3RPZkNvdW50ZXJzID0gdGhpcy5zaWRlYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyX19lbGVtLWNvdW50ZXInKVxuICAgIG5vZGVMaXN0T2ZDb3VudGVycy5mb3JFYWNoKGNvdW50ZXI9PntcbiAgICAgIGNvbnN0IFtmaWx0ZXJUeXBlLCBmaWx0ZXJWYWx1ZV0gPSBjb3VudGVyLnBhcmVudEVsZW1lbnQ/LmRhdGFzZXQuZmlsdGVyPy5zcGxpdCgnXycpIVxuICAgICAgaWYgKGZpbHRlclR5cGU9PT0nY2F0ZWdvcnknKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclR5cGVBbmRDb3VudCA9IE9iamVjdC5lbnRyaWVzKGNhdGVnb3JpZXMpLmZpbmQoY2F0ZWdvcnk9PmNhdGVnb3J5WzBdPT09ZmlsdGVyVmFsdWUpXG4gICAgICAgIGlmIChmaWx0ZXJUeXBlQW5kQ291bnQpIHtcbiAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50PWZpbHRlclR5cGVBbmRDb3VudFsxXS50b1N0cmluZygpXG4gICAgICAgICAgY291bnRlci5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlci50ZXh0Q29udGVudD0nMCdcbiAgICAgICAgICBjb3VudGVyLnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJylcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgIGlmIChmaWx0ZXJUeXBlPT09J2JyYW5kJykge1xuICAgICAgICBjb25zdCBmaWx0ZXJUeXBlQW5kQ291bnQgPSBPYmplY3QuZW50cmllcyhicmFuZHMpLmZpbmQoYnJhbmQ9PmJyYW5kWzBdPT09ZmlsdGVyVmFsdWUpXG4gICAgICAgIGlmIChmaWx0ZXJUeXBlQW5kQ291bnQpIHtcbiAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50PWZpbHRlclR5cGVBbmRDb3VudFsxXS50b1N0cmluZygpXG4gICAgICAgICAgY291bnRlci5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlci50ZXh0Q29udGVudD0nMCdcbiAgICAgICAgICBjb3VudGVyLnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJylcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgIFxuICAgIH0pXG4gICAgY29uc29sZS5sb2coKTtcbiAgICBcbiAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL2luZGV4Lmh0bWwnO1xuaW1wb3J0ICcuLi9wcm9kdWN0cy5odG1sJztcbmltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zYXNzJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudC9hcHAnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCBkb2N1bWVudC50aXRsZSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==