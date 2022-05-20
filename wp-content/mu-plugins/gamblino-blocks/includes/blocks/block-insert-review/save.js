// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

function save({ attributes }) {
	const { } = attributes;
	return <section {...useBlockProps.save()}></section>;
}

export default save;
