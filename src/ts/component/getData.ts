
import Country from "./country"
import { ICountryAnswer } from "./country";

export default class GetData {
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

  getCountriesFromRequest = (data:ICountryAnswer[]) => {
    return data.map((countryObj)=>this.getCountryObjFromAnswer(countryObj))
  }
  
  getCountry = async (nameCountry:string) => {
    const data = await this.requestByName(nameCountry)
    return this.getCountriesFromRequest(data)[0]
  }

  getCountiesFromRegionsRequest = async (region:string)=>{
    const data = await this.requestByRegion(region)
    return this.getCountriesFromRequest(data)
  }

  getSearchResults = async (nameCountry:string) => {
    const data = await this.requestByName(nameCountry)
    const searchList = data.map(elem=>elem.name.official)
    return searchList
  }
}




  
  
  