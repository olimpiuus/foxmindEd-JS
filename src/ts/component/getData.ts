interface ICountryAnswer {
  capital:string
  flags : {
    svg:string
  }
  name:{ official: string}
  population:number
  region:string
}

class Country {
  constructor(public name:string, public population:number,public region:string,public capital:string,public img:string){
  }
  getCountry = ()=>{
    return this
  }
}

class GetData {
  constructor() {}

  requestByName = async (nameCountry:string) => {
    const answer = await fetch(`https://restcountries.com/v3.1/name/${nameCountry}`)
    const data:ICountryAnswer[] = await answer.json()
    return data
  }

  requestByRegion =async (region:string) => {
    const answer = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data:ICountryAnswer[] = await answer.json()
    return data
  }

  getCountryObjFromAnswer = (answer:ICountryAnswer)=>{
    const {capital, name:{official:name}, population,region,flags:{svg:img}} = answer
    return new Country(name,population,region,capital,img)
  }

  getCountry = async (nameCountry:string) => {
    const data = await this.requestByName(nameCountry)
    return this.getCountryObjFromAnswer(data[0])
  }

  getSearchResults = async (nameCountry:string) => {
    const data = await this.requestByName(nameCountry)
    const searchList = data.map(elem=>elem.name.official)
    return searchList
  }

  getDataByRegions =async (region:string) => {
    const data = await this.requestByRegion(region)
    const new1 = data.map((countryObj)=>this.getCountryObjFromAnswer(countryObj))
  }
}

new GetData().getDataByRegions('Europe')

  
  
  