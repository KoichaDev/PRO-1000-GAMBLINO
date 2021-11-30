<?php

    $register_block_files = get_theme_file_path("../gamblino/src/acf_gutenberg_blocks/*.php");

    // Autoload every files inside the Gutenberg block folder
    auto_load_files_from_folder( $register_block_files );