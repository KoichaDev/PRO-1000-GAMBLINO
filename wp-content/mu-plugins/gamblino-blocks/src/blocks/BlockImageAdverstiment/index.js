// WP Block Dependencies
import { registerBlockType } from "@wordpress/blocks";

// Registered Block types for InnerBlocks
// import "./InnerBlocks/RegisterBlockTypes";

// Internal Parent Block Dependencies
import Edit from "./Edit";
import Save from "./Save";

import BlockIcon from "./Icons/BlockIcon";
// block meta data
import json from "./block.json";

// WP Block styles
import "./style.scss";

const { name, icon, ...settings } = json;

registerBlockType(name, {
	...settings,
	icon: BlockIcon,
	edit: Edit,
	save: Save,
});
