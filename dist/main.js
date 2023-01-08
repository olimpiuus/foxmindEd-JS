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
            this.initialize = () => {
                document.addEventListener('click', (e) => {
                    const target = e.target;
                    if (!(target instanceof HTMLElement)) {
                        return;
                    }
                    if (target.closest('.sidebar__filter-item')) {
                        new FilterClickHandler(target);
                        data.filterList();
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
    set activeFilters(value) {
        this._activeFilters = value;
    }
    addActiveFilter(value) {
        this._activeFilters.push(value);
    }
    removeElementFromActiveFilter(elem) {
        const arr = this._activeFilters;
        arr.splice(arr.findIndex(filter => filter === elem), 1);
        this._activeFilters = arr;
    }
    constructor(list) {
        this.list = list;
        this._activeFilters = [];
        this._getBrands = () => { var _a; return (0, countQuantitiesUniqEntries_1.countQuantitiesUniqEntries)((_a = this.list) === null || _a === void 0 ? void 0 : _a.map(product => product.brand)); };
        this._getCategories = () => { var _a; return (0, countQuantitiesUniqEntries_1.countQuantitiesUniqEntries)((_a = this.list) === null || _a === void 0 ? void 0 : _a.map((product) => product.category)); };
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
        this.filterList = () => {
            this.filteredList = [];
            this.activeFilters.forEach(filter => {
                var _a;
                const filterStr = filter.split('_');
                const [filterType, filterValue] = filterStr;
                if ((filterType === 'brand' || filterType === 'category')) {
                    const filtered = (_a = this.list) === null || _a === void 0 ? void 0 : _a.filter(elem => elem[filterType] === filterValue);
                    if (filtered) {
                        this.filteredList = this.filteredList.concat(filtered);
                    }
                }
            });
            console.log(this.filteredList);
        };
        this.filters = {
            category: {},
            brand: {},
        };
        this.filteredList = this.list;
        if (list) {
            this.filters.brand = this._getBrands();
            this.filters.category = this._getCategories();
            this.priceRange = this._getPriceRange();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQztRQS9FQSxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBRSxDQUFDO0lBQ3JELENBQUM7Q0ErRUY7QUF0RkQsd0JBc0ZDOzs7Ozs7O1VDekZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsNkRBQXVCO0FBQ3ZCLG1FQUEwQjtBQUMxQix1RUFBNEI7QUFFNUIsd0VBQXlCO0FBRXpCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ2xELFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL2pzLy4vc3JjL3Byb2R1Y3RzLmh0bWwiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvc2Fzcy9zdHlsZS5zYXNzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9hcHAudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L2NvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9nZXRTaG9wRGF0YS50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvcmVuZGVyLnRzIiwid2VicGFjazovL2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8dGl0bGU+U2hvcDwvdGl0bGU+XFxuICA8L2hlYWQ+XFxuXFxuICA8Ym9keT5cXG4gICAgPGhlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8bmF2IGNsYXNzPVxcXCJoZWFkZXJfbmF2XFxcIj5cXG4gICAgICAgICAgPHVsIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rcy1saXN0XFxcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5Ib21lPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9wcm9kdWN0cy5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+UHJvZHVjdHM8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5BYm91dDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGVyX19sb2dvXFxcIj5jb21meTwvc3Bhbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaGVhZGVyX19idG4tY2FydCBidG4tY2FydFxcXCI+XFxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwiYnRuLWNhcnRfX2ltZ1xcXCIgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgIGQ9XFxcIk0xNywxOEMxNS44OSwxOCAxNSwxOC44OSAxNSwyMEEyLDIgMCAwLDAgMTcsMjJBMiwyIDAgMCwwIDE5LDIwQzE5LDE4Ljg5IDE4LjEsMTggMTcsMThNMSwyVjRIM0w2LjYsMTEuNTlMNS4yNCwxNC4wNEM1LjA5LDE0LjMyIDUsMTQuNjUgNSwxNUEyLDIgMCAwLDAgNywxN0gxOVYxNUg3LjQyQTAuMjUsMC4yNSAwIDAsMSA3LjE3LDE0Ljc1QzcuMTcsMTQuNyA3LjE4LDE0LjY2IDcuMiwxNC42M0w4LjEsMTNIMTUuNTVDMTYuMywxMyAxNi45NiwxMi41OCAxNy4zLDExLjk3TDIwLjg4LDUuNUMyMC45NSw1LjM0IDIxLDUuMTcgMjEsNUExLDEgMCAwLDAgMjAsNEg1LjIxTDQuMjcsMk03LDE4QzUuODksMTggNSwxOC44OSA1LDIwQTIsMiAwIDAsMCA3LDIyQTIsMiAwIDAsMCA5LDIwQzksMTguODkgOC4xLDE4IDcsMThaXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tY2FydF9fcXVhbnRpdHlcXFwiPjI8L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L25hdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuICAgIDxtYWluIGNsYXNzPVxcXCJoZXJvXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZXJvX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJoZXJvX190aXRsZVxcXCI+UmVzdCwgUmVsYXgsIFVud2luZDwvaDE+XFxuICAgICAgICA8cCBjbGFzcz1cXFwiaGVyb19fdGV4dFxcXCI+RW1icmFjZSB5b3VyIGNob2ljZXMgLSB3ZSBkbzwvcD5cXG4gICAgICAgIDxhIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCIgY2xhc3M9XFxcImhlcm9fX2J0bi1saW5rXFxcIj5zaG93IG5vdzwvYT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlcm9fX2xpY2Vuc2VcXFwiPlxcbiAgICAgICAgICBQaG90byBieVxcbiAgICAgICAgICA8YVxcbiAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vdW5zcGxhc2guY29tL0Bhbm5pZXNwcmF0dD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcXFwiXFxuICAgICAgICAgICAgPkFubmllIFNwcmF0dDwvYVxcbiAgICAgICAgICA+XFxuICAgICAgICAgIG9uXFxuICAgICAgICAgIDxhXFxuICAgICAgICAgICAgaHJlZj1cXFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzUyQUFpWFdvVmkwP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFxcXCJcXG4gICAgICAgICAgICA+VW5zcGxhc2g8L2FcXG4gICAgICAgICAgPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvbWFpbj5cXG4gICAgPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlcl9fdGl0bGVcXFwiPkZlYXR1cmVkPC9oMj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1saXN0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJmb290ZXJfX2ZlYXR1cmVkLWl0ZW0gc2hvcHBpbmctaXRlbVxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3d3dy5pa2VhLmNvbS9jYS9lbi9pbWFnZXMvcHJvZHVjdHMvbGlkYXMtY2hhaXItd2hpdGUtc2VmYXN0LWNocm9tZS1wbGF0ZWRfXzExMDYzNDdfcGU4Njg2ODhfczUuanBnP2Y9eGxcXFwiXFxuICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWdcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1pdGVtIHNob3BwaW5nLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly93d3cuaWtlYS5jb20vY2EvZW4vaW1hZ2VzL3Byb2R1Y3RzL2xpZGFzLWNoYWlyLXdoaXRlLXNlZmFzdC1jaHJvbWUtcGxhdGVkX18xMTA2MzQ3X3BlODY4Njg4X3M1LmpwZz9mPXhsXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lXFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZVxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImZvb3Rlcl9fZmVhdHVyZWQtaXRlbSBzaG9wcGluZy1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vd3d3LmlrZWEuY29tL2NhL2VuL2ltYWdlcy9wcm9kdWN0cy9saWRhcy1jaGFpci13aGl0ZS1zZWZhc3QtY2hyb21lLXBsYXRlZF9fMTEwNjM0N19wZTg2ODY4OF9zNS5qcGc/Zj14bFxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZ1xcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZVxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZm9vdGVyPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X193cmFwcGVyIGhpZGRlblxcXCI+XFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fYnRuX2V4aXRcXFwiPlxcbiAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICBkPVxcXCJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3RpdGxlXFxcIj5Zb3VyIEJhZzwvaDM+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2xpc3RcXFwiPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2l0ZW0gc2hvcHBpbmctaXRlbV9jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWctYmFja2dyb3VuZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW5mby1jYXJ0XFxcIj5cXG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZV9jYXJ0XFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlX2NhcnRcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZW1vdmVcXFwiPnJlbW92ZTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5XFxcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9hZGQtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHktZGlzcGxheVxcXCI+NTwvZGl2PlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlZHVzZS1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2l0ZW0gc2hvcHBpbmctaXRlbV9jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWctYmFja2dyb3VuZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW5mby1jYXJ0XFxcIj5cXG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZV9jYXJ0XFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlX2NhcnRcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZW1vdmVcXFwiPnJlbW92ZTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5XFxcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9hZGQtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHktZGlzcGxheVxcXCI+NTwvZGl2PlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlZHVzZS1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190b3RhbFxcXCI+XFxuICAgICAgICAgIFRvdGFsIDpcXG4gICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3RvdGFsX2Ftb3VudFxcXCI+JDExNC45NDwvZGF0YT5cXG4gICAgICAgIDwvcD5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2J0bl9jaGVja291dFxcXCI+Y2hlY2tvdXQ8L2J1dHRvbj5cXG4gICAgICA8L3NlY3Rpb24+XFxuICAgIDwvZGl2PlxcbiAgICA8c3BhbiBjbGFzcz1cXFwibWRpIG1kaS1jb250ZW50LXNhdmUtbWludXMtb3V0bGluZVxcXCI+PC9zcGFuPlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8dGl0bGU+UHJvZHVjdHM8L3RpdGxlPlxcbiAgPC9oZWFkPlxcbiAgPGJvZHk+XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPG5hdiBjbGFzcz1cXFwiaGVhZGVyX25hdlxcXCI+XFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua3MtbGlzdFxcXCI+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9pbmRleC5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+SG9tZTwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPlByb2R1Y3RzPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+QWJvdXQ8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRlcl9fbG9nb1xcXCI+Y29tZnk8L3NwYW4+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcl9fYnRuLWNhcnQgYnRuLWNhcnRcXFwiPlxcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcImJ0bi1jYXJ0X19pbWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICBkPVxcXCJNMTcsMThDMTUuODksMTggMTUsMTguODkgMTUsMjBBMiwyIDAgMCwwIDE3LDIyQTIsMiAwIDAsMCAxOSwyMEMxOSwxOC44OSAxOC4xLDE4IDE3LDE4TTEsMlY0SDNMNi42LDExLjU5TDUuMjQsMTQuMDRDNS4wOSwxNC4zMiA1LDE0LjY1IDUsMTVBMiwyIDAgMCwwIDcsMTdIMTlWMTVINy40MkEwLjI1LDAuMjUgMCAwLDEgNy4xNywxNC43NUM3LjE3LDE0LjcgNy4xOCwxNC42NiA3LjIsMTQuNjNMOC4xLDEzSDE1LjU1QzE2LjMsMTMgMTYuOTYsMTIuNTggMTcuMywxMS45N0wyMC44OCw1LjVDMjAuOTUsNS4zNCAyMSw1LjE3IDIxLDVBMSwxIDAgMCwwIDIwLDRINS4yMUw0LjI3LDJNNywxOEM1Ljg5LDE4IDUsMTguODkgNSwyMEEyLDIgMCAwLDAgNywyMkEyLDIgMCAwLDAgOSwyMEM5LDE4Ljg5IDguMSwxOCA3LDE4WlxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWNhcnRfX3F1YW50aXR5XFxcIj4yPC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9uYXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvbl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJzaXRlLWxvY2F0aW9uX19saW5rXFxcIiBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiPkhvbWUgPC9hPiAvXFxuICAgICAgICA8YSBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvbl9fbGlua1xcXCIgaHJlZj1cXFwiLi9wcm9kdWN0cy5odG1sXFxcIj5Qcm9kdWN0czwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgICA8bWFpbiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxhc2lkZSBjbGFzcz1cXFwic2lkZWJhclxcXCI+XFxuICAgICAgICAgIDwhLS0gPGlucHV0IGNsYXNzPVxcXCJzaWRlYmFyX19wcmljZS1yYW5nZVxcXCIgdHlwZT1cXFwicmFuZ2VcXFwiIG5hbWU9XFxcInByaWNlLXJhbmdlXFxcIiAvPiAtLT5cXG4gICAgICAgIDwvYXNpZGU+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInByb2R1Y3RzXFxcIj48L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L21haW4+XFxuICA8L2JvZHk+XFxuPC9odG1sPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcbmltcG9ydCB7IGdldERhdGFBcnIsIFNob3BEYXRhIH0gZnJvbSAnLi9nZXRTaG9wRGF0YSc7XG5pbXBvcnQgeyBSZW5kZXIgfSBmcm9tICcuL3JlbmRlcic7XG5cblxuXG5cbihhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBuZXcgU2hvcERhdGEoYXdhaXQgZ2V0RGF0YUFycigpKTtcblxuICBjbGFzcyBGaWx0ZXJDbGlja0hhbmRsZXIge1xuXG4gICAgY29uc3RydWN0b3IgKHB1YmxpYyB0YXJnZXQ6SFRNTEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemUoKVxuICAgIH1cblxuICAgIHByaXZhdGUgX2FjdGl2YXRlRmlsdGVyID0gKGVsZW1lbnQ6SFRNTEVsZW1lbnQpPT57XG4gICAgICBjb25zdCBmaWx0ZXIgPSBlbGVtZW50LmRhdGFzZXQuZmlsdGVyIVxuICAgICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICBkYXRhLmFkZEFjdGl2ZUZpbHRlcihmaWx0ZXIpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuYWN0aXZlRmlsdGVycyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVhY3RpdmF0ZUZpbHRlciA9IChlbGVtZW50OkhUTUxFbGVtZW50KT0+e1xuICAgICAgY29uc3QgZmlsdGVyID0gZWxlbWVudC5kYXRhc2V0LmZpbHRlciFcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIGRhdGEucmVtb3ZlRWxlbWVudEZyb21BY3RpdmVGaWx0ZXIoZmlsdGVyKVxuICAgICAgY29uc29sZS5sb2coZGF0YS5hY3RpdmVGaWx0ZXJzKTtcblxuICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBmcm9tIFwiQWxsXCIgZmlsdGVyIGVsZW1lbnRcbiAgICAgIGNvbnN0IGFsbEJ0bkZpbHRlckxpc3QgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxFbGVtZW50XG4gICAgICBjb25zdCBidG5GaWx0ZXIgPSBhbGxCdG5GaWx0ZXJMaXN0LmRhdGFzZXQuZmlsdGVyIVxuXG4gICAgICBpZiAoYWxsQnRuRmlsdGVyTGlzdD8uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBhbGxCdG5GaWx0ZXJMaXN0Py5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICBkYXRhLnJlbW92ZUVsZW1lbnRGcm9tQWN0aXZlRmlsdGVyKGJ0bkZpbHRlcilcbiAgICAgIH0gXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfYWN0aXZhdGVGaWx0ZXJMaXN0ID0gKGFycmF5OkVsZW1lbnRbXSk9PntcbiAgICAgIGFycmF5LmZvckVhY2goKGxpc3RJdGVtKT0+e1xuICAgICAgICBpZiAobGlzdEl0ZW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX2FjdGl2YXRlRmlsdGVyKGxpc3RJdGVtKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBwcml2YXRlIF9kZWFjdGl2YXRlRmlsdGVyTGlzdCA9IChhcnJheTpFbGVtZW50W10pPT57XG4gICAgICBhcnJheS5mb3JFYWNoKChsaXN0SXRlbSk9PntcbiAgICAgICAgaWYgKGxpc3RJdGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9kZWFjdGl2YXRlRmlsdGVyKGxpc3RJdGVtKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUNsaWNrT25GaWx0ZXJFbGVtZW50ID0gKGVsZW1lbnQ6SFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIFxuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuXG4gICAgICAgIHRoaXMuX2RlYWN0aXZhdGVGaWx0ZXIoZWxlbWVudClcbiAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZUZpbHRlcihlbGVtZW50KVxuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2luaXRpYWxpemUgPSAoKT0+e1xuICAgICAgICBjb25zdCBmaWx0ZXIgPSB0aGlzLnRhcmdldC5kYXRhc2V0LmZpbHRlciFcblxuICAgICAgICBpZiAoZmlsdGVyPT09J2NhdGVnb3J5X2FsbCd8fGZpbHRlcj09PSdicmFuZF9hbGwnKSB7XG5cbiAgICAgICAgICBjb25zdCBhcnJheUZpbHRlcnMgPSBBcnJheS5mcm9tKHRoaXMudGFyZ2V0LnBhcmVudEVsZW1lbnQhLmNoaWxkcmVuKVxuXG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlYWN0aXZhdGVGaWx0ZXJMaXN0KGFycmF5RmlsdGVycylcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZhdGVGaWx0ZXJMaXN0KGFycmF5RmlsdGVycylcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVDbGlja09uRmlsdGVyRWxlbWVudCh0aGlzLnRhcmdldClcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgfVxuXG4gIH1cblxuICBjbGFzcyBDbGlja0hhbmRsZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKVxuICAgIH1cbiAgICBcbiAgICBpbml0aWFsaXplID0gKCk9PntcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge3JldHVybn1cbiAgICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCcuc2lkZWJhcl9fZmlsdGVyLWl0ZW0nKSkge1xuICAgICAgICAgIG5ldyBGaWx0ZXJDbGlja0hhbmRsZXIodGFyZ2V0KVxuICAgICAgICAgIGRhdGEuZmlsdGVyTGlzdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICBcbiAgfVxuXG4gIG5ldyBSZW5kZXIoKS5yZW5kZXJIdG1sUHJvZHVjdHNMaXN0KGRhdGEubGlzdCEpO1xuICBuZXcgUmVuZGVyKCkucmVuZGVyU2lkZUJhcihkYXRhKTtcbiAgbmV3IENsaWNrSGFuZGxlcigpXG5cblxufSkoKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUNvbGxlY3Rpb25XaXRoQ291bnQge1xuICBbaW5kZXg6IHN0cmluZ106IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY29uc3QgY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXMgPSAoYXJyOnN0cmluZ1tdKTpJQ29sbGVjdGlvbldpdGhDb3VudD0+e1xuICBcbiAgY29uc3QgY29sbGVjdGlvbldpdGhDb3VudDpJQ29sbGVjdGlvbldpdGhDb3VudCA9IHtcbiAgfTtcblxuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyKSB7XG4gICAgaWYgKGNvbGxlY3Rpb25XaXRoQ291bnRbZWxlbWVudF0pIHtcbiAgICAgIGNvbGxlY3Rpb25XaXRoQ291bnRbZWxlbWVudF0gKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sbGVjdGlvbldpdGhDb3VudFtlbGVtZW50XSA9IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbGxlY3Rpb25XaXRoQ291bnRcbn0iLCJpbXBvcnQgeyBJQ29sbGVjdGlvbldpdGhDb3VudCxjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyB9IGZyb20gXCIuL2NvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb2R1Y3Qge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBkaXNjb3VudFBlcmNlbnRhZ2U6IG51bWJlcjtcbiAgcmF0aW5nOiBudW1iZXI7XG4gIHN0b2NrOiBudW1iZXI7XG4gIGJyYW5kOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHRodW1ibmFpbDogVVJMO1xuICBpbWFnZXM6IFVSTFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNaW5NYXhPYmoge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJQW5zd2VyU2VydmVyIHtcbiAgcHJvZHVjdHM6IElQcm9kdWN0W107XG59XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhQXJyID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFuc3dlciA9IGF3YWl0IGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHM/bGltaXQ9MTAwJyk7XG4gICAgY29uc3QgZGF0YTogSUFuc3dlclNlcnZlciA9IGF3YWl0IGFuc3dlci5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGEucHJvZHVjdHM7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59O1xuXG5leHBvcnQgY2xhc3MgU2hvcERhdGEge1xuXG4gIGZpbHRlcnM6IHtcbiAgICBjYXRlZ29yeTogSUNvbGxlY3Rpb25XaXRoQ291bnQ7XG4gICAgYnJhbmQ6IElDb2xsZWN0aW9uV2l0aENvdW50O1xuICAgIFxuICB9O1xuICBwcmljZVJhbmdlITogSU1pbk1heE9iajtcblxuICBmaWx0ZXJlZExpc3Q6IElQcm9kdWN0W118dW5kZWZpbmVkXG5cbiAgcHJpdmF0ZSBfYWN0aXZlRmlsdGVyczogc3RyaW5nW10gPSBbXTtcblxuICBwdWJsaWMgZ2V0IGFjdGl2ZUZpbHRlcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmVGaWx0ZXJzO1xuICB9XG5cbiAgcHVibGljIHNldCBhY3RpdmVGaWx0ZXJzKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX2FjdGl2ZUZpbHRlcnMgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRBY3RpdmVGaWx0ZXIodmFsdWU6c3RyaW5nKSB7XG4gICAgdGhpcy5fYWN0aXZlRmlsdGVycy5wdXNoKHZhbHVlKVxuICB9XG4gIHB1YmxpYyByZW1vdmVFbGVtZW50RnJvbUFjdGl2ZUZpbHRlcihlbGVtOnN0cmluZykge1xuICAgIGNvbnN0IGFyciA9IHRoaXMuX2FjdGl2ZUZpbHRlcnNcbiAgICBhcnIuc3BsaWNlKGFyci5maW5kSW5kZXgoZmlsdGVyPT5maWx0ZXI9PT1lbGVtKSwxKVxuICAgIHRoaXMuX2FjdGl2ZUZpbHRlcnMgPSBhcnJcbiAgICBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsaXN0OiBJUHJvZHVjdFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5maWx0ZXJzID0ge1xuICAgICAgY2F0ZWdvcnk6IHt9LFxuICAgICAgYnJhbmQ6IHt9LFxuICAgIH07XG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLmxpc3QhXG5cbiAgICBpZiAobGlzdCkge1xuICAgICAgdGhpcy5maWx0ZXJzLmJyYW5kID0gdGhpcy5fZ2V0QnJhbmRzKCk7XG4gICAgICB0aGlzLmZpbHRlcnMuY2F0ZWdvcnkgPSB0aGlzLl9nZXRDYXRlZ29yaWVzKCk7XG4gICAgICB0aGlzLnByaWNlUmFuZ2UgPSB0aGlzLl9nZXRQcmljZVJhbmdlKCkhO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEJyYW5kcyA9ICgpID0+IGNvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzKHRoaXMubGlzdD8ubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5icmFuZCkhKTtcblxuICBwcml2YXRlIF9nZXRDYXRlZ29yaWVzID0gKCkgPT4gY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXModGhpcy5saXN0Py5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuY2F0ZWdvcnkpISk7XG5cbiAgcHJpdmF0ZSBfZ2V0UHJpY2VSYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCBwcmljZXMgPSB0aGlzLmxpc3Q/Lm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5wcmljZSk7XG4gICAgaWYgKHByaWNlcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWluOiBNYXRoLm1pbiguLi5wcmljZXMpLFxuICAgICAgICBtYXg6IE1hdGgubWF4KC4uLnByaWNlcylcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHB1YmxpYyBmaWx0ZXJMaXN0ID0gKCk9PiB7XG5cbiAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdXG4gICAgdGhpcy5hY3RpdmVGaWx0ZXJzLmZvckVhY2goZmlsdGVyPT57XG4gICAgICBjb25zdCBmaWx0ZXJTdHIgPSBmaWx0ZXIuc3BsaXQoJ18nKVxuICAgICAgY29uc3QgW2ZpbHRlclR5cGUsIGZpbHRlclZhbHVlXSA9IGZpbHRlclN0ciFcblxuICAgICAgaWYgKChmaWx0ZXJUeXBlPT09J2JyYW5kJyB8fCBmaWx0ZXJUeXBlPT09J2NhdGVnb3J5JykpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWQgPSB0aGlzLmxpc3Q/LmZpbHRlcihlbGVtPT5lbGVtW2ZpbHRlclR5cGVdPT09ZmlsdGVyVmFsdWUpXG4gICAgICAgIGlmIChmaWx0ZXJlZCkge1xuICAgICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5maWx0ZXJlZExpc3QhLmNvbmNhdChmaWx0ZXJlZClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2codGhpcy5maWx0ZXJlZExpc3QpO1xuICAgIFxuICB9IFxufVxuXG5cbiIsImltcG9ydCB7IElDb2xsZWN0aW9uV2l0aENvdW50IH0gZnJvbSBcIi4vY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXNcIjtcbmltcG9ydCB7IElQcm9kdWN0LCBJTWluTWF4T2JqLCBTaG9wRGF0YSB9IGZyb20gXCIuL2dldFNob3BEYXRhXCI7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXIge1xuICBsaXN0OiBIVE1MVUxpc3RFbGVtZW50O1xuICBzaWRlYmFyOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKSE7XG4gICAgdGhpcy5zaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKSE7XG4gIH1cblxuICByZW5kZXJIdG1sUHJvZHVjdHNMaXN0ID0gKHByb2R1Y3RBcnJheTogSVByb2R1Y3RbXSkgPT4ge1xuICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBwcm9kdWN0QXJyYXkuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgY29uc3QgeyB0aXRsZSwgcHJpY2UsIGltYWdlcywgaWQgfSA9IGVsZW07XG4gICAgICB0aGlzLmxpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgYFxuICAgICAgPGxpIGNsYXNzPVwicHJvZHVjdHNfX2l0ZW0gc2hvcHBpbmctaXRlbVwiIGRhdGEtaWQ9XCIke2lkfVwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzWzBdfVwiIGFsdD1cIlwiIGNsYXNzPVwic2hvcHBpbmctaXRlbV9faW1nXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX25hbWVcIj4ke3RpdGxlfTwvaDM+XG4gICAgICAgIDxkYXRhIGNsYXNzPVwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVcIiB2YWx1ZT1cIiR7cHJpY2V9XCI+JCR7cHJpY2V9PC9kYXRhPlxuICAgICAgPC9saT5cbiAgICBgXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlclNlYXJjaCA9ICgpID0+IHtcbiAgICB0aGlzLnNpZGViYXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgJ2FmdGVyYmVnaW4nLFxuICAgICAgYFxuICAgIDxpbnB1dCBjbGFzcz1cInNpZGViYXJfX3NlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cbiAgICBgXG4gICAgKTtcbiAgfTtcblxuICBwcml2YXRlIF9yZW5kZXJGaWx0ZXJDYXRlZ29yeSA9IChmaWx0ZXJDYXRlZ29yeU5hbWU6IHN0cmluZywgZmlsdGVyQ2F0ZWdvcnlFbnRyaWVzOiBJQ29sbGVjdGlvbldpdGhDb3VudCkgPT4ge1xuICAgIHRoaXMuc2lkZWJhci5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYmVmb3JlZW5kJyxcbiAgICAgIGBcbiAgICAgIDxoMyBjbGFzcz1cInNpZGViYXJfX3RpdGxlXCI+JHtmaWx0ZXJDYXRlZ29yeU5hbWV9PC9oMz5cbiAgICAgIDx1bCBjbGFzcz1cInNpZGViYXJfX2ZpbHRlci1saXN0XCIgaWQ9XCJjYXRlZ29yaWVzTGlzdCR7ZmlsdGVyQ2F0ZWdvcnlOYW1lfVwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItaXRlbSBzaWRlYmFyX19maXJzdC1saXN0LWl0ZW1cIiBkYXRhLWZpbHRlcj1cIiR7ZmlsdGVyQ2F0ZWdvcnlOYW1lfV9hbGxcIj5BbGw8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIGBcbiAgICApO1xuXG4gICAgY29uc3QgbGlzdEZpbHRlciA9IHRoaXMuc2lkZWJhci5xdWVyeVNlbGVjdG9yKGAjY2F0ZWdvcmllc0xpc3Qke2ZpbHRlckNhdGVnb3J5TmFtZX1gKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGZpbHRlckNhdGVnb3J5RW50cmllcykuZm9yRWFjaCgoW3ZhbHVlLHF1YW50aXR5XSkgPT4ge1xuICAgICAgbGlzdEZpbHRlcj8uaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAnYmVmb3JlZW5kJyxcbiAgICAgICAgYFxuICAgICAgPGxpIGNsYXNzPVwic2lkZWJhcl9fZmlsdGVyLWl0ZW1cIiBkYXRhLWZpbHRlcj1cIiR7ZmlsdGVyQ2F0ZWdvcnlOYW1lfV8ke3ZhbHVlfVwiPiR7dmFsdWV9IFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZWJhcl9fZWxlbS1jb3VudGVyXCI+JHtxdWFudGl0eX08L2Rpdj5cbiAgICAgIDwvbGk+YFxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIF9yZW5kZXJQcmljZVJhbmdlID0gKGFycjogSU1pbk1heE9iaikgPT4ge1xuICAgIHRoaXMuc2lkZWJhci5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAnYmVmb3JlZW5kJyxcbiAgICAgIGBcbiAgICAgIDxoMyBjbGFzcz1cInNpZGViYXJfX3RpdGxlXCI+UHJpY2U8L2gzPlxuICAgICAgPGlucHV0IGNsYXNzPVwic2lkZWJhcl9fcHJpY2UtcmFuZ2VcIiB0eXBlPVwicmFuZ2VcIiBuYW1lPVwicHJpY2UtcmFuZ2VcIiBtYXg9XCIke2Fyci5tYXh9XCIgbWluPVwiJHthcnIubWlufVwiIHZhbHVlPVwiJHthcnIubWF4fVwiLz5cbiAgICAgIDxkYXRhIGNsYXNzPVwic2lkZWJhcl9fZmlsdGVyLW1heC1wcmljZVwiPk1heCBwcmljZTogJCR7YXJyLm1heH08L2RhdGE+XG4gICAgICBgXG4gICAgKTtcbiAgICBjb25zdCBwcmljZVJhbmdlSU5wdXQ6SFRNTElucHV0RWxlbWVudHxudWxsID0gdGhpcy5zaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcmljZS1yYW5nZScpXG4gICAgY29uc3QgcHJpY2VSYW5nZURhdGEgPSB0aGlzLnNpZGViYXIucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX2ZpbHRlci1tYXgtcHJpY2UnKSFcbiAgICBwcmljZVJhbmdlSU5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICgpPT57XG4gICAgICBwcmljZVJhbmdlRGF0YS50ZXh0Q29udGVudCA9IGBNYXggcHJpY2U6ICQke3ByaWNlUmFuZ2VJTnB1dC52YWx1ZX0gYFxuICAgIH0pXG4gIH07XG5cbiAgcmVuZGVyU2lkZUJhciA9IChkYXRhOiBTaG9wRGF0YSkgPT4ge1xuICAgIHRoaXMuX3JlbmRlclNlYXJjaCgpO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoZGF0YS5maWx0ZXJzKS5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgIGNvbnN0IFtmaWx0ZXJUeXBlLCBmaWx0ZXJWYWx1ZV0gPSBmaWx0ZXI7XG4gICAgICB0aGlzLl9yZW5kZXJGaWx0ZXJDYXRlZ29yeShmaWx0ZXJUeXBlLCBmaWx0ZXJWYWx1ZSk7XG4gICAgfSk7XG4gICAgXG4gICAgdGhpcy5fcmVuZGVyUHJpY2VSYW5nZShkYXRhLnByaWNlUmFuZ2UpO1xuICB9O1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL2luZGV4Lmh0bWwnO1xuaW1wb3J0ICcuLi9wcm9kdWN0cy5odG1sJztcbmltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zYXNzJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudC9hcHAnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCBkb2N1bWVudC50aXRsZSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==