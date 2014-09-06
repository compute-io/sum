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

(function() {
	'use strict';

	/**
	* FUNCTION: sum( arr )
	*	Computes the sum over an array of values.
	*
	* @param {Array} arr - array of values
	* @returns {Number} sum
	*/
	function sum( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'sum()::invalid input argument. Must provide an array.' );
		}
		var len = arr.length,
			s = 0;

		for ( var i = 0; i < len; i++ ) {
			s += arr[ i ];
		}
		return s;
	} // end FUNCTION sum()


	// EXPORTS //

	module.exports = sum;

})();