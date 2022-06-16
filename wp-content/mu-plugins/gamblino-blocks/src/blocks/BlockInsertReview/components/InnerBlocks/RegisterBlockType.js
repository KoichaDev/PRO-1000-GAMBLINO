// Wordpress components
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

// React Icon
import { MdOutlineFormatListBulleted } from "react-icons/md";

import EditListBlock from "./ListsBlock/EditListBlock";
import SaveListBlock from "./ListsBlock/SaveListBlock";

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
            default: [{ content: "" }],
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
