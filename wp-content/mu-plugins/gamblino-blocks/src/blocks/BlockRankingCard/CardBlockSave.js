import React from "react";

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const SaveCardBlock = ({ attributes }) => {
	const { columns } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `columns-${columns}`,
			})}
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default SaveCardBlock;
