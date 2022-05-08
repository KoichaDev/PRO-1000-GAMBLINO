<?php

class RegisterMenus {

    public function __construct() {
        $this -> registerMenus();
    }

    public function setupHooks() {
        add_action('init', [ $this, 'registerMenus' ]);

    }

    public function registerMenus() {
        register_nav_menus([
            'gamblino_header_menu' => esc_html__( 'Header Menu', 'gamblino' ),
         ]);
    }
}

// // More Information: 
// // https://developer.wordpress.org/reference/functions/register_nav_menus/

// if ( ! function_exists( 'gamblino_register_nav_menu' ) ) {
 
//     function gamblino_register_nav_menu(){
      
//     }
//     add_action( 'after_setup_theme', 'gamblino_register_nav_menu', 0 );
// }