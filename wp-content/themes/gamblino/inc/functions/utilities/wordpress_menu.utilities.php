<?php

// We want to hide "remove" the menu of the admin dashboard. No need to create duplicate menu functionality
// Instead we, want to use the add_submenu_page() wp functionality to show this CPT instead 
function remove_wp_side_menu($post_type_slug = '') {

    if (!function_exists('gamblino_custom_post_types_remove_menu_page')) {

        function gamblino_custom_post_types_remove_menu_page() {
            remove_menu_page( 'edit.php?post_type=' . $post_type_slug );
        }

        add_action( 'admin_menu', 'gamblino_custom_post_types_remove_menu_page' );
    }
}

