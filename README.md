Sum
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the sum over an array of values.


## Installation

``` bash
$ npm install compute-sum
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage


``` javascript
var sum = require( 'compute-sum' );
```

### sum( arr[, accessor] )

Computes the sum of the elements in an `array`. For numeric `arrays`,

``` javascript
var data = [ 2, 4, 5, 3, 4 ];

var s = sum( data );
// returns 18
```

For non-numeric `arrays`, provide an accessor `function` for accessing numeric `array` values

``` javascript
var data = [
    {'x':2},
    {'x':4},
    {'x':5},
    {'x':3},
    {'x':4},
];

function getValue( d ) {
    return d.x;
}

var s = sum( data, getValue );
// returns 18
```

## Examples

``` javascript

var sum = require( 'compute-sum' );

var data = new Array( 1000 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}

console.log( sum( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```

---
## License

[MIT license](http://opensource.org/licenses/MIT).

## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-sum.svg
[npm-url]: https://npmjs.org/package/compute-sum

[travis-image]: http://img.shields.io/travis/compute-io/sum/master.svg
[travis-url]: https://travis-ci.org/compute-io/sum

[coveralls-image]: https://img.shields.io/coveralls/compute-io/sum/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/sum?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/sum.svg
[dependencies-url]: https://david-dm.org/compute-io/sum

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/sum.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/sum

[github-issues-image]: http://img.shields.io/github/issues/compute-io/sum.svg
[github-issues-url]: https://github.com/compute-io/sum/issues
