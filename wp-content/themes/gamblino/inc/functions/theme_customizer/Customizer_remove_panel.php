<?php

class Customize_removal_panel {

  public static function init() {
    add_action( 'customize_register', [ get_called_class(), 'theme_customize_remove_css_section' ], 15 );
  }

  public static function theme_customize_remove_css_section( $wp_customize ) {
        $wp_customize -> remove_section( 'custom_css' );
  }
}

Customize_removal_panel::init();