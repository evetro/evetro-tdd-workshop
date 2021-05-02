const test = require('ava')
const Stack = require('.')

test('stack underflow throws an error', t => {
  const stack = new Stack()
  t.throws(() => stack.pop(), { instanceOf: Error, message: 'stack underflow' })
})

test('stack is empty when initialized', t => {
  const stack = new Stack()
  t.true(stack.isEmpty())
})

test('peek on initialized stack returns undefined', t => {
  const stack = new Stack()
  t.is(stack.peek(), undefined)
})

test('push something', t => {
  const stack = new Stack()
  stack.push(0);
  t.false(stack.isEmpty())
})

test('push something, then pop it off', t => {
  const stack = new Stack()
  stack.push(0);
  stack.pop();
  t.true(stack.isEmpty())
})

test('push two times, then pop three times leads to underflow', t => {
  const stack = new Stack()
  const instructions = () => {
    stack.push(null)
    stack.pop()
    stack.push(-2)
    stack.pop()
    stack.pop()
  }
  t.throws(instructions, { instanceOf: Error, message: 'stack underflow' })
})

test('push twice, then pop once', t => {
  const stack = new Stack()
  stack.push(null)
  stack.push(-2)
  stack.pop()
  t.false(stack.isEmpty())
})

test('push null, then pop returns null', t => {
  const stack = new Stack()
  stack.push(null)
  t.is(stack.pop(), null)
})

test('push -2, then pop returns -2', t => {
  const stack = new Stack()
  stack.push(-2)
  t.is(stack.pop(), -2)
})

test('peek on stack after pushing 3 returns 3', t => {
  const stack = new Stack()
  stack.push(3)
  t.is(stack.peek(), 3)
})

test('peek on stack after pushing 3 and \'foo\' returns \'foo\'', t => {
  const stack = new Stack()
  stack.push(3)
  stack.push('foo')
  t.is(stack.peek(), 'foo')
})

test('after pushing 4 and 5, pop returns 5 and 4 respectively', t => {
  const stack = new Stack()
  stack.push(4)
  stack.push(5)
  t.is(stack.pop(), 5)
  t.is(stack.pop(), 4)
})
