
class CityChoice {
  _id:number
  fullLocationName: string
  searchOptions:  Element 
  constructor (obj:any, searchOptions:Element, id:number) {
    this.fullLocationName = obj.name+', '+ obj.state + ', ' +obj.country
    if (!obj.state) {this.fullLocationName = obj.name+', ' +obj.country}
    this.searchOptions= searchOptions
    this._id = id
  }

  addToHtml = ()=>{
    const choice = document.createElement('li')
    choice.classList.add('search__option')
    choice.textContent = this.fullLocationName
    this.searchOptions.append(choice)
    choice.dataset.id = this._id.toString()
  }
}

class SelectedCity {
  obj: any
  fullName:string
  shortName:string

  constructor(obj:any){
    this.obj=obj
    this.fullName = obj.name+', '+ obj.state + ', ' +obj.country
    this.shortName = obj.name+', ' +obj.country
    if (!obj.state ) {this.fullName=this.shortName}
  }
  
  getLocation = ()=>{
    const lat = this.obj.lat
    const lon = this.obj.lon
    return {lat,lon}
  }
}

class Search {

  input: HTMLInputElement  
  options: HTMLElement
  cities: object[]
  
  constructor () {
    this.input  = document.querySelector('#searchLocation')!
    this.options = document.querySelector('.search__options')!
    this.cities = []
  }

