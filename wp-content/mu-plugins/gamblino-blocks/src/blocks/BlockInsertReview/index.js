// WP Block Dependencies
import { registerBlockType } from "@wordpress/blocks";

import Edit from "./Edit";
import Save from "./Save";

import "./components/InnerBlocks/RegisterBlockType";

import { AiOutlineCrown } from "react-icons/ai";
// block meta data
import json from "./block.json";

// WP Block styles
import "./style.scss";

const { name, icon, ...settings } = json;

registerBlockType(name, {
	...settings,
	icon: AiOutlineCrown,
	edit: Edit,
	save: Save,
});
