var assert = require('assert')

var Debounce = require('../')

var debounce = Debounce(100)

var i = 0

var a = []

debounce(function (v) {
  console.log(v)
  a.push(v)
})
debounce.set(0)
debounce.set(1)
debounce.set(2)
debounce.set(3)

debounce.immediate(99)

process.on('exit', function () {
  console.log('passed')
  assert.deepEqual(a, [0, 99])
  assert.ok(a.length == 2)
})
