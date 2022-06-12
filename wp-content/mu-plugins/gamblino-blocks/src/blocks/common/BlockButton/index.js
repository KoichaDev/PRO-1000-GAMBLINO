// WP block components
import { registerBlockType } from "@wordpress/blocks";

// Button Icon
import ButtonIcon from './icons/ButtonIcon';

// Button Component
import EditBlockButton from "./EditBlockButton";
import SaveBlockButton from "./SaveBlockButton";

// block meta data
import json from './block.json'

// WP Block styles
import "./style.scss";

const { name, icon, ...settings } = json

registerBlockType(name, {
    ...settings,
    icon: ButtonIcon,
    edit: EditBlockButton,
    save: SaveBlockButton,
});

