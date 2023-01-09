
import { getDataArr, ShopData } from './getShopData';
import { Render } from './render';




(async () => {
  const data = new ShopData(await getDataArr());

  class FilterClickHandler {

    constructor (public target:HTMLElement) {
      this._initialize()
    }

    private _activateFilter = (element:HTMLElement)=>{
      const filter = element.dataset.filter!
      if (!element.classList.contains('active')) {
        element.classList.add('active')
        data.addActiveFilter(filter)
        console.log(data.activeFilters);
      }
    }

    private _deactivateFilter = (element:HTMLElement)=>{
      const filter = element.dataset.filter!
      element.classList.remove('active')
      data.removeElementFromActiveFilter(filter)
      console.log(data.activeFilters);

      // remove active from "All" filter element
      const allBtnFilterList = element.parentElement?.firstElementChild as HTMLElement
      const btnFilter = allBtnFilterList.dataset.filter!

      if (allBtnFilterList?.classList.contains('active')) {
        allBtnFilterList?.classList.remove('active')
        data.removeElementFromActiveFilter(btnFilter)
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

  class ClickHandler {
    constructor(){
      this.initialize()
    }
    updateDataAndRenderList = ()=>{
      data.filterList()
      new Render().renderHtmlProductsList(data.filteredList)
    }

    listenerForMaxPrice=()=>{
      let delay:any
      const input:HTMLInputElement = document.querySelector('.sidebar__price-range')!
      input.addEventListener('change', ()=>{
        if (delay) {clearTimeout(delay)}
        delay = setTimeout(()=>{
          const maxPrice = parseInt(input.value)
          data.activeFilters.maxPrice = maxPrice
          data.priceRange.max = maxPrice
          this.updateDataAndRenderList()
      }
          ,500)
      })
    }

    initialize = ()=>{
      this.listenerForMaxPrice()
      document.addEventListener('click', (e)=>{
        const target = e.target
        if (!(target instanceof HTMLElement)) {return}
        if (target.closest('.sidebar__filter-item')) {
          new FilterClickHandler(target)
          this.updateDataAndRenderList()
         
        }
      })
      

      
    }
  
  }

  new Render().renderHtmlProductsList(data.list!);
  new Render().renderSideBar(data);
  new ClickHandler()


})();
