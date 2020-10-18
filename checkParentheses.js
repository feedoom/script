// 现需要写一个程序来校验一个由"{}"、"[]"、"()"三种括号组成的括号 字符串，校验规则如下：
// （1）在字符串中只能包含"{"、"}"、"["、"]"、"("、")"六种字符，不能包含其他任何字符。
// （2）对于每一种括号，其左括号的总个数和右括号的总个数要相等，不存在无法匹配的括号。
// （3）括号之间的嵌套关系要合法，不允许出现一对括号中包含另一对括号的一半的情况，外层的括号对要完整包含内层的括号对，例如 "{(})" 就不是一个合法的括号字符串。
// 如果是一个满足上述规则的括号字符串则输出 "Yes",否则输出 "No".

// 输入描述
// 第一行一个整数T，表示输入的组数
// 接下来T行，每行输入一个字符串。（字符串长度不超过1000）
// 输出描述
// 每组数据输出占一行，如果一个合法的括号字符串，输出"Yes";否则输出"No";

// 样例输入
// 2
// {[()]([])}()[]
// {{}}{}
// 样例输出
// Yes
// Yes

let readline = require('readline').createInterface(process.stdin, process.stdout)
let count = 0
let length = 0
let args = []
readline.on('line', (line) => {
  if (count === 0) {
    length = parseInt(line)
  } else {
    args.push(line)
  }
  count++
  if (count - 1 === length) {
    console.log(checkParentheses(args))
  }
})


function checkParentheses(args) {
  const isValid = (str) => {
    if (str.length % 2) return 'No'

    let map = new Map()
    map.set('{', '}')
    map.set('[', ']')
    map.set('(', ')')
    let stack = []

    for (let i = 0; i < str.length; i++) {
      if (map.has(str[i])) {
        stack.push(str[i])
      } else {
        if (str[i] === map.get(stack[stack.length - 1])) {
          stack.pop()
        } else {
          return 'No'
        }
      }
    }
    return stack.length === 0 ? 'Yes' : 'No'
  }
  let res = []
  args.forEach(arg => {
    res.push(isValid(arg))
  })
  return res.join('\n')
}
