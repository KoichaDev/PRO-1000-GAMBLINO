<?php 
// Main ACF Fields
$main_image = get_field( 'card_block_one_image' );
$title_main_options = get_field( 'block_card_one_main_title' );
$sub_title_options = get_field( 'block_card_one_sub_title' );
$range_score_options = get_field( 'block_card_one_range_score' );
$checked_mark_field_lists = get_field( 'block_card_one_checked_mark_list' );
$cta_button_option_one = get_field('block_card_one_cta_button_feature')['cta_button_group'];

// ACF Field using related to "clone" field for main title
$title_tag_types = $title_main_options['title_tag_types'];
$title_text_content = $title_main_options['title_text'];

// ACF Fields using related to "clone" field for sub title
$sub_title_tag_types = $sub_title_options['title_tag_types'];
$sub_title_text_content = $sub_title_options['title_text'];

var_dump($cta_button_option_one);

// ACF Field using related to "clone" field for range score 
$range_score_active_image_url = $range_score_options['image']['active']['url'];
$range_score_active_image_alt_text= $range_score_options['image']['active']['alt'];
$range_score_inactive_image_url = $range_score_options['image']['inactive']['url'];
$range_score_inactive_image_alt_text = $range_score_options['image']['inactive']['alt'];
$range_score_count = $range_score_options['add_score_range'];
$range_score_is_visible_inactive_image = $range_score_options['image']['add_inactive_image'];

$class_name_main_title = 'card-block-one__title' . ' ' . $title_main_options['title_font_size'] . ' ' . $title_main_options['title_font_weight'];
$class_name_sub_title = 'card-block-one__title' . ' ' . $sub_title_options['title_font_size'] . ' ' . $sub_title_options['title_font_weight'];

?>

<section class="card-block-one">
    <div class="card-block-one__left-column">
        <?php 
            if( !empty( $main_image ) ) {
                echo wp_get_attachment_image($main_image['ID'], 'medium');
            }
        ?>
    </div>

    <div class="card-block-one__center-column">
        <?php echo display_title_heading($title_tag_types, $title_text_content, $class_name_main_title ); ?> 

        <div class="card-block-one__range-score">
            <?php 
                //  We want to use the variable to "flag" as "inactive" images there are left so we can loop through the website 
                $count_left = 0;

                // Display "active" images 
                for($i = 1; $i <= $range_score_count; $i++) { 
                    // Display the active image(s)
                    if($i <= 6) {
                        $count_left = 6 - $i;
                        display_image($range_score_active_image_url, $range_score_active_image_alt_text, 'card-block-one__range-score--active' );
                    }
                }

                // looping through to count how many images there are left we can use as "inactive"
                for($i = 1; $i <= $count_left; $i++ ) {
                    if($i <= 6) {
                        display_image($range_score_inactive_image_url, $range_score_inactive_image_alt_text, 'card-block-one__range-score--inactive' );
                    }
                }

            ?>
        </div>

        <div class="card-block-one__row">
            <div class="card-block-one__row-text-description">
                <?php echo display_title_heading($sub_title_tag_types, $sub_title_text_content, $class_name_sub_title ); ?> 

                <?php if( $checked_mark_field_lists ) : ?>
                        <ul>
                        <?php foreach( $checked_mark_field_lists as $checked_mark_field_list ) : ?>
                            <li>
                            <?= $checked_mark_field_list['text_field']; ?>
                            </li>
                        <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
            </div>
            <div class="card-block-one__row-payement-options"></div>

            <div class="card-block-one__cta-button">
                <?= 
                    display_cta_button(
                        $cta_button_option_one['cta_button_text_content'],
                        $cta_button_option_one['cta_button_url'],
                        $cta_button_option_one['cta_button_add_follow'],
                        $cta_button_option_one['cta_button_color_style']
                    ); 
                ?>
            </div>
        </div>
    </div>

    <div class="card-block-one__right-column">

    </div>

</section>


<?php 

function display_image( $url_src = '', $alt_src = '', $class_name = '' ) { ?>
    <img src="<?= $url_src; ?>" alt="<?= $alt_src; ?>" class="<?= $class_name; ?>" >
<?php }