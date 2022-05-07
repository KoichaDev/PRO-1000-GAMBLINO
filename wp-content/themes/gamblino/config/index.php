<?php 

foreach (glob(dirname(__FILE__) . '/**/*.php') as $filename) {
    require_once $filename;
}

$customPostTypeMenu = new CustomPostTypeMenu();
$customPostTypeMenu -> createSubMenuPage('Casino Games', 'casino-games');
$customPostTypeMenu -> createSubMenuPage('Casino Reviews', 'casino-reviews');
$customPostTypeMenu -> createSubMenuPage('Slots', 'slots');