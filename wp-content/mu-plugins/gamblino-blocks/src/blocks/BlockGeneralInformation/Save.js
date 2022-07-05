// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

function save({ attributes }) {
	const { backgroundBlockColor } = attributes

	return (
		<section {...useBlockProps.save({
			className: `[ block-general-information ] [ my-10 rounded-2xl border-solid border-amber-400 ]`,
			style: {
				margin: '5em auto',
				backgroundColor: backgroundBlockColor,
			},
		})}>
			<InnerBlocks.Content />
		</section>
	);
}

export default save;
