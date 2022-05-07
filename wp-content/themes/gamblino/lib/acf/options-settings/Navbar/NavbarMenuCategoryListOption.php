<?php

class NavbarMenuCategoryListOption extends NavbarMenuOptions  {

    protected $categoryTitle = '';
    protected $categoryItems = [];

    public function __construct() {
        $this -> findCategoryList();
    }

    public function getCategoryTitle () {
        return $this -> categoryTitle = get_field('navbar_phone_tablet_category_list_title', 'options');
    }


    public function findCategoryList() {
        $repeaterFields = get_field('navbar_phone_tablet_category_list', 'options');

        if( !$repeaterFields ) return;

        foreach ($repeaterFields as $repeaterField) {
            $this -> setCategoryItems($repeaterField);
        }       
    }
     
    public function setCategoryItems($value) {
        $this -> categoryItems[] = $value;
    }

    public function getCategoryItems() {
        return $this -> categoryItems;
    }   
}