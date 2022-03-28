<?php

function gamblino_block_editor_theme_setup() {
	add_theme_support( 'editor-styles' );
	add_editor_style( 'style-editor.css' ); 
}

add_action( 'after_setup_theme', 'gamblino_block_editor_theme_setup' );
