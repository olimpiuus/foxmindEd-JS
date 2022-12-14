import "./component/multiselect-dropdown"
import GetData from "./component/getData"
import RenderList from "./component/renderList"

// console.log('hi')




(async () => {
  console.log(GetData);
  const request = new GetData()
  const renderFn = new RenderList()
  const country = await request.getCountry('ukr')
  // console.log(country);
  
  renderFn.addCountry(country)
  renderFn.clearList()
  await renderFn.addArrayCountries(await request.getCountiesFromRegionsRequest('europe'))

})()


