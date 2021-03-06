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

	// prettier-ignore
	const templateContent = [
		["gamblino-block/ranking-card", {
			className: 'position-relative'
		}],
		["gamblino-block/ranking-card", {
			className: 'position-relative'
		}],
		["gamblino-block/ranking-card", {
			className: 'position-relative'
		}],
	];

	return (
		<div
			{...useBlockProps({
				className: `[ ranking-card-block ] [ columns-${columns} ]`,
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
				allowedBlocks={["gamblino-block/ranking-card"]}
				template={templateContent}
				orientation={columns === 1 ? "vertical" : "horizontal"}
			/>
		</div>
	);
};

export default EditCardBlock;
