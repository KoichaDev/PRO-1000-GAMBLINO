import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import { CgImage } from "react-icons/cg";

import IMAGE_ATTRIBUTES from "./Image/image.attributes";
import ImageEdit from "./Image/ImageEdit.component";
import ImageSave from "./Image/ImageSave.component";

registerBlockType("gamblino/ranking-card-image", {
    title: __("Image", "block-gamblino"),
    description: __("Image for the card", "block-gamblino"),
    parent: ["gamblino/ranking-card"],
    supports: {
        html: false,
    },
    icon: CgImage,
    attributes: {
        ...IMAGE_ATTRIBUTES,
    },
    edit: ImageEdit,
    save: ImageSave,
});
