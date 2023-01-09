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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUVBQTRCO0FBRTVCLHdFQUF5QjtBQUV6QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNsRCxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9qcy8uL3NyYy9wcm9kdWN0cy5odG1sIiwid2VicGFjazovL2pzLy4vc3JjL3Nhc3Mvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvYXBwLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9jb3VudFF1YW50aXRpZXNVbmlxRW50cmllcy50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvZ2V0U2hvcERhdGEudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L3JlbmRlci50cyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLy4vc3JjL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXG4gICAgPHRpdGxlPlNob3A8L3RpdGxlPlxcbiAgPC9oZWFkPlxcblxcbiAgPGJvZHk+XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPG5hdiBjbGFzcz1cXFwiaGVhZGVyX25hdlxcXCI+XFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua3MtbGlzdFxcXCI+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9pbmRleC5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+SG9tZTwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPlByb2R1Y3RzPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+QWJvdXQ8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRlcl9fbG9nb1xcXCI+Y29tZnk8L3NwYW4+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcl9fYnRuLWNhcnQgYnRuLWNhcnRcXFwiPlxcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcImJ0bi1jYXJ0X19pbWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICBkPVxcXCJNMTcsMThDMTUuODksMTggMTUsMTguODkgMTUsMjBBMiwyIDAgMCwwIDE3LDIyQTIsMiAwIDAsMCAxOSwyMEMxOSwxOC44OSAxOC4xLDE4IDE3LDE4TTEsMlY0SDNMNi42LDExLjU5TDUuMjQsMTQuMDRDNS4wOSwxNC4zMiA1LDE0LjY1IDUsMTVBMiwyIDAgMCwwIDcsMTdIMTlWMTVINy40MkEwLjI1LDAuMjUgMCAwLDEgNy4xNywxNC43NUM3LjE3LDE0LjcgNy4xOCwxNC42NiA3LjIsMTQuNjNMOC4xLDEzSDE1LjU1QzE2LjMsMTMgMTYuOTYsMTIuNTggMTcuMywxMS45N0wyMC44OCw1LjVDMjAuOTUsNS4zNCAyMSw1LjE3IDIxLDVBMSwxIDAgMCwwIDIwLDRINS4yMUw0LjI3LDJNNywxOEM1Ljg5LDE4IDUsMTguODkgNSwyMEEyLDIgMCAwLDAgNywyMkEyLDIgMCAwLDAgOSwyMEM5LDE4Ljg5IDguMSwxOCA3LDE4WlxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWNhcnRfX3F1YW50aXR5XFxcIj4yPC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9uYXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcbiAgICA8bWFpbiBjbGFzcz1cXFwiaGVyb1xcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVyb19fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxoMSBjbGFzcz1cXFwiaGVyb19fdGl0bGVcXFwiPlJlc3QsIFJlbGF4LCBVbndpbmQ8L2gxPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcImhlcm9fX3RleHRcXFwiPkVtYnJhY2UgeW91ciBjaG9pY2VzIC0gd2UgZG88L3A+XFxuICAgICAgICA8YSBocmVmPVxcXCIuL3Byb2R1Y3RzLmh0bWxcXFwiIGNsYXNzPVxcXCJoZXJvX19idG4tbGlua1xcXCI+c2hvdyBub3c8L2E+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZXJvX19saWNlbnNlXFxcIj5cXG4gICAgICAgICAgUGhvdG8gYnlcXG4gICAgICAgICAgPGFcXG4gICAgICAgICAgICBocmVmPVxcXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYW5uaWVzcHJhdHQ/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XFxcIlxcbiAgICAgICAgICAgID5Bbm5pZSBTcHJhdHQ8L2FcXG4gICAgICAgICAgPlxcbiAgICAgICAgICBvblxcbiAgICAgICAgICA8YVxcbiAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy81MkFBaVhXb1ZpMD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcXFwiXFxuICAgICAgICAgICAgPlVuc3BsYXNoPC9hXFxuICAgICAgICAgID5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L21haW4+XFxuICAgIDxmb290ZXIgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJmb290ZXJfX3RpdGxlXFxcIj5GZWF0dXJlZDwvaDI+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcImZvb3Rlcl9fZmVhdHVyZWQtbGlzdFxcXCI+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1pdGVtIHNob3BwaW5nLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly93d3cuaWtlYS5jb20vY2EvZW4vaW1hZ2VzL3Byb2R1Y3RzL2xpZGFzLWNoYWlyLXdoaXRlLXNlZmFzdC1jaHJvbWUtcGxhdGVkX18xMTA2MzQ3X3BlODY4Njg4X3M1LmpwZz9mPXhsXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lXFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZVxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImZvb3Rlcl9fZmVhdHVyZWQtaXRlbSBzaG9wcGluZy1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vd3d3LmlrZWEuY29tL2NhL2VuL2ltYWdlcy9wcm9kdWN0cy9saWRhcy1jaGFpci13aGl0ZS1zZWZhc3QtY2hyb21lLXBsYXRlZF9fMTEwNjM0N19wZTg2ODY4OF9zNS5qcGc/Zj14bFxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZ1xcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZVxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJmb290ZXJfX2ZlYXR1cmVkLWl0ZW0gc2hvcHBpbmctaXRlbVxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3d3dy5pa2VhLmNvbS9jYS9lbi9pbWFnZXMvcHJvZHVjdHMvbGlkYXMtY2hhaXItd2hpdGUtc2VmYXN0LWNocm9tZS1wbGF0ZWRfXzExMDYzNDdfcGU4Njg2ODhfczUuanBnP2Y9eGxcXFwiXFxuICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWdcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Zvb3Rlcj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fd3JhcHBlciBoaWRkZW5cXFwiPlxcbiAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0XFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2J0bl9leGl0XFxcIj5cXG4gICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgZD1cXFwiTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWlxcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190aXRsZVxcXCI+WW91ciBCYWc8L2gzPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19saXN0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19pdGVtIHNob3BwaW5nLWl0ZW1fY2FydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2luZm8tY2FydFxcXCI+XFxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVfY2FydFxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZV9jYXJ0XFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVtb3ZlXFxcIj5yZW1vdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eVxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fYWRkLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSwxNS40MUwxMiwxMC44M0wxNi41OSwxNS40MUwxOCwxNEwxMiw4TDYsMTRMNy40MSwxNS40MVpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5LWRpc3BsYXlcXFwiPjU8L2Rpdj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZWR1c2UtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19pdGVtIHNob3BwaW5nLWl0ZW1fY2FydFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2luZm8tY2FydFxcXCI+XFxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVfY2FydFxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZV9jYXJ0XFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVtb3ZlXFxcIj5yZW1vdmU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eVxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fYWRkLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSwxNS40MUwxMiwxMC44M0wxNi41OSwxNS40MUwxOCwxNEwxMiw4TDYsMTRMNy40MSwxNS40MVpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5LWRpc3BsYXlcXFwiPjU8L2Rpdj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZWR1c2UtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcXFwiXFxuICAgICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgICA8cCBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fdG90YWxcXFwiPlxcbiAgICAgICAgICBUb3RhbCA6XFxuICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190b3RhbF9hbW91bnRcXFwiPiQxMTQuOTQ8L2RhdGE+XFxuICAgICAgICA8L3A+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19idG5fY2hlY2tvdXRcXFwiPmNoZWNrb3V0PC9idXR0b24+XFxuICAgICAgPC9zZWN0aW9uPlxcbiAgICA8L2Rpdj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcIm1kaSBtZGktY29udGVudC1zYXZlLW1pbnVzLW91dGxpbmVcXFwiPjwvc3Bhbj5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXG4gIDxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCIgLz5cXG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJJRT1lZGdlXFxcIiAvPlxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXG4gICAgPHRpdGxlPlByb2R1Y3RzPC90aXRsZT5cXG4gIDwvaGVhZD5cXG4gIDxib2R5PlxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxuYXYgY2xhc3M9XFxcImhlYWRlcl9uYXZcXFwiPlxcbiAgICAgICAgICA8dWwgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtzLWxpc3RcXFwiPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi4vaW5kZXguaHRtbFxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPkhvbWU8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIuL3Byb2R1Y3RzLmh0bWxcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5Qcm9kdWN0czwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPkFib3V0PC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJoZWFkZXJfX2xvZ29cXFwiPmNvbWZ5PC9zcGFuPlxcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJoZWFkZXJfX2J0bi1jYXJ0IGJ0bi1jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVxcXCJidG4tY2FydF9faW1nXFxcIiBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgZD1cXFwiTTE3LDE4QzE1Ljg5LDE4IDE1LDE4Ljg5IDE1LDIwQTIsMiAwIDAsMCAxNywyMkEyLDIgMCAwLDAgMTksMjBDMTksMTguODkgMTguMSwxOCAxNywxOE0xLDJWNEgzTDYuNiwxMS41OUw1LjI0LDE0LjA0QzUuMDksMTQuMzIgNSwxNC42NSA1LDE1QTIsMiAwIDAsMCA3LDE3SDE5VjE1SDcuNDJBMC4yNSwwLjI1IDAgMCwxIDcuMTcsMTQuNzVDNy4xNywxNC43IDcuMTgsMTQuNjYgNy4yLDE0LjYzTDguMSwxM0gxNS41NUMxNi4zLDEzIDE2Ljk2LDEyLjU4IDE3LjMsMTEuOTdMMjAuODgsNS41QzIwLjk1LDUuMzQgMjEsNS4xNyAyMSw1QTEsMSAwIDAsMCAyMCw0SDUuMjFMNC4yNywyTTcsMThDNS44OSwxOCA1LDE4Ljg5IDUsMjBBMiwyIDAgMCwwIDcsMjJBMiwyIDAgMCwwIDksMjBDOSwxOC44OSA4LjEsMTggNywxOFpcXFwiXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0bi1jYXJ0X19xdWFudGl0eVxcXCI+MjwvZGl2PlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvbmF2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG5cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNpdGUtbG9jYXRpb25cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInNpdGUtbG9jYXRpb25fX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvbl9fbGlua1xcXCIgaHJlZj1cXFwiLi9pbmRleC5odG1sXFxcIj5Ib21lIDwvYT4gL1xcbiAgICAgICAgPGEgY2xhc3M9XFxcInNpdGUtbG9jYXRpb25fX2xpbmtcXFwiIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCI+UHJvZHVjdHM8L2E+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICAgPG1haW4gY2xhc3M9XFxcIm1haW5cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm1haW5fX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8YXNpZGUgY2xhc3M9XFxcInNpZGViYXJcXFwiPlxcbiAgICAgICAgICA8IS0tIDxpbnB1dCBjbGFzcz1cXFwic2lkZWJhcl9fcHJpY2UtcmFuZ2VcXFwiIHR5cGU9XFxcInJhbmdlXFxcIiBuYW1lPVxcXCJwcmljZS1yYW5nZVxcXCIgLz4gLS0+XFxuICAgICAgICA8L2FzaWRlPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJwcm9kdWN0c1xcXCI+PC91bD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9tYWluPlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXG5pbXBvcnQgeyBnZXREYXRhQXJyLCBTaG9wRGF0YSB9IGZyb20gJy4vZ2V0U2hvcERhdGEnO1xuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSAnLi9yZW5kZXInO1xuXG5cblxuXG4oYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gbmV3IFNob3BEYXRhKGF3YWl0IGdldERhdGFBcnIoKSk7XG5cbiAgY2xhc3MgRmlsdGVyQ2xpY2tIYW5kbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yIChwdWJsaWMgdGFyZ2V0OkhUTUxFbGVtZW50KSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplKClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9hY3RpdmF0ZUZpbHRlciA9IChlbGVtZW50OkhUTUxFbGVtZW50KT0+e1xuICAgICAgY29uc3QgZmlsdGVyID0gZWxlbWVudC5kYXRhc2V0LmZpbHRlciFcbiAgICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgZGF0YS5hZGRBY3RpdmVGaWx0ZXIoZmlsdGVyKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmFjdGl2ZUZpbHRlcnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2RlYWN0aXZhdGVGaWx0ZXIgPSAoZWxlbWVudDpIVE1MRWxlbWVudCk9PntcbiAgICAgIGNvbnN0IGZpbHRlciA9IGVsZW1lbnQuZGF0YXNldC5maWx0ZXIhXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICBkYXRhLnJlbW92ZUVsZW1lbnRGcm9tQWN0aXZlRmlsdGVyKGZpbHRlcilcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuYWN0aXZlRmlsdGVycyk7XG5cbiAgICAgIC8vIHJlbW92ZSBhY3RpdmUgZnJvbSBcIkFsbFwiIGZpbHRlciBlbGVtZW50XG4gICAgICBjb25zdCBhbGxCdG5GaWx0ZXJMaXN0ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50Py5maXJzdEVsZW1lbnRDaGlsZCBhcyBIVE1MRWxlbWVudFxuICAgICAgY29uc3QgYnRuRmlsdGVyID0gYWxsQnRuRmlsdGVyTGlzdC5kYXRhc2V0LmZpbHRlciFcblxuICAgICAgaWYgKGFsbEJ0bkZpbHRlckxpc3Q/LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgYWxsQnRuRmlsdGVyTGlzdD8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgZGF0YS5yZW1vdmVFbGVtZW50RnJvbUFjdGl2ZUZpbHRlcihidG5GaWx0ZXIpXG4gICAgICB9IFxuICAgIH1cblxuICAgIHByaXZhdGUgX2FjdGl2YXRlRmlsdGVyTGlzdCA9IChhcnJheTpFbGVtZW50W10pPT57XG4gICAgICBhcnJheS5mb3JFYWNoKChsaXN0SXRlbSk9PntcbiAgICAgICAgaWYgKGxpc3RJdGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9hY3RpdmF0ZUZpbHRlcihsaXN0SXRlbSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcHJpdmF0ZSBfZGVhY3RpdmF0ZUZpbHRlckxpc3QgPSAoYXJyYXk6RWxlbWVudFtdKT0+e1xuICAgICAgYXJyYXkuZm9yRWFjaCgobGlzdEl0ZW0pPT57XG4gICAgICAgIGlmIChsaXN0SXRlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5fZGVhY3RpdmF0ZUZpbHRlcihsaXN0SXRlbSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVDbGlja09uRmlsdGVyRWxlbWVudCA9IChlbGVtZW50OkhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblxuICAgICAgICB0aGlzLl9kZWFjdGl2YXRlRmlsdGVyKGVsZW1lbnQpXG4gICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVGaWx0ZXIoZWxlbWVudClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0aWFsaXplID0gKCk9PntcbiAgICAgICAgY29uc3QgZmlsdGVyID0gdGhpcy50YXJnZXQuZGF0YXNldC5maWx0ZXIhXG5cbiAgICAgICAgaWYgKGZpbHRlcj09PSdjYXRlZ29yeV9hbGwnfHxmaWx0ZXI9PT0nYnJhbmRfYWxsJykge1xuXG4gICAgICAgICAgY29uc3QgYXJyYXlGaWx0ZXJzID0gQXJyYXkuZnJvbSh0aGlzLnRhcmdldC5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbilcblxuICAgICAgICAgIGlmICh0aGlzLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWFjdGl2YXRlRmlsdGVyTGlzdChhcnJheUZpbHRlcnMpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2YXRlRmlsdGVyTGlzdChhcnJheUZpbHRlcnMpXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlQ2xpY2tPbkZpbHRlckVsZW1lbnQodGhpcy50YXJnZXQpXG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG4gIH1cblxuICBjbGFzcyBDbGlja0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKVxuICAgIH1cbiAgICB1cGRhdGVEYXRhQW5kUmVuZGVyTGlzdCA9ICgpPT57XG4gICAgICBkYXRhLmZpbHRlckxpc3QoKVxuICAgICAgbmV3IFJlbmRlcigpLnJlbmRlckh0bWxQcm9kdWN0c0xpc3QoZGF0YS5maWx0ZXJlZExpc3QpXG4gICAgfVxuXG4gICAgbGlzdGVuZXJGb3JNYXhQcmljZT0oKT0+e1xuICAgICAgbGV0IGRlbGF5OmFueVxuICAgICAgY29uc3QgaW5wdXQ6SFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcmljZS1yYW5nZScpIVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PntcbiAgICAgICAgaWYgKGRlbGF5KSB7Y2xlYXJUaW1lb3V0KGRlbGF5KX1cbiAgICAgICAgZGVsYXkgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgY29uc3QgbWF4UHJpY2UgPSBwYXJzZUludChpbnB1dC52YWx1ZSlcbiAgICAgICAgICBkYXRhLmFjdGl2ZUZpbHRlcnMubWF4UHJpY2UgPSBtYXhQcmljZVxuICAgICAgICAgIGRhdGEucHJpY2VSYW5nZS5tYXggPSBtYXhQcmljZVxuICAgICAgICAgIHRoaXMudXBkYXRlRGF0YUFuZFJlbmRlckxpc3QoKVxuICAgICAgfVxuICAgICAgICAgICw1MDApXG4gICAgICB9KVxuICAgIH1cblxuICAgIGluaXRpYWxpemUgPSAoKT0+e1xuICAgICAgdGhpcy5saXN0ZW5lckZvck1heFByaWNlKClcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge3JldHVybn1cbiAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuc2lkZWJhcl9fZmlsdGVyLWl0ZW0nKSkge1xuICAgICAgICAgIG5ldyBGaWx0ZXJDbGlja0hhbmRsZXIodGFyZ2V0KVxuICAgICAgICAgIHRoaXMudXBkYXRlRGF0YUFuZFJlbmRlckxpc3QoKVxuICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBcblxuICAgICAgXG4gICAgfVxuICBcbiAgfVxuXG4gIG5ldyBSZW5kZXIoKS5yZW5kZXJIdG1sUHJvZHVjdHNMaXN0KGRhdGEubGlzdCEpO1xuICBuZXcgUmVuZGVyKCkucmVuZGVyU2lkZUJhcihkYXRhKTtcbiAgbmV3IENsaWNrSGFuZGxlcigpXG5cblxufSkoKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUNvbGxlY3Rpb25XaXRoQ291bnQge1xuICBbaW5kZXg6IHN0cmluZ106IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY29uc3QgY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXMgPSAoYXJyOnN0cmluZ1tdKTpJQ29sbGVjdGlvbldpdGhDb3VudD0+e1xuICBcbiAgY29uc3QgY29sbGVjdGlvbldpdGhDb3VudDpJQ29sbGVjdGlvbldpdGhDb3VudCA9IHtcbiAgfTtcblxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyKSB7XG4gICAgaWYgKGNvbGxlY3Rpb25XaXRoQ291bnRbZWxlbWVudF0pIHtcbiAgICAgIGNvbGxlY3Rpb25XaXRoQ291bnRbZWxlbWVudF0gKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sbGVjdGlvbldpdGhDb3VudFtlbGVtZW50XSA9IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb25XaXRoQ291bnRcbn0iLCJpbXBvcnQgeyBJQ29sbGVjdGlvbldpdGhDb3VudCxjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyB9IGZyb20gXCIuL2NvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBkaXNjb3VudFBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmF0aW5nOiBudW1iZXI7XG4gIHN0b2NrOiBudW1iZXI7XG4gIGJyYW5kOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHRodW1ibmFpbDogVVJMO1xuICBpbWFnZXM6IFVSTFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNaW5NYXhPYmoge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJQW5zd2VyU2VydmVyIHtcbiAgcHJvZHVjdHM6IElQcm9kdWN0W107XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhQXJyID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFuc3dlciA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHM/bGltaXQ9MTAwJyk7XG4gICAgY29uc3QgZGF0YTogSUFuc3dlclNlcnZlciA9IGF3YWl0IGFuc3dlci5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGEucHJvZHVjdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgU2hvcERhdGEge1xuXG4gIHB1YmxpYyBmaWx0ZXJzOiB7XG4gICAgY2F0ZWdvcnk6IElDb2xsZWN0aW9uV2l0aENvdW50O1xuICAgIGJyYW5kOiBJQ29sbGVjdGlvbldpdGhDb3VudDtcbiAgfT0ge1xuICAgIGNhdGVnb3J5OiB7fSxcbiAgICBicmFuZDoge30sXG4gIH1cbiAgcHJpY2VSYW5nZSE6IElNaW5NYXhPYmo7XG5cbiAgZmlsdGVyZWRMaXN0OiBJUHJvZHVjdFtdXG4gIGZpbHRlcmVkQ2F0ZWdvcmllczpJQ29sbGVjdGlvbldpdGhDb3VudD17fVxuICBmaWx0ZXJlZEJyYW5kczpJQ29sbGVjdGlvbldpdGhDb3VudD17fVxuXG4gIHByaXZhdGUgX2FjdGl2ZUZpbHRlcnM6IHtcbiAgICBjYXRlZ29yeTogc3RyaW5nW107XG4gICAgYnJhbmQ6IHN0cmluZ1tdO1xuICAgIG1heFByaWNlOiBudW1iZXI7XG4gIH0gPSB7XG4gICAgY2F0ZWdvcnk6IFtdLFxuICAgIGJyYW5kOiBbXSxcbiAgICBtYXhQcmljZTogMCxcbiAgfTtcblxuXG4gIFxuICBwdWJsaWMgZ2V0IGFjdGl2ZUZpbHRlcnMoKToge1xuICAgIGNhdGVnb3J5OiBzdHJpbmdbXTtcbiAgICBicmFuZDogc3RyaW5nW107XG4gICAgbWF4UHJpY2U6IG51bWJlcjtcbiAgfSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUZpbHRlcnM7XG4gIH1cbiAgXG4gIHB1YmxpYyBhZGRBY3RpdmVGaWx0ZXIoc3RyaW5nOnN0cmluZykge1xuICAgIGNvbnN0IFtmaWx0ZXJUeXBlLHZhbHVlXSA9IHN0cmluZy5zcGxpdCgnXycpXG5cbiAgICBpZiAoKGZpbHRlclR5cGU9PT0nYnJhbmQnfHwgZmlsdGVyVHlwZT09PSdjYXRlZ29yeScpICYmIHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9hY3RpdmVGaWx0ZXJzW2ZpbHRlclR5cGVdLnB1c2godmFsdWUpXG4gICAgfSBcblxuICAgIGlmIChmaWx0ZXJUeXBlPT09J21heFByaWNlJyAmJiB0eXBlb2YgdmFsdWU9PT0nbnVtYmVyJykge1xuICAgICAgdGhpcy5fYWN0aXZlRmlsdGVyc1tmaWx0ZXJUeXBlXT12YWx1ZVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFbGVtZW50RnJvbUFjdGl2ZUZpbHRlcihzdHJpbmc6c3RyaW5nKSB7XG5cbiAgICBjb25zdCBbZmlsdGVyVHlwZSx2YWx1ZV0gPSBzdHJpbmcuc3BsaXQoJ18nKVxuICAgIFxuICAgIGlmICgoZmlsdGVyVHlwZT09PSdicmFuZCd8fCBmaWx0ZXJUeXBlPT09J2NhdGVnb3J5JykgJiYgdHlwZW9mIHZhbHVlPT09J3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGFyciA9IHRoaXMuYWN0aXZlRmlsdGVyc1tmaWx0ZXJUeXBlXVxuICAgICAgYXJyLnNwbGljZShhcnIuZmluZEluZGV4KGZpbHRlcj0+ZmlsdGVyPT09dmFsdWUpLDEpXG4gICAgICB0aGlzLmFjdGl2ZUZpbHRlcnNbZmlsdGVyVHlwZV0gPSBhcnJcbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsaXN0OiBJUHJvZHVjdFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSBBcnJheS5mcm9tKHRoaXMubGlzdCEpXG5cbiAgICBpZiAobGlzdCkge1xuICAgICAgdGhpcy5maWx0ZXJzLmJyYW5kID0gdGhpcy5fZ2V0UXVhbnRpdHlCcmFuZHMoKTtcbiAgICAgIHRoaXMuZmlsdGVycy5jYXRlZ29yeSA9IHRoaXMuX2dldFF1YW50aXR5Q2F0ZWdvcmllcygpO1xuICAgICAgdGhpcy5wcmljZVJhbmdlID0gdGhpcy5fZ2V0UHJpY2VSYW5nZSgpITtcbiAgICAgIHRoaXMuYWN0aXZlRmlsdGVycy5tYXhQcmljZSA9IHRoaXMucHJpY2VSYW5nZS5tYXhcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRRdWFudGl0eUJyYW5kcyA9ICgpID0+IGNvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzKHRoaXMubGlzdD8ubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5icmFuZCkhKTtcblxuICBwcml2YXRlIF9nZXRRdWFudGl0eUNhdGVnb3JpZXMgPSAoKSA9PiBjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyh0aGlzLmxpc3Q/Lm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5jYXRlZ29yeSkhKTtcblxuICBwcml2YXRlIF9nZXRQcmljZVJhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHByaWNlcyA9IHRoaXMubGlzdD8ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LnByaWNlKTtcbiAgICBpZiAocHJpY2VzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaW46IE1hdGgubWluKC4uLnByaWNlcyksXG4gICAgICAgIG1heDogTWF0aC5tYXgoLi4ucHJpY2VzKVxuICAgICAgfTtcbiAgICB9XG4gIH07XG4gIHByaXZhdGUgX2RlZXBDbG9uZUFycmF5PFQ+IChhcnI6VCk6VCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJyKSlcbiAgfVxuICBwcml2YXRlIF9jbG9uZUFycmF5PFQ+IChhcnI6VFtdKTpUW10ge1xuICAgIHJldHVybiBbLi4uYXJyXVxuICB9XG4gIHByaXZhdGUgX2ZpbHRlckJ5TWF4UHJpY2UgPSAoYXJyOklQcm9kdWN0W10pPT57XG5cbiAgICBjb25zdCBidWZmZXJBcnIgPSB0aGlzLl9jbG9uZUFycmF5KGFycilcbiAgICBcbiAgICBhcnIubGVuZ3RoPTBcbiAgICBcbiAgICBjb25zdCBmaWx0ZXJlZCA9IFsuLi5idWZmZXJBcnJdIS5maWx0ZXIoZWxlbT0+ZWxlbS5wcmljZTw9dGhpcy5hY3RpdmVGaWx0ZXJzLm1heFByaWNlKVxuICAgIFxuICAgIGFyci5wdXNoKC4uLmZpbHRlcmVkKVxuXG4gICAgcmV0dXJuIGFyclxuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyQnlCcmFuZHMgPSAoYXJyOklQcm9kdWN0W10pPT57XG4gICAgaWYgKCB0aGlzLmFjdGl2ZUZpbHRlcnMuYnJhbmQubGVuZ3RoIT09MCkge1xuICAgICAgY29uc3QgYnVmZmVyQXJyID0gdGhpcy5fY2xvbmVBcnJheShhcnIpXG4gICAgXG4gICAgICBhcnIubGVuZ3RoPTBcbiAgICAgIFxuICAgICAgdGhpcy5hY3RpdmVGaWx0ZXJzLmJyYW5kLmZvckVhY2goZmlsdGVyVmFsdWU9PntcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBbLi4uYnVmZmVyQXJyXS5maWx0ZXIoZWxlbT0+ZWxlbS5icmFuZD09PWZpbHRlclZhbHVlKVxuICAgICAgICBhcnIucHVzaCguLi5maWx0ZXJlZClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gYXJyXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcnJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXJCeUNhdGVnb3JpZXMgPSAoYXJyOklQcm9kdWN0W10pPT57XG4gICAgaWYgKCB0aGlzLmFjdGl2ZUZpbHRlcnMuY2F0ZWdvcnkubGVuZ3RoIT09MCkge1xuICAgICAgY29uc3QgYnVmZmVyQXJyID0gdGhpcy5fY2xvbmVBcnJheShhcnIpXG4gICAgXG4gICAgICBhcnIubGVuZ3RoPTBcbiAgICAgIFxuICAgICAgdGhpcy5hY3RpdmVGaWx0ZXJzLmNhdGVnb3J5LmZvckVhY2goZmlsdGVyVmFsdWU9PntcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBbLi4uYnVmZmVyQXJyXS5maWx0ZXIoZWxlbT0+ZWxlbS5jYXRlZ29yeT09PWZpbHRlclZhbHVlKVxuICAgICAgICBhcnIucHVzaCguLi5maWx0ZXJlZClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gYXJyXG4gICAgfSBlbHNlIHtyZXR1cm4gdGhpcy5fY2xvbmVBcnJheShhcnIpfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RmlsdGVyZWRDYXRlZ29yaWVzID0gKCk9PntcbiAgICBsZXQgYXJyID0gdGhpcy5fY2xvbmVBcnJheSh0aGlzLmxpc3QhKVxuICAgIGFyciA9IHRoaXMuX2Nsb25lQXJyYXkodGhpcy5fZmlsdGVyQnlCcmFuZHMoYXJyKSlcbiAgICBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMuX2ZpbHRlckJ5TWF4UHJpY2UoYXJyKSlcbiAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcyA9IGNvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzKGFyci5tYXAocHJvZHVjdD0+cHJvZHVjdC5jYXRlZ29yeSkpXG4gIH1cblxuICBwcml2YXRlIF9nZXRGaWx0ZXJlZEJyYW5kcyA9ICgpPT57XG4gICAgbGV0IGFyciA9IHRoaXMuX2Nsb25lQXJyYXkodGhpcy5saXN0ISlcbiAgICBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMuX2ZpbHRlckJ5Q2F0ZWdvcmllcyhhcnIpKVxuICAgIGFyciA9IHRoaXMuX2Nsb25lQXJyYXkodGhpcy5fZmlsdGVyQnlNYXhQcmljZShhcnIpKVxuICAgIHRoaXMuZmlsdGVyZWRCcmFuZHMgPSBjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyhhcnIubWFwKHByb2R1Y3Q9PnByb2R1Y3QuYnJhbmQpKVxuICB9XG5cbiAgcHVibGljIGZpbHRlckxpc3QgPSAoKT0+IHtcbiAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFsuLi50aGlzLmxpc3QhXVxuICAgIHRoaXMuZmlsdGVyZWRMaXN0PSBbLi4udGhpcy5fZmlsdGVyQnlCcmFuZHModGhpcy5maWx0ZXJlZExpc3QpXVxuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gWy4uLnRoaXMuX2ZpbHRlckJ5Q2F0ZWdvcmllcyh0aGlzLmZpbHRlcmVkTGlzdCldXG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLl9maWx0ZXJCeU1heFByaWNlKHRoaXMuZmlsdGVyZWRMaXN0KVxuICAgIHRoaXMuX2dldEZpbHRlcmVkQ2F0ZWdvcmllcygpXG4gICAgdGhpcy5fZ2V0RmlsdGVyZWRCcmFuZHMoKVxuICAgIFxuICB9IFxufVxuXG5cbiIsImltcG9ydCB7IElDb2xsZWN0aW9uV2l0aENvdW50IH0gZnJvbSBcIi4vY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXNcIjtcbmltcG9ydCB7IElQcm9kdWN0LCBJTWluTWF4T2JqLCBTaG9wRGF0YSB9IGZyb20gXCIuL2dldFNob3BEYXRhXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXIge1xuICBsaXN0OiBIVE1MVUxpc3RFbGVtZW50O1xuICBzaWRlYmFyOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKSE7XG4gICAgdGhpcy5zaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKSE7XG4gIH1cblxuXG5cbiAgcmVuZGVySHRtbFByb2R1Y3RzTGlzdCA9IChwcm9kdWN0QXJyYXk6IElQcm9kdWN0W10pID0+IHtcbiAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgcHJvZHVjdEFycmF5LmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgdGl0bGUsIHByaWNlLCBpbWFnZXMsIGlkIH0gPSBlbGVtO1xuICAgICAgdGhpcy5saXN0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgIGBcbiAgICAgIDxsaSBjbGFzcz1cInByb2R1Y3RzX19pdGVtIHNob3BwaW5nLWl0ZW1cIiBkYXRhLWlkPVwiJHtpZH1cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1swXX1cIiBhbHQ9XCJcIiBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX2ltZ1wiPlxuICAgICAgICA8aDMgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19uYW1lXCI+JHt0aXRsZX08L2gzPlxuICAgICAgICA8ZGF0YSBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXCIgdmFsdWU9XCIke3ByaWNlfVwiPiQke3ByaWNlfTwvZGF0YT5cbiAgICAgIDwvbGk+XG4gICAgYFxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuXG5cbiAgcHJpdmF0ZSBfcmVuZGVyU2VhcmNoID0gKCkgPT4ge1xuICAgIHRoaXMuc2lkZWJhci5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYWZ0ZXJiZWdpbicsXG4gICAgICBgXG4gICAgPGlucHV0IGNsYXNzPVwic2lkZWJhcl9fc2VhcmNoXCIgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgIGBcbiAgICApO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlckZpbHRlckNhdGVnb3J5ID0gKGZpbHRlckNhdGVnb3J5TmFtZTogc3RyaW5nLCBmaWx0ZXJDYXRlZ29yeUVudHJpZXM6IElDb2xsZWN0aW9uV2l0aENvdW50KSA9PiB7XG4gICAgdGhpcy5zaWRlYmFyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgYFxuICAgICAgPGgzIGNsYXNzPVwic2lkZWJhcl9fdGl0bGVcIj4ke2ZpbHRlckNhdGVnb3J5TmFtZX08L2gzPlxuICAgICAgPHVsIGNsYXNzPVwic2lkZWJhcl9fZmlsdGVyLWxpc3RcIiBpZD1cImNhdGVnb3JpZXNMaXN0JHtmaWx0ZXJDYXRlZ29yeU5hbWV9XCI+XG4gICAgICAgIDxsaSBjbGFzcz1cInNpZGViYXJfX2ZpbHRlci1pdGVtIHNpZGViYXJfX2ZpcnN0LWxpc3QtaXRlbVwiIGRhdGEtZmlsdGVyPVwiJHtmaWx0ZXJDYXRlZ29yeU5hbWV9X2FsbFwiPkFsbDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgYFxuICAgICk7XG5cbiAgICBjb25zdCBsaXN0RmlsdGVyID0gdGhpcy5zaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoYCNjYXRlZ29yaWVzTGlzdCR7ZmlsdGVyQ2F0ZWdvcnlOYW1lfWApO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoZmlsdGVyQ2F0ZWdvcnlFbnRyaWVzKS5mb3JFYWNoKChbdmFsdWUscXVhbnRpdHldKSA9PiB7XG4gICAgICBsaXN0RmlsdGVyPy5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICBgXG4gICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItaXRlbVwiIGRhdGEtZmlsdGVyPVwiJHtmaWx0ZXJDYXRlZ29yeU5hbWV9XyR7dmFsdWV9XCI+JHt2YWx1ZX0gXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX19lbGVtLWNvdW50ZXJcIj4ke3F1YW50aXR5fTwvZGl2PlxuICAgICAgPC9saT5gXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlclByaWNlUmFuZ2UgPSAoYXJyOiBJTWluTWF4T2JqKSA9PiB7XG4gICAgdGhpcy5zaWRlYmFyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgYFxuICAgICAgPGgzIGNsYXNzPVwic2lkZWJhcl9fdGl0bGVcIj5QcmljZTwvaDM+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzaWRlYmFyX19wcmljZS1yYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJwcmljZS1yYW5nZVwiIG1heD1cIiR7YXJyLm1heH1cIiBtaW49XCIke2Fyci5taW59XCIgdmFsdWU9XCIke2Fyci5tYXh9XCIvPlxuICAgICAgPGRhdGEgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItbWF4LXByaWNlXCI+TWF4IHByaWNlOiAkJHthcnIubWF4fTwvZGF0YT5cbiAgICAgIGBcbiAgICApO1xuICAgIGNvbnN0IHByaWNlUmFuZ2VJTnB1dDpIVE1MSW5wdXRFbGVtZW50fG51bGwgPSB0aGlzLnNpZGViYXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3ByaWNlLXJhbmdlJylcbiAgICBjb25zdCBwcmljZVJhbmdlRGF0YSA9IHRoaXMuc2lkZWJhci5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fZmlsdGVyLW1heC1wcmljZScpIVxuICAgIFxuICAgIHByaWNlUmFuZ2VJTnB1dD8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKCk9PntcbiAgICAgIHByaWNlUmFuZ2VEYXRhLnRleHRDb250ZW50ID0gYE1heCBwcmljZTogJCR7cHJpY2VSYW5nZUlOcHV0LnZhbHVlfSBgXG4gICAgfSlcblxuICAgIFxuICB9O1xuXG4gIHJlbmRlclNpZGVCYXIgPSAoZGF0YTogU2hvcERhdGEpID0+IHtcbiAgICB0aGlzLl9yZW5kZXJTZWFyY2goKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGRhdGEuZmlsdGVycykuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICBjb25zdCBbZmlsdGVyVHlwZSwgZmlsdGVyVmFsdWVdID0gZmlsdGVyO1xuICAgICAgdGhpcy5fcmVuZGVyRmlsdGVyQ2F0ZWdvcnkoZmlsdGVyVHlwZSwgZmlsdGVyVmFsdWUpO1xuICAgIH0pO1xuICAgIFxuICAgIHRoaXMuX3JlbmRlclByaWNlUmFuZ2UoZGF0YS5wcmljZVJhbmdlKTtcblxuICB9O1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL2luZGV4Lmh0bWwnO1xuaW1wb3J0ICcuLi9wcm9kdWN0cy5odG1sJztcbmltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zYXNzJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudC9hcHAnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCBkb2N1bWVudC50aXRsZSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==