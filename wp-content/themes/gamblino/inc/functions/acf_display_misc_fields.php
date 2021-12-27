<?php 

/**
 * Custom function for retrieving ACF Gutenberg Block header title 
 *
 * @param string $insert_title_tag_type Takes in Advanced Custom Fields for heading tag variable
 * @param string $set_title_text_value Insert your text of the choice
 * @param string $set_class_name Insert your class name for example that will be generated for either h1 or h2 
 * 
 * @return for example <h1 class="[your_class_name] [acf_variable_name_output]">[your_text]</h1>
 */ 

function display_title_heading($insert_title_tag_type, $set_text_title_value, $set_class_name = '') {
    $title_tag = '';

    switch ($insert_title_tag_type ) {
        case 'h1-tag':
            $title_tag = '<h1 class="' . $set_class_name . '">' . $set_text_title_value . '</h1>';
            break;
        case 'h2-tag':
            $title_tag = '<h2 class="' . $set_class_name . '">' . $set_text_title_value . '</h2>';
            break;
        case 'h3-tag':
            $title_tag = '<h3 class="' . $set_class_name . '">' . $set_text_title_value . '</h3>';
            break;
        case 'h4-tag': 
            $title_tag = '<h4 class="' . $set_class_name . '">' . $set_text_title_value . '</h4>';
            break;
        case 'h5-tag':
            $title_tag = '<h5 class="' . $set_class_name . '">' . $set_text_title_value . '</h5>';
            break;
        case 'h6-tag': 
            $title_tag = '<h6 class="' . $set_class_name . '">' . $set_text_title_value . '</h6>';
            break;
        default:
            $title_tag = '<h1>' . $set_text_title_value . '</h1>';
        break;
    }
    return $title_tag;
}

function display_cta_button($button_text_content = '', $url = '', $is_follow = false, $id_name= '', $class_name = '') { ?>

    <a 
        role="button" 
        tabindex="0"
        aria-pressed="false"
        href="<?= $url; ?>" 
        id="<?= $id_name; ?>"
        class="<?= $class_name; ?>" 
        rel="<?= $is_follow ? 'nofollow' : '' ?>" 
    >
        <?= $button_text_content; ?>
    </a>
    
<?php }