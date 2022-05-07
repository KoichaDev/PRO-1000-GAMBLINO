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
	}
}
    