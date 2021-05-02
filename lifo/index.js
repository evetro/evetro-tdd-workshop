module.exports = class Stack {
  constructor() {
    this.elements = []
  }
  isEmpty() {
    return this.elements.length === 0
  }
  peek() {
    return this.elements[this.elements.length - 1]
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error('stack underflow')
    }
    return this.elements.pop()
  }
  push(element) {
    this.elements.push(element)
  }
}
