<?php 

	function create_custom_post_type_menu() {
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

        // https://developer.wordpress.org/reference/functions/add_submenu_page/
        add_submenu_page(
		    'page', // Parent slug
		    'subpage', // Page title
		    'Casino Games', // Menu title
		    'manage_options', // Capability
		    'edit.php?post_type=casino-games',  // Slug
		    false // Function
		);

        
        add_submenu_page(
		    'page', // Parent slug
		    'subpage', // Page title
		    'Casino Reviews', // Menu title
		    'manage_options', // Capability
		    'edit.php?post_type=casino-reviews',  // Slug
		    false // Function
		);

		add_submenu_page(
		    'page', // Parent slug
		    'subpage', // Page title
		    'Slots', // Menu title
		    'manage_options', // Capability
		    'edit.php?post_type=slots',  // Slug
		    false // Function
		);

		// ! This page is useless, so don't try to remove the code below!
		remove_submenu_page('page', 'page');
	}

	add_action('admin_menu', 'create_custom_post_type_menu');

    