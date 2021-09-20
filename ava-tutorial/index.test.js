const test = require('ava')

test('1 is a truthy value', (t) => {
  t.plan(1)
  t.truthy(1)
})

test('null is a falsy value', (t) => {
  t.plan(1)
  t.falsy(null)
})

test('1 evalues to true in Boolean constructor', (t) => {
  t.plan(1)
  t.true(Boolean(1))
})

test('0 evalues to false in Boolean constructor', (t) => {
  t.plan(1)
  t.false(Boolean(0))
})

test('just passes', (t) => {
  t.plan(1)
  t.pass()
})

test.fail('must fail', (t) => {
  t.plan(1)
  t.fail()
})
