// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

function save({ attributes }) {
	const { title, excerpt } = attributes;
	return <section {...useBlockProps.save()}>
		<RichText.Content
			tagName="h2"
			value={title}
		/>

		<RichText.Content
			tagName="p"
			value={excerpt}
		/>
	</section>;
}

export default save;
