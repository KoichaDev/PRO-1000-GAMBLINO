// Wordpress dependencies
import { registerBlockType } from "@wordpress/blocks";

// Block meta
import metaData from "./meta-data";

// Block Components
import HeaderEdit from "./Header/HeaderEdit";
import HeaderSave from "./Header/HeaderSave";

import AboutBodyEdit from './AboutBody/AboutBodyEdit';
import AboutBodySave from './AboutBody/AboutBodySave';

import ProsConsEdit from './ProsConsList/ProsConsEdit';
import ProsConsSave from './ProsConsList/ProsConsSave';

import ButtonEdit from './Button/ButtonEdit';
import ButtonSave from './Button/ButtonSave';

registerBlockType("gamblino-block/inner-blocks-header", {
    ...metaData,
    edit: HeaderEdit,
    save: HeaderSave,
});

registerBlockType("gamblino-block/inner-blocks-body", {
    ...metaData,
    edit: AboutBodyEdit,
    save: AboutBodySave,
});

registerBlockType("gamblino-block/inner-blocks-pros-cons", {
    ...metaData,
    edit: ProsConsEdit,
    save: ProsConsSave,
});

registerBlockType("gamblino-block/inner-blocks-button", {
    ...metaData,
    edit: ButtonEdit,
    save: ButtonSave,
});