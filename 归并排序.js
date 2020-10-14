const merge = (left, right) => {
  let res = []
  while (left.length > 0 && right.length > 0) {
    left[0] > right[0]?res.push(right.shift()):res.push(left.shift())
  }
  if (left.length > 0) return [...res, ...left]
  return [...res, ...right]
}
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  let middle = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle))
  return merge(left, right)
}
let arr = [2, 5, 3, 5, 8, 9, 12]

console.log(mergeSort(arr))
