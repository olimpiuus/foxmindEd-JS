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

  private _renderFilterCategory = (filterCategoryName: string, filterCategoryEntries: ICollectionWithCount) => {
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

    Object.entries(filterCategoryEntries).forEach(([value,quantity]) => {
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
    const priceRangeINput:HTMLInputElement|null = this.sidebar.querySelector('.sidebar__price-range')
    const priceRangeData = this.sidebar.querySelector('.sidebar__filter-max-price')!
    
    priceRangeINput?.addEventListener('mousemove', ()=>{
      priceRangeData.textContent = `Max price: $${priceRangeINput.value} `
    })

    
  };

  renderSideBar = (data: ShopData) => {
    this._renderSearch();

    Object.entries(data.filters).forEach((filter) => {
      const [filterType, filterValue] = filter;
      this._renderFilterCategory(filterType, filterValue);
    });
    
    this._renderPriceRange(data.priceRange);
  };

  reRenderCountersQuantities = (brands:ICollectionWithCount, categories:ICollectionWithCount)=>{
    const nodeListOfCounters = this.sidebar.querySelectorAll('.sidebar__elem-counter')
    nodeListOfCounters.forEach(counter=>{
      const [filterType, filterValue] = counter.parentElement?.dataset.filter?.split('_')!
      if (filterType==='category') {
        const filterTypeAndCount = Object.entries(categories).find(category=>category[0]===filterValue)
        if (filterTypeAndCount) {
          counter.textContent=filterTypeAndCount[1].toString()
          counter.parentElement!.classList.remove('deactivated')
        } else {
          counter.textContent='0'
          counter.parentElement!.classList.add('deactivated')
          
        }
      } 
      if (filterType==='brand') {
        const filterTypeAndCount = Object.entries(brands).find(brand=>brand[0]===filterValue)
        if (filterTypeAndCount) {
          counter.textContent=filterTypeAndCount[1].toString()
          counter.parentElement!.classList.remove('deactivated')
        } else {
          counter.textContent='0'
          counter.parentElement!.classList.add('deactivated')
        }
      } 
      
    })
    console.log();
    
  }

}