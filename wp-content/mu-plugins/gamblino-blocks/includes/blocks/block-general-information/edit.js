// WP Block Dependencies
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

// WP Block styles
import "./editor.scss";

const Edit = () => {
	const innerContentTemplate = [
		["gamblino-block/inner-blocks-header"],
		['gamblino-block/inner-blocks-body'],
		['gamblino-block/inner-blocks-pros-cons'],
		['gamblino-block/inner-blocks-button']
	];

	const allowedBlocks = [
		"gamblino-block/inner-blocks-header",
		'gamblino-block/inner-blocks-body',
		'gamblino-block/inner-blocks-pros-cons',
		'gamblino-block/inner-blocks-button'
	];

	return (
		<section {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={allowedBlocks}
				template={innerContentTemplate}
			/>
		</section>
	);
};

export default Edit;
