// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

// WP Block styles
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
	return <section {...useBlockProps()}></section>;
};

export default Edit;
