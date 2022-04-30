<?php 

class Customizer_Footer_Site_Info {
    public static function init() {
        add_action( 'customize_register',  [ get_called_class(), 'gamblino_theme_customizer_global_footer'] );
    }

    public static function gamblino_theme_customizer_global_footer( $wp_customize ) {
        static::site_title( $wp_customize );
        static::background_color( $wp_customize );
    }

    public static function site_title ( $wp_customize ) {        

        // Partial refresh only refreshing a setion of a place on the page instead of whole website
        // This will make it more performant for the page
        // $wp_customize -> selective_refresh -> add_partial( 'gamblino_footer_site_info_partial' , [
        //     'settings'              => [ 'gamblino_footer_site_info' ],
        //     'selector'              => '.text-content',
        //     'container_inclusive'   => false,
        //     'render_callback'       => function() {
        //         get_footer();
        //     } 
        // ]);

        $wp_customize -> add_section( 'gamblino_site_footer_options', [
            'title'             => esc_html__( 'Footer Options', 'gamblino' ),
            'description'       => esc_html( 'Global footer settings', 'gamblino' ),
        ]);

        $wp_customize -> add_setting( 'gamblino_footer_site_info', [
            'default'           => '',
            'sanitize_callback' => 'gamblino_sanitize_site_info',
            'transport'         => 'postMessage'
        ]);

        $wp_customize -> add_control( 'gamblino_footer_site_info', [
            'type'      => 'text',
            'label'     => esc_html('Site info', 'gamblino'),
            'section'   =>  'gamblino_site_footer_options',
        ]);

        function gamblino_sanitize_site_info( $input ) {
            $allowed = [
                'a' => [
                    'href' => [],
                    'title' => [],
                    'target' => [],
                ],
            ];

            return wp_kses( $input, $allowed );
        }
    }

    public static function background_color ( $wp_customize ) {
        $wp_customize -> selective_refresh -> add_partial( 'gamblino_footer_background_partial' , [
            'settings'              => ['gamblino_site_footer_options'],
            'selector'              => '.footer-main',
            'container_inclusive'   => true,
            'render_callback'       => function() {
                get_footer();
            } 
        ]);


        $wp_customize -> add_setting( 'gamblino_background_color_footer', [
            'default'           => '#ffffff',
            'sanitize_callback' => 'sanitize_hex_color',
            'transport'         => 'postMessage'
        ]);

        $wp_customize -> add_control( 'gamblino_site_footer_options', [
            'type'              => 'color',
            'label'             => esc_html__( 'Background Color', 'gamblino' ),
            'section'           => 'gamblino_site_footer_options',
            'settings'          => 'gamblino_background_color_footer',
        ]);
    }
}


Customizer_Footer_Site_Info::init();



