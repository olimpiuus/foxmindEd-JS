import request from "./getData"
import select from "./select"

class Search {
  element:HTMLInputElement
  options:HTMLUListElement
  
  constructor(){
    this.element = document.querySelector('.search__input')!
    this.options = document.querySelector('.search__options')!
    this._updateDom()
  }

  private _getValue = ()=>{
    if (select.element.value==='All'||select.element.value==='Initial') {
      return request.getSearchResults(this.element.value)
    } else {
      const searchLetters = this.element.value.split('')
      const countries = select.getSelectedCountries.filter(country=>{
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

const search = new Search()

export default  search