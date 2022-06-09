// Wordpress components
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

// React Icon 
import { IoMdSquare, IoIosImage } from "react-icons/io";

// Block Ranking Card components
import CardImageEdit from "./CardImage/CardImageEdit";
import CardImageSave from "./CardImage/CardImageSave";

import CardContentEdit from "./CardContentEdit";
import CardContentSave from "./CardContentSave";

registerBlockType("gamblino-block/ranking-card-top-image", {
    title: __("Ranking Image", "block-gamblino"),
    description: __(
        "Ranking Card displayed on the top of the card ",
        "block-gamblino"
    ),
    parent: ["gamblino-block/ranking-cards"],
    supports: {
        html: false,
    },
    icon: IoIosImage,
    edit: CardImageEdit,
    save: CardImageSave,
});

registerBlockType("gamblino-block/ranking-card", {
    title: __("Ranking Card", "block-gamblino"),
    description: __("Ranking Card Container", "block-gamblino"),
    parent: ["gamblino-block/ranking-cards"],
    supports: {
        html: false,
    },
    icon: IoMdSquare,
    edit: CardContentEdit,
    save: CardContentSave,
});
