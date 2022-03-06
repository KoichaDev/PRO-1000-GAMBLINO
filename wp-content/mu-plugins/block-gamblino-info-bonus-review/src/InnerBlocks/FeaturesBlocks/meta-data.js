import { __ } from "@wordpress/i18n";
import metaDataHeader from "./meta-data/meta-data-header";

const metaData = {
    title: __("Review Feature", "block-gamblino"),
    description: __("Review Feature Block", "block-gamblino"),
    icon: "group",
    parent: ["gamblino-block/info-bonus-review"],
    supports: {
        reusable: false, //removing this block as reusable
        html: false, //removing this block to edit the HTMl itself
    },
    attributes: {
        ...metaDataHeader,
    },
};

export default metaData;
