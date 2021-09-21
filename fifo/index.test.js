const test = require('ava')
const FifoQueue = require('.')

test('initialising FifoQueue instance', t => {
  const queue = new FifoQueue()
  t.true(queue instanceof FifoQueue)
})

test('new FifoQueue instance is empty', t => {
  const queue = new FifoQueue()
  t.true(queue.isEmpty())
})

test('upon pushing something a FifoQueue instance, it should not be empty', t => {
  const queue = new FifoQueue()
  queue.push(null)
  t.false(queue.isEmpty())
})

test('calling peek() on empty FifoQueue instance returns undefined', t => {
  const queue = new FifoQueue()
  t.is(queue.peek(), undefined)
})

test('calling peek() on a FifoQueue instance after pushing null returns null', t => {
  const queue = new FifoQueue()
  queue.push(null)
  t.is(queue.peek(), null)
})

test('calling pull() on new FifoQueue instance throws an Underflow exception', t => {
  const queue = new FifoQueue()
  t.throws(() => queue.pull(), { message: 'Underflow Exception' })
})

test('calling pull() on empty FifoQueue instance throws an Underflow exception', t => {
  const queue = new FifoQueue()
  queue.push(null)
  queue.pull()
  t.throws(() => queue.pull(), { message: 'Underflow Exception' })
})

test('calling pull() after pushing null', t => {
  const queue = new FifoQueue()
  queue.push(null)
  t.is(queue.pull(), null)
})

test('The FifoQueue instance should be empty when calling pull() after pushing null', t => {
  const queue = new FifoQueue()
  queue.push(null)
  queue.pull()
  t.true(queue.isEmpty())
})

test('calling pull() twice after pushing two elements should not throw', t => {
  const queue = new FifoQueue()
  queue.push(null)
  queue.push(2)
  queue.pull()
  t.notThrows(() => queue.pull())
})

test('calling pull() once after pushing null and 2 should return null', t => {
  const queue = new FifoQueue()
  queue.push(null)
  queue.push(2)
  t.is(queue.pull(), null)
})
