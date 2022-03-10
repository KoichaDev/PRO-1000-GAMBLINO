import { __ } from "@wordpress/i18n";

import metaDataHeader from "./meta-data/meta-data-header";

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
    },
};

export default metaData;
