/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Matrix data structure:
	matrix = require( 'dstructs-matrix' ),

	// Module to be tested:
	sum = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-sum', function tests() {

	it( 'should export a function', function test() {
		expect( sum ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided either an array or matrix', function test() {
		var values = [
			// '5', // array-like
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				sum( value );
			};
		}
	});

	it( 'should throw an error if provided an unrecognized/unsupported data type option', function test() {
		var values = [
			'beep',
			'boop'
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				sum( matrix( [2,2] ), {
					'dtype': value
				});
			};
		}
	});

	it( 'should throw an error if provided a dim option which is not a positive integer', function test() {
		var data, values;

		values = [
			'5',
			-5,
			2.2,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		data = matrix( new Int32Array([1,2,3,4]), [2,2] );

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				sum( data, {
					'dim': value
				});
			};
		}
	});

	it( 'should throw an error if provided a dim option which exceeds matrix dimensions (2)', function test() {
		var data, values;

		values = [
			3,
			4,
			5
		];

		data = matrix( new Int32Array([1,2,3,4]), [2,2] );

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( RangeError );
		}
		function badValue( value ) {
			return function() {
				sum( data, {
					'dim': value
				});
			};
		}
	});

	it( 'should return 0 if provided an empty array', function test() {
		assert.strictEqual( sum( [] ), 0 );
	});

	it( 'should compute the sum of an array', function test() {
		var data, expected;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = 24;

		assert.strictEqual( sum( data ), expected );
	});

	it( 'should compute the sum of a vector (matrix with one column or row)', function test() {
		var data, expected;

		expected = 24;
		data = matrix( new Int32Array( [ 2, 4, 5, 3, 8, 2 ] ), [6,1] );

		assert.strictEqual( sum( data ), expected );
	});

	it( 'should compute the sum using an accessor function', function test() {
		var data, expected, actual;

		data = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];

		actual = sum( data, {
			'accessor': getValue
		});
		expected = 24;

		assert.strictEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should compute the column sums of a matrix', function test() {
		var data, expected, actual;

		data = matrix( new Int32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ), [3,3] );
		expected = matrix( new Int32Array( [ 6, 15, 24 ] ), [3,1] );

		actual = sum( data, {
			'dtype': 'int32'
		});

		assert.deepEqual( actual.shape, expected.shape );
		assert.deepEqual( actual.data, expected.data );
	});

	it( 'should compute the row sums of a matrix', function test() {
		var data, expected, actual;

		data = matrix( new Int32Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ), [3,3] );
		expected = matrix( new Int32Array( [ 12, 15, 18 ] ), [1, 3] );

		actual = sum( data, {
			'dim': 1,
			'dtype': 'int32'
		});

		assert.deepEqual( actual.shape, expected.shape );
		assert.deepEqual( actual.data, expected.data );
	});

});
