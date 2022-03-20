// WP Block Dependencies
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

// WP Block styles
import "./editor.scss";

const Edit = () => {
	const innerContentTemplate = [
		["gamblino-block/inner-blocks-header"], 
		['gamblino-block/inner-blocks-body'],
	];

	return (
		<section {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={["gamblino-block/inner-blocks-header", 'gamblino-block/inner-blocks-body']}
				template={innerContentTemplate}
			/>
		</section>
	);
};

export default Edit;
