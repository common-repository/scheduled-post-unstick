/**
 * Feature Name:	Admin JS
 * Version:			0.1
 * Author:			Inpsyde GmbH
 * Author URI:		http://inpsyde.com
 * Licence:			GPLv3
 * 
 * Changelog
 *
 * 0.1
 * - Initial Commit
 */

( function( $ ) {
	var spu_admin = {
		init : function () {
			
			$( '#spu_scheduled_unstick' ).live( 'change', function() {
				if ( undefined == $( this ).attr( 'checked' ) )
					$( '#spu_timestamp' ).slideUp( 'fast' );
				else
					$( '#spu_timestamp' ).slideDown( 'fast' );
			} );
		},
	};
	$( document ).ready( function( $ ) {
		spu_admin.init();
	} );
} )( jQuery );