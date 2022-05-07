<?php
    CustomImage::generateImageSize('25x25', 25, 25, true);
    
    $NavbarMenuColorOptions= new NavbarMenuColorOptions();
    $headerBackgroundColor = $NavbarMenuColorOptions -> getBackgroundColor();
    $titleTextColor = $NavbarMenuColorOptions -> getTitleTextColor();

    $navbarMenuCategoryListOption = new NavbarMenuCategoryListOption();
    
    $categoryTitle = $navbarMenuCategoryListOption -> getCategoryTitle();
    $categoryItems = $navbarMenuCategoryListOption -> getCategoryItems();
   
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

<nav 
    class="[ navbar-phone-menu ] [ p-12 ]"
    id="navbar-phone-menu"
    style="background-color: <?= $header_bg_color; ?>"
    data-state="closed"
    >
    <p class="text-xs" style="color: <?= $titleTextColor; ?>">
        <?= $categoryTitle; ?>
    </p>
    <div class="[ navbar-phone-menu__container ] [ flex-row flex-wrap justify-content-between align-items-center my-5 ]">
        <?
            foreach ($categoryItems as $categoryItem) :

            $categoryTitle = $categoryItem['general_html_content_group']['category_title'];
            $isFollowHTMLAttr = $categoryItem['general_html_content_group']['html_attr_no_follow'];

            $imageId = $categoryItem['image_group']['image']['id'];
            $imageUrl = $categoryItem['image_group']['url'];
            $imageAltText = $categoryItem['image_group']['alt_text'];

            $ariaLabel = $categoryItem['accessibility_group']['aria_label'];
            $title = $categoryItem['accessibility_group']['title'];
        ?>
            <a 
                href="<?= $imageUrl?>" 
                role="button"
                class="[ card-category ] [ flex-column flex-wrap justify-content-center align-items-center text-xs text-center text-no-underline ]"
                style="color: <?= $titleTextColor; ?>"
                aria-label="<?= $ariaLabel; ?>"
                title="<?= $title; ?>"
            >
            <?php
                echo wp_get_attachment_image($imageId, '25x25', false, [
                    'class' => 'card-category__image',
                    'alt' => $imageAltText,
                ]);

                echo $categoryTitle;
            ?>
            </a>
        <?php endforeach; ?>
    </div>
</nav>