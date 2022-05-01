<?php 
 /*
   * Base Controller
   * Loads the Model
   */

class Controller {

    public function __construct(){
        $this -> acf_model();
        $this -> load_theme_customizer_model();
        $this -> load_custom_post_type_model();
        $this -> load_acf_model();
    }

    public function acf_model() {

        $gutenberg_blocks = get_theme_file_path("../gamblino/src/acf-gutenberg-blocks/*.php");
    
        // Autoload every files regarding Gutenberg Blocks archive template hierachy
        auto_load_files_from_folder( $gutenberg_blocks );
    }

    public function load_theme_customizer_model() {
         $wp_theme_customizer = get_theme_file_path("../gamblino/inc/functions/theme_customizer/*.php");
         $wp_theme_customizer_level_2 = get_theme_file_path("../gamblino/inc/functions/theme_customizer/**/*.php");
    
        auto_load_files_from_folder( $wp_theme_customizer );
        auto_load_files_from_folder( $wp_theme_customizer_level_2 );
    }

    public function load_acf_model() {
        $acf_files = get_theme_file_path("../gamblino/inc/functions/advanced_custom_fields/*.php");
        $acf_files_level_2 = get_theme_file_path("../gamblino/inc/functions/advanced_custom_fields/**/*.php");
    
        auto_load_files_from_folder( $acf_files );
        auto_load_files_from_folder( $acf_files_level_2 );
    }

    public function load_custom_post_type_model() {
        $custom_post_types = get_theme_file_path("../gamblino/inc/functions/custom_post_types/*.php");
        
        // Autoload every files inside the custom post type folder
        auto_load_files_from_folder( $custom_post_types );
    }


}

new Controller();