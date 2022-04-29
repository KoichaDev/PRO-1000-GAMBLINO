<?php 

class Site_Identify {
    public static function init() {
        add_action( 'customize_register',  [ get_called_class(), 'gamblino_theme_customize_site_identidy'] );
    }

    public static function gamblino_theme_customize_site_identidy( $wp_customize ) {
        $wp_customize -> get_setting('blogname') -> transport = 'postMessage';
    }
}


Site_Identify::init();
