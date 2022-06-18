// Wordpress components
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

// React Icon
import BlockIcons from "../Icons/BlockIcon";

import EditImageBlock from "./EditImageBlock";
import SaveImageBlock from "./SaveImageBlock";

registerBlockType("gamblino-block/image-adverstiment-anchor-link", {
    title: __("Image Ads", "block-gamblino"),
    description: __(
        "Use this image in combination with block to create ads with",
        "block-gamblino"
    ),
    parent: ["gamblino-block/image-adverstiment"],
    supports: {
        html: false,
    },
    icon: BlockIcons,
    attributes: {
        href: {
            type: "string",
            source: "attribute",
            attribute: "href",
            selector: "a",
        },
        toggleAnchorTagNewTab: {
            type: "boolean",
            default: false,
        }
    },
    edit: EditImageBlock,
    save: SaveImageBlock,
});
