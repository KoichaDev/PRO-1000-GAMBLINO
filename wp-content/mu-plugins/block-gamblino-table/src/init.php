<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function cgb_a11y_table_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'gamblino-block-table-style-css', // Handle.
		plugins_url( 'build/style-index.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'gamblino-block-table-block-js', // Handle.
		plugins_url( '/build/index.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'gamblino-block-table-block-editor-css', // Handle.
		plugins_url( 'build/index.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	register_block_type(
		'gamblino/block-table', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'gamblino-block-table-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'gamblino-block-table-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'gamblino-block-table-block-editor-css',
		)
	);
}

add_action( 'init', 'cgb_a11y_table_cgb_block_assets' );
