// Wordpress components
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

// React Icon 
import { IoMdSquare } from "react-icons/io";

import CardContentEdit from "./CardContentEdit";
import CardContentSave from "./CardContentSave";

registerBlockType("gamblino-block/ranking-card", {
    title: __("Ranking Card", "block-gamblino"),
    description: __("Ranking Card Container", "block-gamblino"),
    parent: ["gamblino-block/ranking-cards"],
    supports: {
        html: false,
    },
    icon: IoMdSquare,
    attributes: {
        backgroundColor: {
            type: "string",
            default: "#F8F8F8",
        },
    },
    edit: CardContentEdit,
    save: CardContentSave,
});
