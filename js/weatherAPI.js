

const weatherApi = (()=>{
  const apiKey = 'c5f264c664d81a1e7be32d965a4fa209'
  const apiCallLocationSearch = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'
  const apiCallCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

  const search = document.querySelector('#searchLocation')
  const searchOptions = document.querySelector('.search__options')
  const selectedCity = document.querySelector('#selectedCity')


  class Search {
    // constructor () {}

    #getCity = async (city)=>{
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=c5f264c664d81a1e7be32d965a4fa209`)
      const answer = await response.json()
      return answer
    }

    #addDataListToSearch = (cities)=>{

      class CityChoice {
        constructor (name, state, country, lon, lat) {
          this.name = name
          this.state= state
          this.country= country
          this.lon=lon
          this.lat=lat
        }
        addToHtml = ()=>{
          const choice = document.createElement('li')
          choice.classList.add('search__option')
          choice.textContent = this.name+', '+ this.state + ', ' +this.country
          searchOptions.append(choice)
          choice.dataset.city=choice.textContent
          choice.dataset.lon = this.lon
          choice.dataset.lat = this.lat

        }
      }

      const fillChoices = ()=>{
        cities.forEach((city)=>{
          const cityChoice =  new CityChoice(city.name, city.state, city.country, city.lon, city.lat)
          cityChoice.addToHtml()
        })
      }

      this.#clearSearch
      searchOptions.style.display = 'block'
      fillChoices()
    }

    #clearSearch = ()=>{
      searchOptions.innerHTML=''
    }
    #hideSearch = ()=>{
      searchOptions.style.display = 'none'
    }

    clearAndHideSearch = ()=>{
      this.#clearSearch()
      this.#hideSearch()
    }

    startSearchFn = ()=> {
      let delay
      let searchValue
      search.addEventListener('keyup', ()=>{
      if (delay) {clearTimeout(delay)}
      
      delay = setTimeout(async ()=>{
        searchValue = search.value
        const cities = await this.#getCity(searchValue)
        console.log(cities);
        this.#addDataListToSearch(cities)
        }
          ,2000)
      })
    }
  }

  const searchFn = new Search
  searchFn.startSearchFn()

  const renderWeather = ()=>{
   

    const getWeatherNow = async (location) => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=c5f264c664d81a1e7be32d965a4fa209`)
      const answer = await response.json()
      return answer
    }

    const getChosenCity = ()=>{
      searchOptions.addEventListener('click',  async (e)=> {
        if (!e.target) {return}
        const element = e.target
        search.value=element.textContent
        selectedCity.textContent=element.textContent
        const lon = element.dataset.lon
        const lat = element.dataset.lat
        const location = {lon,lat}
        const weatherNow = await getWeatherNow(location)
        console.log(weatherNow);
        searchFn.clearAndHideSearch()
      })
    }


    getChosenCity()

  }
  renderWeather()



})()




