/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

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

	it( 'should throw an error if provided a non-array', function test() {
		var values = [
				'5',
				5,
				true,
				undefined,
				null,
				NaN,
				function(){},
				{}
			];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				sum( value );
			};
		}
	});

	it( 'should throw an error if provided accessor is not a function', function test() {
		var values = [
			'5',
			5,
			[],
			undefined,
			null,
			NaN,
			true,
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				sum( [ 1, 2, 3 ], value );
			};
		}
	});

	it( 'should compute the sum', function test() {
		var data, expected;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = 24;

		assert.strictEqual( sum( data ), expected );
	});

	it( 'should compute the sample variance using an accessor function', function test() {
		var data, expected, actual;

		data = [
			{'x':2},
			{'x':4},
			{'x':5},
			{'x':3},
			{'x':8},
			{'x':2}
		];
		expected = 24;
		actual = sum( data, getValue );

		function getValue( d ) {
			return d.x;
		}

		assert.strictEqual( actual, expected );
	});

});
