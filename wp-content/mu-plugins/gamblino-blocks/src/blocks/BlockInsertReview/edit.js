// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

// WP Block styles
import "./editor.scss";

const Edit = () => {
	const templateContent = [
		["gamblino-block/insert-review-title", {}],
		["gamblino-block/insert-review-excerption", {}],
		["gamblino-block/insert-review-lists", {}],
		["gamblino-block/button"],
	];

	return (
		<section section {...useBlockProps()} className="[ block-insert-review ]">
			<InnerBlocks template={templateContent} />
		</section>
	);
};

export default Edit;
