// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

// WP Block styles
import "./editor.scss";

const Edit = () => {
	const innerContentTemplate = [["gamblino-block/features-info"]];

	return (
		<section {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={["gamblino-block/features-info"]}
				template={innerContentTemplate}
			/>
		</section>
	);
};

export default Edit;
