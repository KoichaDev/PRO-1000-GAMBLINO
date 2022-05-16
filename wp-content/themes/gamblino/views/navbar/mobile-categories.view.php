<?php
    CustomImage::generateImageSize('25x25', 25, 25, true);
    
    $NavbarMenuColorOptions= new NavbarMenuColorOptions();
    $headerBackgroundColor = $NavbarMenuColorOptions -> getBackgroundColor();
    $titleTextColor = $NavbarMenuColorOptions -> getTitleTextColor();

    $categoryTitle = (new NavbarMenuCategoryListOption()) -> getCategoryTitle();
    
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
            <?php include(get_template_directory() . '/src/icons/font-awesome/xmark-solid.svg'); ?>
        </i>
        <span class="text-xs text-neutral-100 font-thin m-auto ">
            <?= esc_html__( 'cancel', 'gamblino' )?>
        </span>
    </button>
</div>

<header 
    class="[ navbar-phone-category-menu ]"
    id="navbar-phone-menu"
    style="background-color: <?= $header_bg_color; ?>"
    data-state="closed"
    >
    <div class="position-relative p-12">
        <p class="text-xs text-uppercase" style="color: <?= $titleTextColor; ?>">
            <?= $categoryTitle; ?>
        </p>
        <?php include(get_template_directory() . '/views/navbar/parts/mobile-category-menu.php'); ?>
    </div>

    <?php include(get_template_directory() . '/views/navbar/parts/mobile-menu.php'); ?>
</header>