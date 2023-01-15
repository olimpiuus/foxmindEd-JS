export interface ICollectionWithCount {
  [index: string]: number;
}

export const countQuantitiesUniqEntries = (arr: string[]): ICollectionWithCount => {
  const collectionWithCount: ICollectionWithCount = {};

  for (const element of arr) {
    if (collectionWithCount[element]) {
      collectionWithCount[element] += 1;
    } else {
      collectionWithCount[element] = 1;
    }
  }

  return collectionWithCount;
};