  private _getCity = async (city: string)=>{
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=c5f264c664d81a1e7be32d965a4fa209`)
    const answer = await response.json()
    return answer
  }

  private _addDataListToSearch = (cities:object[])=>{

    const fillChoices = ()=>{
      this.options.innerHTML=''
      cities.forEach((city, index)=>{
        const cityChoice =  new CityChoice(city, this.options, index)
        cityChoice.addToHtml()
      })
    }

    this._clearSearch
    this.options.style.display = 'block'
    fillChoices()
  }

  private _clearSearch = ()=>{
    this.options.innerHTML=''
  }
  private _hideSearch = ()=>{
    this.options.style.display = 'none'
  }

  clearAndHideSearch = ()=>{
    this._clearSearch()
    this._hideSearch()
  }

  startSearchFn = ()=> {
    
    let delay:any
    let searchValue
    this.input.addEventListener('keyup', ()=>{
    if (delay) {clearTimeout(delay)}
    
    delay = setTimeout(async ()=>{
      searchValue = this.input.value
      const cities = await this._getCity(searchValue)
      this._addDataListToSearch(cities)
      this.cities = cities
      }
        ,500)
    })
  }
}

class ForecastDay {
  date: number
  minTemps: number[]
  maxTemps: number[]
  icons: string[]
  descriptions: string[]

  constructor(obj:any, date:number) {
    
    this.date = date
    this.minTemps =[obj.main.temp_min]
    this.maxTemps = [obj.main.temp_max]
    this.icons= [obj.weather[0].icon]
    this.descriptions = [obj.weather[0].main]
  }
  addInfo = (extra:any)=>{
    this.minTemps.push(extra.main.temp_min)
    this.maxTemps.push(extra.main.temp_max)
    this.icons.push(extra.weather[0].icon)
    this.descriptions.push(extra.weather[0].main)
  }

  private _mostFrequentValue =(arr:any[])=>{
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
  }

  getRenderValues = ()=>{
    const icon = this._mostFrequentValue(this.icons)
    const description = this._mostFrequentValue(this.descriptions)
    const minTemp = Math.min(...this.minTemps)
    const maxTemp = Math.max(...this.maxTemps)
    return {
     icon,
     description,
     minTemp,
     maxTemp
    }
  }
}

class ForecastDays {
  // list: Array<ForecastDay> problem occurs at string #177
  list: Array<any>
  constructor() {this.list = []}

    #getDayOfDate = (dateText:string)=>{
      const date = new Date(dateText)
      const day = date.getDate()
      return day
    }

    #checkForSameDate = (date:number)=>{
      let state = false
      this.list.forEach((elem:ForecastDay)=>{
        if (elem.date===date) {state = true}
      })
      return state
    }

    #addNewDay = (obj:any)=>{
      const forecastDay = new ForecastDay(obj, this.#getDayOfDate(obj.dt_txt))
      this.list.push(forecastDay)
    }

    #addToExistingDay= (date:number, obj:any)=>{
      if (this.list.length===1) {
        this.list[0].addInfo(obj)
      } else {
        let dayIndex:number
        dayIndex = this.list.reduce((_accumulator, elem, index)=>{
          if (elem.date===date) {
            return index
          }
        })
        this.list[dayIndex].addInfo(obj)
      }
    }

    addForecastDay = (obj:any)=>{
      const objDate = this.#getDayOfDate(obj.dt_txt)
      const today = new Date().getDate()
      if (objDate===today) {return}
      if (this.#checkForSameDate(objDate)) {
        this.#addToExistingDay(objDate, obj)
      } else {
        this.#addNewDay(obj)
      }
    }

}

class GetWeatherObjts {

  weatherNow = async (location:{lat:number,lon:number}) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=c5f264c664d81a1e7be32d965a4fa209`)
    const answer = await response.json()
    return answer
  }
    
  weatherFuture = async (location:{lat:number,lon:number})=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=c5f264c664d81a1e7be32d965a4fa209`)
    const answer = await response.json()
    
    const forecast = new ForecastDays

    answer.list.forEach((element:ForecastDays) => {
      forecast.addForecastDay(element)
    })
    return  forecast.list
  }
}

class RenderWeather {
  weatherNowHtml: HTMLElement
  weatherFutureHtml: HTMLElement

  constructor(){
    this.weatherNowHtml = document.querySelector('.weather__now')!
    this.weatherFutureHtml = document.querySelector('.weather__days-list')!

  }

  private _transformTemp = (temp:number)  => (temp - 273).toFixed(0)

  private _getWeekday = (index:number) => {
    const nameWeekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const today = new Date().getDay()
    const futureWeekDay = (today+index+1)%7
    return nameWeekDays[futureWeekDay]
  }

  renderWeatherNow = (weatherNowObj:any, locationName:string) =>{
    const imgId = weatherNowObj.weather[0].icon
    const descriptionWeather = weatherNowObj.weather[0].main
    const imgURL = "http://openweathermap.org/img/w/" + imgId + ".png"
    this.weatherNowHtml.innerHTML=''
    this.weatherNowHtml.insertAdjacentHTML("afterbegin", `
      <div class="now__temperature">
        <span class="now__temperature_real">${this._transformTemp(weatherNowObj.main.temp)}°C</span>
        <p class="now__temperature_feels">Feels like <span id="feelsLikeTemp">${this._transformTemp(weatherNowObj.main.feels_like)}°C</span></p>
      </div>
      <div class="now__weather">
        <div class="now__text-weather">${descriptionWeather}</div>
        <div class="now__location">${locationName}</div>
      </div>
      <img class="now__img" src="${imgURL}" alt="${descriptionWeather}">
    `)
  }

  renderFutureWeather = (weatherFutureArr: ForecastDays["list"]) => {
    this.weatherFutureHtml.innerHTML = ''
    weatherFutureArr.forEach((day, index) => {
      const values = day.getRenderValues()
      const imgId = values.icon
      const imgURL = "http://openweathermap.org/img/w/" + imgId + ".png"
      const descriptionWeather = values.description
      this.weatherFutureHtml.insertAdjacentHTML('beforeend', `
      <li class="weather__next-day next-day">
        <span class="next-day__text">${this._getWeekday(index)}</span>
        <figure class="next-day__weather-description">
            <img class="weather-description__img" src="${imgURL}" alt="${descriptionWeather}" >
            <figcaption class="weather-description__text">${descriptionWeather}</figcaption>
        </figure>
        <div class="next-day__temp-block">
            <span class="next-day__temp-max">${this._transformTemp(values.maxTemp)}°C</span>
            <span class="next-day__temp-min">${this._transformTemp(values.minTemp)}°C</span>
        </div>
      </li>
      `)
    })
  }
}

class WeatherApi {
  
  search:Search
  render:RenderWeather
  weatherInfo:GetWeatherObjts
  constructor (){
    this.search = new  Search
    this.render = new RenderWeather
    this.weatherInfo = new GetWeatherObjts
  }

  start = ()=>{
    const selectedLocation = document.querySelector('#selectedCity')!

    this.search.startSearchFn()
    this.search.options.addEventListener('click',  async (e:Event)=> {
      if (!(e.target instanceof HTMLElement)) {return}

      const element:HTMLElement = e.target!
      const elementId:number = parseInt(element.dataset.id!)
      const cityObj = this.search.cities[elementId]

      const selectedCity = new SelectedCity(cityObj)

      this.search.input.value = selectedCity.fullName
      selectedLocation.textContent = selectedCity.fullName

      const weatherNow = await this.weatherInfo.weatherNow(selectedCity.getLocation())
      this.search.clearAndHideSearch()
      this.render.renderWeatherNow(weatherNow,selectedCity.shortName)
      const futureWeather = await this.weatherInfo.weatherFuture(selectedCity.getLocation())
      this.render.renderFutureWeather(futureWeather)
    })
  }

}

const weather = new WeatherApi
weather.start()




