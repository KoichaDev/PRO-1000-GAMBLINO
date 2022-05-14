<?php

$registerMenus = new RegisterMenus();

$headerMenuId = $registerMenus-> getMenuId( 'gamblino_header_menu' );

$headerMenusItems =  wp_get_nav_menu_items( $headerMenuId );

if(!empty($headerMenusItems) && is_array( $headerMenusItems )) : ?>
    <nav class="[ navbar-phone-menus ] [ bg-neutral-100  ] ">
        <p class="py-5 pl-5 fw-bold text-xs "><?php echo esc_html_e( 'ALL PAGES', 'gamblino' ); ?></p>
        <ul>
            <?php 
                foreach($headerMenusItems as $headerMenuItem) {
                    if(!$headerMenuItem -> menu_item_parent) {
                        $menuId = $headerMenuItem -> ID;
                        $childMenuItems = $registerMenus -> getChildMenuItems( $headerMenusItems, $menuId );
                        $hasChildrenItem = !empty( $childMenuItems ) && is_array( $childMenuItems );

                        if($hasChildrenItem ) : ?>
                            <li class="[ navbar-phone-menus__item-1 ] [ py-5 pl-5 ]">
                                <a 
                                    href="<?php echo esc_url( $headerMenuItem -> url ); ?>"
                                >
                                <?php echo esc_html_e( $headerMenuItem -> title, 'gamblino' ); ?>
                                </a>
                                  <ul>
                                    <li class="dropdown-menu" aria-labelledby="navbar-dropdown">
                                        <?php foreach ($childMenuItems as $childMenuItem) : ?>
                                            <a href="<?php echo esc_url($childMenuItem -> url); ?>">
                                                <?php echo esc_html_e($childMenuItem -> title, 'gamblino' );?>
                                            </a>
                                        <?php endforeach; ?>
                                    </li>
                                </ul>
                            </li>

                          
                        <?php else : ?>
                        <li class="[ navbar-phone-menus__item-1 ] [ py-5 pl-5 ]  navbar-phone-menus__item-dropdown">
                            <a 
                                href="<?php echo esc_url( $headerMenuItem -> url ); ?>"
                                class="toggle">
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
