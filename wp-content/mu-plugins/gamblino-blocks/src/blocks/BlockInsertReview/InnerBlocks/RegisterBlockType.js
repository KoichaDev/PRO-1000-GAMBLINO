// Wordpress components
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

// React Icon
import { MdTitle, MdOutlineFormatListBulleted } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";

import EditTitleBlock from './TitleBlocks/EditTitleBlock';
import SaveTitleBlock from './TitleBlocks/SaveTitleBlock';

import EditExcerptBlock from './ExcerptBlocks/EditExcerptBlock';
import SaveExcerptBlock from './ExcerptBlocks/SaveExcerptBlock';

import EditListBlock from './ListsBlock/EditListBlock';
import SaveListBlock from './ListsBlock/SaveListBlock';

registerBlockType("gamblino-block/insert-review-title", {
    title: __("Title", "block-gamblino"),
    description: __("Title Block", "block-gamblino"),
    parent: ["gamblino-block/insert-review"],
    supports: {
        html: false,
    },
    icon: MdTitle,
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

registerBlockType("gamblino-block/insert-review-excerpt", {
    title: __("Excerpt", "block-gamblino"),
    description: __("Excerpt Block", "block-gamblino"),
    parent: ["gamblino-block/insert-review"],
    supports: {
        html: false,
    },
    icon: RiMenu2Fill,
    attributes: {
        excerpt: {
            type: "string",
            source: "html",
            selector: "p",
        },
    },
    edit: EditExcerptBlock,
    save: SaveExcerptBlock,
});

registerBlockType("gamblino-block/insert-review-lists", {
    title: __("Bullet Point Lists", "block-gamblino"),
    description: __("Bullet Point Lists Block", "block-gamblino"),
    parent: ["gamblino-block/insert-review"],
    supports: {
        html: false,
    },
    icon: MdOutlineFormatListBulleted,
    attributes: {
        lists: {
            type: "array",
            selector: ".block-insert-review__lists li",
            source: "query",
            default: [{ content: '' }],
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
