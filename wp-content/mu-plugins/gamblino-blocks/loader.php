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
		static::register_custom_block_types();
		static::enqueue_theme_styles();
		static::allowed_gutenberg_block_types();
	}

	/**
	 * It registers the custom blocks.
	 * 
	 * @return the path to the file.
	 */
	public static function register_custom_block_types() {
		if( function_exists( 'gamblino_register_custom_block_type' ) ) return;

		function gamblino_register_custom_block_type() {
			$blocks = scandir(plugin_dir_path( __FILE__ ) . 'src/blocks');
			$blocksCommon = scandir(plugin_dir_path( __FILE__ ) . 'src/blocks/common');	

			foreach ($blocks as $block) {
				register_block_type( plugin_dir_path( __FILE__ ) . 'src/blocks/' . $block );
			}     

			foreach ($blocksCommon as $blockCommon) {
				register_block_type( plugin_dir_path( __FILE__ ) . 'src/blocks/common/' . $blockCommon );
			}     
		}

		add_action( 'init', 'gamblino_register_custom_block_type' );
	}

	/**
	 * > Loads the main CSS file from the `dist` folder from the Gamblino Theme
	 * 
	 * @return The function enqueue_gamblino_theme_css() is being returned.
	 */
	public static function enqueue_theme_styles() {
		if( function_exists( 'enqueue_gamblino_theme_css' ) ) return;

		function enqueue_gamblino_theme_css() {
			// Load Regular CSS 
			wp_enqueue_style( 
				'gamblino-style-sheet', 
				get_template_directory_uri() . '/dist/main.css', 
				[], 
				filemtime( get_stylesheet_directory() . '/dist/main.css' ), 
				'all' 
			);
		}
        
        add_action( 'wp_enqueue_scripts', 'enqueue_gamblino_theme_css' );
    }

	/**
	 * It adds a filter to the allowed block types in the Gutenberg editor
	 * 
	 * @return An array of allowed blocks.
	 */
	public static function allowed_gutenberg_block_types() {
		if ( function_exists( 'gamblino_allowed_block_types' ) ) return;
        function gamblino_allowed_block_types( $allowed_blocks ) {
                return array(
                    'core/image',
                    'core/paragraph',
                    'core/heading',
                    'core/list',
                    'core/freeform',
                    'core/separator',
                    'core/gallery',
                    'core/columns',
                    'acf/card-block-1',
                    'acf/block-carousel',
                    'acf/block-total-post-articles',
                    'gamblino-block/info-bonus-review',
                    'gamblino-block/general-information',
                    'gamblino-block/insert-review',
                    'gamblino-block/table',
                    "gamblino-block/ranking-cards",
                    "gamblino-block/ranking-card",
                    'gamblino-block/button',
                    'gamblino-block/image',

                );
        
            }
        add_filter( 'allowed_block_types_all', 'gamblino_allowed_block_types' );
	}
}

Loader::init();
