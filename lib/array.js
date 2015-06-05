'use strict';

/**
* FUNCTION: sum( arr )
*	Computes the sum of the elements of an array.
*
* @param {Array} arr - input array
* @returns {Number|Null} sum value
*/
function sum( arr ) {
	var len = arr.length,
		s = 0,
		i;

	if ( !len ) {
		return null;
	}

	for ( i = 0; i < len; i++ ) {
		s += arr[ i ];
	}

	return s;
} // end FUNCTION sum()


// EXPORTS //

module.exports = sum;
