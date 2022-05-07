<?php 

class ACF_Footer_Approval_Outbound_Links {

    public $field_name = 'footer_approval_outbound_repeater_field';
    public $approval_links_content = [];

    public function __construct( ) {
        $this -> get_social_media_repeater_field_content( $this -> field_name );
    }

    public function get_social_media_repeater_field_content( $field_name) {        
        if( !have_rows($field_name, 'options' ) ) return;
        while( have_rows($field_name, 'options' ) ) : the_row();

            $approval_links_content = [
                'media' => get_sub_field('image_group'),
                'accessibility_info' => get_sub_field('accessibility_group'),
                'no_follow' => get_sub_field('html_attr_no_follow'),
            ];            
        
           $this -> set_approval_outbound_links_content( $approval_links_content );
        endwhile;
    }

    public function set_approval_outbound_links_content( $value ) {
        $this -> approval_links_content[] = $value;
    }
}

