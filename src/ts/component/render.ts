import { ICollectionWithCount } from "./countQuantitiesUniqEntries";
import { IProduct, IMinMaxObj, ShopData } from "./getShopData";

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
        <data class="shopping-item__price-value" value="${price}">$${price}</data>
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

  private _renderFilterCategory = (name: string, values: ICollectionWithCount) => {
    this.sidebar.insertAdjacentHTML(
      'beforeend',
      `
      <h3 class="sidebar__title">${name}</h3>
      <ul class="sidebar__filter-list" id="categoriesList${name}">
        <li class="sidebar__filter-item">All</li>
      </ul>
      `
    );

    const listFilter = this.sidebar.querySelector(`#categoriesList${name}`);

    Object.entries(values).forEach(([value,quantity]) => {
      listFilter?.insertAdjacentHTML(
        'beforeend',
        `
      <li class="sidebar__filter-item" data-filter="${name}_${value}">${value} 
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
    const priceRangeINput:HTMLInputElement|null = this.sidebar.querySelector('.sidebar__price-range')
    const priceRangeData = this.sidebar.querySelector('.sidebar__filter-max-price')!
    priceRangeINput?.addEventListener('mousemove', ()=>{
      priceRangeData.textContent = `Max price: $${priceRangeINput.value} `
    })
  };

  renderSideBar = (data: ShopData) => {
    this._renderSearch();

    Object.entries(data.filters).forEach((prop) => {
      const [name, value] = prop;
      this._renderFilterCategory(name, value);
    });
    this._renderPriceRange(data.priceRange);
  };

}