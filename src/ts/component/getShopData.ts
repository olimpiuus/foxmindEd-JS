import { ICollectionWithCount,countQuantitiesUniqEntries } from "./countQuantitiesUniqEntries";

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
  min: number;
  max: number;
}

interface IAnswerServer {
  products: IProduct[];
}

export const getDataArr = async () => {
  try {
    const answer = await fetch('https://dummyjson.com/products?limit=100');
    const data: IAnswerServer = await answer.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
};

export class ShopData {
  filters: {
    categories: ICollectionWithCount;
    brands: ICollectionWithCount;
  };
  priceRange!: IMinMaxObj;
  filteredList: IProduct[] 

  constructor(public list: IProduct[] | undefined) {
    this.filters = {
      categories: {},
      brands: {},
    };
    this.filteredList = this.list!
    
    if (list) {
      this.filters.brands = this._getBrands();
      this.filters.categories = this._getCategories();
      this.priceRange = this._getPriceRange()!;
      (()=>{
        console.log(new Set(this.list?.map((product) => product.brand)).values());
        
      })()
      
    }
  }

  private _getBrands = () => countQuantitiesUniqEntries(this.list?.map(product => product.brand)!);

  private _getCategories = () => countQuantitiesUniqEntries(this.list?.map((product) => product.category)!);

  private _getPriceRange = () => {
    const prices = this.list?.map((product) => product.price);
    if (prices) {
      return {
        min: Math.min(...prices),
        max: Math.max(...prices)
      };
    }
  };
}
function collectionWithCount(arg0: (string[] | undefined)[]) {
  throw new Error("Function not implemented.");
}

