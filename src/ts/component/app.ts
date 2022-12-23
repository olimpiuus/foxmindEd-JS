import Country from "./country"
import request from "./getData"
import renderFn from "./renderList"


class App {
  element:HTMLInputElement
  options:HTMLUListElement
  select:HTMLSelectElement
  private _selectChoice: string|null
  private _selectRegion: Country[]
  constructor(){
    this.element = document.querySelector('.search__input')!
    this.options = document.querySelector('.search__options')!
    this.select = document.querySelector('.search__select-region')!
    this._selectChoice = null
    this._selectRegion=[]
    this._updateDom()
    this._selectListener()
  }

  private _selectListener = ()=>{
    this.select.addEventListener('change', async ()=>{
      this._selectChoice = this.select.value
      if (this._selectChoice==="All") {
        this._selectRegion = await request.getAllCountries()
      } else {
        this._selectRegion = await request.getCountiesFromRegionsRequest(this._selectChoice)
      }
      renderFn.addArrayCountries(this._selectRegion)
    })
  }

  private _getValue = ()=>{
    if (this.select.value==='All'||this.select.value==='Initial') {
      return request.getSearchResults(this.element.value)
    } else {
      const searchLetters = this.element.value.split('')
      const countries = this._selectRegion.filter(country=>{
        let check = true
        const name = country.name.split('')
        searchLetters.forEach(letter=>{
          const index = name.findIndex(el=>el===letter)
          if (index!==-1) {name.splice(index,1)} else {check=false}
        })
        return check
      })
      return countries.map(country=>country.name)
    }
  } 

  private _addOption = (value:string)=>{
    this.options.insertAdjacentHTML("beforeend", `
    <div class="search__option">${value}</div>
  `)
  }

  clearOptions = ()=>this.options.innerHTML=''

  private _updateDom = async ()=>{
    let delay: NodeJS.Timeout
    this.element.addEventListener('keyup', ()=>{

      if (delay) {clearTimeout(delay)}
      delay = setTimeout(async ()=>{
        this.clearOptions()
        try {          
          const searchValues = await this._getValue()
          searchValues.forEach(el=>this._addOption(el))
          }
        catch(error){
          this.clearOptions()
          this._addOption('Country not found')
          }
          if (this.element.value==='') { this.clearOptions()}
        }
          ,500)
      })
  }
}

const search = new App()

export default  search