'use strict';

/**
* FUNCTION: sum( arr, clbk )
*	Computes the sum of the elements of an array using an accessor.
*
* @param {Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Number|Null} sum value
*/
function sum( arr, clbk ) {
	var len = arr.length,
		s = 0,
		i;

	if ( !len ) {
		return null;
	}

	for ( i = 0; i < len; i++ ) {
		s += clbk( arr[ i ], i );
	}

	return s;
} // end FUNCTION sum()


// EXPORTS //

module.exports = sum;
