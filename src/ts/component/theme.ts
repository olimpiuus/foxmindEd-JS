
class btnChangeMode {
  element:HTMLButtonElement
  img:{
    sun:URL,
    moon:URL
  }
  _customerTheme : string
  constructor(){
    this.element = document.querySelector('.header__btn-mode-block')!
    this.img = {
      sun: require ('../../assets/img/white-balance-sunny.svg'),
      moon: require ('../../assets/img/moon-waning-crescent.svg')
    }
    this._customerTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    this._initialize()
  }

    private _renderDark = ()=>{
      this.element.innerHTML=`<img class="header__btn-img" src="${this.img.sun}" alt="">
      <button class="header__btn-mode">Light Mode</button>`
    }
    private _renderLight = ()=>{
      this.element.innerHTML=`<img class="header__btn-img" src="${this.img.moon}" alt="">
      <button class="header__btn-mode">Dark Mode</button>`
    }
    private _renderBtn = ()=>{
      this._customerTheme==="dark"?this._renderDark():this._renderLight()
    }
    private _initialize = ()=>{
      document.documentElement.setAttribute('data-theme', this._customerTheme )
      this._renderBtn()
    }
    changeTheme = ()=>{
      let targetTheme
      this._customerTheme === "light" ? targetTheme = "dark" : targetTheme = "light"
      document.documentElement.setAttribute('data-theme', targetTheme)
      this._customerTheme = targetTheme
      btnMode._renderBtn()
    }
}

const btnMode = new btnChangeMode()

export default btnMode
