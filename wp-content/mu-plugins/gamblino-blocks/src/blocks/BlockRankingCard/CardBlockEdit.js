// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";

import { PanelBody, RangeControl } from "@wordpress/components";

// WP Block styles
import "./editor.scss";

const EditCardBlock = ({ attributes, setAttributes }) => {
	const { columns } = attributes;

	const innerContentTemplate = [
		["gamblino/ranking-card"],
		["gamblino/ranking-card"],
		["gamblino/ranking-card"],
	];

	return (
		<div
			{...useBlockProps({
				className: `columns-${columns}`,
			})}
		>
			<InspectorControls>
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
				allowedBlocks={["gamblino/ranking-card"]}
				template={innerContentTemplate}
				orientation={columns === 1 ? "vertical" : "horizontal"}
			/>
		</div>
	);
};

export default EditCardBlock;
