let currying = function(fn) {
  let args = []
  return function() {
    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      [].push.apply(args, arguments)
      return arguments.callee
    }
  }
}

let _currying = function (fn) {
  return function curry (...args) {
    if (fn.length > args.length) {
      return function () {
        return curry(...args, ...arguments)
      }
    }
    return fn(...args)
  }
}


function cost() {
  let money = 0
  for (let i = 0, l = arguments.length; i < l; i++) {
    money += arguments[i]
  }
  return money
}

