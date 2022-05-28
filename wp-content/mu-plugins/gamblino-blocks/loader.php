<?php
/**
 * Plugin Name:       Gamblino Blocks
 * Description:       Multiple Custom Gamblino Blocks
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Gamblino Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-gamblino
 *
 * @package           gamblino-block
 */

class Loader {
	public static function init() {
		add_action( 'init', [ __CLASS__, 'gamblino_register_blocks_type' ]);
        add_action( 'wp_enqueue_scripts', [ __CLASS__, 'enqueueStyles'] );
	}

	public static function gamblino_register_blocks_type() {
		$blocks = [
			'block-info-bonus-review/',
			'block-general-information/',
			'block-insert-review',
		];

		foreach ($blocks as $block) {
			register_block_type( plugin_dir_path( __FILE__ ) . 'src/blocks/' . $block );
		}
	}

	public static function enqueueStyles() {
        // Load Regular CSS 
        wp_enqueue_style( 
            'gamblino-style-sheet', 
            get_template_directory_uri() . '/dist/main.css', 
            [], 
            filemtime( get_stylesheet_directory() . '/dist/main.css' ), 
            'all' 
        );
    }
}

Loader::init();