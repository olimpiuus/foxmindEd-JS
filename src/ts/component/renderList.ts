import Country from "./country"

export default class RenderList {
  list:HTMLElement
  constructor (){
    this.list = document.querySelector('.countries__list')!
  }
  clearList = ()=>{
    this.list.innerHTML = ''
  }
  addCountry = ({name, population,region,capital,img}:Country)=>{
    this.list.insertAdjacentHTML('beforeend', `
    <li class="countries__country-item country">
        <img src="${img}" alt="" class="country__flag">
        <div class="country__description">
            <h3 class="country__title">${name}</h3>
            <p class="country__info"><b>Population:</b>${population}</p>
            <p class="country__info"><b>Region:</b> ${region}</p>
            <p class="country__info"><b>Capital:</b> ${capital}</p>
        </div>
    </li>`)
  }
  addArrayCountries = (arr:Country[])=>{
    this.clearList()
    arr.forEach(el=>this.addCountry(el))
  }
}