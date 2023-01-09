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

  public filters: {
    category: ICollectionWithCount;
    brand: ICollectionWithCount;
  }= {
    category: {},
    brand: {},
  }
  priceRange!: IMinMaxObj;

  filteredList: IProduct[]
  filteredCategories:ICollectionWithCount={}
  filteredBrands:ICollectionWithCount={}

  private _activeFilters: {
    category: string[];
    brand: string[];
    maxPrice: number;
  } = {
    category: [],
    brand: [],
    maxPrice: 0,
  };


  
  public get activeFilters(): {
    category: string[];
    brand: string[];
    maxPrice: number;
  } {
    return this._activeFilters;
  }
  
  public addActiveFilter(string:string) {
    const [filterType,value] = string.split('_')

    if ((filterType==='brand'|| filterType==='category') && typeof value==='string') {
      this._activeFilters[filterType].push(value)
    } 

    if (filterType==='maxPrice' && typeof value==='number') {
      this._activeFilters[filterType]=value
    }
  }

  public removeElementFromActiveFilter(string:string) {

    const [filterType,value] = string.split('_')
    
    if ((filterType==='brand'|| filterType==='category') && typeof value==='string') {
      const arr = this.activeFilters[filterType]
      arr.splice(arr.findIndex(filter=>filter===value),1)
      this.activeFilters[filterType] = arr
    }

  }

  constructor(public list: IProduct[] | undefined) {
    this.filteredList = Array.from(this.list!)

    if (list) {
      this.filters.brand = this._getQuantityBrands();
      this.filters.category = this._getQuantityCategories();
      this.priceRange = this._getPriceRange()!;
      this.activeFilters.maxPrice = this.priceRange.max
    }
  }

  private _getQuantityBrands = () => countQuantitiesUniqEntries(this.list?.map(product => product.brand)!);

  private _getQuantityCategories = () => countQuantitiesUniqEntries(this.list?.map((product) => product.category)!);

  private _getPriceRange = () => {
    const prices = this.list?.map((product) => product.price);
    if (prices) {
      return {
        min: Math.min(...prices),
        max: Math.max(...prices)
      };
    }
  };
  private _deepCloneArray<T> (arr:T):T {
    return JSON.parse(JSON.stringify(arr))
  }
  private _cloneArray<T> (arr:T[]):T[] {
    return [...arr]
  }
  private _filterByMaxPrice = (arr:IProduct[])=>{

    const bufferArr = this._cloneArray(arr)
    
    arr.length=0
    
    const filtered = [...bufferArr]!.filter(elem=>elem.price<=this.activeFilters.maxPrice)
    
    arr.push(...filtered)

    return arr
  }

  private _filterByBrands = (arr:IProduct[])=>{
    if ( this.activeFilters.brand.length!==0) {
      const bufferArr = this._cloneArray(arr)
    
      arr.length=0
      
      this.activeFilters.brand.forEach(filterValue=>{
        const filtered = [...bufferArr].filter(elem=>elem.brand===filterValue)
        arr.push(...filtered)
      })
      return arr
    } else {
      return arr
    }
  }

  private _filterByCategories = (arr:IProduct[])=>{
    if ( this.activeFilters.category.length!==0) {
      const bufferArr = this._cloneArray(arr)
    
      arr.length=0
      
      this.activeFilters.category.forEach(filterValue=>{
        const filtered = [...bufferArr].filter(elem=>elem.category===filterValue)
        arr.push(...filtered)
      })
      return arr
    } else {return this._cloneArray(arr)}
  }

  private _getFilteredCategories = ()=>{
    let arr = this._cloneArray(this.list!)
    arr = this._cloneArray(this._filterByBrands(arr))
    arr = this._cloneArray(this._filterByMaxPrice(arr))
    this.filteredCategories = countQuantitiesUniqEntries(arr.map(product=>product.category))
  }

  private _getFilteredBrands = ()=>{
    let arr = this._cloneArray(this.list!)
    arr = this._cloneArray(this._filterByCategories(arr))
    arr = this._cloneArray(this._filterByMaxPrice(arr))
    this.filteredBrands = countQuantitiesUniqEntries(arr.map(product=>product.brand))
  }

  public filterList = ()=> {
    this.filteredList = [...this.list!]
    this.filteredList= [...this._filterByBrands(this.filteredList)]
    this.filteredList = [...this._filterByCategories(this.filteredList)]
    this.filteredList = this._filterByMaxPrice(this.filteredList)
    this._getFilteredCategories()
    this._getFilteredBrands()
    
  } 
}


