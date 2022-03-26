import { __ } from "@wordpress/i18n";

import metaDataHeader from "./meta-data/meta-data-header";
import metaDataBody from "./meta-data/meta-data-body";
import metaDataProsCons from './meta-data/meta-data-pros-cons';
import metaDataButton from './meta-data/meta-data-button';
import metaDataPaddingControl from '../../block-wordpress-components/block-inspector-controls/Padding/meta-data';
import metaDataBorderRadiusControl from '../../block-wordpress-components/block-inspector-controls/BorderRadius/meta-data';


const metaData = {
    title: __("General Information Header", "block-gamblino"),
    description: __("General Information Header", "block-gamblino"),
    icon: "group",
    parent: ["gamblino-block/general-information"],
    supports: {
        reusable: false, //removing this block as reusable
        html: false, //removing this block to edit the HTMl itself
    },
    attributes: {
        ...metaDataHeader,
        ...metaDataBody,
        ...metaDataProsCons,
        ...metaDataButton,
        ...metaDataPaddingControl,
        ...metaDataBorderRadiusControl,
    },
};

export default metaData;
