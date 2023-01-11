interface ICartItemStored {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity:number
}

export class ShoppingCart {
  public items:ICartItemStored[]=[]
  cartWrapper:HTMLElement
  private _sum: any;
  private _list:HTMLUListElement
  private _sumHTML: HTMLElement;
  private _cartBody: HTMLElement
  private _btnExit: HTMLButtonElement;
  
  constructor(){
    this.cartWrapper= document.querySelector('.shopping-cart__wrapper')!
    this._cartBody = this.cartWrapper.querySelector('.shopping-cart')!
    this._btnExit = this._cartBody.querySelector('.shopping-cart__btn_exit')!
    this._list = this.cartWrapper.querySelector('.shopping-cart__list')!
    this._sumHTML = this.cartWrapper.querySelector('.shopping-cart__total_amount')!
    this.items.push({id: 1,
      title: 'asd',
      price: 23,
      image: 'https://i.dummyjson.com/data/products/1/1.jpg',
      quantity:12})
      this.show()
  }
  reRenderCart = ()=>{
    this.items.forEach(item=>{
      this._list.insertAdjacentHTML('beforeend', `
      <li class="shopping-cart__item shopping-item_cart">
        <div class="shopping-item__img-background" style="background-image: url('${item.image}');"></div>
        <div class="shopping-item__info-cart">
          <h3 class="shopping-item__name_cart">${item.title}</h3>
          <data class="shopping-item__price-value_cart" value="${item.price}">$${item.price}</data>
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
          <div class="shopping-item__quantity-display">5</div>
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
      `)
    })
  }

  getTotalSum = ()=>{
    this._sum = this.items.reduce((sum:any,elem)=>(sum+elem.price))
  }

  private _hide=()=>{
    this.cartWrapper.classList.add('hidden')
    document.body.removeEventListener('click', this._hide)
    this._btnExit.removeEventListener('click', this._hide)
  }

  show = ()=>{
    this.cartWrapper.classList.remove('hidden')
    document.body.addEventListener('click', this._hide)
    this._btnExit.addEventListener('click', this._hide)
    this._cartBody.addEventListener('click',(e)=>{
      e.stopPropagation()
    })
  }

}

const shoppingCart = new ShoppingCart()
export default shoppingCart