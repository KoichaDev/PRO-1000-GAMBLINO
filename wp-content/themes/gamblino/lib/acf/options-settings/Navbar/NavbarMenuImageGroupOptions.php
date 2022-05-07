<?php 

class NavbarMenuImageGroupOptions extends NavbarMenuOptions {

    public function __construct() {
        $this -> getImageGroup();
    }

    public function getImageGroup() {
        if( !have_rows( 'navbar_image_group', 'options') ) return;
        
        while( have_rows('navbar_image_group', 'options') ) {
            the_row(); 

            $this -> setLogoImageId(get_sub_field('image')['id']);
            $this -> setLogoImageAltText(get_sub_field('alt_text'));
            $this -> setLogoImageAriaLabel(get_sub_field('aria_label'));
            $this -> setLogoImagetitle(get_sub_field('title'));
        }  
    }

    public function setLogoImageId($value) {
         $this -> logoImageId = $value;
    }

    public function getLogoImageId() {
        return $this -> logoImageId;
    }

    public function setLogoImageAltText($value) {
        $this -> logoImageAltText = $value;
    }

    public function getLogoImageAltText() {
        return $this -> logoImageAltText;
    }

    public function setLogoImageAriaLabel($value) {
        $this -> logoImageAriaLabel = $value;
    }

    public function getLogoImageAriaLabel() {
        return $this -> logoImageAriaLabel;
    }

    public function setLogoImagetitle($value) {
        $this -> logoImagetitle = $value;
    }

    public function getLogoImagetitle() {
        return $this -> logoImagetitle;
    }

}