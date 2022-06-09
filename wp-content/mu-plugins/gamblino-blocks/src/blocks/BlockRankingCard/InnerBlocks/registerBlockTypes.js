import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import { IoMdSquare } from "react-icons/io";

import CardEdit from "./CardEdit";
import CardSave from "./CardSave";


registerBlockType("gamblino-block/ranking-card", {
    title: __("Ranking Card", "block-gamblino"),
    description: __("Ranking Card Container", "block-gamblino"),
    parent: ["gamblino-block/ranking-cards"],
    supports: {
        html: false,
        classname: false,
    },
    icon: IoMdSquare,
    edit: CardEdit,
    save: CardSave,
});
