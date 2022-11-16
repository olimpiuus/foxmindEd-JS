

const weatherApi = (()=>{
  const apiKey = 'c5f264c664d81a1e7be32d965a4fa209'
  const apiCallLocationSearch = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'
  const apiCallCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

  

  const searchFn = (()=>{
    const search = document.querySelector('#searchLocation')
    const datalist = document.querySelector('#cities-list')
    let delay
    let searchValue 

    const getCity = async (city)=>{
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=c5f264c664d81a1e7be32d965a4fa209`)
      const answer = await response.json()
      return answer
    }

    const addDataListToSearch = (cities)=>{
      datalist.innerHTML=''
      cities.forEach((city)=>{
        datalist.insertAdjacentHTML("beforeend", `
        <option value="${city.name+', '+ city.state + ', ' +city.country}"></option>
      `)
      })
    }

    // continue
    search.addEventListener('change', (e)=>{
      console.log('continue)))');
      console.log(e)
    })
    

    
    search.addEventListener('keyup', (e)=>{
      if (delay) {clearTimeout(delay)}
      delay = setTimeout(async ()=>{
        searchValue = search.value
        const cities = await getCity(searchValue)
        console.log(cities);
        addDataListToSearch(cities)
        cities.forEach(city => {
          console.log(city.name+city.state+city.country);
        })
        
      }
        ,2000)
    })

  })()
  

})()


