const PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED'


function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<myPromise>'))
  }

  let called = false

  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      let then = x.then

      if (typeof then === 'function') {
        then.call(x, (y) => {
          if (called) return;
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, (r) => {
          if (called) return;
          called = true
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return;
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

class myPromise {
  constructor(executor) {
    this.state = PENDING
    this.value = undefined
    this.reason = undefined

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value
      }

      this.onFulfilledCallbacks.forEach(fn => fn())
    }

    const reject = (value) => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.value = value
      }

      this.onRejectedCallbacks.forEach(fn => fn())
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onFulfilled === 'function' ? onRejected : reason => {
      throw reason
    }

    let promise2 = new myPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }

      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }

      if (this.state === PENDING) {
        // 处理异步情况
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })

        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
    })

    return promise2
  }

  catch(errorCallback) {
    return this.then(null, errorCallback)
  }
}



module.exports = myPromise
