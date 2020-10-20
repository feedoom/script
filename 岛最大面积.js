// 给定一个包含了一些 0 和 1 的非空二维数组 grid。
// 一个岛屿是由一些相邻的 1 （代表土地）构成的组合，这里的 [相邻] 要求两个 1 必须在水平或竖直方向上相邻。你可以假设 grid 的四个边缘都被 0 （代表水）包围着。
// 找到给定的二维数组中最大的岛屿面积。（如果没有岛屿，则返回面积为0.）

// 输入描述：
// 第一行输入 m, n, 分别代表二维数组的行和列，
// 接下来 m 行，每行 n 列。共 m * n 个数（0 或 1）。
// 0 <= m < 50, 0 <= n < 50
// 输出描述：
// 输出一个数，二维数组中最大的岛屿面积

// 示例：
// 输入
// 4 5
// 1 1 0 0 0
// 1 1 0 0 0
// 0 0 0 1 1
// 0 0 0 1 1
// 输出
// 4

let readline = require('readline').createInterface(process.stdin, process.stdout)
let m = 0
let count = 0
let args = []
readline.on('line', (line) => {
  if (m === 0) {
    m = parseInt(line.split(' ')[0])
  } else {
    args.push(line)
    count++
  }
  if (count == m) {
    console.log(maxSize(args))
  }
})

function maxSize(args) {
  let grid = args.slice()
  grid = grid.map(row => {
    return [...row.split(' ')]
  })

  const rec = (i, j, grid) => {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == 0) {
      return 0
    } else {
      grid[i][j] = 0
      return 1 + +rec(i + 1, j, grid) + rec(i - 1, j, grid) + rec(i, j + 1, grid) + rec(i, j - 1, grid)
    }
  }

  let res = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > 0) {
        res = Math.max(rec(i, j, grid), res)
      }
    }
  }
  return res
}
