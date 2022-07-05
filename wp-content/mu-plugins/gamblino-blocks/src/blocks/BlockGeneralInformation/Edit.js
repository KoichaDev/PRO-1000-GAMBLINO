import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ColorPicker } from "@wordpress/components";
import { BLOCKS_TEMPLATE } from "./constants/blockTemplate";

import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
	const { backgroundBlockColor } = attributes

	const blockProps = useBlockProps({
		className: `[ block-general-information ] [ my-10 rounded-2xl border-solid border-amber-400 ]`,
		style: {
			backgroundColor: backgroundBlockColor,
		},
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Background Color", "block-gamblino")}>
					<ColorPicker
						colors={backgroundBlockColor}
						value={backgroundBlockColor}
						onChange={(value) => setAttributes({ backgroundBlockColor: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<section {...blockProps}>
				<InnerBlocks template={BLOCKS_TEMPLATE} />
			</section>
		</>
	);
};

export default Edit;
