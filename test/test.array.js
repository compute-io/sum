/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	sum = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'array sum', function tests() {

	it( 'should export a function', function test() {
		expect( sum ).to.be.a( 'function' );
	});

	it( 'should compute the sum', function test() {
		var data, expected;

		data = [ 2, 4, 5, 3, 8, 2 ];
		expected = 24;

		assert.strictEqual( sum( data ), expected );
	});

	it( 'should return 0 if provided an empty array', function test() {
		assert.strictEqual( sum( [] ), 0 );
	});

});
