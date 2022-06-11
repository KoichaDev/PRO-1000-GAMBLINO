import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const SaveCardBlock = ({ attributes }) => {
	const { columns, align } = attributes;
	return (
		<div
			{...useBlockProps.save()}
			className={`[ ranking-card-block ] [ columns-${columns} ${align} ]`}
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default SaveCardBlock;
