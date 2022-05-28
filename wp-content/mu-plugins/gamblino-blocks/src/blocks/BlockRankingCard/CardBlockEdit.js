// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

// WP Block styles
import "./editor.scss";

const EditCardBlock = () => {
	const innerContentTemplate = [["gamblino/ranking-card-image"]];
	return (
		<section {...useBlockProps()} className="[ block-ranking-card ]">
			<InnerBlocks
				allowedBlocks={["gamblino/ranking-card-image"]}
				template={innerContentTemplate}
			/>
		</section>
	);
};

export default EditCardBlock;
