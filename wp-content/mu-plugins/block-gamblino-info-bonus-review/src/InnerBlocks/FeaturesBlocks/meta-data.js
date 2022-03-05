import { __ } from "@wordpress/i18n";

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
        headerTitle: {
            type: "string",
            source: "html",
            selector: "h2",
        },
        id: {
            type: "number",
        },
        alt: {
            type: "string",
            source: "attribute", // Will be stored in the alt attribute of img-tag element
            selector: "img",
            attribute: "alt",
            default: "",
        },
        url: {
            type: "string",
            source: "attribute",
            selector: "img",
            attribute: "src",
        },
    },
};

export default metaData;
