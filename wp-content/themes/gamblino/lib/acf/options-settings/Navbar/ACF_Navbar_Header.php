<?php

class ACF_Navbar_Header {
    public $header_bg_color = '';
    public $logo_image_id = '';

    public function __construct() {
        $this -> get_image_acf_group();

    } 

    public function get_header_bg_color( ) {
        return $this -> header_bg_color = get_field( 'global_header_color_picker', 'options');
    }

    public function get_image_acf_group() {
        if( !have_rows( 'navbar_image_group', 'options') ) return;
        
        while( have_rows('navbar_image_group', 'options') ) {
            the_row(); 
            // Get sub field values.
            $image = get_sub_field('image');
            // var_dump($image);
        }  
    }

    public function get_logo_image() {
    }



    public function get_logo_image_alt_text() {

    }

    public function get_logo_image_aria_label() {

    }

    public function get_logo_image_title() {

    }
}

