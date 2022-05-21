<?php

$registerMenus = new RegisterMenus();
$NavbarMenuColorOptions= new NavbarMenuColorOptions();

$headerBackgroundColor = $NavbarMenuColorOptions -> getBackgroundColor();
$titleTextColor = $NavbarMenuColorOptions -> getTitleTextColor();

$headerMenuId = $registerMenus-> getMenuId( 'gamblino_header_menu' );

$headerMenusItems =  wp_get_nav_menu_items( $headerMenuId );

if(!empty($headerMenusItems) && is_array( $headerMenusItems )) : ?>
    <nav class="[ navbar-phone-menus ] [ bg-neutral-100  ] ">
        <p class="py-7 pl-5 fw-bold text-xs "><?php echo esc_html_e( 'ALL PAGES', 'gamblino' ); ?></p>
        <ul>
            <?php 
                foreach($headerMenusItems as $headerMenuItem) {
                    // Children menu
                    if(!$headerMenuItem -> menu_item_parent) {
                        $menuId = $headerMenuItem -> ID;
                        $childMenuItems = $registerMenus -> getChildMenuItems( $headerMenusItems, $menuId );
                        $hasChildrenItem = !empty( $childMenuItems ) && is_array( $childMenuItems );

                        if($hasChildrenItem ) : ?>
                            <li id="menu-item-active-1" class="[ navbar-phone-menus__item-1 ] [ py-5 pl-5 ]" data-menu="active">
                                <a 
                                    href="<?php echo esc_url( $headerMenuItem -> url ); ?>"
                                    role="button"
                                    id="active"
                                    aria-describedby="Go back to the level 2 menu"
                                    aria-haspopup="true"
                                >                                
                                <?php echo esc_html_e( $headerMenuItem -> title, 'gamblino' ); ?>
                                <?php include(get_template_directory() . '/src/icons/font-awesome/chevron-right-solid.svg'); ?>
                                </a>
                                  <ul class="[ navbar-phone-menus__item-2 ]" data-state="hidden">
                                    <li class="py-5 pl-5" style="background-color: <?php echo $headerBackgroundColor?>; color: <?php echo $titleTextColor; ?>">
                                        <button 
                                            type="button" 
                                            id="btn-menu-back" 
                                            class="[ btn ] [ navbar-phone-menus__item-2-btn-back ] [ text-sm py-4 ]"
                                            aria-describedby="Go back to the level 1 menu"
                                            aria-haspopup="true"
                                        >
                                            <?php include(get_template_directory() . '/src/icons/font-awesome/chevron-left-solid.svg'); ?>
                                            <?php echo esc_html_e( 'Back', 'gamblino' )?>
                                        </button>
                                    </li>
                                    <li>
                                        <ul class="[ navbar-phone-menus-item-2-sub-menu ] [ pr-24 ]">
                                            <li class="py-5 pl-5 text-base text-uppercase text-underline" style="color: #3d5da5;">
                                                <?php echo esc_html_e( $headerMenuItem -> title, 'gamblino' ); ?>
                                            </li>
                                            <li class="flex-column pl-5 py-5 gap-2">
                                                <?php foreach ($childMenuItems as $childMenuItem) : ?>
                                                    <a 
                                                        role="button" 
                                                        class="px-8 py-8 text-sm bg-neutral-100 text-sky-300 text-no-underline rounded shadow-md"
                                                        aria-describedby="Go to the next sub menu <?php echo esc_html_e($childMenuItem -> title, 'gamblino' ); ?>"
                                                        aria-haspopup="true"
                                                        href="<?php echo esc_url($childMenuItem -> url); ?>"
                                                        >
                                                        <?php echo esc_html_e($childMenuItem -> title, 'gamblino' );?>
                                                        
                                                        <?php 
                                                            if( strpos($childMenuItem -> url, '#') !== false ) {
                                                                include(get_template_directory() . '/src/icons/font-awesome/chevron-right-solid.svg'); 
                                                            }
                                                        ?>
                                                    </a>
                                                    <ul id="menu-item-active-3" class="[ navbar-phone-menus__item-3 ] [ pr-24 bg-neutral-100 ]" data-state="hidden">
                                                        <li class="py-5 pl-5 w-inherit" style="background-color: <?php echo $headerBackgroundColor?>; color: <?php echo $titleTextColor; ?>">
                                                            <button 
                                                                type="button" 
                                                                id="btn-menu-3-back" 
                                                                class="[ btn ] [ navbar-phone-menus__item-2-btn-back ] [ text-sm py-4 ]"
                                                                aria-describedby="Go back to the level 2 menu"
                                                                aria-haspopup="true"
                                                            >
                                                                <?php include(get_template_directory() . '/src/icons/font-awesome/chevron-left-solid.svg'); ?>
                                                                <?php echo esc_html_e( 'Back', 'gamblino' )?>
                                                            </button>
                                                        </li>
                                                        <li class="mb-5 py-5 pl-5 text-base text-uppercase text-underline" style="color: #3d5da5; ">
                                                                <?php echo esc_html_e( $childMenuItem -> title, 'gamblino' ); ?>
                                                        </li>
                                                        <?php 
                                                            // Grand children Menu
                                                            $menuId2 = $childMenuItem -> ID;
                                                            $childMenuItems2 = $registerMenus -> getChildMenuItems( $headerMenusItems, $menuId2 );
                                                            $hasChildrenItem2 = !empty( $childMenuItems2 ) && is_array( $childMenuItems2 );
                                                            if($hasChildrenItem2) : ?>
                                                          
                                                                <?php foreach($childMenuItems2 as $childMenuItem2) : ?>
                                                                    <li class="flex-column pl-5 py-1 gap-0 rounded">
                                                                        <a 
                                                                            role="button" 
                                                                            class="px-8 py-8 text-sm bg-neutral-100 text-sky-300 text-no-underline rounded shadow-md"
                                                                            href="<?php echo esc_url($childMenuItem2 -> url); ?>"
                                                                            >
                                                                            <?php echo esc_html_e($childMenuItem2 -> title, 'gamblino' );?>
                                                                        </a>
                                                                    </li>
                                                                <?php endforeach;
                                                            endif; ?>
                                                    </ul>
                                                <?php endforeach; ?>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        <?php else : ?>
                        <li class="[ navbar-phone-menus__item-1 ] [ py-5 pl-5 ]">
                            <a 
                                href="<?php echo esc_url( $headerMenuItem -> url ); ?>"
                                class="toggle"
                                role="button"
                                >
                                <?php echo esc_html_e( $headerMenuItem -> title, 'gamblino' ); ?>
                            </a>
                           
                        </li>   
                        <?php endif;         
                    }
                }
            ?>
        </ul>
    </nav>
<?php endif; ?>
