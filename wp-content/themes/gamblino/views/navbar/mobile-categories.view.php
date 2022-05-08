<?php
    CustomImage::generateImageSize('25x25', 25, 25, true);
    
    $NavbarMenuColorOptions= new NavbarMenuColorOptions();
    $headerBackgroundColor = $NavbarMenuColorOptions -> getBackgroundColor();
    $titleTextColor = $NavbarMenuColorOptions -> getTitleTextColor();

    $categoryTitle = (new NavbarMenuCategoryListOption()) -> getCategoryTitle();


    $registerMenus = new RegisterMenus();

    $headerMenuId = $registerMenus-> getMenuId( 'gamblino_header_menu' );

    $headerMenusItems =  wp_get_nav_menu_items( $headerMenuId );
    
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

    <?php if(!empty($headerMenusItems) && is_array( $headerMenusItems )) : ?>
        <nav>
            <ul class="[ navbar-phone-menus ]">
                <?php 
                    foreach($headerMenusItems as $headerMenuItem) {
                        if(!$headerMenuItem -> menu_item_parent) {
                            $menuId = $headerMenuItem -> ID;
                            $childMenuItems = $registerMenus -> getChildMenuItems( $headerMenusItems, $menuId );
                            $hasChildrenItem = !empty( $childMenuItems ) && is_array( $childMenuItems );

                            if(!$hasChildrenItem ) : ?>
                                <li class="[ navbar-phone-menus__item ]">
                                    <a 
                                        href="<?php echo esc_url( $headerMenuItem -> url ); ?>"
                                    >
                                    <?php echo esc_html_e( $headerMenuItem -> title, 'gamblino' ); ?>
                                    </a>
                                </li>
                            <?php endif; ?>

                            <li class="navbar-phone-menus__item-dropdown">
                                <a 
                                    href="<?php echo esc_url( $headerMenuItem -> url ); ?>"
                                    class="toggle">
                                    <?php echo esc_html_e( $headerMenuItem -> title, 'gamblino' ); ?>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbar-dropdown">
                                    <?php foreach ($childMenuItems as $childMenuItem) : ?>
                                        <a href="<?php echo esc_url($childMenuItem -> url); ?>">
                                            <?php echo esc_html_e($childMenuItem -> title, 'gamblino' );?>
                                        </a>
                                    <?php endforeach; ?>
                                </div>
                            </li>           

                        <?}
                    }
                ?>
            </ul>
        </nav>
    <?php endif; ?>
    
</header>