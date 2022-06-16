// WP Block Dependencies
import { registerBlockType } from "@wordpress/blocks";

// Internal Parent Block Dependencies
import Edit from "./edit";
import save from "./save";

import './components/InnerBlocks/RegisterBlockType';

// block meta data
import json from './block.json'

// WP Block styles
import "./style.scss";

const { name, ...settings } = json

registerBlockType(name, {
	...settings,
	edit: Edit,
	save,
});

