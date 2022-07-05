// Wordpress components
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

// React Icon
import { MdOutlineFormatListBulleted } from "react-icons/md";

import EditHeader from "./InnerBlocks/Headers/EditHeader";
import SaveHeader from "./InnerBlocks/Headers/SaveHeader";

import EditContent from './InnerBlocks/Contents/EditContent'
import SaveContent from './InnerBlocks/Contents/SaveContent';

import EditCard from './InnerBlocks/Cards/EditCard'
import SaveCard from './InnerBlocks/Cards/SaveCard'

registerBlockType("gamblino-block/general-information-left-column-header", {
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


registerBlockType("gamblino-block/general-information-left-column-content", {
    title: __("Header", "block-gamblino"),
    description: __("Header Block", "block-gamblino"),
    parent: ["gamblino-block/general-information"],
    supports: {
        html: false,
    },
    icon: MdOutlineFormatListBulleted,
    attributes: {},
    edit: EditContent,
    save: SaveContent,
});


registerBlockType("gamblino-block/general-information-right-column-card", {
    title: __("Card Block", "block-gamblino"),
    description: __("Card block", "block-gamblino"),
    parent: ["gamblino-block/general-information"],
    supports: {
        html: false,
    },
    icon: MdOutlineFormatListBulleted,
    attributes: {},
    edit: EditCard,
    save: SaveCard,
});
