
class FilterHandler {
  private _filterBtn:HTMLElement = document.querySelector('.site-location__filter')!
  private _filterMenu:HTMLElement = document.querySelector('.sidebar')!
  private _productList:HTMLElement = document.querySelector('.products')!

  show = ()=>{
    this._filterMenu.classList.remove('mobile-hidden')
    this._filterMenu.classList.add('mobile-visible')
    this._productList.classList.remove('mobile-visible')
    this._productList.classList.add('mobile-hidden')
    document.addEventListener('click', this.hide)
  }
  
  hide = (e:Event)=>{
    const target = e.target! as HTMLElement;
    if (!target.closest('main')) {
      this._filterMenu.classList.remove('mobile-visible')
      this._filterMenu.classList.add('mobile-hidden')
      this._productList.classList.remove('mobile-hidden')
      this._productList.classList.add('mobile-visible')
      document.removeEventListener('click',this.hide)
    }
    
  }
}
export const filterHandler = new FilterHandler()