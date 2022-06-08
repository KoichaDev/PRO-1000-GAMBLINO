// WP Block Dependencies
import { registerBlockType } from "@wordpress/blocks";

// Internal Parent Block Dependencies
import ButtonEdit from "./ButtonEdit";
import ButtonSave from "./ButtonSave";

// block meta data
import json from './block.json'

// WP Block styles
import "./style.scss";

const { name, ...settings } = json

registerBlockType(name, {
    ...settings,
    edit: ButtonEdit,
    save: ButtonSave,
});

