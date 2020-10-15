Function.prototype._call = function(){
  let context = [...arguments][0] || window
  let args = [...arguments].slice(1)
  let res = null
  context.fn = this
  res = context.fn(...args)
  delete context.fn
  return res
}
