import Country from "./country"
import request from "./getData"
import renderFn from "./renderList"

class Select {
  element:HTMLSelectElement
  private _selectChoice: string|null
  getSelectedCountries: Country[]

  constructor(){
    this.element = document.querySelector('.search__select-region')!
    this._selectChoice = null
    this.getSelectedCountries=[]
    this._selectListener()
  }
  private _selectListener = ()=>{
    this.element.addEventListener('change', async ()=>{
      this._selectChoice = this.element.value
      if (this._selectChoice==="All") {
        this.getSelectedCountries = await request.getAllCountries()
      } else {
        this.getSelectedCountries = await request.getCountiesFromRegionsRequest(this._selectChoice)
      }
      renderFn.addArrayCountries(this.getSelectedCountries)
    })
  }
}
const select = new Select()
export default select