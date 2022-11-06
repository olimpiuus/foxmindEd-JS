const unsortedArray = [2, 8, 1, 3, 6, 7, 5, 4, 10, 11, 14]
const unsortedArray1 = [2, 8, 1, 3, 6, 7, 5, 4, 10, 11, 14]

const replaceTwoArrayElemsByIndex = (arr, index1, index2) => {
    let buffer = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = buffer
}


// Buble sort

const bubleSort = (originalArray) => {
    const array = [...originalArray]
    let changes = 0
    let iteration = 0

    const sort = () => {
        let countBefore = changes
        array.forEach((elem, index, array) => {
            iteration++
            const nextElem = array[index + 1]
            if (elem < nextElem) {
                array.splice(index, 2, nextElem, elem)
                return changes++
            }
        })

        if (countBefore !== changes) { sort() }
    }
    sort()
    return { array, iteration }
}
console.log(bubleSort(unsortedArray));


// Sort by choice (selection sort)

const choiceSort = (originalArray) => {
    const array = [...originalArray]
    let iteration = 0

    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            iteration++
            if (array[i] > array[j]) {
                replaceTwoArrayElemsByIndex(array, i, j)
            }
        }
    }
    return { array, iteration }
}

// console.log(choiceSort(unsortedArray1));

// Insertion Sort


const insertionSort = (originalArray) => {
    const array = [...originalArray]

    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (array[i] < array[j]) {
                let pickedElem = array[i]
                array.splice(i, 1)
                array.splice(j, 0, pickedElem)
                i = j
            }
        }
    }
    return array
}

console.log(insertionSort(unsortedArray1))

// Quicksort

const quickSort = (originalArray) => {
    const array = [...originalArray]
    if (array.length <= 1) { return array }

    const leftArray = []
    const rightArray = []

    const pivot = parseInt(array.splice([Math.floor(array.length / 2)], 1).toString())

    array.forEach(elem => elem <= pivot ? leftArray.push(elem) : rightArray.push(elem))

    const sortedLeft = quickSort(leftArray)
    const sortedRight = quickSort(rightArray)

    return sortedLeft.concat(pivot, sortedRight);

}
console.log(quickSort(unsortedArray1))