// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, RangeControl, ColorPalette } from "@wordpress/components";

// WP Block styles
import "./editor.scss";

const EditCardBlock = ({ attributes, setAttributes }) => {
	const { columns, backgroundColor } = attributes;

	// prettier-ignore
	const templateContent = [
		['gamblino-block/image', {}],
		['gamblino-block/image', {}],
		['gamblino-block/image', {}]
	];

	const blockProps = useBlockProps({
		className: `[ image-ads-block ] [ columns-${columns} ]`,
		style: {
			backgroundColor,
		},
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["core/heading", "core/paragraph", "core/image"],
		template: templateContent,
		orientation: columns === 1 ? "vertical" : "horizontal",
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Styles", "block-gamblino")}>
					<ColorPalette
						value={backgroundColor}
						onChange={(value) => setAttributes({ backgroundColor: value })}
					/>
				</PanelBody>
				<PanelBody>
					<RangeControl
						label={__("Columns", "block-gamblino")}
						min={1}
						max={6}
						value={columns}
						onChange={(value) => setAttributes({ columns: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...innerBlocksProps}></div>
		</>
	);
};

export default EditCardBlock;
