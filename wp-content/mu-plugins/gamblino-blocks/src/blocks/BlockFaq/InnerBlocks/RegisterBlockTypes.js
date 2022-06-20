// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

// Image components
import EditSummary from "./EditSummary";
import SaveSummary from "./SaveSummary";

// Image icon
import { FaQuestion } from "react-icons/fa";

registerBlockType("gamblino-block/faqs-summary", {
    title: __("Faqs", "block-gamblino"),
    description: __("Faqs description", "block-gamblino"),
    parent: ["gamblino-block/faqs"],
    supports: {
        html: false,
    },
    icon: FaQuestion,
    attributes: {
        summary: {
            type: "string",
            source: "html",
            selector: "summary",
        },
        content: {
            type: "string",
            source: "html",
            selector: "p",
        },
    },
    edit: EditSummary,
    save: SaveSummary,
});
