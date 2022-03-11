// Wordpress dependencies
import { registerBlockType } from "@wordpress/blocks";

// Block meta
import metaData from "./meta-data";

// FeatureBlocks Components
import HeaderEdit from "./Header/HeaderEdit";
import HeaderSave from "./Header/HeaderSave";

registerBlockType("gamblino-block/inner-blocks-header", {
    ...metaData,
    edit: HeaderEdit,
    save: HeaderSave,
});