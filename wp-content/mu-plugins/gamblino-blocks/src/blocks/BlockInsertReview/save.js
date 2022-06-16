// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

function Save({ attributes }) {
	const { align, backgroundColor } = attributes;
	return (
		<section
			{...useBlockProps.save({
				className: `[ ${align} ]`,
				style: { backgroundColor: backgroundColor },
			})}
		>
			<InnerBlocks.Content />
		</section>
	);
}

export default Save;
