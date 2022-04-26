<?php 

class Customize_theme_footer {
    public static function init() {
        add_action( 'customize_register',  [ get_called_class(), 'gamblino_theme_customize_site_footer'] );
    }

    public static function gamblino_theme_customize_site_footer ( $wp_customize ) {        
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
}


Customize_theme_footer::init();



