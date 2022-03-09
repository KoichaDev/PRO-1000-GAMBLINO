<?php
/**
 * Plugin Name:       Block Gamblino Info Bonus Review
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-gamblino-info-bonus-review
 *
 * @package           gamblino-block
 */

function gamblino_block_info_bonus_review_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'gamblino_block_info_bonus_review_block_init' );
