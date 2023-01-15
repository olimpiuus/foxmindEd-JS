class BurgerHandler {
  private _burger:HTMLElement = document.querySelector('.header__burger')!
  private _menu:HTMLElement = document.querySelector('.header__nav-links-list')!

  show = ()=>{
    this._menu.classList.add('visible')
    document.addEventListener('click', this.hide)
  }
  
  hide = (e:Event)=>{
    const target = e.target! as HTMLElement;
      if (!target.classList.contains('header__nav-links-list')) {
        this._menu.classList.remove('visible')
        document.removeEventListener('click',this.hide)
      }
    
  }
}
export const burgerHandler = new BurgerHandler()