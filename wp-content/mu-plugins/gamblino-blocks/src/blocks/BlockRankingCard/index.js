// WP Block Dependencies
import { registerBlockType } from "@wordpress/blocks";

// Registered Block types for InnerBlocks
import "./components/registerBlockTypes";

// Internal Parent Block Dependencies
import CardBlockEdit from "./CardBlockEdit";
import CardBlockSave from "./CardBlockSave";

// block meta data
import json from './block.json'

// WP Block styles
import "./style.scss";

const { name, ...settings } = json

registerBlockType(name, {
	...settings,
	edit: CardBlockEdit,
	save: CardBlockSave,
});

