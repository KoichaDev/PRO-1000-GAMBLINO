// WP Block Dependencies
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

// WP Block styles
import "./editor.scss";

const Edit = () => {
	const innerContentTemplate = [["gamblino-block/inner-blocks-header"]];

	return (
		<section {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={["gamblino-block/inner-blocks-header"]}
				template={innerContentTemplate}
			/>
		</section>
	);
};

export default Edit;
