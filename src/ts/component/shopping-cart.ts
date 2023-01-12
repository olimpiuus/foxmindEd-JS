export interface ICartItemStored {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export class ShoppingCart {
  public items: ICartItemStored[] = [];
  cartWrapper: HTMLElement;
  private _sum!: number;
  private _list: HTMLUListElement;
  private _sumAmountHTML: HTMLElement;
  private _cartBody: HTMLElement;
  private _btnExit: HTMLButtonElement;
  private _headerCartIcon: HTMLElement;

  constructor() {
    this.cartWrapper = document.querySelector('.shopping-cart__wrapper')!;
    this._cartBody = this.cartWrapper.querySelector('.shopping-cart')!;
    this._btnExit = this._cartBody.querySelector('.shopping-cart__btn_exit')!;
    this._list = this.cartWrapper.querySelector('.shopping-cart__list')!;
    this._sumAmountHTML = this.cartWrapper.querySelector('.shopping-cart__total_amount')!;
    this._headerCartIcon = document.querySelector('.btn-cart__quantity')!;
    this.reRenderCart();
  }

  reRenderCart = () => {
    this._getTotalSum();
    this._list.innerHTML = '';
    this.items.forEach((item) => {
      if (item.quantity > 0) {
        this._list.insertAdjacentHTML('beforeend', this._itemHTMLTemplate(item));
      }
    });
    this._changeSum();
  };

  private _changeHeaderIcon = () => {
    const quantityOfItems = this.items.length;
    this._headerCartIcon.innerHTML = `${quantityOfItems}`;
  };

  private _itemHTMLTemplate = (item: ICartItemStored) => {
    const { title, price, image, quantity, id } = item;
    return `
    <li class="shopping-cart__item shopping-item_cart" data-id="${id}">
    <div class="shopping-item__img-background" style="background-image: url('${image}');"></div>
    <div class="shopping-item__info-cart">
      <h3 class="shopping-item__name_cart">${title}</h3>
      <data class="shopping-item__price-value_cart" value="${price}">$${price}</data>
      <button class="shopping-item__btn_remove">remove</button>
    </div>
    <div class="shopping-item__quantity">
      <button class="shopping-item__btn_add-item">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
          />
        </svg>
      </button>
      <div class="shopping-item__quantity-display">${quantity}</div>
      <button class="shopping-item__btn_reduce-item">
        <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
          />
        </svg>
      </button>
    </div>
  </li>
    `;
  };

  private _changeSum = () => {
    this._getTotalSum();
    this._sumAmountHTML.innerHTML = `$${this._sum}`;
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
    if (!this._cartBody.contains(target) || this._btnExit.contains(target)) {
      this.cartWrapper.classList.add('hidden');
      document.body.removeEventListener('click', this._hideShoppingCart);
    }
  };

  showShoppingCart = () => {
    this.cartWrapper.classList.remove('hidden');
    document.body.addEventListener('click', this._hideShoppingCart);
    this.reRenderCart();
  };

  addToItemInCart = (id: number) => {
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
