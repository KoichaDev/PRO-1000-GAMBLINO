<?php 

class Enqueue_script_and_styles {

    public static function init() {
        add_action( 'wp_enqueue_scripts', [ get_called_class(), 'gamblino_enqueue_scripts'] );
        add_action( 'wp_enqueue_scripts', [ get_called_class(), 'gamblino_enqueue_styles'] );
        add_action( 'customize_preview_init', [ get_called_class(), 'gamblino_customizer_live_preview'] );

        // add_filter( 'script_loader_tag', [ get_called_class(), 'gamblino_script_defer' ], 10 );
    }

    // public static function gamblino_script_defer( $url ) {
    //     if ( is_admin() ) {
    //         return $url; //don't break WP Admin
    //     } 

    //     if ( false === strpos( $url, '.js' ) ) {
    //         return $url;
    //     } 

    //     if ( strpos( $url, 'jquery.js' ) ) {
    //         return $url;
    //     } 
    //     return str_replace( ' src', ' defer src', $url );
    // } 

    public static function gamblino_enqueue_scripts() {
        $custom_post_type_files = get_theme_file_path("../gamblino/inc/inline-styles/*.php");
      
        // Autoload inline-styles
        auto_load_files_from_folder($custom_post_type_files);

        // Load regular JavaScript
        wp_enqueue_script( 
            'gamblino-javascript', 
            get_template_directory_uri() . '/dist/main.js', 
            [], 
            filemtime( get_stylesheet_directory() . '/dist/main.js' ), 
            false 
        );
    }

    public static function gamblino_enqueue_styles() {
        // Load Regular CSS 
        wp_enqueue_style( 
            'gamblino-style-sheet', 
            get_template_directory_uri() . '/dist/main.css', 
            [], 
            filemtime( get_stylesheet_directory() . '/dist/main.css' ), 
            'all' 
        );
    }

    public static function gamblino_customizer_live_preview() {
        wp_enqueue_script( 
            'gamblino-live-preview',            //Give the script an ID
            get_template_directory_uri() . '/dist/main.js', 
            [ 'customize-preview', 'jquery' ],    //Define dependencies
            filemtime( get_stylesheet_directory() . '/dist/main.js' ),                       //Define a version (optional) 
            false                      //Put script in footer?
        );
    }
}

Enqueue_script_and_styles::init();