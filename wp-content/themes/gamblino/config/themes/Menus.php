<?php

class RegisterMenus {

    public function __construct() {
        $this -> registerMenus();
    }

    public function setupHooks() {
        add_action('init', [ $this, 'registerMenus' ]);

    }

    public function registerMenus() {
        register_nav_menus([
            'gamblino_header_menu' => esc_html__( 'Header Menu', 'gamblino' ),
         ]);
    }

    public function getMenuId( $location ) {
        // Get all the locations. 
        $locations = get_nav_menu_locations();

        // Get object ID by $location for the menu
        $menuId = $locations[$location];

        return !empty( $menuId ) ? $menuId : '';
    }
}