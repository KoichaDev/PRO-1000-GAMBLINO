<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <title><?php bloginfo( 'name' ); ?></title>
</head>
<body <?php body_class(); ?>>

<header class='header'>
        <img src="<?php echo get_template_directory_uri() . '/src/img/logo.png'; ?>" alt="<?php bloginfo('sitename'); ?>">
    <nav class='header__nav'>
        <ul>
            <li>
                <p>Menu</p>
            </li>
            <li><input type="text" class='search-input' placeholder="Search something..."></li>
            <li>Home</li>
            <li>Bonuses</li>
            <li>Casinos</li>
        </ul>
    </nav>
</header>
    