import { renderFn } from './render';
import { memoryFn } from './saveAndRestoreLocalStorage';

export interface ICartItemStored {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

class DOMShoppingCart {
  public cartWrapper: HTMLElement = document.querySelector('.shopping-cart__wrapper')!;
  public list: HTMLUListElement = this.cartWrapper.querySelector('.shopping-cart__list')!;
  public sumAmountHTML: HTMLElement = this.cartWrapper.querySelector(
    '.shopping-cart__total_amount'
  )!;
  public cartBody: HTMLElement = this.cartWrapper.querySelector('.shopping-cart')!;
  public btnExit: HTMLButtonElement = this.cartBody.querySelector('.shopping-cart__btn_exit')!;
  public headerCartIcon: HTMLElement = document.querySelector('.btn-cart__quantity')!;
}

export class ShoppingCart {
  public items: ICartItemStored[] = [];
  _sum!: number;
  private _DOM: DOMShoppingCart;

  constructor() {
    renderFn.renderTemplateShoppingCart();
    this._DOM = new DOMShoppingCart();
    this._restoreCart();
    this.reRenderCart();
    this._changeHeaderIcon();
  }
  private _saveCart = () => {
    memoryFn.saveCartItems(this.items);
  };
  private _restoreCart = () => {
    this.items = memoryFn.restoreCartItems();
  };

  reRenderCart = () => {
    this._getTotalSum();
    this._DOM.list.innerHTML = '';
    this.items.forEach((item) => {
      if (item.quantity > 0) {
        this._DOM.list.insertAdjacentHTML('beforeend', renderFn.renderShoppingCartItem(item));
      }
    });
    this._changeSum();
    this._saveCart();
  };

  private _changeHeaderIcon = () => {
    const quantityOfItems = this.items.length;
    this._DOM.headerCartIcon.innerHTML = `${quantityOfItems}`;
  };

  private _changeSum = () => {
    this._getTotalSum();
    this._DOM.sumAmountHTML.innerHTML = `$${this._sum}`;
  };

  private _getTotalSum = () => {
    if (this.items.length !== 0) {
      this._sum = this.items.reduce((sum: number, elem) => sum + elem.price, 0);
    } else {
      this._sum = 0;
    }
  };

  private _hideShoppingCart = (e: Event) => {
    const target = e.target! as HTMLElement;
    if (!this._DOM.cartBody.contains(target) || this._DOM.btnExit.contains(target)) {
      this._DOM.cartWrapper.classList.add('hidden');
      document.body.removeEventListener('click', this._hideShoppingCart);
    }
  };

  showShoppingCart = () => {
    this._DOM.cartWrapper.classList.remove('hidden');
    document.body.addEventListener('click', this._hideShoppingCart);
    this.reRenderCart();
  };

  addQuantityToItem = (id: number) => {
    const indexOfItem = this.items.findIndex((elem) => elem.id === id);
    if (indexOfItem !== -1) {
      this.items[indexOfItem].quantity += 1;
      this.reRenderCart();

      return true;
    } else {
      return false;
    }
  };

  private _getItemById = (id: number) => this.items.find((elem) => elem.id === id);

  reduceItemFromCartByID = (id: number) => {
    const item = this._getItemById(id)!;
    if (item.quantity == 1) {
      this.deleteItemById(id);
    } else {
      item.quantity -= 1;
    }
    this.reRenderCart();
  };

  deleteItemById = (id: number) => {
    const index = this.items.findIndex((elem) => elem.id === id);
    if (confirm(`Remove from cart item: ${this.items[index].title}`)) {
      const arr = [...this.items];
      arr.splice(index, 1);
      this.items = arr;
      this.reRenderCart();
      this._changeHeaderIcon();
    }
  };

  addItemToCart = (item: ICartItemStored) => {
    this.items.push(item);
    this._changeHeaderIcon();
    this._saveCart();
  };

  removeAll = () => {
    if (confirm('Clear cart?')) {
      this.items.length = 0;
      this.reRenderCart();
      this._changeHeaderIcon();
    }
  };
}

const shoppingCart = new ShoppingCart();
export default shoppingCart;
