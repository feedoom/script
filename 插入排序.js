const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i]
    let j = i
    while (j > 0) {
      if (arr[j - 1] > arr[i]) {
        arr[j] = arr[j - 1]
      } else {
        break
      }
      j--
    }
    arr[j] = tmp
  }
}
let arr = [2, 5, 3, 5, 8, 9, 12]
insertionSort(arr)
console.log(arr)
