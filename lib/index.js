/**
*
*	COMPUTE: sum
*
*
*	DESCRIPTION:
*		- Computes the sum of an array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/


'use strict';

// MODULES //

var isArray = require( 'validate.io-array' );


// SUM //

/**
* FUNCTION: sum( arr[, accessor] )
*	Computes the sum of an array.
*
* @param {Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|null} sum or null
*/
function sum( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'sum()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 && typeof clbk !== 'function' ) {
		throw new TypeError( 'sum()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}
	var len = arr.length,
		s = 0,
		i;

	if ( !len ) {
		return null;
	}
	if ( clbk ) {
		for ( i = 0; i < len; i++ ) {
			s += clbk( arr[ i ] );
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			s += arr[ i ];
		}
	}
	return s;
} // end FUNCTION sum()


// EXPORTS //

module.exports = sum;
