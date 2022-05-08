<?php
    $categoryItems = (new NavbarMenuCategoryListOption()) -> getCategoryItems();
?>

<nav class="[ navbar-phone-category-menu__container ] [ flex-row flex-wrap justify-content-between align-items-center my-5 ]">
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
</nav>