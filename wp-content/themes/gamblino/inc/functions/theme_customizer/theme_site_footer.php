<?php 

function gamblino_theme_customize_site_footer ( $wp_customize ) {
    $wp_customize -> add_section( 'gamblino_site_footer_options', [
        'title'             => esc_html__( 'Footer Options', 'gamblino' ),
        'description'       => esc_html( 'Global footer settings', 'gamblino' ),
    ]);

    $wp_customize -> add_setting('gamblino_site_info', [
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ]);

    $wp_customize -> add_control( 'gamblino_site_info', [
        'type'      => 'text',
        'label'     => esc_html('Site info', 'gamblino'),
        'section'   =>  'gamblino_site_footer_options',
    ]);
}

add_action( 'customize_register',  'gamblino_theme_customize_site_footer' );