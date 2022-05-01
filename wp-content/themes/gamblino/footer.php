<?php
    include_once 'inc/functions/advanced_custom_fields/Footer/ACF_Footer_Flexible_Content.php';
    include_once 'inc/functions/advanced_custom_fields/Footer/ACF_Footer_Social_Media_Content.php';

    $site_info = get_theme_mod( 'gamblino_footer_site_info' );
    wp_footer();

      if(!$site_info) return;

        $allowed = [
                'a' => [
                    'href' => [],
                    'title' => [],
                    'target' => [],
                ],
            ];

    $footer_flexible_content = new ACF_Footer_Flexible_Content( 'global_footer_flexible_content', 'global_footer_menu' );
    $footer_social_media_icons = new ACF_Footer_Social_Media_Content();            
    
    $footer_menu_content = $footer_flexible_content -> menu_content;
    $social_media_menus = $footer_social_media_icons -> social_media_groups;
?>

    <footer class="[ footer-main ]">
        <div class="[ footer-menus-1 ]">
             <?php if( !isset($footer_menu_content) ) return; ?>
            <?php foreach ($footer_menu_content as $footer_menus) : ?>
                <nav 
                    aria-label="<?= esc_attr_e('This is footer menu for '. $footer_menus['title'], 'gamblino') ?>"
                >
                <ul class="[ footer-nav-list ] [ flex-column ]">
                    <li class="[ footer-nav-list__title ] [ text-2xl fw-bold ]" aria-label="<?= $footer_menus['title']; ?>" >
                        <?= $footer_menus['title']; ?>    
                    </li>
                        <?php foreach ($footer_menus['menus'] as $footer_menu) : 
                            $permalink = get_permalink($footer_menu['post_object'] -> ID);
                            $post_title = $footer_menu['post_object'] -> post_title;
                            ?>
                            <li class="flex-row items-center">
                                <?php 
                                    if( $footer_menu['image'] ) {
                                        $image_id = $footer_menu['image']['ID'];
                                        echo wp_get_attachment_image($image_id, 'full');  
                                    } 
                                ?>
                                <a
                                    class="[ footer-nav-container__permalink ] [ text-no-underline text-lg ]"
                                    href="<?= $permalink; ?>"
                                    aria-label="<?= esc_attr_e( 'Go to ' . $post_title . ' permalink', 'gamblino' ); ?>"
                                    title="<?= esc_attr_e('Go to ' . $post_title . ' permalink', 'gamblino'); ?>"
                                >
                                <?= $post_title; ?>
                                </a> 
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </nav>
            <?php endforeach;  ?>
        </div>

         <nav class="[ footer-menus-2 ] [ flex-row ]" aria-label="About us Gamblino">
             <div class="[ social-media-icons ]">
                <p class="text-lg text-align-center fw-bold">Follow Us</p>
                <div class="[ social-media-icons__permalinks ] [ flex-row mt-5 ]">
                    <?php foreach($social_media_menus as $social_media_menu) : 
                        $image_id = $social_media_menu['media']['image']['ID']; 
                        $image_alt_text = $social_media_menu['media']['alt_text'];
                        $image_url = $social_media_menu['media']['url'];    

                        $aria_label = $social_media_menu['accessibility_info']['aria_label'];
                        $title = $social_media_menu['accessibility_info']['title'];
                        $is_follow_attr = $social_media_menu['no_follow'];
                    ?>
                    <a href="<?= $image_url; ?>" rel="<?= $is_follow_attr ? 'follow' : 'nofollow'; ?>">
                        <?= wp_get_attachment_image($image_id, 'full'); ?>    
                    </a>
                    <?php endforeach; ?>
                </div>
            </div>
        </nav>
    </footer>
</body>
</html>