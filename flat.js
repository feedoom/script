function flat(arr) {
  let isDeep = arr.some(item => item instanceof Array)
  if (!isDeep) return arr
  let res = Array.prototype.concat.apply([], arr)
  return flat(res)
}
export {
  flat
}
let arr = [1, 2, [3, 5],
  [2, [5],
    [1],
    [3, [5]]
  ]
]
console.log(flat(arr))
