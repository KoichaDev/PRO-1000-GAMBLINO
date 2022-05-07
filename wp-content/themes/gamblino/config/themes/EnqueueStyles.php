<?php

class EnqueueStyles {
     public function __construct() {
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueueStyles'] );
    }

    public function enqueueStyles() {
        // Load Regular CSS 
        wp_enqueue_style( 
            'gamblino-style-sheet', 
            get_template_directory_uri() . '/dist/main.css', 
            [], 
            filemtime( get_stylesheet_directory() . '/dist/main.css' ), 
            'all' 
        );
    }
}