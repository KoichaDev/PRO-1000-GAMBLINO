<?php

$registerMenus = new RegisterMenus();

$headerMenuId = $registerMenus-> getMenuId( 'gamblino_header_menu' );

$headerMenusItems =  wp_get_nav_menu_items( $headerMenuId );

if(!empty($headerMenusItems) && is_array( $headerMenusItems )) : ?>
    <nav>
        <ul class="[ navbar-phone-menus ]">
            <?php 
                foreach($headerMenusItems as $headerMenuItem) :
                    if(!$headerMenuItem -> menu_item_parent) :
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
                    <? endif;
                endforeach;
            ?>
        </ul>
    </nav>
<?php endif; ?>
