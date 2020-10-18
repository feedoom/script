// 密码要求：
// 1.长度最少为8位，不超过16位
// 2.包含大小写字母数字其他字符，以上至少两种
// 3.不能有相同字符长度大于2的字串重复

// 强度要求：
// 简单：符合要求
// 复杂：大小写字母数字其他字符3种组合，可以有重复相同字符字串
// 超棒：大小写字母和其他字符4种组合+每个字符字串不重复

// input：输入任意长度字符长度
// output：依据密码要求和强度规则输出判断的结果。例如：不符合要求输出'NG'，符合要求输出'OK 简单'或'OK 复杂'或'OK 超棒'




const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout

})
readline.on('line', (input) => {
  console.log(passwordCheck(input))
})


function passwordCheck(password) {
  const message = {
    0: 'NG',
    1: 'OK 简单',
    2: 'OK 复杂',
    3: 'OK 超棒'
  }
  let regCharUp = /[A-Z]+/;
  let regCharLow = /[a-z]+/;
  let regNums = /[0-9]+/;
  let regOther = /[^a-zA-Z0-9]+/;
  let regs = [regCharUp, regCharLow, regNums, regOther]
  let actionLength = password.length >= 8 && password.length <= 16
  let actionGroup = [...regs.map(reg => reg.test(password))].reduce((sum, current) => sum + current)
  let actionSubStr = true

  // 超棒
  let map = new Map()
  for (let i = 0; i < password.length; i++) {
    if (map.has(password[i])) {
      actionSubStr = false
    } else {
      map.set(password[i], 1)
    }
  }
  if (actionLength && actionGroup === 4 && actionSubStr) return message[3]

  // 复杂
  if (actionLength && actionGroup === 3) return message[2]

  // 简单
  actionSubStr = true
  for (let i = 0; i < password.length - 2; i++) {
    let substr = password.slice(i, i + 3)
    if (password.indexOf(substr) !== password.lastIndexOf(substr)) {
      actionSubStr = false
      break;
    }
  }
  if (actionLength && actionGroup >= 2 && actionSubStr) return message[1]

  // NG
  return message[0]
}
