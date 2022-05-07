<?php

if (!function_exists('gamblino_cpt_casino_games')) {

    function gamblino_cpt_casino_games() {

        $labels = [
            "name" => __("Casino Games", "gamblino"),
            'all_items' => __('All Posts'),
            "singular_name" => __("Casino Games", "gamblino"),
        ];

        $args = [
            "label" => __("gamblino_cpt_casino_games", "gamblino"),
            "labels" => $labels,
            "description" => "",
            "public" => false,
            "publicly_queryable" => true,
            "show_ui" => true,
            "show_in_rest" => true,
            "rest_base" => "",
            "rest_controller_class" => "WP_REST_Posts_Controller",
            "has_archive" => true,
            "show_in_menu" => true,
            "show_in_nav_menus" => true,
            "delete_with_user" => false,
            "exclude_from_search" => false,
            "capability_type" => "post",
            "map_meta_cap" => true,
            "hierarchical" => true,
            "rewrite" => [
                "slug" => "casino-games",
                "with_front" => true
            ],
            "query_var" => true,
            "menu_position" => 5,
            "supports" => ['title', 'editor', 'author', 'thumbnail'],
        ];

        register_post_type("casino-games", $args);
    }

    add_action('init', 'gamblino_cpt_casino_games');
}

// We want to hide "remove" the menu of the admin dashboard. No need to create duplicate menu functionality
// Instead we, want to use the add_submenu_page() wp functionality to show this CPT instead 

if (!function_exists('custom_post_types_casino_games')) {

     function custom_post_types_casino_games() {
        remove_menu_page( 'edit.php?post_type=casino-games' );
    }

    add_action( 'admin_menu', 'custom_post_types_casino_games' );
}