import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, ColorPalette } from "@wordpress/components";

const Edit = ({ attributes, setAttributes }) => {
	const { backgroundColor } = attributes;

	// prettier-ignore
	const templateContent = [
		['core/heading', {
			placeholder: 'Add a title...'
		}],
		['gamblino-block/faqs-summary', {}],
	];

	const blockProps = useBlockProps({
		className: `[ gamblino-block-faqs ]`,
		style: {
			backgroundColor,
		},
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["gamblino-block/faqs-summary"],
		template: templateContent,
		orientation: "horizontal",
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Block Background Color", "block-gamblino")}>
					<ColorPalette
						colors={backgroundColor}
						value={backgroundColor}
						onChange={(value) => setAttributes({ backgroundColor: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section>
				<div {...innerBlocksProps}></div>
			</section>
		</>
	);
};

export default Edit;
