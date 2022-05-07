<?php 

class CustomImage {
    public static function generateImageSize($imageSizeIdentifier= '', $imageWidth = '', $imageHeight = '', $imageCrop = false) {
        add_action( 'after_setup_theme', function() use($imageSizeIdentifier, $imageWidth, $imageHeight, $imageCrop) {
            add_image_size( $imageSizeIdentifier, $imageWidth, $imageHeight, $imageCrop);
        });
    }
}

  