const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let indexMin = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) indexMin = j
    }
    if (indexMin != i)[arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
  }
}
let arr = [2, 5, 3, 5, 8, 9, 12]
selectionSort(arr)
console.log(arr)
