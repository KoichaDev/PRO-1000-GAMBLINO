// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

// WP Block styles
import "./editor.scss";

const Edit = () => {
	const innerContentTemplate = [
		["gamblino-block/features-header"],
		["gamblino-block/features-range-score-img"],
		["gamblino-block/features-body-content"],
	];

	return (
		<section {...useBlockProps()}>
			<InnerBlocks
				allowedBlocks={[
					"gamblino-block/features-header",
					"gamblino-block/features-range-score-img",
					"gamblino-block/features-body-content",
				]}
				template={innerContentTemplate}
			/>
		</section>
	);
};

export default Edit;
