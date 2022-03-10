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

function gamblino_blocks_init() {
	$blocks = [
		'block-info-bonus-review/',
		'block-general-information/',
	];

	foreach ($blocks as $block) {
		register_block_type( plugin_dir_path( __FILE__ ) . 'blocks/' . $block );
	}
}
add_action( 'init', 'gamblino_blocks_init' );
