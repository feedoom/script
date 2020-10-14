const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
}
let arr = [2,5,3,5,8,9,12]
bubbleSort(arr)
console.log(arr)
