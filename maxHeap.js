class maxHeap {
  constructor(arr) {
    this.heap = []
    if (arr) {
      this.init(arr)
    }
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }
  getLeftIndex(index) {
    return index * 2 + 1
  }
  getRightIndex(index) {
    return index * 2 + 2
  }
  swap(index1, index2) {
    let tmp = this.heap[index1]
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = tmp
  }
  shiftDown(index) {
    let leftIndex = this.getLeftIndex(index)
    let rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] > this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] > this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }
  shiftUp(index) {
    if (index === 0) return
    let parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] < this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }
  insert(value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }
  pop() {
    const res = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return res
  }
  init(arr) {
    arr.forEach(item => {
      this.insert(item)
    })
  }
}
