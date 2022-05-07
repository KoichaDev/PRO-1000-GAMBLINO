<?php

class LocalJsonPointer {

    public function __construct() {
        $this -> saveJsonPoint();
        $this -> loadJsonPoint();
    }

    /**
     * Register the path to save the ACF json files so that they are version controlled.
     * @param $paths The default relative path to the folder where ACF saves the files.
     * @return string The new relative path to the folder where we are saving the files.
     */

    public function saveJsonPoint() {
        add_filter('acf/settings/save_json', function($path) {
            // Retrieve the updated path where ACF is going to be saved
            $path = get_stylesheet_directory() . '/lib/acf/local-json/json/';

            // Return path
            return $path;
        });
    }

    /**
     * Register the path to load the ACF json files so that they are version controlled.
     * @param $paths The default relative path to the folder where ACF loading the files.
     * @return string The new relative path to the folder where we are saving the files.
     */

    public function loadJsonPoint() {
        add_filter('acf/settings/load_json', function($paths) {
            // Remove original path
            unset($paths[0]); // Append our new path
            $paths[] = get_stylesheet_directory() . '/lib/acf/local-json/json';
            
            return $paths;
        });
    }
}