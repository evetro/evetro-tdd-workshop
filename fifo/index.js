module.exports = class FifoQueue {
  constructor() {
    this.items = []
  }
  isEmpty() {
    return this.items.length === 0
  }
  push(item) {
    this.items.push(item)
  }
  peek() {
    return this.items[0]
  }
  pull() {
    if (this.isEmpty()) {
      throw new Error('Underflow Exception')
    }
    return this.items.shift()
  }
}
