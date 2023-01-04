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
interface IAnswerServer {
  products: IProduct[];
}

class ShopData {
  list: IProduct[] | undefined;
  filters!: {
    brands: string[];
    categories: string[];
  };
  

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

  public initialize = async () => {
    this.list = await this._requestFromServ();
    this.filters = {
      brands: [],
      categories: []
    }
    this.filters.brands = this._getBrands();
    this.filters.categories = this._getCategories();
  }
}
const dataShop = new ShopData();

export default dataShop

