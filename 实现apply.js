Function.prototype._apply = function() {
  if(typeof this !== 'function') throw new TypeError('error')
  let context = [...arguments][0] || window;
  let res = null;
  context.fn = this
  if (arguments[1]) {
    res = context.fn(...arguments[1])
  } else {
    res = context.fn()
  }
  delete context.fn
  return res
}
