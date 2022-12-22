const theme = (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

class btnChangeMode {
  element:HTMLButtonElement
  img:{
    sun:URL,
    moon:URL
  }
  constructor(){
    this.element = document.querySelector('.header__btn-mode-block')!
    this.img = {
      sun: require ('../../assets/img/white-balance-sunny.svg'),
      moon: require ('../../assets/img/moon-waning-crescent.svg')
    }
  }
    private _renderDark = ()=>{
      this.element.innerHTML=`<img class="header__btn-img" src="${this.img.sun}" alt="">
      <button class="header__btn-mode">Light Mode</button>`
    }
    private _renderLight = ()=>{
      this.element.innerHTML=`<img class="header__btn-img" src="${this.img.moon}" alt="">
      <button class="header__btn-mode">Dark Mode</button>`
    }
    renderBtn = (theme:string)=>{
      theme==="dark"?this._renderDark():this._renderLight()
    }
}


if (theme)
    document.documentElement.setAttribute('data-theme', theme)
const btnMode = new btnChangeMode()
btnMode.renderBtn(theme)

btnMode.element.addEventListener('click', ()=>{
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme
  currentTheme === "light" ? targetTheme = "dark" : targetTheme = "light"
  btnMode.renderBtn(targetTheme!)
  document.documentElement.setAttribute('data-theme', targetTheme)
  
})
 