<?php 

new EnqueueScripts();
new EnqueueStyles();
AllowedBlocks::init();


$customPostTypeMenu = new CustomPostTypeMenu();

$customPostTypeMenu -> registerPostType('Casino Games', 'casino-games') -> createSubMenuPage('Casino Games', 'casino-games');
$customPostTypeMenu -> registerPostType('Casino Reviews', 'casino-reviews') -> createSubMenuPage('Casino Reviews', 'casino-reviews');
$customPostTypeMenu -> registerPostType('Slots', 'slots') -> createSubMenuPage('Slots', 'slots');
