// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

function Save({ attributes }) {
	const { align, backgroundColor } = attributes;

	return (
		<section
			{...useBlockProps.save({
				className: `[ ${align} my-10 ]`,
				style: { backgroundColor },
			})}
		>
			<InnerBlocks.Content />
		</section>
	);
}

export default Save;
