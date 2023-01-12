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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Shop</title>\n  </head>\n\n  <body>\n    <header class=\"header\">\n      <div class=\"header__container\">\n        <nav class=\"header_nav\">\n          <ul class=\"header__nav-links-list\">\n            <li class=\"header__nav-link-item\">\n              <a href=\"./index.html\" class=\"header__nav-link\">Home</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"./products.html\" class=\"header__nav-link\">Products</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"./about.html\" class=\"header__nav-link\">About</a>\n            </li>\n          </ul>\n          <span class=\"header__logo\">comfy</span>\n          <button class=\"header__btn-cart btn-cart\">\n            <svg class=\"btn-cart__img\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n              <path\n                fill=\"currentColor\"\n                d=\"M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z\"\n              />\n            </svg>\n            <div class=\"btn-cart__quantity\">0</div>\n          </button>\n        </nav>\n      </div>\n    </header>\n    <main class=\"hero\">\n      <div class=\"hero__container\">\n        <h1 class=\"hero__title\">Rest, Relax, Unwind</h1>\n        <p class=\"hero__text\">Embrace your choices - we do</p>\n        <a href=\"./products.html\" class=\"hero__btn-link\">show now</a>\n        <div class=\"hero__license\">\n          Photo by\n          <a\n            href=\"https://unsplash.com/@anniespratt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\n            >Annie Spratt</a\n          >\n          on\n          <a\n            href=\"https://unsplash.com/photos/52AAiXWoVi0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\"\n            >Unsplash</a\n          >\n        </div>\n      </div>\n    </main>\n    <footer class=\"footer\">\n      <div class=\"footer__container\">\n        <h2 class=\"footer__title\">Featured</h2>\n        <ul class=\"footer__featured-list\">\n          <li class=\"footer__featured-item shopping-item\">\n            <img\n              src=\"https://www.ikea.com/ca/en/images/products/lidas-chair-white-sefast-chrome-plated__1106347_pe868688_s5.jpg?f=xl\"\n              alt=\"\"\n              class=\"shopping-item__img\"\n            />\n            <h3 class=\"shopping-item__name\">Hugh-Back Bench</h3>\n            <data class=\"shopping-item__price-value\" value=\"9.99\">$9.99</data>\n          </li>\n          <li class=\"footer__featured-item shopping-item\">\n            <img\n              src=\"https://www.ikea.com/ca/en/images/products/lidas-chair-white-sefast-chrome-plated__1106347_pe868688_s5.jpg?f=xl\"\n              alt=\"\"\n              class=\"shopping-item__img\"\n            />\n            <h3 class=\"shopping-item__name\">Hugh-Back Bench</h3>\n            <data class=\"shopping-item__price-value\" value=\"9.99\">$9.99</data>\n          </li>\n          <li class=\"footer__featured-item shopping-item\">\n            <img\n              src=\"https://www.ikea.com/ca/en/images/products/lidas-chair-white-sefast-chrome-plated__1106347_pe868688_s5.jpg?f=xl\"\n              alt=\"\"\n              class=\"shopping-item__img\"\n            />\n            <h3 class=\"shopping-item__name\">Hugh-Back Bench</h3>\n            <data class=\"shopping-item__price-value\" value=\"9.99\">$9.99</data>\n          </li>\n        </ul>\n      </div>\n    </footer>\n\n    <div class=\"shopping-cart__wrapper hidden\">\n      <section class=\"shopping-cart\">\n        <button class=\"shopping-cart__btn_exit\">\n          <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n            <path\n              fill=\"currentColor\"\n              d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\"\n            />\n          </svg>\n        </button>\n        <h3 class=\"shopping-cart__title\">Your Bag</h3>\n        <ul class=\"shopping-cart__list\">\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduse-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduse-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n        </ul>\n        <button class=\"shopping-cart__btn-remove-all\">x remove all</button>\n        <p class=\"shopping-cart__total\">\n          Total :\n          <data class=\"shopping-cart__total_amount\">$114.94</data>\n        </p>\n        <button class=\"shopping-cart__btn_checkout\">checkout</button>\n      </section>\n    </div>\n    <span class=\"mdi mdi-content-save-minus-outline\"></span>\n  </body>\n</html>\n";
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
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Products</title>\n  </head>\n  <body>\n    <header class=\"header\">\n      <div class=\"header__container\">\n        <nav class=\"header_nav\">\n          <ul class=\"header__nav-links-list\">\n            <li class=\"header__nav-link-item\">\n              <a href=\"./index.html\" class=\"header__nav-link\">Home</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"./products.html\" class=\"header__nav-link\">Products</a>\n            </li>\n            <li class=\"header__nav-link-item\">\n              <a href=\"./about.html\" class=\"header__nav-link\">About</a>\n            </li>\n          </ul>\n          <span class=\"header__logo\">comfy</span>\n          <button class=\"header__btn-cart btn-cart\">\n            <svg class=\"btn-cart__img\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n              <path\n                fill=\"currentColor\"\n                d=\"M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z\"\n              />\n            </svg>\n            <div class=\"btn-cart__quantity\">0</div>\n          </button>\n        </nav>\n      </div>\n    </header>\n\n    <section class=\"site-location\">\n      <div class=\"site-location__container\">\n        <a class=\"site-location__link\" href=\"./index.html\">Home </a> /\n        <a class=\"site-location__link\" href=\"./products.html\">Products</a>\n      </div>\n    </section>\n\n    <main class=\"main\">\n      <div class=\"main__container\">\n        <aside class=\"sidebar\">\n          <!-- <input class=\"sidebar__price-range\" type=\"range\" name=\"price-range\" /> -->\n        </aside>\n        <ul class=\"products\"></ul>\n      </div>\n    </main>\n    <div class=\"shopping-cart__wrapper hidden\">\n      <section class=\"shopping-cart\">\n        <button class=\"shopping-cart__btn_exit\">\n          <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n            <path\n              fill=\"currentColor\"\n              d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\"\n            />\n          </svg>\n        </button>\n        <h3 class=\"shopping-cart__title\">Your Bag</h3>\n        <ul class=\"shopping-cart__list\">\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduce-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n          <li class=\"shopping-cart__item shopping-item_cart\">\n            <div class=\"shopping-item__img-background\"></div>\n            <div class=\"shopping-item__info-cart\">\n              <h3 class=\"shopping-item__name_cart\">Hugh-Back Bench</h3>\n              <data class=\"shopping-item__price-value_cart\" value=\"9.99\">$9.99</data>\n              <button class=\"shopping-item__btn_remove\">remove</button>\n            </div>\n            <div class=\"shopping-item__quantity\">\n              <button class=\"shopping-item__btn_add-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z\"\n                  />\n                </svg>\n              </button>\n              <div class=\"shopping-item__quantity-display\">5</div>\n              <button class=\"shopping-item__btn_reduce-item\">\n                <svg style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\n                  <path\n                    fill=\"currentColor\"\n                    d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"\n                  />\n                </svg>\n              </button>\n            </div>\n          </li>\n        </ul>\n        <button class=\"shopping-cart__btn-remove-all\">x remove all</button>\n        <p class=\"shopping-cart__total\">\n          Total :\n          <data class=\"shopping-cart__total_amount\">$114.94</data>\n        </p>\n        <button class=\"shopping-cart__btn_checkout\">checkout</button>\n      </section>\n    </div>\n  </body>\n</html>\n";
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
const clickHandler_1 = __webpack_require__(/*! ./clickHandler */ "./src/ts/component/clickHandler.ts");
const getShopData_1 = __webpack_require__(/*! ./getShopData */ "./src/ts/component/getShopData.ts");
const render_1 = __webpack_require__(/*! ./render */ "./src/ts/component/render.ts");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const data = new getShopData_1.ShopData(yield (0, getShopData_1.getDataArr)());
    new render_1.Render().renderHtmlProductsList(data.list);
    new render_1.Render().renderSideBar(data);
    new clickHandler_1.ClickHandler(data);
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
            }
        };
        this._deactivateFilter = (element) => {
            var _a;
            const filter = element.dataset.filter;
            element.classList.remove('active');
            this.data.removeElementFromActiveFilter(filter);
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
                    shopping_cart_1.default.showShoppingCart();
                }
                if (target.closest('.sidebar__filter-item')) {
                    new FilterClickHandler(target, this.data);
                    this.updateDataAndRenderList();
                    new render_1.Render().reRenderCountersQuantities(this.data.filteredBrands, this.data.filteredCategories);
                }
                // ========Shopping cart ======================
                const getShoppingCartItemId = () => {
                    const item = target.closest('.shopping-cart__item');
                    return parseInt(item.dataset.id);
                };
                if (target.closest('.shopping-item__btn-cart__img')) {
                    const parentElement = target.closest('.products__item');
                    const id = parseInt(parentElement.dataset.id);
                    // if item not found in cart add return false, and add item
                    if (!shopping_cart_1.default.addToItemInCart(id)) {
                        const itemPropsForCart = this.data.getItemById(id);
                        shopping_cart_1.default.addItemToCart(itemPropsForCart);
                    }
                }
                if (target.closest('.shopping-item__btn_add-item')) {
                    const id = getShoppingCartItemId();
                    shopping_cart_1.default.addToItemInCart(id);
                }
                if (target.closest('.shopping-item__btn_reduce-item')) {
                    const id = getShoppingCartItemId();
                    shopping_cart_1.default.reduceItemFromCartByID(id);
                }
                if (target.closest('.shopping-item__btn_remove')) {
                    const id = getShoppingCartItemId();
                    shopping_cart_1.default.deleteItemById(id);
                }
                if (target.closest('.shopping-cart__btn-remove-all')) {
                    shopping_cart_1.default.removeAll();
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
            arr.splice(arr.findIndex((filter) => filter === value), 1);
            this.activeFilters[filterType] = arr;
        }
    }
    constructor(list) {
        this.list = list;
        this.filters = {
            category: {},
            brand: {}
        };
        this.filteredCategories = {};
        this.filteredBrands = {};
        this._activeFilters = {
            category: [],
            brand: [],
            maxPrice: 0
        };
        this._getQuantityBrands = () => (0, countQuantitiesUniqEntries_1.countQuantitiesUniqEntries)(this.list.map((product) => product.brand));
        this._getQuantityCategories = () => (0, countQuantitiesUniqEntries_1.countQuantitiesUniqEntries)(this.list.map((product) => product.category));
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
            const filtered = [...bufferArr].filter((elem) => elem.price <= this.activeFilters.maxPrice);
            arr.push(...filtered);
            return arr;
        };
        this._filterByBrands = (arr) => {
            if (this.activeFilters.brand.length !== 0) {
                const bufferArr = this._cloneArray(arr);
                arr.length = 0;
                this.activeFilters.brand.forEach((filterValue) => {
                    const filtered = [...bufferArr].filter((elem) => elem.brand === filterValue);
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
                this.activeFilters.category.forEach((filterValue) => {
                    const filtered = [...bufferArr].filter((elem) => elem.category === filterValue);
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
            this.filteredCategories = (0, countQuantitiesUniqEntries_1.countQuantitiesUniqEntries)(arr.map((product) => product.category));
        };
        this._getFilteredBrands = () => {
            let arr = this._cloneArray(this.list);
            arr = this._cloneArray(this._filterByCategories(arr));
            arr = this._cloneArray(this._filterByMaxPrice(arr));
            this.filteredBrands = (0, countQuantitiesUniqEntries_1.countQuantitiesUniqEntries)(arr.map((product) => product.brand));
        };
        this.filterList = () => {
            this.filteredList = [...this.list];
            this.filteredList = [...this._filterByBrands(this.filteredList)];
            this.filteredList = [...this._filterByCategories(this.filteredList)];
            this.filteredList = this._filterByMaxPrice(this.filteredList);
            this._getFilteredCategories();
            this._getFilteredBrands();
        };
        this.getItemById = (searchingId) => {
            const { id, title, price, images: [image] } = this.filteredList.find((item) => item.id === searchingId);
            return {
                id: id,
                title: title,
                price: price,
                image: image,
                quantity: 1
            };
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
            nodeListOfCounters.forEach((counter) => {
                const [filterType, filterValue] = counter.parentElement.dataset.filter.split('_');
                if (filterType === 'category') {
                    const filterTypeAndCount = Object.entries(categories).find((category) => category[0] === filterValue);
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
                    const filterTypeAndCount = Object.entries(brands).find((brand) => brand[0] === filterValue);
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
            this._getTotalSum();
            this._list.innerHTML = '';
            this.items.forEach((item) => {
                if (item.quantity > 0) {
                    this._list.insertAdjacentHTML('beforeend', this._itemHTMLTemplate(item));
                }
            });
            this._changeSum();
        };
        this._changeHeaderIcon = () => {
            const quantityOfItems = this.items.length;
            this._headerCartIcon.innerHTML = `${quantityOfItems}`;
        };
        this._itemHTMLTemplate = (item) => {
            const { title, price, image, quantity, id } = item;
            return `
    <li class="shopping-cart__item shopping-item_cart" data-id="${id}">
    <div class="shopping-item__img-background" style="background-image: url('${image}');"></div>
    <div class="shopping-item__info-cart">
      <h3 class="shopping-item__name_cart">${title}</h3>
      <data class="shopping-item__price-value_cart" value="${price}">$${price}</data>
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
      <div class="shopping-item__quantity-display">${quantity}</div>
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
    `;
        };
        this._changeSum = () => {
            this._getTotalSum();
            this._sumAmountHTML.innerHTML = `$${this._sum}`;
        };
        this._getTotalSum = () => {
            if (this.items.length !== 0) {
                this._sum = this.items.reduce((sum, elem) => sum + elem.price, 0);
            }
            else {
                this._sum = 0;
            }
        };
        this._hideShoppingCart = (e) => {
            const target = e.target;
            if (!this._cartBody.contains(target) || this._btnExit.contains(target)) {
                this.cartWrapper.classList.add('hidden');
                document.body.removeEventListener('click', this._hideShoppingCart);
            }
        };
        this.showShoppingCart = () => {
            this.cartWrapper.classList.remove('hidden');
            document.body.addEventListener('click', this._hideShoppingCart);
            this.reRenderCart();
        };
        this.addToItemInCart = (id) => {
            const indexOfItem = this.items.findIndex((elem) => elem.id === id);
            if (indexOfItem !== -1) {
                this.items[indexOfItem].quantity += 1;
                this.reRenderCart();
                return true;
            }
            else {
                return false;
            }
        };
        this._getItemById = (id) => this.items.find((elem) => elem.id === id);
        this.reduceItemFromCartByID = (id) => {
            const item = this._getItemById(id);
            if (item.quantity == 1) {
                this.deleteItemById(id);
            }
            else {
                item.quantity -= 1;
            }
            this.reRenderCart();
        };
        this.deleteItemById = (id) => {
            const index = this.items.findIndex((elem) => elem.id === id);
            if (confirm(`Remove from cart item: ${this.items[index].title}`)) {
                const arr = [...this.items];
                arr.splice(index, 1);
                this.items = arr;
                this.reRenderCart();
                this._changeHeaderIcon();
            }
        };
        this.addItemToCart = (item) => {
            this.items.push(item);
            this._changeHeaderIcon();
        };
        this.removeAll = () => {
            if (confirm('Clear cart?')) {
                this.items.length = 0;
                this.reRenderCart();
                this._changeHeaderIcon();
            }
        };
        this.cartWrapper = document.querySelector('.shopping-cart__wrapper');
        this._cartBody = this.cartWrapper.querySelector('.shopping-cart');
        this._btnExit = this._cartBody.querySelector('.shopping-cart__btn_exit');
        this._list = this.cartWrapper.querySelector('.shopping-cart__list');
        this._sumAmountHTML = this.cartWrapper.querySelector('.shopping-cart__total_amount');
        this._headerCartIcon = document.querySelector('.btn-cart__quantity');
        this.reRenderCart();
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
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.setAttribute('title', document.title);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUFxQixDQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Q0E0SEY7QUE5SUQsb0NBOElDO0FBRUQsTUFBTSxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUN4QyxxQkFBZSxZQUFZLENBQUM7Ozs7Ozs7VUN6SjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsNkRBQXVCO0FBQ3ZCLG1FQUEwQjtBQUMxQix1RUFBNEI7QUFFNUIsd0VBQXlCO0FBRXpCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDakQsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvcHJvZHVjdHMuaHRtbCIsIndlYnBhY2s6Ly9qcy8uL3NyYy9zYXNzL3N0eWxlLnNhc3M/MTgzMCIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvYXBwLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9jbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvY29tcG9uZW50L2NvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9nZXRTaG9wRGF0YS50cyIsIndlYnBhY2s6Ly9qcy8uL3NyYy90cy9jb21wb25lbnQvcmVuZGVyLnRzIiwid2VicGFjazovL2pzLy4vc3JjL3RzL2NvbXBvbmVudC9zaG9wcGluZy1jYXJ0LnRzIiwid2VicGFjazovL2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMvLi9zcmMvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8dGl0bGU+U2hvcDwvdGl0bGU+XFxuICA8L2hlYWQ+XFxuXFxuICA8Ym9keT5cXG4gICAgPGhlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8bmF2IGNsYXNzPVxcXCJoZWFkZXJfbmF2XFxcIj5cXG4gICAgICAgICAgPHVsIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rcy1saXN0XFxcIj5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5Ib21lPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9wcm9kdWN0cy5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+UHJvZHVjdHM8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmstaXRlbVxcXCI+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIuL2Fib3V0Lmh0bWxcXFwiIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rXFxcIj5BYm91dDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaGVhZGVyX19sb2dvXFxcIj5jb21meTwvc3Bhbj5cXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaGVhZGVyX19idG4tY2FydCBidG4tY2FydFxcXCI+XFxuICAgICAgICAgICAgPHN2ZyBjbGFzcz1cXFwiYnRuLWNhcnRfX2ltZ1xcXCIgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgIGQ9XFxcIk0xNywxOEMxNS44OSwxOCAxNSwxOC44OSAxNSwyMEEyLDIgMCAwLDAgMTcsMjJBMiwyIDAgMCwwIDE5LDIwQzE5LDE4Ljg5IDE4LjEsMTggMTcsMThNMSwyVjRIM0w2LjYsMTEuNTlMNS4yNCwxNC4wNEM1LjA5LDE0LjMyIDUsMTQuNjUgNSwxNUEyLDIgMCAwLDAgNywxN0gxOVYxNUg3LjQyQTAuMjUsMC4yNSAwIDAsMSA3LjE3LDE0Ljc1QzcuMTcsMTQuNyA3LjE4LDE0LjY2IDcuMiwxNC42M0w4LjEsMTNIMTUuNTVDMTYuMywxMyAxNi45NiwxMi41OCAxNy4zLDExLjk3TDIwLjg4LDUuNUMyMC45NSw1LjM0IDIxLDUuMTcgMjEsNUExLDEgMCAwLDAgMjAsNEg1LjIxTDQuMjcsMk03LDE4QzUuODksMTggNSwxOC44OSA1LDIwQTIsMiAwIDAsMCA3LDIyQTIsMiAwIDAsMCA5LDIwQzksMTguODkgOC4xLDE4IDcsMThaXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tY2FydF9fcXVhbnRpdHlcXFwiPjA8L2Rpdj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L25hdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuICAgIDxtYWluIGNsYXNzPVxcXCJoZXJvXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJoZXJvX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJoZXJvX190aXRsZVxcXCI+UmVzdCwgUmVsYXgsIFVud2luZDwvaDE+XFxuICAgICAgICA8cCBjbGFzcz1cXFwiaGVyb19fdGV4dFxcXCI+RW1icmFjZSB5b3VyIGNob2ljZXMgLSB3ZSBkbzwvcD5cXG4gICAgICAgIDxhIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCIgY2xhc3M9XFxcImhlcm9fX2J0bi1saW5rXFxcIj5zaG93IG5vdzwvYT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlcm9fX2xpY2Vuc2VcXFwiPlxcbiAgICAgICAgICBQaG90byBieVxcbiAgICAgICAgICA8YVxcbiAgICAgICAgICAgIGhyZWY9XFxcImh0dHBzOi8vdW5zcGxhc2guY29tL0Bhbm5pZXNwcmF0dD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcXFwiXFxuICAgICAgICAgICAgPkFubmllIFNwcmF0dDwvYVxcbiAgICAgICAgICA+XFxuICAgICAgICAgIG9uXFxuICAgICAgICAgIDxhXFxuICAgICAgICAgICAgaHJlZj1cXFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzUyQUFpWFdvVmkwP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFxcXCJcXG4gICAgICAgICAgICA+VW5zcGxhc2g8L2FcXG4gICAgICAgICAgPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvbWFpbj5cXG4gICAgPGZvb3RlciBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcImZvb3Rlcl9fdGl0bGVcXFwiPkZlYXR1cmVkPC9oMj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1saXN0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJmb290ZXJfX2ZlYXR1cmVkLWl0ZW0gc2hvcHBpbmctaXRlbVxcXCI+XFxuICAgICAgICAgICAgPGltZ1xcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3d3dy5pa2VhLmNvbS9jYS9lbi9pbWFnZXMvcHJvZHVjdHMvbGlkYXMtY2hhaXItd2hpdGUtc2VmYXN0LWNocm9tZS1wbGF0ZWRfXzExMDYzNDdfcGU4Njg2ODhfczUuanBnP2Y9eGxcXFwiXFxuICAgICAgICAgICAgICBhbHQ9XFxcIlxcXCJcXG4gICAgICAgICAgICAgIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWdcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX25hbWVcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXFxcIiB2YWx1ZT1cXFwiOS45OVxcXCI+JDkuOTk8L2RhdGE+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwiZm9vdGVyX19mZWF0dXJlZC1pdGVtIHNob3BwaW5nLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgIDxpbWdcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly93d3cuaWtlYS5jb20vY2EvZW4vaW1hZ2VzL3Byb2R1Y3RzL2xpZGFzLWNoYWlyLXdoaXRlLXNlZmFzdC1jaHJvbWUtcGxhdGVkX18xMTA2MzQ3X3BlODY4Njg4X3M1LmpwZz9mPXhsXFxcIlxcbiAgICAgICAgICAgICAgYWx0PVxcXCJcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW1nXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lXFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgIDxkYXRhIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19wcmljZS12YWx1ZVxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcImZvb3Rlcl9fZmVhdHVyZWQtaXRlbSBzaG9wcGluZy1pdGVtXFxcIj5cXG4gICAgICAgICAgICA8aW1nXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vd3d3LmlrZWEuY29tL2NhL2VuL2ltYWdlcy9wcm9kdWN0cy9saWRhcy1jaGFpci13aGl0ZS1zZWZhc3QtY2hyb21lLXBsYXRlZF9fMTEwNjM0N19wZTg2ODY4OF9zNS5qcGc/Zj14bFxcXCJcXG4gICAgICAgICAgICAgIGFsdD1cXFwiXFxcIlxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZ1xcXCJcXG4gICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZVxcXCI+SHVnaC1CYWNrIEJlbmNoPC9oMz5cXG4gICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZm9vdGVyPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X193cmFwcGVyIGhpZGRlblxcXCI+XFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fYnRuX2V4aXRcXFwiPlxcbiAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICBkPVxcXCJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaXFxcIlxcbiAgICAgICAgICAgIC8+XFxuICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8aDMgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3RpdGxlXFxcIj5Zb3VyIEJhZzwvaDM+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2xpc3RcXFwiPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2l0ZW0gc2hvcHBpbmctaXRlbV9jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWctYmFja2dyb3VuZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW5mby1jYXJ0XFxcIj5cXG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZV9jYXJ0XFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlX2NhcnRcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZW1vdmVcXFwiPnJlbW92ZTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5XFxcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9hZGQtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHktZGlzcGxheVxcXCI+NTwvZGl2PlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlZHVzZS1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICA8bGkgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2l0ZW0gc2hvcHBpbmctaXRlbV9jYXJ0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbWctYmFja2dyb3VuZFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9faW5mby1jYXJ0XFxcIj5cXG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fbmFtZV9jYXJ0XFxcIj5IdWdoLUJhY2sgQmVuY2g8L2gzPlxcbiAgICAgICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlX2NhcnRcXFwiIHZhbHVlPVxcXCI5Ljk5XFxcIj4kOS45OTwvZGF0YT5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9yZW1vdmVcXFwiPnJlbW92ZTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX3F1YW50aXR5XFxcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2J0bl9hZGQtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGQ9XFxcIk03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHktZGlzcGxheVxcXCI+NTwvZGl2PlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlZHVzZS1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsOC41OEwxMiwxMy4xN0wxNi41OSw4LjU4TDE4LDEwTDEyLDE2TDYsMTBMNy40MSw4LjU4WlxcXCJcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2J0bi1yZW1vdmUtYWxsXFxcIj54IHJlbW92ZSBhbGw8L2J1dHRvbj5cXG4gICAgICAgIDxwIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X190b3RhbFxcXCI+XFxuICAgICAgICAgIFRvdGFsIDpcXG4gICAgICAgICAgPGRhdGEgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3RvdGFsX2Ftb3VudFxcXCI+JDExNC45NDwvZGF0YT5cXG4gICAgICAgIDwvcD5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX2J0bl9jaGVja291dFxcXCI+Y2hlY2tvdXQ8L2J1dHRvbj5cXG4gICAgICA8L3NlY3Rpb24+XFxuICAgIDwvZGl2PlxcbiAgICA8c3BhbiBjbGFzcz1cXFwibWRpIG1kaS1jb250ZW50LXNhdmUtbWludXMtb3V0bGluZVxcXCI+PC9zcGFuPlxcbiAgPC9ib2R5PlxcbjwvaHRtbD5cXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbiAgPGhlYWQ+XFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcIklFPWVkZ2VcXFwiIC8+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIiAvPlxcbiAgICA8dGl0bGU+UHJvZHVjdHM8L3RpdGxlPlxcbiAgPC9oZWFkPlxcbiAgPGJvZHk+XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgPG5hdiBjbGFzcz1cXFwiaGVhZGVyX25hdlxcXCI+XFxuICAgICAgICAgIDx1bCBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua3MtbGlzdFxcXCI+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9pbmRleC5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+SG9tZTwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGluay1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIi4vcHJvZHVjdHMuaHRtbFxcXCIgY2xhc3M9XFxcImhlYWRlcl9fbmF2LWxpbmtcXFwiPlByb2R1Y3RzPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJoZWFkZXJfX25hdi1saW5rLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiLi9hYm91dC5odG1sXFxcIiBjbGFzcz1cXFwiaGVhZGVyX19uYXYtbGlua1xcXCI+QWJvdXQ8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImhlYWRlcl9fbG9nb1xcXCI+Y29tZnk8L3NwYW4+XFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcl9fYnRuLWNhcnQgYnRuLWNhcnRcXFwiPlxcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XFxcImJ0bi1jYXJ0X19pbWdcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICBkPVxcXCJNMTcsMThDMTUuODksMTggMTUsMTguODkgMTUsMjBBMiwyIDAgMCwwIDE3LDIyQTIsMiAwIDAsMCAxOSwyMEMxOSwxOC44OSAxOC4xLDE4IDE3LDE4TTEsMlY0SDNMNi42LDExLjU5TDUuMjQsMTQuMDRDNS4wOSwxNC4zMiA1LDE0LjY1IDUsMTVBMiwyIDAgMCwwIDcsMTdIMTlWMTVINy40MkEwLjI1LDAuMjUgMCAwLDEgNy4xNywxNC43NUM3LjE3LDE0LjcgNy4xOCwxNC42NiA3LjIsMTQuNjNMOC4xLDEzSDE1LjU1QzE2LjMsMTMgMTYuOTYsMTIuNTggMTcuMywxMS45N0wyMC44OCw1LjVDMjAuOTUsNS4zNCAyMSw1LjE3IDIxLDVBMSwxIDAgMCwwIDIwLDRINS4yMUw0LjI3LDJNNywxOEM1Ljg5LDE4IDUsMTguODkgNSwyMEEyLDIgMCAwLDAgNywyMkEyLDIgMCAwLDAgOSwyMEM5LDE4Ljg5IDguMSwxOCA3LDE4WlxcXCJcXG4gICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgPC9zdmc+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWNhcnRfX3F1YW50aXR5XFxcIj4wPC9kaXY+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9uYXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvbl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJzaXRlLWxvY2F0aW9uX19saW5rXFxcIiBocmVmPVxcXCIuL2luZGV4Lmh0bWxcXFwiPkhvbWUgPC9hPiAvXFxuICAgICAgICA8YSBjbGFzcz1cXFwic2l0ZS1sb2NhdGlvbl9fbGlua1xcXCIgaHJlZj1cXFwiLi9wcm9kdWN0cy5odG1sXFxcIj5Qcm9kdWN0czwvYT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8bWFpbiBjbGFzcz1cXFwibWFpblxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgIDxhc2lkZSBjbGFzcz1cXFwic2lkZWJhclxcXCI+XFxuICAgICAgICAgIDwhLS0gPGlucHV0IGNsYXNzPVxcXCJzaWRlYmFyX19wcmljZS1yYW5nZVxcXCIgdHlwZT1cXFwicmFuZ2VcXFwiIG5hbWU9XFxcInByaWNlLXJhbmdlXFxcIiAvPiAtLT5cXG4gICAgICAgIDwvYXNpZGU+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInByb2R1Y3RzXFxcIj48L3VsPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L21haW4+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3dyYXBwZXIgaGlkZGVuXFxcIj5cXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2hvcHBpbmctY2FydFxcXCI+XFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1jYXJ0X19idG5fZXhpdFxcXCI+XFxuICAgICAgICAgIDxzdmcgc3R5bGU9XFxcIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+XFxuICAgICAgICAgICAgPHBhdGhcXG4gICAgICAgICAgICAgIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCJcXG4gICAgICAgICAgICAgIGQ9XFxcIk0xOSw2LjQxTDE3LjU5LDVMMTIsMTAuNTlMNi40MSw1TDUsNi40MUwxMC41OSwxMkw1LDE3LjU5TDYuNDEsMTlMMTIsMTMuNDFMMTcuNTksMTlMMTksMTcuNTlMMTMuNDEsMTJMMTksNi40MVpcXFwiXFxuICAgICAgICAgICAgLz5cXG4gICAgICAgICAgPC9zdmc+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDxoMyBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fdGl0bGVcXFwiPllvdXIgQmFnPC9oMz5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fbGlzdFxcXCI+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9faXRlbSBzaG9wcGluZy1pdGVtX2NhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZy1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbmZvLWNhcnRcXFwiPlxcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lX2NhcnRcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVfY2FydFxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlbW92ZVxcXCI+cmVtb3ZlPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHlcXFwiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX2FkZC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsMTUuNDFMMTIsMTAuODNMMTYuNTksMTUuNDFMMTgsMTRMMTIsOEw2LDE0TDcuNDEsMTUuNDFaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eS1kaXNwbGF5XFxcIj41PC9kaXY+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVkdWNlLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSw4LjU4TDEyLDEzLjE3TDE2LjU5LDguNThMMTgsMTBMMTIsMTZMNiwxMEw3LjQxLDguNThaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgIDxsaSBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9faXRlbSBzaG9wcGluZy1pdGVtX2NhcnRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNob3BwaW5nLWl0ZW1fX2ltZy1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19pbmZvLWNhcnRcXFwiPlxcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19uYW1lX2NhcnRcXFwiPkh1Z2gtQmFjayBCZW5jaDwvaDM+XFxuICAgICAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcHJpY2UtdmFsdWVfY2FydFxcXCIgdmFsdWU9XFxcIjkuOTlcXFwiPiQ5Ljk5PC9kYXRhPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX3JlbW92ZVxcXCI+cmVtb3ZlPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHlcXFwiPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctaXRlbV9fYnRuX2FkZC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPHN2ZyBzdHlsZT1cXFwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8cGF0aFxcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgZD1cXFwiTTcuNDEsMTUuNDFMMTIsMTAuODNMMTYuNTksMTUuNDFMMTgsMTRMMTIsOEw2LDE0TDcuNDEsMTUuNDFaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19xdWFudGl0eS1kaXNwbGF5XFxcIj41PC9kaXY+XFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJzaG9wcGluZy1pdGVtX19idG5fcmVkdWNlLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVxcXCJ3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxwYXRoXFxuICAgICAgICAgICAgICAgICAgICBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBkPVxcXCJNNy40MSw4LjU4TDEyLDEzLjE3TDE2LjU5LDguNThMMTgsMTBMMTIsMTZMNiwxMEw3LjQxLDguNThaXFxcIlxcbiAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fYnRuLXJlbW92ZS1hbGxcXFwiPnggcmVtb3ZlIGFsbDwvYnV0dG9uPlxcbiAgICAgICAgPHAgY2xhc3M9XFxcInNob3BwaW5nLWNhcnRfX3RvdGFsXFxcIj5cXG4gICAgICAgICAgVG90YWwgOlxcbiAgICAgICAgICA8ZGF0YSBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fdG90YWxfYW1vdW50XFxcIj4kMTE0Ljk0PC9kYXRhPlxcbiAgICAgICAgPC9wPlxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwic2hvcHBpbmctY2FydF9fYnRuX2NoZWNrb3V0XFxcIj5jaGVja291dDwvYnV0dG9uPlxcbiAgICAgIDwvc2VjdGlvbj5cXG4gICAgPC9kaXY+XFxuICA8L2JvZHk+XFxuPC9odG1sPlxcblwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBDbGlja0hhbmRsZXIgfSBmcm9tICcuL2NsaWNrSGFuZGxlcic7XG5pbXBvcnQgeyBnZXREYXRhQXJyLCBTaG9wRGF0YSB9IGZyb20gJy4vZ2V0U2hvcERhdGEnO1xuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSAnLi9yZW5kZXInO1xuXG4oYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gbmV3IFNob3BEYXRhKGF3YWl0IGdldERhdGFBcnIoKSk7XG5cbiAgbmV3IFJlbmRlcigpLnJlbmRlckh0bWxQcm9kdWN0c0xpc3QoZGF0YS5saXN0ISk7XG4gIG5ldyBSZW5kZXIoKS5yZW5kZXJTaWRlQmFyKGRhdGEpO1xuICBuZXcgQ2xpY2tIYW5kbGVyKGRhdGEpO1xufSkoKTtcbiIsImltcG9ydCB7IFNob3BEYXRhIH0gZnJvbSAnLi9nZXRTaG9wRGF0YSc7XG5pbXBvcnQgeyBSZW5kZXIgfSBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgc2hvcHBpbmdDYXJ0IGZyb20gJy4vc2hvcHBpbmctY2FydCc7XG5cbi8vIG5vdCByZWZhY3RvcmVkXG5cbmNsYXNzIEZpbHRlckNsaWNrSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0YXJnZXQ6IEhUTUxFbGVtZW50LCBwdWJsaWMgZGF0YTogU2hvcERhdGEpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplKCk7XG4gIH1cblxuICBwcml2YXRlIF9hY3RpdmF0ZUZpbHRlciA9IChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGZpbHRlciA9IGVsZW1lbnQuZGF0YXNldC5maWx0ZXIhO1xuICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5kYXRhLmFkZEFjdGl2ZUZpbHRlcihmaWx0ZXIpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIF9kZWFjdGl2YXRlRmlsdGVyID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZmlsdGVyID0gZWxlbWVudC5kYXRhc2V0LmZpbHRlciE7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB0aGlzLmRhdGEucmVtb3ZlRWxlbWVudEZyb21BY3RpdmVGaWx0ZXIoZmlsdGVyKTtcblxuICAgIC8vIHJlbW92ZSBhY3RpdmUgZnJvbSBcIkFsbFwiIGZpbHRlciBlbGVtZW50XG4gICAgY29uc3QgYWxsQnRuRmlsdGVyTGlzdCA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8uZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgYnRuRmlsdGVyID0gYWxsQnRuRmlsdGVyTGlzdC5kYXRhc2V0LmZpbHRlciE7XG5cbiAgICBpZiAoYWxsQnRuRmlsdGVyTGlzdD8uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgYWxsQnRuRmlsdGVyTGlzdD8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB0aGlzLmRhdGEucmVtb3ZlRWxlbWVudEZyb21BY3RpdmVGaWx0ZXIoYnRuRmlsdGVyKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBfYWN0aXZhdGVGaWx0ZXJMaXN0ID0gKGFycmF5OiBFbGVtZW50W10pID0+IHtcbiAgICBhcnJheS5mb3JFYWNoKChsaXN0SXRlbSkgPT4ge1xuICAgICAgaWYgKGxpc3RJdGVtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVGaWx0ZXIobGlzdEl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBwcml2YXRlIF9kZWFjdGl2YXRlRmlsdGVyTGlzdCA9IChhcnJheTogRWxlbWVudFtdKSA9PiB7XG4gICAgYXJyYXkuZm9yRWFjaCgobGlzdEl0ZW0pID0+IHtcbiAgICAgIGlmIChsaXN0SXRlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2RlYWN0aXZhdGVGaWx0ZXIobGlzdEl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgX2hhbmRsZUNsaWNrT25GaWx0ZXJFbGVtZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgdGhpcy5fZGVhY3RpdmF0ZUZpbHRlcihlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYWN0aXZhdGVGaWx0ZXIoZWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgX2luaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy50YXJnZXQuZGF0YXNldC5maWx0ZXIhO1xuXG4gICAgaWYgKGZpbHRlciA9PT0gJ2NhdGVnb3J5X2FsbCcgfHwgZmlsdGVyID09PSAnYnJhbmRfYWxsJykge1xuICAgICAgY29uc3QgYXJyYXlGaWx0ZXJzID0gQXJyYXkuZnJvbSh0aGlzLnRhcmdldC5wYXJlbnRFbGVtZW50IS5jaGlsZHJlbik7XG5cbiAgICAgIGlmICh0aGlzLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHRoaXMuX2RlYWN0aXZhdGVGaWx0ZXJMaXN0KGFycmF5RmlsdGVycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZUZpbHRlckxpc3QoYXJyYXlGaWx0ZXJzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGFuZGxlQ2xpY2tPbkZpbHRlckVsZW1lbnQodGhpcy50YXJnZXQpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIENsaWNrSGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRhOiBTaG9wRGF0YSkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG4gIHVwZGF0ZURhdGFBbmRSZW5kZXJMaXN0ID0gKCkgPT4ge1xuICAgIHRoaXMuZGF0YS5maWx0ZXJMaXN0KCk7XG4gICAgbmV3IFJlbmRlcigpLnJlbmRlckh0bWxQcm9kdWN0c0xpc3QodGhpcy5kYXRhLmZpbHRlcmVkTGlzdCk7XG4gIH07XG5cbiAgbGlzdGVuZXJGb3JNYXhQcmljZSA9ICgpID0+IHtcbiAgICBsZXQgZGVsYXk6IE5vZGVKUy5UaW1lb3V0O1xuICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3ByaWNlLXJhbmdlJykhO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIGlmIChkZWxheSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZGVsYXkpO1xuICAgICAgfVxuICAgICAgZGVsYXkgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbWF4UHJpY2UgPSBwYXJzZUludChpbnB1dC52YWx1ZSk7XG4gICAgICAgIHRoaXMuZGF0YS5hY3RpdmVGaWx0ZXJzLm1heFByaWNlID0gbWF4UHJpY2U7XG4gICAgICAgIHRoaXMuZGF0YS5wcmljZVJhbmdlLm1heCA9IG1heFByaWNlO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGFBbmRSZW5kZXJMaXN0KCk7XG4gICAgICAgIG5ldyBSZW5kZXIoKS5yZVJlbmRlckNvdW50ZXJzUXVhbnRpdGllcyhcbiAgICAgICAgICB0aGlzLmRhdGEuZmlsdGVyZWRCcmFuZHMsXG4gICAgICAgICAgdGhpcy5kYXRhLmZpbHRlcmVkQ2F0ZWdvcmllc1xuICAgICAgICApO1xuICAgICAgfSwgNTAwKTtcbiAgICB9KTtcbiAgfTtcblxuICBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJGb3JNYXhQcmljZSgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuXG4gICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fYnRuLWNhcnQnKSkge1xuICAgICAgICBzaG9wcGluZ0NhcnQuc2hvd1Nob3BwaW5nQ2FydCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5zaWRlYmFyX19maWx0ZXItaXRlbScpKSB7XG4gICAgICAgIG5ldyBGaWx0ZXJDbGlja0hhbmRsZXIodGFyZ2V0IGFzIEhUTUxFbGVtZW50LCB0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLnVwZGF0ZURhdGFBbmRSZW5kZXJMaXN0KCk7XG4gICAgICAgIG5ldyBSZW5kZXIoKS5yZVJlbmRlckNvdW50ZXJzUXVhbnRpdGllcyhcbiAgICAgICAgICB0aGlzLmRhdGEuZmlsdGVyZWRCcmFuZHMsXG4gICAgICAgICAgdGhpcy5kYXRhLmZpbHRlcmVkQ2F0ZWdvcmllc1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyA9PT09PT09PVNob3BwaW5nIGNhcnQgPT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICBjb25zdCBnZXRTaG9wcGluZ0NhcnRJdGVtSWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLnNob3BwaW5nLWNhcnRfX2l0ZW0nKSEgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpdGVtLmRhdGFzZXQuaWQhKTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLnNob3BwaW5nLWl0ZW1fX2J0bi1jYXJ0X19pbWcnKSkge1xuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGFyZ2V0LmNsb3Nlc3QoJy5wcm9kdWN0c19faXRlbScpISBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChwYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQhKTtcbiAgICAgICAgLy8gaWYgaXRlbSBub3QgZm91bmQgaW4gY2FydCBhZGQgcmV0dXJuIGZhbHNlLCBhbmQgYWRkIGl0ZW1cbiAgICAgICAgaWYgKCFzaG9wcGluZ0NhcnQuYWRkVG9JdGVtSW5DYXJ0KGlkKSkge1xuICAgICAgICAgIGNvbnN0IGl0ZW1Qcm9wc0ZvckNhcnQgPSB0aGlzLmRhdGEuZ2V0SXRlbUJ5SWQoaWQpO1xuICAgICAgICAgIHNob3BwaW5nQ2FydC5hZGRJdGVtVG9DYXJ0KGl0ZW1Qcm9wc0ZvckNhcnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLnNob3BwaW5nLWl0ZW1fX2J0bl9hZGQtaXRlbScpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZ2V0U2hvcHBpbmdDYXJ0SXRlbUlkKCk7XG4gICAgICAgIHNob3BwaW5nQ2FydC5hZGRUb0l0ZW1JbkNhcnQoaWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5zaG9wcGluZy1pdGVtX19idG5fcmVkdWNlLWl0ZW0nKSkge1xuICAgICAgICBjb25zdCBpZCA9IGdldFNob3BwaW5nQ2FydEl0ZW1JZCgpO1xuICAgICAgICBzaG9wcGluZ0NhcnQucmVkdWNlSXRlbUZyb21DYXJ0QnlJRChpZCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnLnNob3BwaW5nLWl0ZW1fX2J0bl9yZW1vdmUnKSkge1xuICAgICAgICBjb25zdCBpZCA9IGdldFNob3BwaW5nQ2FydEl0ZW1JZCgpO1xuICAgICAgICBzaG9wcGluZ0NhcnQuZGVsZXRlSXRlbUJ5SWQoaWQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5zaG9wcGluZy1jYXJ0X19idG4tcmVtb3ZlLWFsbCcpKSB7XG4gICAgICAgIHNob3BwaW5nQ2FydC5yZW1vdmVBbGwoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgSUNvbGxlY3Rpb25XaXRoQ291bnQge1xuICBbaW5kZXg6IHN0cmluZ106IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzID0gKGFycjogc3RyaW5nW10pOiBJQ29sbGVjdGlvbldpdGhDb3VudCA9PiB7XG4gIGNvbnN0IGNvbGxlY3Rpb25XaXRoQ291bnQ6IElDb2xsZWN0aW9uV2l0aENvdW50ID0ge307XG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFycikge1xuICAgIGlmIChjb2xsZWN0aW9uV2l0aENvdW50W2VsZW1lbnRdKSB7XG4gICAgICBjb2xsZWN0aW9uV2l0aENvdW50W2VsZW1lbnRdICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbGxlY3Rpb25XaXRoQ291bnRbZWxlbWVudF0gPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb2xsZWN0aW9uV2l0aENvdW50O1xufTtcbiIsImltcG9ydCB7IElDb2xsZWN0aW9uV2l0aENvdW50LCBjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyB9IGZyb20gJy4vY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXMnO1xuaW1wb3J0IHsgSUNhcnRJdGVtU3RvcmVkIH0gZnJvbSAnLi9zaG9wcGluZy1jYXJ0JztcblxuZXhwb3J0IGludGVyZmFjZSBJUHJvZHVjdCB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIGRpc2NvdW50UGVyY2VudGFnZTogbnVtYmVyO1xuICByYXRpbmc6IG51bWJlcjtcbiAgc3RvY2s6IG51bWJlcjtcbiAgYnJhbmQ6IHN0cmluZztcbiAgY2F0ZWdvcnk6IHN0cmluZztcbiAgdGh1bWJuYWlsOiBVUkw7XG4gIGltYWdlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1pbk1heE9iaiB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIElBbnN3ZXJTZXJ2ZXIge1xuICBwcm9kdWN0czogSVByb2R1Y3RbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldERhdGFBcnIgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYW5zd2VyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZHVtbXlqc29uLmNvbS9wcm9kdWN0cz9saW1pdD0xMDAnKTtcbiAgICBjb25zdCBkYXRhOiBJQW5zd2VyU2VydmVyID0gYXdhaXQgYW5zd2VyLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YS5wcm9kdWN0cztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBTaG9wRGF0YSB7XG4gIHB1YmxpYyBmaWx0ZXJzOiB7XG4gICAgY2F0ZWdvcnk6IElDb2xsZWN0aW9uV2l0aENvdW50O1xuICAgIGJyYW5kOiBJQ29sbGVjdGlvbldpdGhDb3VudDtcbiAgfSA9IHtcbiAgICBjYXRlZ29yeToge30sXG4gICAgYnJhbmQ6IHt9XG4gIH07XG4gIHByaWNlUmFuZ2UhOiBJTWluTWF4T2JqO1xuXG4gIGZpbHRlcmVkTGlzdDogSVByb2R1Y3RbXTtcbiAgZmlsdGVyZWRDYXRlZ29yaWVzOiBJQ29sbGVjdGlvbldpdGhDb3VudCA9IHt9O1xuICBmaWx0ZXJlZEJyYW5kczogSUNvbGxlY3Rpb25XaXRoQ291bnQgPSB7fTtcblxuICBwcml2YXRlIF9hY3RpdmVGaWx0ZXJzOiB7XG4gICAgY2F0ZWdvcnk6IHN0cmluZ1tdO1xuICAgIGJyYW5kOiBzdHJpbmdbXTtcbiAgICBtYXhQcmljZTogbnVtYmVyO1xuICB9ID0ge1xuICAgIGNhdGVnb3J5OiBbXSxcbiAgICBicmFuZDogW10sXG4gICAgbWF4UHJpY2U6IDBcbiAgfTtcblxuICBwdWJsaWMgZ2V0IGFjdGl2ZUZpbHRlcnMoKToge1xuICAgIGNhdGVnb3J5OiBzdHJpbmdbXTtcbiAgICBicmFuZDogc3RyaW5nW107XG4gICAgbWF4UHJpY2U6IG51bWJlcjtcbiAgfSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUZpbHRlcnM7XG4gIH1cblxuICBwdWJsaWMgYWRkQWN0aXZlRmlsdGVyKHN0cmluZzogc3RyaW5nKSB7XG4gICAgY29uc3QgW2ZpbHRlclR5cGUsIHZhbHVlXSA9IHN0cmluZy5zcGxpdCgnXycpO1xuXG4gICAgaWYgKChmaWx0ZXJUeXBlID09PSAnYnJhbmQnIHx8IGZpbHRlclR5cGUgPT09ICdjYXRlZ29yeScpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZUZpbHRlcnNbZmlsdGVyVHlwZV0ucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlclR5cGUgPT09ICdtYXhQcmljZScgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5fYWN0aXZlRmlsdGVyc1tmaWx0ZXJUeXBlXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVFbGVtZW50RnJvbUFjdGl2ZUZpbHRlcihzdHJpbmc6IHN0cmluZykge1xuICAgIGNvbnN0IFtmaWx0ZXJUeXBlLCB2YWx1ZV0gPSBzdHJpbmcuc3BsaXQoJ18nKTtcblxuICAgIGlmICgoZmlsdGVyVHlwZSA9PT0gJ2JyYW5kJyB8fCBmaWx0ZXJUeXBlID09PSAnY2F0ZWdvcnknKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBhcnIgPSB0aGlzLmFjdGl2ZUZpbHRlcnNbZmlsdGVyVHlwZV07XG4gICAgICBhcnIuc3BsaWNlKFxuICAgICAgICBhcnIuZmluZEluZGV4KChmaWx0ZXIpID0+IGZpbHRlciA9PT0gdmFsdWUpLFxuICAgICAgICAxXG4gICAgICApO1xuICAgICAgdGhpcy5hY3RpdmVGaWx0ZXJzW2ZpbHRlclR5cGVdID0gYXJyO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsaXN0OiBJUHJvZHVjdFtdIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSBBcnJheS5mcm9tKHRoaXMubGlzdCEpO1xuXG4gICAgaWYgKGxpc3QpIHtcbiAgICAgIHRoaXMuZmlsdGVycy5icmFuZCA9IHRoaXMuX2dldFF1YW50aXR5QnJhbmRzKCk7XG4gICAgICB0aGlzLmZpbHRlcnMuY2F0ZWdvcnkgPSB0aGlzLl9nZXRRdWFudGl0eUNhdGVnb3JpZXMoKTtcbiAgICAgIHRoaXMucHJpY2VSYW5nZSA9IHRoaXMuX2dldFByaWNlUmFuZ2UoKSE7XG4gICAgICB0aGlzLmFjdGl2ZUZpbHRlcnMubWF4UHJpY2UgPSB0aGlzLnByaWNlUmFuZ2UubWF4O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldFF1YW50aXR5QnJhbmRzID0gKCkgPT5cbiAgICBjb3VudFF1YW50aXRpZXNVbmlxRW50cmllcyh0aGlzLmxpc3QhLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5icmFuZCkhKTtcblxuICBwcml2YXRlIF9nZXRRdWFudGl0eUNhdGVnb3JpZXMgPSAoKSA9PlxuICAgIGNvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzKHRoaXMubGlzdCEubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNhdGVnb3J5KSEpO1xuXG4gIHByaXZhdGUgX2dldFByaWNlUmFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJpY2VzID0gdGhpcy5saXN0Py5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QucHJpY2UpO1xuICAgIGlmIChwcmljZXMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1pbjogTWF0aC5taW4oLi4ucHJpY2VzKSxcbiAgICAgICAgbWF4OiBNYXRoLm1heCguLi5wcmljZXMpXG4gICAgICB9O1xuICAgIH1cbiAgfTtcbiAgcHJpdmF0ZSBfZGVlcENsb25lQXJyYXk8VD4oYXJyOiBUKTogVCB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJyKSk7XG4gIH1cbiAgcHJpdmF0ZSBfY2xvbmVBcnJheTxUPihhcnI6IFRbXSk6IFRbXSB7XG4gICAgcmV0dXJuIFsuLi5hcnJdO1xuICB9XG4gIHByaXZhdGUgX2ZpbHRlckJ5TWF4UHJpY2UgPSAoYXJyOiBJUHJvZHVjdFtdKSA9PiB7XG4gICAgY29uc3QgYnVmZmVyQXJyID0gdGhpcy5fY2xvbmVBcnJheShhcnIpO1xuXG4gICAgYXJyLmxlbmd0aCA9IDA7XG5cbiAgICBjb25zdCBmaWx0ZXJlZCA9IFsuLi5idWZmZXJBcnJdIS5maWx0ZXIoKGVsZW0pID0+IGVsZW0ucHJpY2UgPD0gdGhpcy5hY3RpdmVGaWx0ZXJzLm1heFByaWNlKTtcblxuICAgIGFyci5wdXNoKC4uLmZpbHRlcmVkKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgcHJpdmF0ZSBfZmlsdGVyQnlCcmFuZHMgPSAoYXJyOiBJUHJvZHVjdFtdKSA9PiB7XG4gICAgaWYgKHRoaXMuYWN0aXZlRmlsdGVycy5icmFuZC5sZW5ndGggIT09IDApIHtcbiAgICAgIGNvbnN0IGJ1ZmZlckFyciA9IHRoaXMuX2Nsb25lQXJyYXkoYXJyKTtcblxuICAgICAgYXJyLmxlbmd0aCA9IDA7XG5cbiAgICAgIHRoaXMuYWN0aXZlRmlsdGVycy5icmFuZC5mb3JFYWNoKChmaWx0ZXJWYWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IFsuLi5idWZmZXJBcnJdLmZpbHRlcigoZWxlbSkgPT4gZWxlbS5icmFuZCA9PT0gZmlsdGVyVmFsdWUpO1xuICAgICAgICBhcnIucHVzaCguLi5maWx0ZXJlZCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgX2ZpbHRlckJ5Q2F0ZWdvcmllcyA9IChhcnI6IElQcm9kdWN0W10pID0+IHtcbiAgICBpZiAodGhpcy5hY3RpdmVGaWx0ZXJzLmNhdGVnb3J5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgY29uc3QgYnVmZmVyQXJyID0gdGhpcy5fY2xvbmVBcnJheShhcnIpO1xuXG4gICAgICBhcnIubGVuZ3RoID0gMDtcblxuICAgICAgdGhpcy5hY3RpdmVGaWx0ZXJzLmNhdGVnb3J5LmZvckVhY2goKGZpbHRlclZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkID0gWy4uLmJ1ZmZlckFycl0uZmlsdGVyKChlbGVtKSA9PiBlbGVtLmNhdGVnb3J5ID09PSBmaWx0ZXJWYWx1ZSk7XG4gICAgICAgIGFyci5wdXNoKC4uLmZpbHRlcmVkKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2Nsb25lQXJyYXkoYXJyKTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBfZ2V0RmlsdGVyZWRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgIGxldCBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMubGlzdCEpO1xuICAgIGFyciA9IHRoaXMuX2Nsb25lQXJyYXkodGhpcy5fZmlsdGVyQnlCcmFuZHMoYXJyKSk7XG4gICAgYXJyID0gdGhpcy5fY2xvbmVBcnJheSh0aGlzLl9maWx0ZXJCeU1heFByaWNlKGFycikpO1xuICAgIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzID0gY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXMoYXJyLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5jYXRlZ29yeSkpO1xuICB9O1xuXG4gIHByaXZhdGUgX2dldEZpbHRlcmVkQnJhbmRzID0gKCkgPT4ge1xuICAgIGxldCBhcnIgPSB0aGlzLl9jbG9uZUFycmF5KHRoaXMubGlzdCEpO1xuICAgIGFyciA9IHRoaXMuX2Nsb25lQXJyYXkodGhpcy5fZmlsdGVyQnlDYXRlZ29yaWVzKGFycikpO1xuICAgIGFyciA9IHRoaXMuX2Nsb25lQXJyYXkodGhpcy5fZmlsdGVyQnlNYXhQcmljZShhcnIpKTtcbiAgICB0aGlzLmZpbHRlcmVkQnJhbmRzID0gY291bnRRdWFudGl0aWVzVW5pcUVudHJpZXMoYXJyLm1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdC5icmFuZCkpO1xuICB9O1xuXG4gIHB1YmxpYyBmaWx0ZXJMaXN0ID0gKCkgPT4ge1xuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gWy4uLnRoaXMubGlzdCFdO1xuICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gWy4uLnRoaXMuX2ZpbHRlckJ5QnJhbmRzKHRoaXMuZmlsdGVyZWRMaXN0KV07XG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbLi4udGhpcy5fZmlsdGVyQnlDYXRlZ29yaWVzKHRoaXMuZmlsdGVyZWRMaXN0KV07XG4gICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLl9maWx0ZXJCeU1heFByaWNlKHRoaXMuZmlsdGVyZWRMaXN0KTtcbiAgICB0aGlzLl9nZXRGaWx0ZXJlZENhdGVnb3JpZXMoKTtcbiAgICB0aGlzLl9nZXRGaWx0ZXJlZEJyYW5kcygpO1xuICB9O1xuXG4gIHB1YmxpYyBnZXRJdGVtQnlJZCA9IChzZWFyY2hpbmdJZDogbnVtYmVyKTogSUNhcnRJdGVtU3RvcmVkID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgcHJpY2UsXG4gICAgICBpbWFnZXM6IFtpbWFnZV1cbiAgICB9ID0gdGhpcy5maWx0ZXJlZExpc3QuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gc2VhcmNoaW5nSWQpITtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgaW1hZ2U6IGltYWdlLFxuICAgICAgcXVhbnRpdHk6IDFcbiAgICB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgSUNvbGxlY3Rpb25XaXRoQ291bnQgfSBmcm9tICcuL2NvdW50UXVhbnRpdGllc1VuaXFFbnRyaWVzJztcbmltcG9ydCB7IElQcm9kdWN0LCBJTWluTWF4T2JqLCBTaG9wRGF0YSB9IGZyb20gJy4vZ2V0U2hvcERhdGEnO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyIHtcbiAgbGlzdDogSFRNTFVMaXN0RWxlbWVudDtcbiAgc2lkZWJhcjogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJykhO1xuICAgIHRoaXMuc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykhO1xuICB9XG5cbiAgcmVuZGVySHRtbFByb2R1Y3RzTGlzdCA9IChwcm9kdWN0QXJyYXk6IElQcm9kdWN0W10pID0+IHtcbiAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgcHJvZHVjdEFycmF5LmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgIGNvbnN0IHsgdGl0bGUsIHByaWNlLCBpbWFnZXMsIGlkIH0gPSBlbGVtO1xuICAgICAgdGhpcy5saXN0Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICAgIGBcbiAgICAgIDxsaSBjbGFzcz1cInByb2R1Y3RzX19pdGVtIHNob3BwaW5nLWl0ZW1cIiBkYXRhLWlkPVwiJHtpZH1cIj5cbiAgICAgICAgPGltZyBzcmM9XCIke2ltYWdlc1swXX1cIiBhbHQ9XCJcIiBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX2ltZ1wiPlxuICAgICAgICA8aDMgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19uYW1lXCI+JHt0aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvcHBpbmctaXRlbV9fcHJpY2UtYW5kLWNhcnRcIj5cbiAgICAgICAgICA8ZGF0YSBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlXCIgdmFsdWU9XCIke3ByaWNlfVwiPiQke3ByaWNlfTwvZGF0YT5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwic2hvcHBpbmctaXRlbV9fYnRuLWNhcnRfX2ltZ1wiIHN0eWxlPVwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPVwiTTE3LDE4QTIsMiAwIDAsMSAxOSwyMEEyLDIgMCAwLDEgMTcsMjJDMTUuODksMjIgMTUsMjEuMSAxNSwyMEMxNSwxOC44OSAxNS44OSwxOCAxNywxOE0xLDJINC4yN0w1LjIxLDRIMjBBMSwxIDAgMCwxIDIxLDVDMjEsNS4xNyAyMC45NSw1LjM0IDIwLjg4LDUuNUwxNy4zLDExLjk3QzE2Ljk2LDEyLjU4IDE2LjMsMTMgMTUuNTUsMTNIOC4xTDcuMiwxNC42M0w3LjE3LDE0Ljc1QTAuMjUsMC4yNSAwIDAsMCA3LjQyLDE1SDE5VjE3SDdDNS44OSwxNyA1LDE2LjEgNSwxNUM1LDE0LjY1IDUuMDksMTQuMzIgNS4yNCwxNC4wNEw2LjYsMTEuNTlMMyw0SDFWMk03LDE4QTIsMiAwIDAsMSA5LDIwQTIsMiAwIDAsMSA3LDIyQzUuODksMjIgNSwyMS4xIDUsMjBDNSwxOC44OSA1Ljg5LDE4IDcsMThNMTYsMTFMMTguNzgsNkg2LjE0TDguNSwxMUgxNlpcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgYFxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBwcml2YXRlIF9yZW5kZXJTZWFyY2ggPSAoKSA9PiB7XG4gICAgdGhpcy5zaWRlYmFyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdhZnRlcmJlZ2luJyxcbiAgICAgIGBcbiAgICA8aW5wdXQgY2xhc3M9XCJzaWRlYmFyX19zZWFyY2hcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIC8+XG4gICAgYFxuICAgICk7XG4gIH07XG5cbiAgcHJpdmF0ZSBfcmVuZGVyRmlsdGVyQ2F0ZWdvcnkgPSAoXG4gICAgZmlsdGVyQ2F0ZWdvcnlOYW1lOiBzdHJpbmcsXG4gICAgZmlsdGVyQ2F0ZWdvcnlFbnRyaWVzOiBJQ29sbGVjdGlvbldpdGhDb3VudFxuICApID0+IHtcbiAgICB0aGlzLnNpZGViYXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgJ2JlZm9yZWVuZCcsXG4gICAgICBgXG4gICAgICA8aDMgY2xhc3M9XCJzaWRlYmFyX190aXRsZVwiPiR7ZmlsdGVyQ2F0ZWdvcnlOYW1lfTwvaDM+XG4gICAgICA8dWwgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItbGlzdFwiIGlkPVwiY2F0ZWdvcmllc0xpc3Qke2ZpbHRlckNhdGVnb3J5TmFtZX1cIj5cbiAgICAgICAgPGxpIGNsYXNzPVwic2lkZWJhcl9fZmlsdGVyLWl0ZW0gc2lkZWJhcl9fZmlyc3QtbGlzdC1pdGVtXCIgZGF0YS1maWx0ZXI9XCIke2ZpbHRlckNhdGVnb3J5TmFtZX1fYWxsXCI+QWxsPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICBgXG4gICAgKTtcblxuICAgIGNvbnN0IGxpc3RGaWx0ZXIgPSB0aGlzLnNpZGViYXIucXVlcnlTZWxlY3RvcihgI2NhdGVnb3JpZXNMaXN0JHtmaWx0ZXJDYXRlZ29yeU5hbWV9YCk7XG5cbiAgICBPYmplY3QuZW50cmllcyhmaWx0ZXJDYXRlZ29yeUVudHJpZXMpLmZvckVhY2goKFt2YWx1ZSwgcXVhbnRpdHldKSA9PiB7XG4gICAgICBsaXN0RmlsdGVyPy5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgICBgXG4gICAgICA8bGkgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItaXRlbVwiIGRhdGEtZmlsdGVyPVwiJHtmaWx0ZXJDYXRlZ29yeU5hbWV9XyR7dmFsdWV9XCI+JHt2YWx1ZX0gXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyX19lbGVtLWNvdW50ZXJcIj4ke3F1YW50aXR5fTwvZGl2PlxuICAgICAgPC9saT5gXG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHByaXZhdGUgX3JlbmRlclByaWNlUmFuZ2UgPSAoYXJyOiBJTWluTWF4T2JqKSA9PiB7XG4gICAgdGhpcy5zaWRlYmFyLmluc2VydEFkamFjZW50SFRNTChcbiAgICAgICdiZWZvcmVlbmQnLFxuICAgICAgYFxuICAgICAgPGgzIGNsYXNzPVwic2lkZWJhcl9fdGl0bGVcIj5QcmljZTwvaDM+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJzaWRlYmFyX19wcmljZS1yYW5nZVwiIHR5cGU9XCJyYW5nZVwiIG5hbWU9XCJwcmljZS1yYW5nZVwiIG1heD1cIiR7YXJyLm1heH1cIiBtaW49XCIke2Fyci5taW59XCIgdmFsdWU9XCIke2Fyci5tYXh9XCIvPlxuICAgICAgPGRhdGEgY2xhc3M9XCJzaWRlYmFyX19maWx0ZXItbWF4LXByaWNlXCI+TWF4IHByaWNlOiAkJHthcnIubWF4fTwvZGF0YT5cbiAgICAgIGBcbiAgICApO1xuICAgIGNvbnN0IHByaWNlUmFuZ2VJTnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPVxuICAgICAgdGhpcy5zaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcmljZS1yYW5nZScpO1xuICAgIGNvbnN0IHByaWNlUmFuZ2VEYXRhID0gdGhpcy5zaWRlYmFyLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19maWx0ZXItbWF4LXByaWNlJykhO1xuXG4gICAgcHJpY2VSYW5nZUlOcHV0Py5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoKSA9PiB7XG4gICAgICBwcmljZVJhbmdlRGF0YS50ZXh0Q29udGVudCA9IGBNYXggcHJpY2U6ICQke3ByaWNlUmFuZ2VJTnB1dC52YWx1ZX0gYDtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXJTaWRlQmFyID0gKGRhdGE6IFNob3BEYXRhKSA9PiB7XG4gICAgdGhpcy5fcmVuZGVyU2VhcmNoKCk7XG5cbiAgICBPYmplY3QuZW50cmllcyhkYXRhLmZpbHRlcnMpLmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgY29uc3QgW2ZpbHRlclR5cGUsIGZpbHRlclZhbHVlXSA9IGZpbHRlcjtcbiAgICAgIHRoaXMuX3JlbmRlckZpbHRlckNhdGVnb3J5KGZpbHRlclR5cGUsIGZpbHRlclZhbHVlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3JlbmRlclByaWNlUmFuZ2UoZGF0YS5wcmljZVJhbmdlKTtcbiAgfTtcblxuICByZVJlbmRlckNvdW50ZXJzUXVhbnRpdGllcyA9IChicmFuZHM6IElDb2xsZWN0aW9uV2l0aENvdW50LCBjYXRlZ29yaWVzOiBJQ29sbGVjdGlvbldpdGhDb3VudCkgPT4ge1xuICAgIGNvbnN0IG5vZGVMaXN0T2ZDb3VudGVycyA9IHRoaXMuc2lkZWJhci5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhcl9fZWxlbS1jb3VudGVyJyk7XG4gICAgbm9kZUxpc3RPZkNvdW50ZXJzLmZvckVhY2goKGNvdW50ZXIpID0+IHtcbiAgICAgIGNvbnN0IFtmaWx0ZXJUeXBlLCBmaWx0ZXJWYWx1ZV0gPSBjb3VudGVyLnBhcmVudEVsZW1lbnQhLmRhdGFzZXQuZmlsdGVyIS5zcGxpdCgnXycpITtcbiAgICAgIGlmIChmaWx0ZXJUeXBlID09PSAnY2F0ZWdvcnknKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclR5cGVBbmRDb3VudCA9IE9iamVjdC5lbnRyaWVzKGNhdGVnb3JpZXMpLmZpbmQoXG4gICAgICAgICAgKGNhdGVnb3J5KSA9PiBjYXRlZ29yeVswXSA9PT0gZmlsdGVyVmFsdWVcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGZpbHRlclR5cGVBbmRDb3VudCkge1xuICAgICAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSBmaWx0ZXJUeXBlQW5kQ291bnRbMV0udG9TdHJpbmcoKTtcbiAgICAgICAgICBjb3VudGVyLnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY291bnRlci50ZXh0Q29udGVudCA9ICcwJztcbiAgICAgICAgICBjb3VudGVyLnBhcmVudEVsZW1lbnQhLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXJUeXBlID09PSAnYnJhbmQnKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclR5cGVBbmRDb3VudCA9IE9iamVjdC5lbnRyaWVzKGJyYW5kcykuZmluZCgoYnJhbmQpID0+IGJyYW5kWzBdID09PSBmaWx0ZXJWYWx1ZSk7XG4gICAgICAgIGlmIChmaWx0ZXJUeXBlQW5kQ291bnQpIHtcbiAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gZmlsdGVyVHlwZUFuZENvdW50WzFdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgY291bnRlci5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSAnMCc7XG4gICAgICAgICAgY291bnRlci5wYXJlbnRFbGVtZW50IS5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIElDYXJ0SXRlbVN0b3JlZCB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIGltYWdlOiBzdHJpbmc7XG4gIHF1YW50aXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0NhcnQge1xuICBwdWJsaWMgaXRlbXM6IElDYXJ0SXRlbVN0b3JlZFtdID0gW107XG4gIGNhcnRXcmFwcGVyOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfc3VtITogbnVtYmVyO1xuICBwcml2YXRlIF9saXN0OiBIVE1MVUxpc3RFbGVtZW50O1xuICBwcml2YXRlIF9zdW1BbW91bnRIVE1MOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBfY2FydEJvZHk6IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9idG5FeGl0OiBIVE1MQnV0dG9uRWxlbWVudDtcbiAgcHJpdmF0ZSBfaGVhZGVyQ2FydEljb246IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FydFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmctY2FydF9fd3JhcHBlcicpITtcbiAgICB0aGlzLl9jYXJ0Qm9keSA9IHRoaXMuY2FydFdyYXBwZXIucXVlcnlTZWxlY3RvcignLnNob3BwaW5nLWNhcnQnKSE7XG4gICAgdGhpcy5fYnRuRXhpdCA9IHRoaXMuX2NhcnRCb2R5LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wcGluZy1jYXJ0X19idG5fZXhpdCcpITtcbiAgICB0aGlzLl9saXN0ID0gdGhpcy5jYXJ0V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmctY2FydF9fbGlzdCcpITtcbiAgICB0aGlzLl9zdW1BbW91bnRIVE1MID0gdGhpcy5jYXJ0V3JhcHBlci5xdWVyeVNlbGVjdG9yKCcuc2hvcHBpbmctY2FydF9fdG90YWxfYW1vdW50JykhO1xuICAgIHRoaXMuX2hlYWRlckNhcnRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jYXJ0X19xdWFudGl0eScpITtcbiAgICB0aGlzLnJlUmVuZGVyQ2FydCgpO1xuICB9XG5cbiAgcmVSZW5kZXJDYXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuX2dldFRvdGFsU3VtKCk7XG4gICAgdGhpcy5fbGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMCkge1xuICAgICAgICB0aGlzLl9saXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5faXRlbUhUTUxUZW1wbGF0ZShpdGVtKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5fY2hhbmdlU3VtKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBfY2hhbmdlSGVhZGVySWNvbiA9ICgpID0+IHtcbiAgICBjb25zdCBxdWFudGl0eU9mSXRlbXMgPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICB0aGlzLl9oZWFkZXJDYXJ0SWNvbi5pbm5lckhUTUwgPSBgJHtxdWFudGl0eU9mSXRlbXN9YDtcbiAgfTtcblxuICBwcml2YXRlIF9pdGVtSFRNTFRlbXBsYXRlID0gKGl0ZW06IElDYXJ0SXRlbVN0b3JlZCkgPT4ge1xuICAgIGNvbnN0IHsgdGl0bGUsIHByaWNlLCBpbWFnZSwgcXVhbnRpdHksIGlkIH0gPSBpdGVtO1xuICAgIHJldHVybiBgXG4gICAgPGxpIGNsYXNzPVwic2hvcHBpbmctY2FydF9faXRlbSBzaG9wcGluZy1pdGVtX2NhcnRcIiBkYXRhLWlkPVwiJHtpZH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwic2hvcHBpbmctaXRlbV9faW1nLWJhY2tncm91bmRcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtpbWFnZX0nKTtcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2hvcHBpbmctaXRlbV9faW5mby1jYXJ0XCI+XG4gICAgICA8aDMgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19uYW1lX2NhcnRcIj4ke3RpdGxlfTwvaDM+XG4gICAgICA8ZGF0YSBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX3ByaWNlLXZhbHVlX2NhcnRcIiB2YWx1ZT1cIiR7cHJpY2V9XCI+JCR7cHJpY2V9PC9kYXRhPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInNob3BwaW5nLWl0ZW1fX2J0bl9yZW1vdmVcIj5yZW1vdmU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2hvcHBpbmctaXRlbV9fcXVhbnRpdHlcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzaG9wcGluZy1pdGVtX19idG5fYWRkLWl0ZW1cIj5cbiAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgZD1cIk03LjQxLDE1LjQxTDEyLDEwLjgzTDE2LjU5LDE1LjQxTDE4LDE0TDEyLDhMNiwxNEw3LjQxLDE1LjQxWlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzaG9wcGluZy1pdGVtX19xdWFudGl0eS1kaXNwbGF5XCI+JHtxdWFudGl0eX08L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzaG9wcGluZy1pdGVtX19idG5fcmVkdWNlLWl0ZW1cIj5cbiAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgZD1cIk03LjQxLDguNThMMTIsMTMuMTdMMTYuNTksOC41OEwxOCwxMEwxMiwxNkw2LDEwTDcuNDEsOC41OFpcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbGk+XG4gICAgYDtcbiAgfTtcblxuICBwcml2YXRlIF9jaGFuZ2VTdW0gPSAoKSA9PiB7XG4gICAgdGhpcy5fZ2V0VG90YWxTdW0oKTtcbiAgICB0aGlzLl9zdW1BbW91bnRIVE1MLmlubmVySFRNTCA9IGAkJHt0aGlzLl9zdW19YDtcbiAgfTtcblxuICBwcml2YXRlIF9nZXRUb3RhbFN1bSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuX3N1bSA9IHRoaXMuaXRlbXMucmVkdWNlKChzdW06IG51bWJlciwgZWxlbSkgPT4gc3VtICsgZWxlbS5wcmljZSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N1bSA9IDA7XG4gICAgfVxuICB9O1xuXG4gIHByaXZhdGUgX2hpZGVTaG9wcGluZ0NhcnQgPSAoZTogRXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCEgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCF0aGlzLl9jYXJ0Qm9keS5jb250YWlucyh0YXJnZXQpIHx8IHRoaXMuX2J0bkV4aXQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgdGhpcy5jYXJ0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oaWRlU2hvcHBpbmdDYXJ0KTtcbiAgICB9XG4gIH07XG5cbiAgc2hvd1Nob3BwaW5nQ2FydCA9ICgpID0+IHtcbiAgICB0aGlzLmNhcnRXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oaWRlU2hvcHBpbmdDYXJ0KTtcbiAgICB0aGlzLnJlUmVuZGVyQ2FydCgpO1xuICB9O1xuXG4gIGFkZFRvSXRlbUluQ2FydCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaW5kZXhPZkl0ZW0gPSB0aGlzLml0ZW1zLmZpbmRJbmRleCgoZWxlbSkgPT4gZWxlbS5pZCA9PT0gaWQpO1xuICAgIGlmIChpbmRleE9mSXRlbSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuaXRlbXNbaW5kZXhPZkl0ZW1dLnF1YW50aXR5ICs9IDE7XG4gICAgICB0aGlzLnJlUmVuZGVyQ2FydCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcHJpdmF0ZSBfZ2V0SXRlbUJ5SWQgPSAoaWQ6IG51bWJlcikgPT4gdGhpcy5pdGVtcy5maW5kKChlbGVtKSA9PiBlbGVtLmlkID09PSBpZCk7XG5cbiAgcmVkdWNlSXRlbUZyb21DYXJ0QnlJRCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuX2dldEl0ZW1CeUlkKGlkKSE7XG4gICAgaWYgKGl0ZW0ucXVhbnRpdHkgPT0gMSkge1xuICAgICAgdGhpcy5kZWxldGVJdGVtQnlJZChpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW0ucXVhbnRpdHkgLT0gMTtcbiAgICB9XG4gICAgdGhpcy5yZVJlbmRlckNhcnQoKTtcbiAgfTtcblxuICBkZWxldGVJdGVtQnlJZCA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleCgoZWxlbSkgPT4gZWxlbS5pZCA9PT0gaWQpO1xuICAgIGlmIChjb25maXJtKGBSZW1vdmUgZnJvbSBjYXJ0IGl0ZW06ICR7dGhpcy5pdGVtc1tpbmRleF0udGl0bGV9YCkpIHtcbiAgICAgIGNvbnN0IGFyciA9IFsuLi50aGlzLml0ZW1zXTtcbiAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5pdGVtcyA9IGFycjtcbiAgICAgIHRoaXMucmVSZW5kZXJDYXJ0KCk7XG4gICAgICB0aGlzLl9jaGFuZ2VIZWFkZXJJY29uKCk7XG4gICAgfVxuICB9O1xuXG4gIGFkZEl0ZW1Ub0NhcnQgPSAoaXRlbTogSUNhcnRJdGVtU3RvcmVkKSA9PiB7XG4gICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIHRoaXMuX2NoYW5nZUhlYWRlckljb24oKTtcbiAgfTtcblxuICByZW1vdmVBbGwgPSAoKSA9PiB7XG4gICAgaWYgKGNvbmZpcm0oJ0NsZWFyIGNhcnQ/JykpIHtcbiAgICAgIHRoaXMuaXRlbXMubGVuZ3RoID0gMDtcbiAgICAgIHRoaXMucmVSZW5kZXJDYXJ0KCk7XG4gICAgICB0aGlzLl9jaGFuZ2VIZWFkZXJJY29uKCk7XG4gICAgfVxuICB9O1xufVxuXG5jb25zdCBzaG9wcGluZ0NhcnQgPSBuZXcgU2hvcHBpbmdDYXJ0KCk7XG5leHBvcnQgZGVmYXVsdCBzaG9wcGluZ0NhcnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vaW5kZXguaHRtbCc7XG5pbXBvcnQgJy4uL3Byb2R1Y3RzLmh0bWwnO1xuaW1wb3J0ICcuLi9zYXNzL3N0eWxlLnNhc3MnO1xuXG5pbXBvcnQgJy4vY29tcG9uZW50L2FwcCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgZG9jdW1lbnQudGl0bGUpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=