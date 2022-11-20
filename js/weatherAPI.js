

const weatherApi = (()=>{
  const apiKey = 'c5f264c664d81a1e7be32d965a4fa209'
  const apiCallLocationSearch = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'
  const apiCallCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

  const selectedLocation = document.querySelector('#selectedCity')


  class Search {
    constructor () {
      this.input = document.querySelector('#searchLocation')
      this.options = document.querySelector('.search__options')
    }

    #getCity = async (city)=>{
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=c5f264c664d81a1e7be32d965a4fa209`)
      const answer = await response.json()
      return answer
    }

    #addDataListToSearch = (cities)=>{

      class CityChoice {
        #id
        constructor (obj, searchOptions, id) {
          this.fullLocationName = obj.name+', '+ obj.state + ', ' +obj.country
          if (!obj.state) {this.fullLocationName = obj.name+', ' +obj.country}
          this.searchOptions= searchOptions
          this.#id = id
        }
        addToHtml = ()=>{
          const choice = document.createElement('li')
          choice.classList.add('search__option')
          choice.textContent = this.fullLocationName
          this.searchOptions.append(choice)
          choice.dataset.id = this.#id
        }
      }

      const fillChoices = ()=>{
        this.options.innerHTML=''
        cities.forEach((city, index)=>{
          const cityChoice =  new CityChoice(city, this.options, index)
          cityChoice.addToHtml()
        })
      }

      this.#clearSearch
      this.options.style.display = 'block'
      fillChoices()
    }

    #clearSearch = ()=>{
      this.options.innerHTML=''
    }
    #hideSearch = ()=>{
      this.options.style.display = 'none'
    }

    clearAndHideSearch = ()=>{
      this.#clearSearch()
      this.#hideSearch()
    }

    startSearchFn = ()=> {
      let delay
      let searchValue
      this.input.addEventListener('keyup', ()=>{
      if (delay) {clearTimeout(delay)}
      
      delay = setTimeout(async ()=>{
        searchValue = this.input.value
        const cities = await this.#getCity(searchValue)
        this.#addDataListToSearch(cities)
        this.cities = cities
        }
          ,500)
      })
    }
  }

  const search = new Search
  search.startSearchFn()

  const renderWeather = ()=>{

    class SelectedCity {
      constructor(obj){
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

    const weatherNow = document.querySelector('.weather__now')
    const weatherFuture = document.querySelector('.weather__days-list')
    const nameWeekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

    const transfomTemp = temp=> (temp - 273).toFixed(0)

    const getWeatherNow = async (location) => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=c5f264c664d81a1e7be32d965a4fa209`)
      const answer = await response.json()
      return answer
    }

    const getWeatherFuture = async (location)=>{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=c5f264c664d81a1e7be32d965a4fa209`)
      const answer = await response.json()
      class ForecastDays {
        constructor() {this.list = []}

          #getDayOfDate = (dateText)=>{
            const date = new Date(dateText)
            const day = date.getDate()
            return day
          }

          #checkForSameDate = (date)=>{
            let state = false
            this.list.forEach(elem=>{
              if (elem.date===date) {state = true}
            })
            return state
          }

          #addNewDay = (obj)=>{

            class ForecastDay {
              constructor(obj, date) {
                this.date = date
                this.minTemps =[obj.main.temp_min]
                this.maxTemps = [obj.main.temp_max]
                this.icons= [obj.weather[0].icon]
                this.descriptions = [obj.weather[0].main]
              }
              addInfo = (extra)=>{
                this.minTemps.push(extra.main.temp_min)
                this.maxTemps.push(extra.main.temp_max)
                this.icons.push(extra.weather[0].icon)
                this.descriptions.push(extra.weather[0].main)
              }
              #mostFrequentValue =(arr)=>{
                return arr.sort((a,b) =>
                      arr.filter(v => v===a).length
                    - arr.filter(v => v===b).length
                ).pop();
              }
              getRenderValues = ()=>{
                const icon = this.#mostFrequentValue(this.icons)
                const description = this.#mostFrequentValue(this.descriptions)
                const minTemp = transfomTemp(Math.min(...this.minTemps))
                const maxTemp = transfomTemp(Math.max(...this.maxTemps))
                return {
                 icon,
                 description,
                 minTemp,
                 maxTemp
                }
              }
            }
            const forecastDay = new ForecastDay(obj, this.#getDayOfDate(obj.dt_txt))
            this.list.push(forecastDay)
          }

          #addToExistingDay= (date, obj)=>{
            if (this.list.length===1) {
              this.list[0].addInfo(obj)
            } else {
              const dayIndex = this.list.reduce((accumulator, elem, index)=>{
                if (elem.date===date) {
                  return index
                }
              })
              this.list[dayIndex].addInfo(obj)
            }
          }

          addForecatsDay = (obj)=>{
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

      const forecast = new ForecastDays

      answer.list.forEach(element => {
        forecast.addForecatsDay(element)
      })
      return  forecast.list
    }

    const getWeekday = (index) => {
      const today = new Date().getDay()
      const futureWeekDay = (today+index+1)%7
      return nameWeekDays[futureWeekDay]
    }

    const renderWeatherNow = (weatherNowObj, locationName) =>{
      const imgId = weatherNowObj.weather[0].icon
      const descriptionWeather = weatherNowObj.weather[0].main
      const imgURL = "http://openweathermap.org/img/w/" + imgId + ".png"
      weatherNow.innerHTML=''
      weatherNow.insertAdjacentHTML("afterbegin", `
        <div class="now__temperature">
          <span class="now__temperature_real">${transfomTemp(weatherNowObj.main.temp)}°C</span>
          <p class="now__temperature_feels">Feels like <span id="feelsLikeTemp">${transfomTemp(weatherNowObj.main.feels_like)}°C</span></p>
        </div>
        <div class="now__weather">
          <div class="now__text-weather">${descriptionWeather}</div>
          <div class="now__location">${locationName}</div>
        </div>
        <img class="now__img" src="${imgURL}" alt="${descriptionWeather}">
      `)
    }

    const renderFutureWeather = (weatherFutureArr)=>{
      weatherFuture.innerHTML=''
      weatherFutureArr.forEach((day,index)=>{
        const values = day.getRenderValues()
        const imgId = values.icon
        const imgURL = "http://openweathermap.org/img/w/" + imgId + ".png"
        const descriptionWeather = values.description
        weatherFuture.insertAdjacentHTML('beforeend', `
        <li class="weather__next-day next-day">
          <span class="next-day__text">${getWeekday(index)}</span>
          <figure class="next-day__weather-description">
              <img class="weather-description__img" src="${imgURL}" alt="${descriptionWeather}" >
              <figcaption class="weather-description__text">${descriptionWeather}</figcaption>
          </figure>
          <div class="next-day__temp-block">
              <span class="next-day__temp-max">${(values.maxTemp)}°C</span>
              <span class="next-day__temp-min">${(values.minTemp)}°C</span>
          </div>
        </li>
        `)
      })
    }
    
    const getChosenCity = ()=>{
      search.options.addEventListener('click',  async (e)=> {
        if (!e.target) {return}

        const element = e.target
        const elementId = element.dataset.id
        const cityObj = search.cities[elementId]

        const selectedCity = new SelectedCity(cityObj)

        search.input.value = selectedCity.fullName
        selectedLocation.textContent = selectedCity.fullName

        const weatherNow = await getWeatherNow(selectedCity.getLocation())
        search.clearAndHideSearch()
        renderWeatherNow(weatherNow,selectedCity.shortName)
        const futureWeather = await getWeatherFuture(selectedCity.getLocation())
        renderFutureWeather(futureWeather)
      })
    }


    getChosenCity()

  }
  renderWeather()



})()




