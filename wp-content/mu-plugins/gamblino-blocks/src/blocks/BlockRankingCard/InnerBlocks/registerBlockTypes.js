import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import { IoMdSquare } from "react-icons/io";

import CardEdit from "./CardEdit";
import CardSave from "./CardSave";

import IMAGE_ATTRIBUTES from "./Image/image.attributes";

registerBlockType("gamblino-block/ranking-card", {
    title: __("Ranking Card", "block-gamblino"),
    description: __("Ranking Card Container", "block-gamblino"),
    parent: ["gamblino-block/ranking-cards"],
    supports: {
        html: false,
        classname: false,
    },
    icon: IoMdSquare,
    attributes: {
        ...IMAGE_ATTRIBUTES,
    },
    edit: CardEdit,
    save: CardSave,
});
