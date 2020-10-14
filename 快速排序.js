// const quickSort = (arr) => {
//   if (arr.length <= 1) return arr
//   let mid = Math.floor(arr.length / 2)
//   let left = []
//   let right = []
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] > mid ? right.push(arr[i]) : left.push(arr[i])
//   }
//   return [...left, mid, ...right]
// }

function quickSort(arr) {
  return quick(arr, 0, arr.length - 1)
}

function quick(arr, left, right) {
  let index
  if (arr.length > 1) {
    index = slice(arr, left, right)
    if (left < index - 1) {
      quick(arr, left, index - 1)
    }
    if (index < right) {
      quick(arr, index, right)
    }
  }
  return arr
}

function slice(arr, left, right) {
  const mid = arr[Math.floor((right + left) / 2)]
  let i = left
  let j = right
  while (i <= j) {
    while (arr[i] < mid) {
      i++
    }
    while (arr[j] > mid) {
      j--
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
  return i
}


let arr = [2, 5, 3, 5, 8, 9, 12]
console.log(quickSort(arr))
