// Wordpress dependencies
import { registerBlockType } from "@wordpress/blocks";

// Block meta
import metaData from "./meta-data";

// FeatureBlocks Components
import HeaderEdit from "./Header/HeaderEdit";
import HeaderSave from "./Header/HeaderSave";

import RangeScoreEdit from './RangeScore/RangeScoreEdit'
import RangeScoreSave from './RangeScore/RangeScoreSave'

import FeatureBodyContentEdit from './FeatureBodyContent/FeatureBodyContentEdit'
import FeatureBodyContentSave from './FeatureBodyContent/FeatureBodyContentSave'

registerBlockType("gamblino-block/features-header", {
    ...metaData,
    edit: HeaderEdit,
    save: HeaderSave,
});

registerBlockType("gamblino-block/features-range-score-img", {
    ...metaData,
    edit: RangeScoreEdit,
    save: RangeScoreSave,
});

registerBlockType("gamblino-block/features-body-content", {
    ...metaData,
    edit: FeatureBodyContentEdit,
    save: FeatureBodyContentSave,
});

