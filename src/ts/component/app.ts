import dataShop, { IProduct } from "./getShopData";

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
  renderFilterCategories = (obj:Object)=>{
    this.sidebar.innerHTML=""
    Object.entries(obj).forEach(prop=>{
      // 
    })
    
  }
}

(async () => {
  await dataShop.initialize()
  new Render().renderHtmlProductsList(dataShop.list!)
  new Render().renderFilterCategories(dataShop.filters)
})()



