var assert = require('assert')

var Debounce = require('../')

var debounce = Debounce(100)

var i = 0
var int = setInterval(function () {
  if(i > 100) clearInterval(int)
  debounce.set(++i)
}, 10)

var a = []

debounce(function (v) {
  console.log(v)
  a.push(v)
})

process.on('exit', function () {
  console.log('passed')
  assert.ok(a.length > 10)
})
