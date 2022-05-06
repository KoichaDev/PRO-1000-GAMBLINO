<?php

class ACF_Footer_Flexible_Content {

    public $menu_content = [];

    public function __construct( $field_name, $layout_name ) {
        $this -> get_flexible_content_layout( $field_name, $layout_name );
    }

    public function get_flexible_content_layout( $field_name, $layout_name ) {
        if( !have_rows($field_name, 'options')  ) return; 

        while( have_rows($field_name, 'options') ) : the_row();
            
            if( get_row_layout() == $layout_name ) {
                $this -> menu_content[] = [
                    'title' => get_sub_field('title_menu'),
                    'image' => get_sub_field('image'),
                    'menus' => get_sub_field('sub_menu_repeater_field')
                ];
            }

        endwhile;
    }

}