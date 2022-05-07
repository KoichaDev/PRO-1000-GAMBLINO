<?
    $navbarMenuImageGroupOptions = new NavbarMenuImageGroupOptions();
  
    $imageId = $navbarMenuImageGroupOptions -> getLogoImageId();
    $imagAltText = $navbarMenuImageGroupOptions -> getLogoImageAltText();
    $imageAriaLabel = $navbarMenuImageGroupOptions -> getLogoImageAriaLabel();
    $imageTitle = $navbarMenuImageGroupOptions -> getLogoImagetitle();
?>

<nav class='[ navbar-mobile ] [ flex-row justify-content-between align-items-center ]'>
    <a 
        href="<?php echo home_url(); ?>"
        rel="nofollow"
        aria-label="<?php echo $imageAriaLabel ?>"
        title="<?php echo $imageTitle; ?>"
    >
    <?php 
        echo wp_get_attachment_image($imageId, 'thumbnail', false, [
        'alt' => $imagAltText,
        ]); 
    ?>
    </a>

    <button 
        type="button" 
        class="[ btn ] [ p-0 ]"
        id="hamburger-phone-menu"
        aria-label="<?= esc_attr_e( 'Click her to open the navigation menu', 'gamblino' ); ?>"
        aria-pressed="false"
        aria-haspopup="true"
        title="<?= esc_attr_e( 'hamburger menu', 'gamblino' ); ?>"
    >
        <?php include get_stylesheet_directory() . '/src/icons/hamburger-menu.svg'; ?>
    </button>
</nav>