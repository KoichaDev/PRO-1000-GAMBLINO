// Wordpress dependencies
import { registerBlockType } from "@wordpress/blocks";

// Block meta
import metaData from "./meta-data";

// components
import FeatureBlockEdit from "./FeatureBlockEdit";
import FeatureBlockSave from "./FeatureBlockSave";

registerBlockType("gamblino-block/features-info", {
    ...metaData,
    edit: FeatureBlockEdit,
    save: FeatureBlockSave,
});
