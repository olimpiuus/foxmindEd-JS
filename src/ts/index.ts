import "../index.html"
import GetData from "./component/getData"
import RenderList from "./component/renderList"
import "./component/listenerSelect";

const request = new GetData()
const renderFn = new RenderList()

const select:HTMLSelectElement = document.querySelector('.search__select-region')!

select.addEventListener('change', async ()=>{
  const value = select.value
  renderFn.addArrayCountries(await request.getCountiesFromRegionsRequest(value))
})

// async () => {
//   console.log(GetData);
  
//   const country = await request.getCountry('ukr')
//   // console.log(country);
  
//   renderFn.addCountry(country)
//   renderFn.clearList()
//   await renderFn.addArrayCountries(await request.getCountiesFromRegionsRequest('europe'))

// }


