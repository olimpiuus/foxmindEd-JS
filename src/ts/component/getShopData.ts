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
    category: ICollectionWithCount;
    brand: ICollectionWithCount;
    
  };
  priceRange!: IMinMaxObj;

  filteredList: IProduct[]|undefined

  private _activeFilters: string[] = [];

  public get activeFilters(): string[] {
    return this._activeFilters;
  }

  public set activeFilters(value: string[]) {
    this._activeFilters = value;
  }

  public addActiveFilter(value:string) {
    this._activeFilters.push(value)
  }
  public removeElementFromActiveFilter(elem:string) {
    const arr = this._activeFilters
    arr.splice(arr.findIndex(filter=>filter===elem),1)
    this._activeFilters = arr
    
  }

  constructor(public list: IProduct[] | undefined) {
    this.filters = {
      category: {},
      brand: {},
    };
    this.filteredList = this.list!

    if (list) {
      this.filters.brand = this._getBrands();
      this.filters.category = this._getCategories();
      this.priceRange = this._getPriceRange()!;
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

  public filterList = ()=> {

    this.filteredList = []
    this.activeFilters.forEach(filter=>{
      const filterStr = filter.split('_')
      const [filterType, filterValue] = filterStr!

      if ((filterType==='brand' || filterType==='category')) {
        const filtered = this.list?.filter(elem=>elem[filterType]===filterValue)
        if (filtered) {
          this.filteredList = this.filteredList!.concat(filtered)
        }
        
      }
    })

    console.log(this.filteredList);
    
  } 
}


