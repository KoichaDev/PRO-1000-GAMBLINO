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
			placeholder: 'Add a title...',
			textAlign: 'center',
			lock: {
				move: true,
				remove: true,
			},
		}],
		['gamblino-block/faqs-summary', {
			lock: {
				remove: true,
			},
		}],
		['gamblino-block/faqs-summary', {
			lock: {
				remove: true,
			},
		}],
		['gamblino-block/faqs-summary', {
			lock: {
				remove: true,
			},
		}],
	];

	const blockProps = useBlockProps({
		className: `[ gamblino-block-faqs ] [ my-12 pt-12 pb-13 ]`,
		style: {
			backgroundColor,
		},
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["gamblino-block/faqs-summary"],
		template: templateContent,
		orientation: "vertical",
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
