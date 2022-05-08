<?php
    CustomImage::generateImageSize('25x25', 25, 25, true);
    
    $NavbarMenuColorOptions= new NavbarMenuColorOptions();
    $headerBackgroundColor = $NavbarMenuColorOptions -> getBackgroundColor();
    $titleTextColor = $NavbarMenuColorOptions -> getTitleTextColor();

    $categoryTitle = (new NavbarMenuCategoryListOption()) -> getCategoryTitle();


    $registerMenus = new RegisterMenus();

    $headerMenuId = $registerMenus-> getMenuId( 'gamblino_header_menu' );

    $headerMenus =  wp_get_nav_menu_items( $headerMenuId );

    dd($headerMenus);
    
?>


<div id="navbar-overlay" class="overlay" data-state="closed">
    <button 
        type="button" 
        class=" [ button-overlay ] [ flex-column ] [ btn p-0 ]"
        id="navbar-overlay-exit-button"
        aria-pressed="false"
        aria-label="exit hamburger menu"
        title="exit menu"
    >
        <i>
            <?php include(get_template_directory() . '/src/icons/xmark-solid.svg'); ?>
        </i>
        <span class="text-xs text-neutral-100 font-thin m-auto ">
            <?= esc_html__( 'cancel', 'gamblino' )?>
        </span>
    </button>
</div>

<header 
    class="[ navbar-phone-category-menu ] [ p-12 ]"
    id="navbar-phone-menu"
    style="background-color: <?= $header_bg_color; ?>"
    data-state="closed"
    >
    <p class="text-xs text-uppercase" style="color: <?= $titleTextColor; ?>">
        <?= $categoryTitle; ?>
    </p>
    
    <?php include(get_template_directory() . '/views/navbar/parts/mobile-category-menu.php'); ?>

    
</header>