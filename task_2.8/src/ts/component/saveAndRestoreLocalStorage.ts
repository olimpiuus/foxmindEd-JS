import { ICartItemStored } from './shoppingCart';

class SaveLocalStorage {
  saveCartItems = (data: ICartItemStored[]) => {
    window.localStorage.setItem('cart', JSON.stringify(data));
  };
  restoreCartItems = () => {
    const items = window.localStorage.getItem('cart');
    return items ? JSON.parse(items) : [];
  };
}

export const memoryFn = new SaveLocalStorage();
