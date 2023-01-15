import { ICartItemStored } from "./shoppingCart";

class SaveLocalStorage {
  saveCartItems = (data:ICartItemStored[])=>{
    window.localStorage.setItem('cart',JSON.stringify(data))
  }
  restoreCartItems = ()=>JSON.parse(window.localStorage.getItem('cart')!)
}

export const memoryFn = new SaveLocalStorage()