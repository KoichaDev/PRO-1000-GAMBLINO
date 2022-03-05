// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

// WP Block styles
import "./editor.scss";

const Edit = () => {
	return (
		<div {...useBlockProps()}>
			<p>Test</p>
		</div>
	);
};

export default Edit;
