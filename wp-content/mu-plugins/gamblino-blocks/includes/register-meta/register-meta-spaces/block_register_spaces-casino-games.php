<?php


function block_register_padding_meta() {
	
	register_meta( 'post', '_block_register_padding', [
		'single' 			=>	true,
		'type'	 			=> 'string', // which data type the meta-key field will be
		'show_in_rest' 		=> true, // behind the scene, WP is using a REST-api to get the data
		'sanitize_callback'	=> 'sanitize_text_field', // sanitize the data before sending the data to the server
		'auth_callback'		=> function() {
			return current_user_can( 'edit_posts' );
		}
	]);
}

add_action( 'init', 'block_register_padding_meta');


function block_register_padding_meta() {
	
	register_meta( 'post', '_block_register_padding', [
		'single' 			=>	true,
		'type'	 			=> 'string', // which data type the meta-key field will be
		'show_in_rest' 		=> true, // behind the scene, WP is using a REST-api to get the data
		'sanitize_callback'	=> 'sanitize_text_field', // sanitize the data before sending the data to the server
		'auth_callback'		=> function() {
			return current_user_can( 'edit_posts' );
		}
	]);
}

add_action( 'init', 'block_register_padding_meta');
