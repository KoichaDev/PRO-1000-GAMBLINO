<?php 

class ACF_Footer_Options {
    
    public static function init() {
        static::Footer_Options();
    }

    public static function Footer_Options() {
        if( !function_exists('acf_add_options_page') ) return;

            acf_add_options_page(array(
                'page_title' 	=> 'Footer Settings',
                'menu_title'	=> 'Footer Settings',
                'menu_slug' 	=> 'footer-general-settings',
                'capability'	=> 'edit_posts',
                'redirect'		=> false
            ));

             acf_add_options_sub_page(array(
                'page_title' 	=> 'Footer Menu Setup',
                'menu_title'	=> 'Footer Menu Setup',
                'parent_slug'	=> 'footer-general-settings',
            ));
            
            acf_add_options_sub_page(array(
                'page_title' 	=> 'Subscription Newsletter',
                'menu_title'	=> 'Newsletter',
                'parent_slug'	=> 'footer-general-settings',
            ));
            
            acf_add_options_sub_page(array(
                'page_title' 	=> 'Social Media Links',
                'menu_title'	=> 'Social Media',
                'parent_slug'	=> 'footer-general-settings',
            ));
        }
}

ACF_Footer_Options::init();