// WP Block Dependencies
import { registerBlockType } from "@wordpress/blocks";

// Image components
import EditBlockImage from "./EditBlockImage";
import SaveBlockImage from "./SaveBlockImage";

// Image icon
import { ImageIcon } from "./icon/ImageIcon";
// block meta data
import json from "./block.json";

// WP Block styles
import "./style.scss";

const { name, ...settings } = json;

registerBlockType(name, {
    ...settings,
    icon: ImageIcon,
    edit: EditBlockImage,
    save: SaveBlockImage,
});
