<?php 
 /*
   * Base Controller
   * Loads the Model
   */

class Controller {

    public function __construct(){
        $this -> model();
    }

    public function model() {

        $gutenberg_blocks = get_theme_file_path("../gamblino/src/acf-gutenberg-blocks/*.php");
    
        // Autoload every files regarding Gutenberg Blocks archive template hierachy
        auto_load_files_from_folder( $gutenberg_blocks );
    }
}

new Controller();