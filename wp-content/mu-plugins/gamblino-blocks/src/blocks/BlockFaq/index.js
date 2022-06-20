// WP Block Dependencies
import { registerBlockType } from "@wordpress/blocks";

// Image components
import Edit from "./Edit";
import Save from "./Save";

import './InnerBlocks/RegisterBlockTypes';

// Image icon
import BlockFaqIcon from "./icons/BlockFaqIcon";
// block meta data
import json from "./block.json";

// WP Block styles
import "./style.scss";

const { name, ...settings } = json;

registerBlockType(name, {
    ...settings,
    icon: BlockFaqIcon,
    edit: Edit,
    save: Save,
});
