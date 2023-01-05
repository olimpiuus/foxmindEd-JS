import dataShop, { IMinMaxObj, IProduct, ShopData } from './getShopData';

console.log(dataShop);

class Render {
  list: HTMLUListElement;
  sidebar: HTMLElement;

  constructor() {
    this.list = document.querySelector('.products')!;
    this.sidebar = document.querySelector('.sidebar')!;
  }

  renderHtmlProductsList = (productArray: IProduct[]) => {
    this.list.innerHTML = '';
    productArray.forEach((elem) => {
      const { title, price, images } = elem;
      this.list.insertAdjacentHTML(
        'beforeend',
        `
      <li class="products__item shopping-item">
        <img src="${images[0]}" alt="" class="shopping-item__img">
        <h3 class="shopping-item__name">${title}</h3>
        <data class="shopping-item__price-value" value="${price}">$${price}</data>
      </li>
    `
      );
    });
  };

  private _renderSearch = ()=>{
    this.sidebar.insertAdjacentHTML('afterbegin', `
    <input class="sidebar__search" type="text" name="search" placeholder="Search..." />
    `)
  }

  private _renderFilterCategory = (name:string, values:string[])=>{
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
    values.forEach((value) => {
      listFilter?.insertAdjacentHTML(
        'beforeend',
        `
      <li class="sidebar__filter-item">${value}</li>`
      );
    });
  }

  private _renderPriceRange = (arr:IMinMaxObj)=>{
    this.sidebar.insertAdjacentHTML(
      'beforeend',
      `
      <h3 class="sidebar__title">Price</h3>
      <input class="sidebar__price-range" type="range" name="price-range" max="${arr.max}" min="${arr.min}" />
      <data class="sidebar__filter-max-price">Value : $80</data>
      `
    );
  }

  renderSideBar = (data: ShopData) => {
    this._renderSearch()

    Object.entries(data.filters).forEach((prop) => {
      const [name, value] = prop;
      this._renderFilterCategory(name,value)
    });
    this._renderPriceRange(data.priceRange)
  };
}

(async () => {
  await dataShop.initialize();
  new Render().renderHtmlProductsList(dataShop.list!);
  new Render().renderSideBar(dataShop);
})();
