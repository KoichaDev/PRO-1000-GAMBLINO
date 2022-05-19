<?php 

class EnqueueScripts {

     public function __construct() {
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueueScripts'] );
        add_action( 'customize_preview_init', [ $this, 'enqueueCustomizerLivePreview'] );
        add_filter( 'script_loader_tag', [ $this, 'enqueueScriptDefer' ], 10 );
    }

    public function enqueueScripts() {
        // Load regular JavaScript
        wp_enqueue_script( 
            'gamblino-javascript', 
            get_template_directory_uri() . '/dist/main.js', 
            [], 
            filemtime( get_stylesheet_directory() . '/dist/main.js' ), 
            false 
        );
    }

     public function enqueueCustomizerLivePreview() {
        wp_enqueue_script( 
            'gamblino-live-preview',            //Give the script an ID
            get_template_directory_uri() . '/dist/main.js', 
            [ 'customize-preview', 'jquery' ],    //Define dependencies
            filemtime( get_stylesheet_directory() . '/dist/main.js' ),                       //Define a version (optional) 
            false                      //Put script in footer?
        );
    }


    public function enqueueScriptDefer( $url ) {
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
}