<?php

class NavbarMenuColorOptions extends NavbarMenuOptions { 

    protected $headerBackgroundColor = '';
    protected $titleTextColor = '';

    public function getBackgroundColor( ) {
        return $this -> headerBackgroundColor = get_field( 'global_header_color_picker', 'options');
    }

    public function getTitleTextColor() {
        return $this -> titleTextColor = get_field( 'global_header_color_text_picker', 'options');
    }
}
