<?php 

class Customizer_Site_Identify {
    public static function init() {
        add_action( 'customize_register',  [ get_called_class(), 'gamblino_theme_customize_site_identidy'] );
    }

    public static function gamblino_theme_customize_site_identidy( $wp_customize ) {
        $wp_customize -> get_setting('blogname') -> transport = 'postMessage';

        // Partial refresh only refreshing a setion of a place on the page instead of whole website
        // This will make it more performant for the page
        $wp_customize -> selective_refresh -> add_partial( 'blogname', [
            'selector'              => '#header-blogname',
            'container_inclusive'   => false,
            'render_callback'       => function() {
                bloginfo( 'name' );
            } 
        ]);

        add_theme_support( 'customize-selective-refresh-widgets' );
    }
}


Customizer_Site_Identify::init();
