<?php 
function gamblino_script_defer( $url ) {
    if ( is_admin() ) {
        return $url; //don't break WP Admin
    } 

    if ( false === strpos( $url, '.js' ) ) {
        return $url;
    } 

    if ( strpos( $url, 'jquery.js' ) ) {
        return $url;
    } 
    return str_replace( ' src', ' defer src', $url );
} 

function gamblino_scripts_and_styles() {
    $custom_post_type_files = get_theme_file_path("../gamblino/inc/inline-styles/*.php");
    
    // Load Regular CSS 
    wp_enqueue_style( 
        'gamblino-style-sheet', 
        get_template_directory_uri() . '/dist/main.css', 
        [], 
        filemtime( get_stylesheet_directory() . '/dist/main.css' ), 
        'all' 
    );
    
    // Autoload inline-styles
    auto_load_files_from_folder($custom_post_type_files);

    // Load regular JavaScript
    wp_enqueue_script( 
        'gamblino-javascript', get_template_directory_uri() . '/dist/main.js', 
        [], 
        filemtime( get_stylesheet_directory() . '/dist/main.js' ), 
        false 
    );
}

add_filter( 'script_loader_tag', 'gamblino_script_defer', 10 );
add_action( 'wp_enqueue_scripts', 'gamblino_scripts_and_styles' );
