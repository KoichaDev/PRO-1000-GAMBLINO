// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

// WP Block styles
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
	const innerContentTemplate = [["gamblino-block/inner-blocks-body-text"]];

	const allowedBlocks = [];

	return <section {...useBlockProps()}>
	</section>;
};

export default Edit;
