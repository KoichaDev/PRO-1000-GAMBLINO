// WP Block Dependencies
import { registerBlockType } from "@wordpress/blocks";

// Registered Block types for InnerBlocks
// import "./InnerBlocks/registerBlockTypes";

// Internal Parent Block Dependencies
import Edit from "./Edit";
import Save from "./Save";

import { MdOutlineAdsClick } from 'react-icons/md';

// block meta data
import json from "./block.json";

// WP Block styles
import "./style.scss";

const { name, icon, ...settings } = json;

registerBlockType(name, {
	...settings,
	icon: MdOutlineAdsClick,
	edit: Edit,
	save: Save,
});
