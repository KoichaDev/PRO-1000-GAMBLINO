import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const SaveCardBlock = ({ attributes }) => {
	return (
		<div {...useBlockProps.save()}>
			Save
		</div>
	);
};

export default SaveCardBlock;
