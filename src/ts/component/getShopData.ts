export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: URL;
  images: URL[];
}

export interface IMinMaxObj {
  min:number,
  max:number
}

interface IAnswerServer {
  products: IProduct[];
}

export class ShopData {
  list: IProduct[] | undefined;
  filters!: {
    brands: string[];
    categories: string[];
  };
  priceRange!: IMinMaxObj

  private _requestFromServ = async () => {
    try {
      const answer = await fetch('https://dummyjson.com/products?limit=100');
      const data: IAnswerServer = await answer.json();
      return data.products;
    } catch (error) {
      console.log(error);
    }
  };

  private _getBrands = () => [...new Set(this.list?.map((product) => product.brand))];

  private _getCategories = () => [...new Set(this.list?.map((product) => product.category))];

  private _getPriceRange = () => {
    const prices = this.list?.map((product) => product.price);
    if (prices) {
      return {
        min:Math.min(...prices),
        max: Math.max(...prices)
      };
    }
  };

  public initialize = async () => {
    this.list = await this._requestFromServ();
    this.filters = {
      brands: [],
      categories: []
    };
    this.filters.brands = this._getBrands();
    this.filters.categories = this._getCategories();
    this.priceRange = this._getPriceRange()!;
  };
}
const dataShop = new ShopData();

export default dataShop;
