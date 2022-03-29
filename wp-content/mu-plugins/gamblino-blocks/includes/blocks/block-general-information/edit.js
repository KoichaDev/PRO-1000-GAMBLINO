// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import {
	InnerBlocks,
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar
} from "@wordpress/block-editor";

import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

// WP Block styles
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
	const { tableTitle, tableTitleAlignment, tableList } = attributes;

	const innerContentTemplate = [
		["gamblino-block/inner-blocks-body-text"],
		["gamblino-block/inner-blocks-pros-cons"],
		["gamblino-block/inner-blocks-button"],
	];

	const allowedBlocks = [
		"gamblino-block/inner-blocks-body-text",
		"gamblino-block/inner-blocks-pros-cons",
		"gamblino-block/inner-blocks-button",
	];

	return (
		<section {...useBlockProps()}>
			<Header attributes={attributes} setAttributes={setAttributes} />

			<div className='wp-block-gamblino-block-general-information-container'>
				<div className="wp-block-gamblino-block-general-information__column-one">
					{/* This Innerblock is treated as "left column" */}
					<InnerBlocks
						allowedBlocks={allowedBlocks}
						template={innerContentTemplate}
					/>
				</div>

				<div className="wp-block-gamblino-block-general-information__column-two">
					<BlockControls>
						<AlignmentToolbar
							value={tableTitleAlignment}
							onChange={(value) =>
								setAttributes({ tableTitleAlignment: value })
							}
						/>
					</BlockControls>
					<RichText
						style={{
							textAlign: tableTitleAlignment,
							color: "#825261",
							fontSize: "1.6875rem",
						}}
						value={tableTitle}
						onChange={(value) => setAttributes({ tableTitle: value })}
						tagName="h2"
						placeholder={__("Table title...", "block-gamblino")}
					/>

					<Table attributes={attributes} setAttributes={setAttributes} />
				</div>
			</div>
		</section>
	);
};

export default Edit;
