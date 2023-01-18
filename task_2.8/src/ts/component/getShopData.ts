import { ICollectionWithCount, countQuantitiesUniqEntries } from './countQuantitiesUniqEntries';
import { ICartItemStored } from './shoppingCart';

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
  images: string[];
}

export interface IMinMaxObj {
  min: number;
  max: number;
}

interface IAnswerServer {
  products: IProduct[];
}

export const getData = async () => {
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
  } = {
    category: {},
    brand: {}
  };

  priceRange!: IMinMaxObj;

  public activeFilters: {
    category: string[];
    brand: string[];
    maxPrice: number;
    search: string;
  } = {
    category: [],
    brand: [],
    maxPrice: 0,
    search: ''
  };

  filteredList: IProduct[];
  filteredCategories: ICollectionWithCount = {};
  filteredBrands: ICollectionWithCount = {};

  constructor(public list: IProduct[] | undefined) {
    this.filteredList = Array.from(this.list!);

    if (list) {
      this.filters.brand = this._getQuantityBrands();
      this.filters.category = this._getQuantityCategories();
      this.priceRange = this._getPriceRange()!;
      this.activeFilters.maxPrice = this.priceRange.max;
    }
  }

  public addActiveFilter(string: string) {
    const [filterType, value] = string.split('_');

    if (typeof value === 'string' && (filterType === 'brand' || filterType === 'category')) {
      this.activeFilters[filterType].push(value);
    }

    if (filterType === 'maxPrice' && typeof value === 'number') {
      this.activeFilters[filterType] = value;
    }
  }

  public removeElementFromActiveFilter(string: string) {
    const [filterType, value] = string.split('_');

    if ((filterType === 'brand' || filterType === 'category') && typeof value === 'string') {
      const arr = this.activeFilters[filterType];
      arr.splice(
        arr.findIndex((filter) => filter === value),
        1
      );
      this.activeFilters[filterType] = arr;
    }
  }

  public getFeaturedItems = () => {
    const featuredArr = [];
    const getRandomElement = () => {
      const length = this.list!.length;
      const randomINdex = Math.floor(Math.random() * length);
      return this.list![randomINdex];
    };
    featuredArr.push(getRandomElement());
    featuredArr.push(getRandomElement());
    featuredArr.push(getRandomElement());
    return featuredArr;
  };

  private _getQuantityBrands = () =>
    countQuantitiesUniqEntries(this.list!.map((product) => product.brand)!);

  private _getQuantityCategories = () =>
    countQuantitiesUniqEntries(this.list!.map((product) => product.category)!);

  private _getPriceRange = () => {
    const prices = this.list?.map((product) => product.price);
    if (prices) {
      return {
        min: Math.min(...prices),
        max: Math.max(...prices)
      };
    }
  };
  private _deepCloneArray<T>(arr: T): T {
    return JSON.parse(JSON.stringify(arr));
  }
  private _cloneArray<T>(arr: T[]): T[] {
    return [...arr];
  }

  private _filterByMaxPrice = (arr: IProduct[]) => {
    const bufferArr = this._cloneArray(arr);
    const filtered = bufferArr!.filter((elem) => elem.price <= this.activeFilters.maxPrice);
    return filtered;
  };

  private _filterBySearchValue = (arr: IProduct[]) => {
    const bufferArr = this._cloneArray(arr);
    const filtered = bufferArr.filter((elem) =>
      elem.title.toLowerCase().includes(this.activeFilters.search.toLowerCase())
    );
    return filtered;
  };

  private _filterByBrands = (arr: IProduct[]) => {
    if (this.activeFilters.brand.length !== 0) {
      const bufferArr = this._cloneArray(arr);
      const returnArr: IProduct[] = [];

      this.activeFilters.brand.forEach((filterValue) => {
        const filtered = bufferArr.filter((elem) => elem.brand === filterValue);
        returnArr.push(...filtered);
      });
      return returnArr;
    } else {
      return arr;
    }
  };

  private _filterByCategories = (arr: IProduct[]) => {
    if (this.activeFilters.category.length !== 0) {
      const bufferArr = this._cloneArray(arr);
      const returnArr: IProduct[] = [];

      this.activeFilters.category.forEach((filterValue) => {
        const filtered = bufferArr.filter((elem) => elem.category === filterValue);
        returnArr.push(...filtered);
      });
      return returnArr;
    } else {
      return this._cloneArray(arr);
    }
  };

  private _getFilteredCategories = () => {
    let arr = this._cloneArray(this.list!);
    arr = this._cloneArray(this._filterBySearchValue(arr));
    arr = this._cloneArray(this._filterByMaxPrice(arr));
    arr = this._cloneArray(this._filterByBrands(arr));
    this.filteredCategories = countQuantitiesUniqEntries(arr.map((product) => product.category));
  };

  private _getFilteredBrands = () => {
    let arr = this._cloneArray(this.list!);
    arr = this._cloneArray(this._filterBySearchValue(arr));
    arr = this._cloneArray(this._filterByCategories(arr));
    arr = this._cloneArray(this._filterByMaxPrice(arr));
    this.filteredBrands = countQuantitiesUniqEntries(arr.map((product) => product.brand));
  };

  public filterList = () => {
    this.filteredList = [...this.list!];
    this.filteredList = this._filterByMaxPrice(this.filteredList);
    this.filteredList = this._filterBySearchValue(this.filteredList);
    this.filteredList = [...this._filterByBrands(this.filteredList)];
    this.filteredList = [...this._filterByCategories(this.filteredList)];
    this._getFilteredCategories();
    this._getFilteredBrands();
  };

  public getItemById = (searchingId: number): ICartItemStored => {
    const {
      id,
      title,
      price,
      images: [image]
    } = this.filteredList.find((item) => item.id === searchingId)!;
    return {
      id: id,
      title: title,
      price: price,
      image: image,
      quantity: 1
    };
  };
}
