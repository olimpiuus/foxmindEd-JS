const getRandomArray = (length) => {
    let arr = []
    for (let i = 0; i <= length; i++) {
        arr.push(Math.round(Math.random() * length))
    }
    return arr
}
const unsortedArray = getRandomArray(1000)

// Buble sort

const bubleSort = (originalArray) => {
    const start = Date.now();

    const array = [...originalArray]
    let changes = 0

    const sort = () => {
        let countBefore = changes
        array.forEach((elem, index, array) => {
            const nextElem = array[index + 1]
            if (elem < nextElem) {
                array.splice(index, 2, nextElem, elem)
                return changes++
            }
        })

        if (countBefore !== changes) { sort() }
    }
    sort()
    const end = Date.now();
    console.log(`Execution time 'bubleSort ': ${end - start} ms`);
    return array
}
console.time()
console.log(bubleSort(unsortedArray));
console.timeEnd()


// Sort by choice (selection sort)

const choiceSort = (originalArray) => {
    const start = Date.now();

    const replaceTwoArrayElemsByIndex = (arr, index1, index2) => {
        let buffer = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = buffer
    }

    const array = [...originalArray]

    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (array[i] > array[j]) {
                replaceTwoArrayElemsByIndex(array, i, j)
            }
        }
    }
    const end = Date.now();
    console.log(`Execution time 'choiceSort ': ${end - start} ms`);
    return array
}
console.time()
console.log(choiceSort(unsortedArray));
console.timeEnd()

// Insertion Sort

const insertionSort = (originalArray) => {
    const start = Date.now();

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
    const end = Date.now();
    console.log(`Execution time 'insertionSort ': ${end - start} ms`);
    return array
}
console.time()
console.log(insertionSort(unsortedArray))
console.timeEnd()

// Quicksort

const quickSort = (originalArray) => {
    const array = [...originalArray]
    const start = Date.now();

    const sort = (array) => {

        if (array.length <= 1) { return array }

        const leftArray = []
        const rightArray = []

        const pivot = parseInt(array.splice([Math.floor(array.length / 2)], 1).toString())

        array.forEach(elem => elem <= pivot ? leftArray.push(elem) : rightArray.push(elem))

        const sortedLeft = sort(leftArray)
        const sortedRight = sort(rightArray)

        return sortedLeft.concat(pivot, sortedRight);
    }
    const result = sort(array)
    const end = Date.now();
    console.log(`Execution time 'quickSort ': ${end - start} ms`);
    return result
}
console.time()
console.log(quickSort(unsortedArray))
console.timeEnd()

// Merge Sort

const mergeSort = (originalArray) => {
    const start = Date.now();

    const array = [...originalArray]

    const sort = (left, right) => {
        let arr = []

        while (left.length && right.length) {

            if (left[0] < right[0]) {
                arr.push(left.shift())
            } else {
                arr.push(right.shift())
            }
        }
        return [...arr, ...left, ...right]
    }

    const merge = (array) => {
        const middleIndex = Math.floor(array.length / 2)

        if (array.length < 2) {
            return array
        }
        const left = array.splice(0, middleIndex)
        return sort(merge(left), merge(array))
    }
    const result = merge(array)
    const end = Date.now();
    console.log(`Execution time 'mergeSort ': ${end - start} ms`);
    return result

}
console.time()
console.log(mergeSort(unsortedArray))
console.timeEnd()