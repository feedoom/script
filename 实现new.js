// 1. 新建一个空对象
// 2. 将空对象作为构造函数的 this,并执行构造函数
// 3. 返回该对象
function _new() {
  let func = arguments[0]
  let obj = Object.create(func.prototype)
  let args = [].slice.call(arguments, 1)
  func.apply(obj, args)
  return obj
}

function people(name, age) {
  this.name = name
  this.age = age
  this.say = function() {
    console.log(`my name is ${name}`)
  }
}
let feedoom = _new(people, 'feedoom', 22)
feedoom.say()
console.log(feedoom.__proto__ == people.prototype)
