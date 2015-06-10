'use strict';

/**
* FUNCTION: sum( arr )
*	Computes the sum.
*
* @param {Array} arr - input array
* @returns {Number} sum
*/
function sum( arr ) {
	var len = arr.length,
		s = 0,
		i;
	for ( i = 0; i < len; i++ ) {
		s += arr[ i ];
	}
	return s;
} // end FUNCTION sum()


// EXPORTS //

module.exports = sum;
