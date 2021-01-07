class Event {
  constructor() {
    this._cache = {}
  }

  on(type, callback) {
    if (!this._cache[type]) {
      this._cache[type] = []
    }
    this._cache[type].push(callback)
  }

  trigger(type, ...rest) {
    let fns = this._cache[type]
    if (!fns || fns.length === 0) {
      return false
    }
    fns.forEach(fn => {
      fn(...rest)
    })
  }

  off(type, callback) {
    let fns = this._cache[type]
    if (!fns) {
      return false
    }

    if (!callback) {
      fns && (fns.length = 0)
    } else {
      for (let l = fns.length; l >= 0; l--) {
        if (callback === fns[l]) {
          fns.splice(l, 1)
          break
        }
      }
    }
  }
}
