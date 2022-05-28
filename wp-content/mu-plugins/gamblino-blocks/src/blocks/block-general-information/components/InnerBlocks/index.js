// Wordpress dependencies
import { registerBlockType } from "@wordpress/blocks";

// Block meta
import metaData from "../../meta-data/meta-data-block";

// Block Components
import BodyTextEdit from './BodyText/BodyTextEdit';
import BodyTextSave from './BodyText/BodyTextSave';

import ProsConsEdit from './ProsConsList/ProsConsEdit';
import ProsConsSave from './ProsConsList/ProsConsSave';

import ButtonEdit from './Button/ButtonEdit';
import ButtonSave from './Button/ButtonSave';

registerBlockType("gamblino-block/inner-blocks-body-text", {
    ...metaData,
    edit: BodyTextEdit,
    save: BodyTextSave,
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