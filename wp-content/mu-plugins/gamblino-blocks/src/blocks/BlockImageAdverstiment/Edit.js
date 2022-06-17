// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, RangeControl } from "@wordpress/components";

// WP Block styles
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
	return <div {...useBlockProps()}>Edit</div>;
};

export default Edit;
