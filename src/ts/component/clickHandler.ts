import renderFn from "./renderList"
import request from "./getData"
import search from "./app"
import btnMode  from "./theme";

class ClickHandler {
  handler: () => void
  constructor(){
    this.handler = ()=>{
      document.addEventListener('click', async (event)=>{
        const target =  event.target
        if (!(target instanceof HTMLElement)) {return}

        // find special country from search list
        if (target.classList.contains('search__option')) { 
          if (!target.textContent || target.textContent==='Country not found') {return}
          const country = await request.getCountry(target.textContent)
          renderFn.addArrayCountries([country])
          search.clearOptions()
          search.element.value=country.name
        }
        // change doc theme
        if (target.closest('.header__btn-mode-block')) {
          btnMode.changeTheme()
        }
      })
    }
  }
}

new ClickHandler().handler()
