<?php

class ACF_Navbar_Header {
    public $header_bg_color = '';

    public function __constructor() {
        include get_header();
        $this -> get_header_bg_color();

    } 

    public function get_header_bg_color( ) {
        return $this -> header_bg_color = get_field( 'global_header_color_picker', 'options');
    }
}

