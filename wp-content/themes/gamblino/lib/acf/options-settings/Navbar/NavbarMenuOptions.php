<?php

class NavbarMenuOptions {
    
    protected $logoImageId = '';
    protected $logoImageAltText = '';
    protected $logoImageAriaLabel = '';
    protected $logoImagetitle = '';

    public function __construct() {
        $this -> Navbar_Options();
    }

    public function Navbar_Options() {
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

