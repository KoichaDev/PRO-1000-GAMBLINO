<?php
/*
Plugin Name: Gamblino Must Used plugins
Description: Loading miscellaneous custom plugins
Version: 1.0.0
Author: Khoi Hoang
Author URI: https://gamblino.com
*/


// $custom_post_type_files = plugin_dir_path(__FILE__) . 'block-*';

// function auto_load_files_from_folder($folder_path = '') {
//     // autoload every files a folder
//     foreach (glob($folder_path) as $file_name) {
//         require $file_name;
//     }
// }

// auto_load_files_from_folder($custom_post_type_files);

include_once('block-gamblino-info-bonus-review/loader.php'); 


