'use strict';

var matrix = require( 'dstructs-matrix' ),
	sum = require( './../lib' );

var data,
	mat,
	s,
	i;

// ----
// Plain arrays...
var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}
s = sum( data );
console.log( 'Arrays: %d\n', s );


// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': data[ i ]
	};
}
s = sum( data, {
	'accessor': getValue
});
console.log( 'Accessors: %d\n', s );


// ----
// Typed arrays...
data = new Int32Array( 1000 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
}
s = sum( data );


// ----
// Matrices (along rows)...
mat = matrix( data, [100,10], 'int32' );
s = sum( mat, {
	'dim': 1
});
console.log( 'Matrix (rows): %s\n', s.toString() );


// ----
// Matrices (along columns)...
s = sum( mat, {
	'dim': 2
});
console.log( 'Matrix (columns): %s\n', s.toString() );


// ----
// Matrices (custom output data type)...
s = sum( mat, {
	'dtype': 'uint8'
});
console.log( 'Matrix (%s): %s\n', s.dtype, s.toString() );
