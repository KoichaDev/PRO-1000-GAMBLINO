import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import { IoMdSquare } from "react-icons/io";

import CardEdit from "./CardEdit.component";
import CardSave from "./CardSave.component";

registerBlockType("gamblino-block/ranking-card", {
    title: __("Ranking Card", "block-gamblino"),
    description: __("Ranking Card Container", "block-gamblino"),
    parent: ["gamblino-block/ranking-cards"],
    supports: {
        html: false,
        classname: false,
    },
    icon: IoMdSquare,
    attributes: {},
    edit: CardEdit,
    save: CardSave,
});
