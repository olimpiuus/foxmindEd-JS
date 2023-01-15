import { ShopData } from './getShopData';
import {renderFn } from './render';
import shoppingCart from './shoppingCart';



class FilterClickHandler {
  constructor(public target: HTMLElement, public data: ShopData) {
    this._initialize();
  }

  private _activateFilter = (element: HTMLElement) => {
    const filter = element.dataset.filter!;
    if (!element.classList.contains('active')) {
      element.classList.add('active');
      this.data.addActiveFilter(filter);
    }
  };

  private _deactivateFilter = (element: HTMLElement) => {
    const filter = element.dataset.filter!;
    element.classList.remove('active');
    this.data.removeElementFromActiveFilter(filter);

    // remove active from "All" value filter element
    const allBtnFilterList = element.parentElement?.firstElementChild as HTMLElement;
    const btnFilter = allBtnFilterList.dataset.filter!;

    if (allBtnFilterList?.classList.contains('active')) {
      allBtnFilterList?.classList.remove('active');
      this.data.removeElementFromActiveFilter(btnFilter);
    }
  };


  private _activateFilterList = (array: Element[]) => {
    array.forEach((listItem) => {
      if (listItem instanceof HTMLElement) {
        this._activateFilter(listItem);
      }
    });
  };
  private _deactivateFilterList = (array: Element[]) => {
    array.forEach((listItem) => {
      if (listItem instanceof HTMLElement) {
        this._deactivateFilter(listItem);
      }
    });
  };

  private _handleClickOnFilterElement = (element: HTMLElement) => {
    if (element.classList.contains('active')) {
      this._deactivateFilter(element);
    } else {
      this._activateFilter(element);
    }
  };

  private _initialize = () => {
    const filter = this.target.dataset.filter!;

    if (filter === 'category_all' || filter === 'brand_all') {
      const arrayFilters = Array.from(this.target.parentElement!.children);

      if (this.target.classList.contains('active')) {
        this._deactivateFilterList(arrayFilters);
      } else {
        this._activateFilterList(arrayFilters);
      }
    } else {
      this._handleClickOnFilterElement(this.target);
    }
  };
}

export class ClickHandler {
  constructor(public data: ShopData) {
    this.initialize();
  }
  updateDataAndRenderList = () => {
    this.data.filterList();
    renderFn.renderHtmlProductsList(this.data.filteredList);
  };

  listenerForMaxPrice = () => {
    let delay: NodeJS.Timeout;
    const input: HTMLInputElement = document.querySelector('.sidebar__price-range')!;
    input.addEventListener('change', () => {
      if (delay) {
        clearTimeout(delay);
      }
      delay = setTimeout(() => {
        const maxPrice = parseInt(input.value);
        this.data.activeFilters.maxPrice = maxPrice;
        this.data.priceRange.max = maxPrice;
        this.updateDataAndRenderList();
        renderFn.renderSideBar.reRenderCountersQuantities(
          this.data.filteredBrands,
          this.data.filteredCategories
        );
      }, 500);
    });
  };

  listenerForSearch =()=>{
    let delay: NodeJS.Timeout;
    const input: HTMLInputElement = document.querySelector('.sidebar__search')!;
    input.addEventListener('keydown', () => {
      if (delay) {
        clearTimeout(delay);
      }
      delay = setTimeout(() => {
        const search = input.value;
        this.data.activeFilters.search = search;
        this.updateDataAndRenderList();
        renderFn.renderSideBar.reRenderCountersQuantities(
          this.data.filteredBrands,
          this.data.filteredCategories
        );
      }, 500);
    });
  }

  initialize = () => {

    if (document.title==='Products') {
      this.listenerForMaxPrice();
      this.listenerForSearch()
    }

    document.addEventListener('click', (e) => {
      const target = e.target;
      console.log(target);
      if (!(target instanceof Element)) {
        return;
      }

      if (target.closest('.header__btn-cart')) {
        shoppingCart.showShoppingCart();
      }

      if (target.closest('.sidebar__filter-item')) {
        new FilterClickHandler(target as HTMLElement, this.data);
        this.updateDataAndRenderList();
        renderFn.renderSideBar.reRenderCountersQuantities(
          this.data.filteredBrands,
          this.data.filteredCategories
        );
      }

      // ========Shopping cart ======================

      const getShoppingCartItemId = () => {
        const item = target.closest('.shopping-cart__item')! as HTMLElement;
        return parseInt(item.dataset.id!);
      };

      if (target.closest('.shopping-item__btn-cart__img')) {
        const parentElement = target.closest('.products__item')! as HTMLElement;
        const id = parseInt(parentElement.dataset.id!);
        // if item not found in cart add return false, and add item
        if (!shoppingCart.addQuantityToItem(id)) {
          const itemPropsForCart = this.data.getItemById(id);
          shoppingCart.addItemToCart(itemPropsForCart);
        }
      }

      if (target.closest('.shopping-item__btn_add-item')) {
        const id = getShoppingCartItemId();
        shoppingCart.addQuantityToItem(id);
      }

      if (target.closest('.shopping-item__btn_reduce-item')) {
        const id = getShoppingCartItemId();
        shoppingCart.reduceItemFromCartByID(id);
      }

      if (target.closest('.shopping-item__btn_remove')) {
        const id = getShoppingCartItemId();
        shoppingCart.deleteItemById(id);
      }

      if (target.closest('.shopping-cart__btn-remove-all')) {
        shoppingCart.removeAll();
      }
    });
  };
}
