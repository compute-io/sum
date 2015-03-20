/**
*
*	COMPUTE: sum
*
*
*	DESCRIPTION:
*		- Computes the sum over an array of values.
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

// FUNCTIONS //

/**
* FUNCTION: sum( arr )
*	Computes the sum over an array of values.
*
* @param {Array} arr - inpur array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number} sum
*/
function sum( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'sum()::invalid input argument. Must provide an array.' );
	}

	if ( arguments.length > 1 && typeof clbk !== 'function' ) {
		throw new TypeError( 'variance()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}

	var len = arr.length,
		s = 0,
		i;

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
