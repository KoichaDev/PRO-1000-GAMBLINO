<?php 

class CustomPostTypeMenu {

	public function __construct() {
		$this -> createMenuPage();
	}
		
	public function createMenuPage() {
		add_action( 'admin_menu', function() {
			// https://developer.wordpress.org/reference/functions/add_menu_page/
			add_menu_page(
				__('Custom Post Types', 'Gamblino'), // Page title
				__('Custom Post Types', 'Gamblino'), // Menu title
				'manage_options', // Capability
				'page', // Slug
				'mycustompage', // Function name
				'dashicons-format-aside', // Slug
				5 // Order
			);

			function mycustompage() {
				echo '<h1>Custom Post Types</h1>';
			}

		});
	} 

	public function createSubMenuPage($menuTitle = '', $postType = '') {

		add_action( 'admin_menu', function() use($menuTitle, $postType ) {
			// https://developer.wordpress.org/reference/functions/add_submenu_page/
			add_submenu_page(
				'page', // Parent slug
				'subpage', // Page title
				$menuTitle, // Menu title
				'manage_options', // Capability
				'edit.php?post_type=' . $postType,  // Slug
				false // Function
			);
			// ! This page is useless, so don't try to remove the code below!
			remove_submenu_page('page', 'page');
		});
		return $this;
	}

	public function registerPostType($postTypeLabel = '', $postTypeSlug = '') {

			add_action('init', function() use($postTypeSlug, $postTypeLabel) {
				
				$labels = [
					"name" => __($postTypeLabel, "gamblino"),
					'all_items' => __('All Posts'),
					"singular_name" => __($postTypeLabel, "gamblino"),
				];

				$args = [
					"label" => __('gamblino_cpt_' . $postTypeLabel, "gamblino"),
					"labels" => $labels,
					"description" => "",
					"public" => true,
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
						"slug" => $postTypeSlug,
						"with_front" => true
					],
					"query_var" => true,
					"menu_position" => 5,
					"supports" => ['title', 'editor', 'author', 'thumbnail', 'excerpt'],
				];

				register_post_type($postTypeSlug, $args);
			});

			// We want to hide "remove" the menu of the admin dashboard. No need to create duplicate menu functionality
			// Instead we, want to use the add_submenu_page() wp functionality to show this CPT instead 		if (!function_exists('custom_post_types_casino_reviews')) {

			add_action( 'admin_menu', function() use ($postTypeSlug) {
				remove_menu_page( 'edit.php?post_type=' . $postTypeSlug );
			});
			return $this;
	}
}
    