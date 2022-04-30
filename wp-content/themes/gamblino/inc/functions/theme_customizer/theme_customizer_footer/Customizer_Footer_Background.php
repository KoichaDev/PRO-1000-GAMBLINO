<?php

class Customizer_Footer_Background {

     public static function init() {
        add_action( 'customize_register',  [ get_called_class(), 'gamblino_theme_customize_footer_background'] );
    }

    public static function gamblino_theme_customize_footer_background( $wp_customize ) {
        $wp_customize -> add_control( 'gamblino_footer_background_color', [
                'type'      => 'color',
                'label'     => esc_html('Change Background Color', 'gamblino'),
                'section'   =>  'gamblino_site_footer_background_color',
        ]);
    }
}

Customizer_Footer_Background::init();