import { ICollectionWithCount } from './countQuantitiesUniqEntries';
import { IProduct, IMinMaxObj, ShopData } from './getShopData';

export class Render {
  list: HTMLUListElement;
  sidebar: HTMLElement;

  constructor() {
    this.list = document.querySelector('.products')!;
    this.sidebar = document.querySelector('.sidebar')!;
  }

  renderHtmlProductsList = (productArray: IProduct[]) => {
    this.list.innerHTML = '';
    productArray.forEach((elem) => {
      const { title, price, images, id } = elem;
      this.list.insertAdjacentHTML(
        'beforeend',
        `
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
    `
      );
    });
  };

  private _renderSearch = () => {
    this.sidebar.insertAdjacentHTML(
      'afterbegin',
      `
    <input class="sidebar__search" type="text" name="search" placeholder="Search..." />
    `
    );
  };

  private _renderFilterCategory = (
    filterCategoryName: string,
    filterCategoryEntries: ICollectionWithCount
  ) => {
    this.sidebar.insertAdjacentHTML(
      'beforeend',
      `
      <h3 class="sidebar__title">${filterCategoryName}</h3>
      <ul class="sidebar__filter-list" id="categoriesList${filterCategoryName}">
        <li class="sidebar__filter-item sidebar__first-list-item" data-filter="${filterCategoryName}_all">All</li>
      </ul>
      `
    );

    const listFilter = this.sidebar.querySelector(`#categoriesList${filterCategoryName}`);

    Object.entries(filterCategoryEntries).forEach(([value, quantity]) => {
      listFilter?.insertAdjacentHTML(
        'beforeend',
        `
      <li class="sidebar__filter-item" data-filter="${filterCategoryName}_${value}">${value} 
        <div class="sidebar__elem-counter">${quantity}</div>
      </li>`
      );
    });
  };

  private _renderPriceRange = (arr: IMinMaxObj) => {
    this.sidebar.insertAdjacentHTML(
      'beforeend',
      `
      <h3 class="sidebar__title">Price</h3>
      <input class="sidebar__price-range" type="range" name="price-range" max="${arr.max}" min="${arr.min}" value="${arr.max}"/>
      <data class="sidebar__filter-max-price">Max price: $${arr.max}</data>
      `
    );
    const priceRangeINput: HTMLInputElement | null =
      this.sidebar.querySelector('.sidebar__price-range');
    const priceRangeData = this.sidebar.querySelector('.sidebar__filter-max-price')!;

    priceRangeINput?.addEventListener('mousemove', () => {
      priceRangeData.textContent = `Max price: $${priceRangeINput.value} `;
    });
  };

  renderSideBar = (data: ShopData) => {
    this._renderSearch();

    Object.entries(data.filters).forEach((filter) => {
      const [filterType, filterValue] = filter;
      this._renderFilterCategory(filterType, filterValue);
    });

    this._renderPriceRange(data.priceRange);
  };

  reRenderCountersQuantities = (brands: ICollectionWithCount, categories: ICollectionWithCount) => {
    const nodeListOfCounters = this.sidebar.querySelectorAll('.sidebar__elem-counter');
    nodeListOfCounters.forEach((counter) => {
      const [filterType, filterValue] = counter.parentElement!.dataset.filter!.split('_')!;
      if (filterType === 'category') {
        const filterTypeAndCount = Object.entries(categories).find(
          (category) => category[0] === filterValue
        );
        if (filterTypeAndCount) {
          counter.textContent = filterTypeAndCount[1].toString();
          counter.parentElement!.classList.remove('deactivated');
        } else {
          counter.textContent = '0';
          counter.parentElement!.classList.add('deactivated');
        }
      }
      if (filterType === 'brand') {
        const filterTypeAndCount = Object.entries(brands).find((brand) => brand[0] === filterValue);
        if (filterTypeAndCount) {
          counter.textContent = filterTypeAndCount[1].toString();
          counter.parentElement!.classList.remove('deactivated');
        } else {
          counter.textContent = '0';
          counter.parentElement!.classList.add('deactivated');
        }
      }
    });
  };
}
