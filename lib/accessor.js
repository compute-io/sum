'use strict';

/**
* FUNCTION: sum( arr, clbk )
*	Computes a sum using an accessor.
*
* @param {Array} arr - input array
* @param {Function} accessor - accessor function for accessing array values
* @returns {Number} sum
*/
function sum( arr, clbk ) {
	var len = arr.length,
		s = 0,
		i;
	for ( i = 0; i < len; i++ ) {
		s += clbk( arr[ i ], i );
	}
	return s;
} // end FUNCTION sum()


// EXPORTS //

module.exports = sum;
