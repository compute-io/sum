Sum
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the sum.

The [sum](http://en.wikipedia.org/wiki/Summation) is defined as

<div class="equation" align="center" data-raw-text="\sum_{i=0}^{N-1} x_i = x_0 + x_1 + x_2 + \ldots + x_{N-2} + x_{N-1}" data-equation="eq:sum">
	<img src="" alt="Equation for summation.">
	<br>
</div>

where `x_0, x_1,...,x_{N-1}` are individual data values and `N` is the total number of values in the data set.


## Installation

``` bash
$ npm install compute-sum
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var sum = require( 'compute-sum' );
```

### sum( x[, options] )

Computes the sum of the elements in `x`. `x` may be either an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or [`matrix`](https://github.com/dstructs/matrix).

``` javascript
var data = [ 1, 2, 3, 4 ];

var s = sum( data );
// returns 10

data = new Int8Array( data );
s = sum( data );
// returns 10
```

For non-numeric `arrays`, provide an accessor `function` for accessing `array` values.

``` javascript
var arr = [
	{'x':1},
	{'x':2},
	{'x':3},
	{'x':4}
];

function getValue( d ) {
	return d.x;
}

var value = sum( arr, {
	'accessor': getValue
});
// returns 10
```

If provided a [`matrix`](https://github.com/dstructs/matrix), the function accepts the following `options`:

*	__dim__: dimension along which to compute the sum. Default: `2` (along the columns).
*	__dtype__: output [`matrix`](https://github.com/dstructs/matrix) data type. Default: `float64`.

By default, the function computes the sum along the columns (`dim=2`).

``` javascript
var matrix = require( 'dstructs-matrix' ),
	data,
	mat,
	s,
	i;

data = new Int8Array( 9 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = i + 1;
}
mat = matrix( data, [3,3], 'int8' );
/*
	[  1 2 3
	   4 5 6
	   7 8 9 ]
*/

s = sum( mat );
/*
	[  6
	   15
	   24 ]
*/
```

To compute the sum along the rows, set the `dim` option to `1`.

``` javascript
s = sum( mat, {
	'dim': 1
});
/*
	[ 12 15 18 ]
*/
```

By default, the output [`matrix`](https://github.com/dstructs/matrix) data type is `float64`. To specify a different output data type, set the `dtype` option.

``` javascript
s = sum( mat, {
	'dim': 1,
	'dtype': 'uint8'
});
/*
	[ 12 15 18 ]
*/

var dtype = p.dtype;
// returns 'uint8'
```

If provided a [`matrix`](https://github.com/dstructs/matrix) having either dimension equal to `1`, the function treats the [`matrix`](https://github.com/dstructs/matrix) as a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) and returns a `numeric` value.

``` javascript
data = [ 2, 4, 5 ];

// Row vector:
mat = matrix( new Int8Array( data ), [1,3], 'int8' );
s = sum( mat );
// returns 11

// Column vector:
mat = matrix( new Int8Array( data ), [3,1], 'int8' );
s = sum( mat );
// returns 11
```

If provided an empty [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or [`matrix`](https://github.com/dstructs/matrix), the function returns the [empty sum](http://en.wikipedia.org/wiki/Empty_sum) which is equal to `0`.

``` javascript
s = sum( [] );
// returns 0

s = sum( new Int8Array( [] ) );
// returns 0

s = sum( matrix( [0,0] ) );
// returns 0

s = sum( matrix( [0,10] ) );
// returns 0

s = sum( matrix( [10,0] ) );
// returns 0
```

## Examples

``` javascript
var matrix = require( 'dstructs-matrix' ),
	sum = require( 'compute-sum' );

var data,
	mat,
	s,
	i;

// Plain arrays...
var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}
s = sum( data );

// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': data[ i ]
	};
}
s = sum( data, {
	'accessor': getValue
});

// Typed arrays...
data = new Int32Array( 1000 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}
s = sum( data );

// Matrices (along rows)...
mat = matrix( data, [100,10], 'int32' );
s = sum( mat, {
	'dim': 1
});

// Matrices (along columns)...
s = sum( mat, {
	'dim': 2
});

// Matrices (custom output data type)...
s = sum( mat, {
	'dtype': 'uint8'
});
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

Copyright &copy; 2014-2015. The [Compute.io](https://github.com/compute-io) Authors.


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
