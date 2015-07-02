
var Observ = require('observ')

module.exports = function (delay) {

  delay = delay || 200
  var o = Observ(),  set = o.set, ts = 0, timer
  var v
  o.set = function (v) {
    value = v
    var next = (ts + delay) - Date.now()
    if(next >= 0) {
      if(!timer)
        timer = setTimeout(function () {
          timer = null
          ts = Date.now()
          set(value)
        }, next)
      return
    }
    
  ts = Date.now()
    set(v)
  }

  return o
}
