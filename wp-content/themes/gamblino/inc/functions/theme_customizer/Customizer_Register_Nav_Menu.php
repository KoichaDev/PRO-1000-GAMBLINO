<?php

class Customizer_Register_Nav_Menu {
    public static function init() {
        add_action( 'init',  [ get_called_class(), 'gamblino_init_customizer_register_menu'] );
    }

    public static function gamblino_init_customizer_register_menu() {
        register_nav_menu('my-custom-menu',__( 'My Custom Menu' ));
    }
}