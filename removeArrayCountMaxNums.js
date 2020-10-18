// 删除给定数组中出现次数最多的数字，若多个数字出现次数一样，都要删除。其他数字仍保持原顺序
// input：一个数字数组字符串
// output：删除后的数字数组字符串
// 例子：
// input：1,3,5,7,9,5
// output：1,3,7,9


const readline = require('readline').createInterface(process.stdin, process.stdout)
readline.on('line', (input) => {
  console.log(removeArrayCountMaxNums(input))
})


function removeArrayCountMaxNums(arr) {
  arr = arr.split(',')
  let map = new Map()
  arr.forEach(item => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })
  let arrCount = Array.from(map)
  let maxCount = 1
  arrCount.forEach(item => {
    if (maxCount < item[1]) maxCount = item[1]
  })
  if (maxCount <= 1) return arr.join(',')
  let res = []
  let maxCountArr = arrCount.filter(item => item[1] === maxCount).map(item => item[0])
  res = arr.filter(item => !(maxCountArr.includes(item)))
  return res.join(',')
}
