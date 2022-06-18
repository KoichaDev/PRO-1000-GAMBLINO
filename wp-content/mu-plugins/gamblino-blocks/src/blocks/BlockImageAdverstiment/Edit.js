// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, RangeControl, ColorPalette } from "@wordpress/components";

// WP Block styles
import "./editor.scss";

const EditCardBlock = ({ attributes, setAttributes }) => {
	const { columns, backgroundColor } = attributes;


	// prettier-ignore
	const templateContent = [
		['gamblino-block/image-adverstiment-anchor-link', {}],
		['gamblino-block/image-adverstiment-anchor-link', {}],
		['gamblino-block/image-adverstiment-anchor-link', {}]
	];

	return (
		<div
			{...useBlockProps({
				className: `[ image-ads-block ] [ columns-${columns} ]`,
				style: {
					backgroundColor
				}
			})}
		>
			<InspectorControls>
				<PanelBody title={__('Styles', 'block-gamblino')}>
					<ColorPalette
						value={backgroundColor}
						onChange={value => setAttributes({ backgroundColor: value })}
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

			<InnerBlocks
				allowedBlocks={["gamblino-block/image-adverstiment-anchor-link"]}
				template={templateContent}
				orientation={columns === 1 ? "vertical" : "horizontal"}
			/>
		</div>
	);
};

export default EditCardBlock;
