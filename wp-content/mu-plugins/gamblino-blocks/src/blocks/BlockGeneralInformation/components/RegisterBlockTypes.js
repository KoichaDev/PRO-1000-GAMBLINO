// Wordpress components
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

// React Icon
import { MdOutlineFormatListBulleted } from "react-icons/md";

import EditHeader from './InnerBlocks/Header/EditHeader'
import SaveHeader from './InnerBlocks/Header/SaveHeader';

registerBlockType("gamblino-block/general-information-header", {
    title: __("Header", "block-gamblino"),
    description: __("Header Block", "block-gamblino"),
    parent: ["gamblino-block/general-information"],
    supports: {
        html: false,
    },
    icon: MdOutlineFormatListBulleted,
    attributes: {},
    edit: EditHeader,
    save: SaveHeader,
});
