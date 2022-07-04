// WP Block Dependencies
import { registerBlockType } from "@wordpress/blocks";

// Internal Parent Block Dependencies
import Edit from "./Edit";
import Save from "./Save";

import './components/RegisterBlockTypes'

// block meta data
import json from "./block.json";

import BlockIcon from "./icons/BlockIcon";

// WP Block styles
import "./style.scss";

const { name, ...settings } = json;

registerBlockType(name, {
	...settings,
	icon: BlockIcon,
	edit: Edit,
	save: Save,
});
