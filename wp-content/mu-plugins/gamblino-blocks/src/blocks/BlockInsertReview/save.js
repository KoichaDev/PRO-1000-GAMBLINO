// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

function Save() {
	return (
		<section {...useBlockProps.save()}>
			<InnerBlocks.Content />
		</section>
	);
}

export default Save;
