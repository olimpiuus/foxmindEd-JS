import { ShopData } from "./getShopData"
import { Render } from "./render"
import shoppingCart from "./shopping-cart"

// not refactored 

class FilterClickHandler {

  constructor (public target:HTMLElement, public data:ShopData) {
    this._initialize()
  }

  private _activateFilter = (element:HTMLElement)=>{
    const filter = element.dataset.filter!
    if (!element.classList.contains('active')) {
      element.classList.add('active')
      this.data.addActiveFilter(filter)
      console.log(this.data.activeFilters);
    }
  }

  private _deactivateFilter = (element:HTMLElement)=>{
    const filter = element.dataset.filter!
    element.classList.remove('active')
    this.data.removeElementFromActiveFilter(filter)
    console.log(this.data.activeFilters);

    // remove active from "All" filter element
    const allBtnFilterList = element.parentElement?.firstElementChild as HTMLElement
    const btnFilter = allBtnFilterList.dataset.filter!

    if (allBtnFilterList?.classList.contains('active')) {
      allBtnFilterList?.classList.remove('active')
      this.data.removeElementFromActiveFilter(btnFilter)
    } 
  }

  private _activateFilterList = (array:Element[])=>{
    array.forEach((listItem)=>{
      if (listItem instanceof HTMLElement) {
        this._activateFilter(listItem)
      }
    })
  }
  private _deactivateFilterList = (array:Element[])=>{
    array.forEach((listItem)=>{
      if (listItem instanceof HTMLElement) {
        this._deactivateFilter(listItem)
      }
    })
  }

  private _handleClickOnFilterElement = (element:HTMLElement) => {
    
    if (element.classList.contains('active')) {

      this._deactivateFilter(element)
      
    } else {
      this._activateFilter(element)
    }
  }

  private _initialize = ()=>{
      const filter = this.target.dataset.filter!

      if (filter==='category_all'||filter==='brand_all') {

        const arrayFilters = Array.from(this.target.parentElement!.children)

        if (this.target.classList.contains('active')) {
          this._deactivateFilterList(arrayFilters)
        } else {
          this._activateFilterList(arrayFilters)
        }

      } else {
        this._handleClickOnFilterElement(this.target)
      } 
      
      
      
  }

}


export class ClickHandler {
  constructor(public data:ShopData){
    this.initialize()
  }
  updateDataAndRenderList = ()=>{
    this.data.filterList()
    new Render().renderHtmlProductsList(this.data.filteredList)
  }

  listenerForMaxPrice=()=>{
    let delay:any
    const input:HTMLInputElement = document.querySelector('.sidebar__price-range')!
    input.addEventListener('change', ()=>{
      if (delay) {clearTimeout(delay)}
      delay = setTimeout(()=>{
        const maxPrice = parseInt(input.value)
        this.data.activeFilters.maxPrice = maxPrice
        this.data.priceRange.max = maxPrice
        this.updateDataAndRenderList()
        new Render().reRenderCountersQuantities(this.data.filteredBrands,this.data.filteredCategories)
    }
        ,500)
    })
  }

  initialize = ()=>{
    this.listenerForMaxPrice()
    document.addEventListener('click', (e)=>{

      const target = e.target

      if (!(target instanceof Element)) {return}

      if (target.closest('.header__btn-cart')) {
        console.log('a');
        shoppingCart.show()

      }
      
      if (target.closest('.sidebar__filter-item')) {

        new FilterClickHandler(target as HTMLElement, this.data)
        this.updateDataAndRenderList()
        new Render().reRenderCountersQuantities(this.data.filteredBrands,this.data.filteredCategories)
      }
      
    })
    

    
  }

}