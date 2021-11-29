<?php

// More Information: 
// https://developer.wordpress.org/reference/functions/register_nav_menus/

if ( ! function_exists( 'gamblino_register_nav_menu' ) ) {
 
    function gamblino_register_nav_menu(){
        register_nav_menus( array(
            'primary_menu' => __( 'Primary Menu', 'gamblino' ),
            'secondary_menu'  => __( 'Secondary Menu', 'gamblino' ),
            'tertiary_menu'  => __( 'Tertiary Menu', 'gamblino' ),
        ) );
    }
    add_action( 'after_setup_theme', 'gamblino_register_nav_menu', 0 );
}