<?php 

    if (!function_exists( 'gamblino_custom_image_sizes')){
        function gamblino_custom_image_sizes() {
            // add_image_size( 'gamblino_custome_image_size_title', 699, 422, true );
        }
    }
    add_action( 'after_setup_theme', 'gamblino_custom_image_sizes' );
