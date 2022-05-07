<?php

class NavbarMenuColorOptions extends NavbarMenuOptions { 

    public function get_header_bg_color( ) {
        return $this -> header_bg_color = get_field( 'global_header_color_picker', 'options');
    }
}
