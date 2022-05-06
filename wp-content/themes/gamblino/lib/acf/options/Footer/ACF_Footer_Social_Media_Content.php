<?php

class ACF_Footer_Social_Media_Content {
    public $field_name = 'global_footer_social_media_repeater_field';
    public $social_media_groups = [];

    // private $fields = get_fields('global_footer_social_media_repeater_field', 'options');

    public function __construct( ) {
        $this -> get_social_media_repeater_field_content( $this -> field_name );
    }

    public function get_social_media_repeater_field_content( $field_name) {        
        if( !have_rows($field_name, 'options' ) ) return;
        while( have_rows($field_name, 'options' ) ) : the_row();
            $image_groups = [];

            $social_media_groups = [
                'media' => get_sub_field('image_group'),
                'accessibility_info' => get_sub_field('accessibility_group'),
                'no_follow' => get_sub_field('html_attr_no_follow'),
            ];

           $this -> set_social_media_content( $social_media_groups );
        endwhile;
    }

    public function set_social_media_content( $value ) {
        $this -> social_media_groups[] = $value;
    }

    public function get_social_media_groups() {
        return $this -> social_media_groups;
    }
}