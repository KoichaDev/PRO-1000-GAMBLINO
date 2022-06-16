// Wordpress components
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

// React Icon
import { IoMdSquare } from "react-icons/io";

import EditTitleBlock from './TitleBlocks/EditTitleBlock';
import SaveTitleBlock from './TitleBlocks/SaveTitleBlock';

import EditExcerptionBlock from './ExcerptionBlocks/EditExcerptionBlock';
import SaveExcerptionBlock from './ExcerptionBlocks/SaveExcerptionBlock';

import EditListBlock from './ListsBlock/EditListBlock';
import SaveListBlock from './ListsBlock/SaveListBlock';

registerBlockType("gamblino-block/insert-review-title", {
    title: __("Title", "block-gamblino"),
    description: __("Title Block", "block-gamblino"),
    parent: ["gamblino-block/insert-review"],
    supports: {
        html: false,
    },
    icon: IoMdSquare,
    attributes: {
        title: {
            type: "string",
            source: "html",
            selector: "h2",
        },
    },
    edit: EditTitleBlock,
    save: SaveTitleBlock,
});

registerBlockType("gamblino-block/insert-review-excerption", {
    title: __("Excerption", "block-gamblino"),
    description: __("Excerption Block", "block-gamblino"),
    parent: ["gamblino-block/insert-review"],
    supports: {
        html: false,
    },
    icon: IoMdSquare,
    attributes: {
        excerption: {
            type: "string",
            source: "html",
            selector: "p",
        },
    },
    edit: EditExcerptionBlock,
    save: SaveExcerptionBlock,
});

registerBlockType("gamblino-block/insert-review-lists", {
    title: __("Bullet Point Lists", "block-gamblino"),
    description: __("Bullet Point Lists Block", "block-gamblino"),
    parent: ["gamblino-block/insert-review"],
    supports: {
        html: false,
    },
    icon: IoMdSquare,
    attributes: {
        lists: {
            type: "array",
            selector: ".block-insert-review__lists li",
            source: "query",
            default: [],
            query: {
                content: {
                    type: "string",
                    source: "html",
                    selector: "p",
                },
            },
        },
    },
    edit: EditListBlock,
    save: SaveListBlock,
});
