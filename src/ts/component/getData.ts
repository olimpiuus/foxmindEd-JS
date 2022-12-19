
import Country from "./country"
import { ICountryAnswer } from "./country";

class GetData {
  constructor() {}

  private _requestByName = async (nameCountry:string) => {
      const answer = await fetch(`https://restcountries.com/v3.1/name/${nameCountry}`)
      const data:ICountryAnswer[] = await answer.json()
      return data
  }

  private _requestByRegion =async (region:string) => {
    const answer = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data:ICountryAnswer[] = await answer.json()
    return data
  }

  private _requestAll =async () => {
    const answer = await fetch(`https://restcountries.com/v3.1/all`)
    const data:ICountryAnswer[] = await answer.json()
    return data
  }

  private _getCountryObjFromAnswer = (answer:ICountryAnswer)=>{
    const {capital, name:{official:name}, population,region,flags:{svg:img}} = answer
    return new Country(name,population,region,capital,img)
  }

  private _getCountriesFromRequest = (data:ICountryAnswer[]) => {
    return data.map((countryObj)=>this._getCountryObjFromAnswer(countryObj))
  }
  
  getCountry = async (nameCountry:string) => {
    const data = await this._requestByName(nameCountry)
    return this._getCountriesFromRequest(data)[0]
  }

  getCountiesFromRegionsRequest = async (region:string)=>{
    const data = await this._requestByRegion(region)
    return this._getCountriesFromRequest(data)
  }

  getSearchResults = async (nameCountry:string) => {
    const data = await this._requestByName(nameCountry)
    const searchList = data.map(elem=>elem.name.official)
    return searchList
  }
  getAllCountries =async () => {
    const data = await this._requestAll()
    return this._getCountriesFromRequest(data)
  }

}
const request = new GetData()
export default request



  
  
  