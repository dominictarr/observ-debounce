# observ-debounce

A debounced [observ](https://www.npmjs.com/package/observ)
that will only notify every N milliseconds.

## Example

``` js

var Debounce = require('observ-debounce')

var debounce = Debounce(200) //5 times a second, max.

//register a listener
debounce(function (s) {
  console.log(s)
})

while(reallyFast)//update the value lots!
  debounce.set(newValue)


```

## License

MIT
