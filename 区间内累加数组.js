// 有一个长度为n的数列，在初始化状态下，数列每一个位置上的数字都是0。现在需要对这个数列进行m次操作，每次操作时我们可以将数列的某一个区间中的全部数字都加上一个特定的数字。请输出m次操作后最终的数列
// (n <= 100000, m <= 100000, c <= 100000)

const {
  log
} = require('util')

// input：
// 单组输入
// 第1行输入两个正整数n和m，分别表示数列的长度和操作的次数，两个数字之间用空格隔开
// 接下来m行，每一行包含三个正整数a、b和c，表示操作区间[a,b]（闭区间，包括a和b）和需要增加的特定数字c，三个数字之间用空格隔开。
// output：输出m次操作后最终的数列

// 样例输入：
// 5 2
// 1 3 1
// 2 5 2
// 样例输出：
// 1 3 3 2 2


const readline = require('readline').createInterface(process.stdin, process.stdout)
let count = 0
let n = 5 //长度
let m = 0 // 次数
let args = []

readline.on('line', function(line) {
  if (count == 0) {
    n = parseInt(line.split(' ')[0])
    m = parseInt(line.split(' ')[1])
  } else if (count < m + 1) {
    args.push(line);
  }
  count++;
  if (count == m + 1) {
    console.log(reduceArr(args, n));
  }
});

function reduceArr(args, n) {
  let res = [...Array(n)].map(_ => 0)
  args.forEach(arg => {
    let [a, b, c] = arg.split(' ')
    a = +a, b = +b, c = +c
    res = [...res.slice(0, a - 1), ...res.slice(a - 1, b).map(num => num + c), ...res.slice(b)]
  })
  return res
}
