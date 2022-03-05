// WP Block Dependencies
import { registerBlockType } from "@wordpress/blocks";

// Inner Blocks Components
import "./InnerBlocks/FeaturesBlocks/index";

// Internal Parent Block Dependencies
import Edit from "./edit";
import save from "./save";

// WP Block styles
import "./style.scss";

registerBlockType("gamblino-block/info-bonus-review", {
	edit: Edit,
	save,
});
