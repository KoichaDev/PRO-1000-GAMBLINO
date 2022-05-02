<?php 

class ACF_Navbar_Options {
    
    public static function init() {
        static::Navbar_Options();
    }

    public static function Navbar_Options() {
        if( !function_exists('acf_add_options_page') ) return;

            acf_add_options_page(array(
                'page_title' 	=> __('Navbar Settings', 'gamblino'),
                'menu_title'	=> __('Navbar Settings', 'gamblino'),
                'menu_slug' 	=> 'navbar-general-settings',
                'capability'	=> 'edit_posts',
                'redirect'		=> false
            ));
            
            acf_add_options_sub_page(array(
                'page_title' 	=> __('Navbar Category List', 'gamblino'),
                'menu_title'	=> __('Navbar Category List', 'gamblino'),
                'parent_slug'	=> 'navbar-general-settings',
            ));
        }
}

ACF_Navbar_Options::init();